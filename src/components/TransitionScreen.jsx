export default function TransitionScreen({ onContinue }) {
  return (
    <main className="page page-transition">
      <section className="card transition-card">
        <h1 className="title">Practice is finished.</h1>
        <p className="subtitle">Now it is your turn. The real game is starting.</p>
        <button type="button" className="cta-button" onClick={onContinue}>
          <span aria-hidden="true">▶</span>
          <span>Start My Turn</span>
        </button>
      </section>
    </main>
  );
}
