import { useEffect, useMemo, useState } from 'react';
import StimulusSequence from './StimulusSequence';
import MultipleChoiceOptions from './MultipleChoiceOptions';
import DndResponseBoard from './DndResponseBoard';
import { checkPatternIsomorphism, normalizeResponseArray } from '../utils/pattern';

const NEXT_ICON_SRC = '/icons/patterns/next.svg';
const READY_ICON_SRC = '/icons/patterns/ready.svg';
const CHECK_ICON_SRC = '/icons/patterns/fb_yes.png';
const STOP_ICON_SRC = '/icons/patterns/fb_no.png';
const MEMORY_READY_DELAY_MS = 5000;

function ProgressLabel({ current, total, isPractice, copy }) {
  return (
    <div className="progress-label" role="status" aria-live="polite">
      <span>
        {isPractice ? copy.question.practice : copy.question.test} {current} / {total}
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
  copy,
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
  const [isReadyButtonEnabled, setIsReadyButtonEnabled] = useState(!question.isMemory);

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
    setIsReadyButtonEnabled(!question.isMemory);
  }, [question.id, question.isMemory, question.pattern.length]);

  useEffect(() => {
    if (!question.isMemory) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setIsReadyButtonEnabled(true);
    }, MEMORY_READY_DELAY_MS);

    return () => {
      window.clearTimeout(timer);
    };
  }, [question.id, question.isMemory]);

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
          {copy.question.skip}
        </button>

        <ProgressLabel
          current={questionIndex + 1}
          total={totalQuestions}
          isPractice={question.isPractice}
          copy={copy}
        />

        <div className="question-layout">
          <div className="question-top-zone">
            <div className="stimulus-wrap">
              <StimulusSequence
                pattern={question.pattern}
                orientation={question.orientation}
                hidden={question.isMemory && stage === 'answer'}
                copy={copy}
              />
            </div>
          </div>

          <div className="question-bottom-zone">
            {stage === 'preview' ? (
              <button
                type="button"
                className="cta-button ready-button icon-only-button"
                onClick={handleReady}
                aria-label={copy.question.readyAria}
                disabled={!isReadyButtonEnabled}
              >
                <img className="button-icon action-icon" src={READY_ICON_SRC} alt="" aria-hidden="true" draggable="false" />
              </button>
            ) : null}

            {stage === 'answer' && question.responseType === 'mc' ? (
              <MultipleChoiceOptions
                copy={copy}
                options={question.options}
                selectedIndex={selectedOptionIndex}
                onSelect={setSelectedOptionIndex}
              />
            ) : null}

            {stage === 'answer' && question.responseType === 'dnd' ? (
              <DndResponseBoard
                copy={copy}
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
              <p>{practiceFeedback.isCorrect ? copy.question.practiceCorrect : copy.question.practiceIncorrect}</p>
              <button
                type="button"
                className="cta-button feedback-button icon-only-button"
                onClick={handlePracticeContinue}
                aria-label={copy.question.continueAria}
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
                aria-label={copy.question.nextAria}
              >
                <img className="button-icon action-icon" src={NEXT_ICON_SRC} alt="" aria-hidden="true" draggable="false" />
              </button>
            ) : null}
          </div>
        </div>

        {showConfirm ? (
          <div className="confirm-overlay" role="dialog" aria-modal="true" aria-label={copy.question.confirmDialogAria}>
            <div className="confirm-panel">
              <p className="confirm-title">{copy.question.confirmTitle}</p>
              <p className="confirm-subtitle">{copy.question.confirmSubtitle}</p>
              <div className="confirm-actions">
                <button
                  type="button"
                  className="confirm-button confirm-back icon-only-confirm"
                  onClick={() => setShowConfirm(false)}
                  aria-label={copy.question.confirmBackAria}
                >
                  <span className="confirm-icon-bubble" aria-hidden="true">
                    <img className="confirm-action-icon" src={STOP_ICON_SRC} alt="" aria-hidden="true" draggable="false" />
                  </span>
                </button>
                <button
                  type="button"
                  className="confirm-button confirm-next icon-only-confirm"
                  onClick={handleSubmit}
                  aria-label={copy.question.confirmNextAria}
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
