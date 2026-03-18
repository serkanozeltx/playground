export default function ThankYouScreen({ copy, participantID, groupID, resultsCount, sheetStatus, onDownload }) {
  return (
    <main className="page page-thank-you">
      <section className="card thank-you-card">
        <h1 className="title">{copy.thankYou.title}</h1>
        <p className="subtitle">{copy.thankYou.subtitle}</p>

        <div className="celebration-wrap">
          <img
            className="celebration-gif"
            src="https://media.giphy.com/media/faTOHi0omqCMU/giphy.gif"
            alt={copy.thankYou.celebrationAlt}
          />
          <p className="celebration-text">{copy.thankYou.champion}</p>
        </div>

        <div className="summary-box">
          <p>
            <strong>{copy.thankYou.participant}:</strong> {participantID}
          </p>
          <p>
            <strong>{copy.thankYou.latinGroup}:</strong> {groupID}
          </p>
          <p>
            <strong>{copy.thankYou.responses}:</strong> {resultsCount}
          </p>
          <p>
            <strong>{copy.thankYou.googleSheets}:</strong>{' '}
            {sheetStatus.ok ? copy.thankYou.uploaded : `${copy.thankYou.notUploaded} (${sheetStatus.reason})`}
          </p>
        </div>

        <button type="button" className="cta-button" onClick={onDownload}>
          <span aria-hidden="true">⬇</span>
          <span>{copy.thankYou.download}</span>
        </button>
      </section>
    </main>
  );
}
