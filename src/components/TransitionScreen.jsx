export default function TransitionScreen({ copy, onContinue }) {
  return (
    <main className="page page-transition">
      <section className="card transition-card">
        <h1 className="title">{copy.transition.title}</h1>
        <p className="subtitle">{copy.transition.subtitle}</p>
        <button type="button" className="cta-button" onClick={onContinue}>
          <span aria-hidden="true">▶</span>
          <span>{copy.transition.cta}</span>
        </button>
      </section>
    </main>
  );
}
