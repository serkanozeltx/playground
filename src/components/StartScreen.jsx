import { LATIN_GROUP_IDS } from '../data/experimentConfig';

export default function StartScreen({ participantID, groupChoice, onParticipantIDChange, onGroupChoiceChange, onStart }) {
  return (
    <main className="page page-start">
      <section className="card hero-card">
        <p className="lab-eyebrow">Boğaziçi University Child Learning Lab (ÇÖL)</p>
        <h1 className="title">Pattern Adventure</h1>
        <p className="subtitle">
          Watch the pattern and choose the matching one. There are 4 practice rounds and 12 game rounds.
        </p>

        <div className="start-form">
          <label className="field-label" htmlFor="participant-id">
            Participant ID
          </label>
          <input
            id="participant-id"
            className="text-input"
            type="text"
            value={participantID}
            onChange={(event) => onParticipantIDChange(event.target.value)}
            placeholder="e.g., COL-014"
            autoComplete="off"
          />

          <label className="field-label" htmlFor="latin-group">
            Latin Square Group
          </label>
          <select
            id="latin-group"
            className="text-input"
            value={groupChoice}
            onChange={(event) => onGroupChoiceChange(event.target.value)}
          >
            <option value="auto">Auto assign from Participant ID</option>
            {LATIN_GROUP_IDS.map((group) => (
              <option value={group} key={group}>
                Group {group}
              </option>
            ))}
          </select>

          <button type="button" className="cta-button" onClick={onStart} disabled={!participantID.trim()}>
            <span aria-hidden="true">▶</span>
            <span>Start</span>
          </button>
        </div>
      </section>
    </main>
  );
}
