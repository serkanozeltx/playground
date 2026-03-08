export default function ThankYouScreen({ participantID, groupID, resultsCount, sheetStatus, onDownload }) {
  return (
    <main className="page page-thank-you">
      <section className="card thank-you-card">
        <h1 className="title">Amazing Work!</h1>
        <p className="subtitle">You finished all pattern tasks. Super job!</p>

        <div className="celebration-wrap">
          <img
            className="celebration-gif"
            src="https://media.giphy.com/media/faTOHi0omqCMU/giphy.gif"
            alt="Kids cheering celebration animation"
          />
          <p className="celebration-text">You are a Pattern Champion!</p>
        </div>

        <div className="summary-box">
          <p>
            <strong>Participant:</strong> {participantID}
          </p>
          <p>
            <strong>Latin Group:</strong> {groupID}
          </p>
          <p>
            <strong>Logged responses:</strong> {resultsCount}
          </p>
          <p>
            <strong>Google Sheets:</strong>{' '}
            {sheetStatus.ok ? 'Uploaded successfully' : `Not uploaded (${sheetStatus.reason})`}
          </p>
        </div>

        <button type="button" className="cta-button" onClick={onDownload}>
          <span aria-hidden="true">⬇</span>
          <span>Download CSV Backup</span>
        </button>
      </section>
    </main>
  );
}
