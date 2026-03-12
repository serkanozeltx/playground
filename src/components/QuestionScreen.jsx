import { useEffect, useMemo, useState } from 'react';
import StimulusSequence from './StimulusSequence';
import MultipleChoiceOptions from './MultipleChoiceOptions';
import DndResponseBoard from './DndResponseBoard';
import { checkPatternIsomorphism, normalizeResponseArray } from '../utils/pattern';

const NEXT_ICON_SRC = '/icons/patterns/next.svg';
const READY_ICON_SRC = '/icons/patterns/ready.svg';
const CHECK_ICON_SRC = '/icons/patterns/check.svg';
const STOP_ICON_SRC = '/icons/patterns/stop.svg';

function ProgressLabel({ current, total, isPractice }) {
  return (
    <div className="progress-label" role="status" aria-live="polite">
      <span>
        {isPractice ? 'Practice' : 'Test'} {current} / {total}
      </span>
    </div>
  );
}

function responseReady(question, selectedOptionIndex, dndAnswers, stage) {
  if (stage !== 'answer') {
    return false;
  }

  if (question.responseType === 'mc') {
    return selectedOptionIndex !== null;
  }

  return dndAnswers.every(Boolean);
}

export default function QuestionScreen({
  question,
  questionIndex,
  totalQuestions,
  onComplete,
}) {
  const [stage, setStage] = useState(question.isMemory ? 'preview' : 'answer');
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [dndAnswers, setDndAnswers] = useState(Array(question.pattern.length).fill(null));
  const [questionShownAt, setQuestionShownAt] = useState(Date.now());
  const [answerShownAt, setAnswerShownAt] = useState(question.isMemory ? null : Date.now());
  const [readyReactionTime, setReadyReactionTime] = useState(null);
  const [practiceFeedback, setPracticeFeedback] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    const now = Date.now();

    setStage(question.isMemory ? 'preview' : 'answer');
    setSelectedOptionIndex(null);
    setDndAnswers(Array(question.pattern.length).fill(null));
    setQuestionShownAt(now);
    setAnswerShownAt(question.isMemory ? null : now);
    setReadyReactionTime(null);
    setPracticeFeedback(null);
    setShowConfirm(false);
  }, [question.id, question.isMemory, question.pattern.length]);

  const canSubmit = useMemo(
    () =>
      !practiceFeedback && responseReady(question, selectedOptionIndex, dndAnswers, stage),
    [question, selectedOptionIndex, dndAnswers, stage, practiceFeedback]
  );

  function handleReady() {
    const now = Date.now();
    setStage('answer');
    setAnswerShownAt(now);
    setReadyReactionTime(now - questionShownAt);
  }

  function buildSubmittedResponse() {
    if (question.responseType === 'mc') {
      return normalizeResponseArray(question.options[selectedOptionIndex]);
    }

    return [...dndAnswers];
  }

  function buildSkippedResponse() {
    if (question.responseType === 'mc') {
      if (selectedOptionIndex === null) {
        return [];
      }
      return normalizeResponseArray(question.options[selectedOptionIndex]);
    }

    return [...dndAnswers];
  }

  function buildTimingPayload(isSkipped) {
    const now = Date.now();
    const answerTime = answerShownAt ? now - answerShownAt : null;

    const response = isSkipped ? buildSkippedResponse() : buildSubmittedResponse();
    const isCorrect = isSkipped ? null : checkPatternIsomorphism(question.pattern, response);

    return {
      isCorrect,
      isSkipped,
      reactionTime: now - questionShownAt,
      answerReactionTime: answerTime,
      readyReactionTime: question.isMemory ? readyReactionTime : null,
      studentResponse: response,
    };
  }

  function handleSubmit() {
    if (!canSubmit) {
      return;
    }

    setShowConfirm(false);
    const payload = buildTimingPayload(false);

    if (question.isPractice) {
      setPracticeFeedback({
        isCorrect: payload.isCorrect,
        payload,
      });
      return;
    }

    onComplete(payload);
  }

  function handlePracticeContinue() {
    if (!practiceFeedback) {
      return;
    }

    onComplete(practiceFeedback.payload);
  }

  function handleSkip() {
    setShowConfirm(false);
    onComplete(buildTimingPayload(true));
  }

  function openConfirm() {
    if (!canSubmit) {
      return;
    }
    setShowConfirm(true);
  }

  return (
    <main className="page page-question">
      <section className="card question-card">
        <button type="button" className="skip-button" onClick={handleSkip}>
          Skip
        </button>

        <ProgressLabel
          current={questionIndex + 1}
          total={totalQuestions}
          isPractice={question.isPractice}
        />

        <div className="stimulus-wrap">
          <StimulusSequence
            pattern={question.pattern}
            orientation={question.orientation}
            hidden={question.isMemory && stage === 'answer'}
          />
        </div>

        {stage === 'preview' ? (
          <button type="button" className="cta-button ready-button icon-only-button" onClick={handleReady} aria-label="I am ready">
            <img className="button-icon action-icon" src={READY_ICON_SRC} alt="" aria-hidden="true" draggable="false" />
          </button>
        ) : null}

        {stage === 'answer' && question.responseType === 'mc' ? (
          <MultipleChoiceOptions
            options={question.options}
            selectedIndex={selectedOptionIndex}
            onSelect={setSelectedOptionIndex}
          />
        ) : null}

        {stage === 'answer' && question.responseType === 'dnd' ? (
          <DndResponseBoard
            answers={dndAnswers}
            onChange={setDndAnswers}
            orientation="horizontal"
          />
        ) : null}

        {practiceFeedback ? (
          <div
            className={`practice-feedback ${practiceFeedback.isCorrect ? 'is-correct' : 'is-incorrect'}`}
            role="status"
            aria-live="polite"
          >
            <p>{practiceFeedback.isCorrect ? 'Correct!' : 'Not this one. Let us continue.'}</p>
            <button
              type="button"
              className="cta-button feedback-button icon-only-button"
              onClick={handlePracticeContinue}
              aria-label="Continue"
            >
              <img className="button-icon action-icon" src={NEXT_ICON_SRC} alt="" aria-hidden="true" draggable="false" />
            </button>
          </div>
        ) : null}

        {stage === 'answer' && !practiceFeedback ? (
          <button
            type="button"
            className="cta-button next-button icon-only-button"
            onClick={openConfirm}
            disabled={!canSubmit}
            aria-label="Next"
          >
            <img className="button-icon action-icon" src={NEXT_ICON_SRC} alt="" aria-hidden="true" draggable="false" />
          </button>
        ) : null}

        {showConfirm ? (
          <div className="confirm-overlay" role="dialog" aria-modal="true" aria-label="Confirm answer">
            <div className="confirm-panel">
              <p className="confirm-title">Is this your answer?</p>
              <div className="confirm-actions">
                <button
                  type="button"
                  className="confirm-button confirm-back icon-only-confirm"
                  onClick={() => setShowConfirm(false)}
                  aria-label="Check again"
                >
                  <span className="confirm-icon-bubble" aria-hidden="true">
                    <img className="confirm-action-icon" src={STOP_ICON_SRC} alt="" aria-hidden="true" draggable="false" />
                  </span>
                </button>
                <button
                  type="button"
                  className="confirm-button confirm-next icon-only-confirm"
                  onClick={handleSubmit}
                  aria-label="Yes, next"
                >
                  <span className="confirm-icon-bubble" aria-hidden="true">
                    <img className="confirm-action-icon" src={CHECK_ICON_SRC} alt="" aria-hidden="true" draggable="false" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </section>
    </main>
  );
}
