import { useEffect, useMemo, useState } from 'react';
import StartScreen from './components/StartScreen';
import QuestionScreen from './components/QuestionScreen';
import TransitionScreen from './components/TransitionScreen';
import ThankYouScreen from './components/ThankYouScreen';
import { assignLatinGroup, buildSessionQuestions } from './data/experimentConfig';
import { autoDownloadCsv, postResultsToGoogleSheets } from './utils/results';
import { serializeResponse } from './utils/pattern';
import { DEFAULT_LANGUAGE, getCopy } from './i18n';

const PRACTICE_COUNT = 4;

function makeFileName(participantID) {
  const cleaned = participantID.trim().replaceAll(/[^a-z0-9_-]/gi, '_');
  return `${cleaned || 'participant'}_pattern_results.csv`;
}

export default function App() {
  const [phase, setPhase] = useState('start');
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);
  const [participantID, setParticipantID] = useState('');
  const [groupChoice, setGroupChoice] = useState('auto');
  const [assignedGroup, setAssignedGroup] = useState('A');
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState([]);
  const [sheetStatus, setSheetStatus] = useState({ ok: false, reason: 'PENDING' });
  const [autoExportDone, setAutoExportDone] = useState(false);

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;

  const csvFileName = useMemo(() => makeFileName(participantID), [participantID]);
  const copy = useMemo(() => getCopy(language), [language]);

  function startExperiment() {
    const finalGroup = groupChoice === 'auto' ? assignLatinGroup(participantID) : groupChoice;
    const sessionQuestions = buildSessionQuestions(finalGroup);

    setAssignedGroup(finalGroup);
    setQuestions(sessionQuestions);
    setCurrentIndex(0);
    setResults([]);
    setSheetStatus({ ok: false, reason: 'PENDING' });
    setAutoExportDone(false);
    setPhase('running');
  }

  function advanceExperiment(responsePayload) {
    const question = questions[currentIndex];
    const row = {
      participantID,
      latinGroup: assignedGroup,
      questionID: question.id,
      conditionType: question.conditionType,
      isPractice: question.isPractice,
      isCorrect: responsePayload.isCorrect,
      isSkipped: Boolean(responsePayload.isSkipped),
      reactionTime: responsePayload.reactionTime,
      answerReactionTime: responsePayload.answerReactionTime,
      readyReactionTime: responsePayload.readyReactionTime,
      studentResponse: serializeResponse(responsePayload.studentResponse),
      timestampISO: new Date().toISOString(),
    };

    const nextResults = [...results, row];
    setResults(nextResults);

    const nextIndex = currentIndex + 1;
    const isLastQuestion = currentIndex >= totalQuestions - 1;
    if (isLastQuestion) {
      setPhase('finished');
      return;
    }

    setCurrentIndex(nextIndex);

    if (currentIndex === PRACTICE_COUNT - 1) {
      setPhase('transition');
    }
  }

  function manualDownload() {
    autoDownloadCsv(results, csvFileName);
  }

  function continueAfterPractice() {
    setPhase('running');
  }

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    if (phase !== 'finished' || autoExportDone || results.length === 0) {
      return;
    }

    setAutoExportDone(true);
    autoDownloadCsv(results, csvFileName);

    postResultsToGoogleSheets(results).then((status) => {
      setSheetStatus(status);
    });
  }, [phase, autoExportDone, results, csvFileName]);

  if (phase === 'start') {
    return (
      <StartScreen
        language={language}
        copy={copy}
        participantID={participantID}
        groupChoice={groupChoice}
        onLanguageChange={setLanguage}
        onParticipantIDChange={setParticipantID}
        onGroupChoiceChange={setGroupChoice}
        onStart={startExperiment}
      />
    );
  }

  if (phase === 'running' && currentQuestion) {
    return (
      <QuestionScreen
        copy={copy}
        question={currentQuestion}
        questionIndex={currentIndex}
        totalQuestions={totalQuestions}
        onComplete={advanceExperiment}
      />
    );
  }

  if (phase === 'transition') {
    return <TransitionScreen copy={copy} onContinue={continueAfterPractice} />;
  }

  return (
    <ThankYouScreen
      copy={copy}
      participantID={participantID}
      groupID={assignedGroup}
      resultsCount={results.length}
      sheetStatus={sheetStatus}
      onDownload={manualDownload}
    />
  );
}
