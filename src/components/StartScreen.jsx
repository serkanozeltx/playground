import { LATIN_GROUP_IDS } from '../data/experimentConfig';
import { LANGUAGE_OPTIONS } from '../i18n';

export default function StartScreen({
  language,
  copy,
  participantID,
  groupChoice,
  onLanguageChange,
  onParticipantIDChange,
  onGroupChoiceChange,
  onStart,
}) {
  return (
    <main className="page page-start">
      <section className="card hero-card">
        <div className="language-switcher" role="group" aria-label={copy.screenReader.languageSwitcher}>
          {LANGUAGE_OPTIONS.map((option) => (
            <button
              type="button"
              key={option.code}
              className={`language-button ${language === option.code ? 'is-active' : ''}`}
              onClick={() => onLanguageChange(option.code)}
              title={option.label}
              aria-label={option.code === 'tr' ? copy.screenReader.turkish : copy.screenReader.english}
            >
              <span className="language-flag" aria-hidden="true">
                {option.flag}
              </span>
            </button>
          ))}
        </div>

        <p className="lab-eyebrow">{copy.start.labName}</p>
        <h1 className="title">{copy.start.title}</h1>
        <p className="subtitle">{copy.start.subtitle}</p>

        <div className="start-form">
          <label className="field-label" htmlFor="participant-id">
            {copy.start.participantId}
          </label>
          <input
            id="participant-id"
            className="text-input"
            type="text"
            value={participantID}
            onChange={(event) => onParticipantIDChange(event.target.value)}
            placeholder={copy.start.participantPlaceholder}
            autoComplete="off"
          />

          <label className="field-label" htmlFor="latin-group">
            {copy.start.latinGroup}
          </label>
          <select
            id="latin-group"
            className="text-input"
            value={groupChoice}
            onChange={(event) => onGroupChoiceChange(event.target.value)}
          >
            <option value="auto">{copy.start.autoAssign}</option>
            {LATIN_GROUP_IDS.map((group) => (
              <option value={group} key={group}>
                {copy.start.groupLabel} {group}
              </option>
            ))}
          </select>

          <button type="button" className="cta-button" onClick={onStart} disabled={!participantID.trim()}>
            <span aria-hidden="true">▶</span>
            <span>{copy.start.start}</span>
          </button>
        </div>
      </section>
    </main>
  );
}
