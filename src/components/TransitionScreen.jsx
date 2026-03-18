const NEXT_ICON_SRC = '/icons/patterns/next.svg';

function PatternGlyph({ type }) {
  if (type === 'circle') {
    return (
      <svg viewBox="0 0 48 48" className="transition-pattern-glyph" aria-hidden="true">
        <circle cx="24" cy="24" r="18" fill="#ffd56c" />
      </svg>
    );
  }

  if (type === 'square') {
    return (
      <svg viewBox="0 0 48 48" className="transition-pattern-glyph" aria-hidden="true">
        <rect x="8" y="8" width="32" height="32" rx="10" fill="#9fc4ff" />
      </svg>
    );
  }

  if (type === 'star') {
    return (
      <svg viewBox="0 0 48 48" className="transition-pattern-glyph" aria-hidden="true">
        <path
          d="M24 6.5l4.8 9.8 10.8 1.5-7.8 7.6 1.9 10.6L24 31.2 14.3 36l1.9-10.6-7.8-7.6 10.8-1.5L24 6.5z"
          fill="#ffd76b"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" className="transition-pattern-glyph" aria-hidden="true">
      <path
        d="M30.5 7.5c-7.4 0-13.4 6-13.4 13.4 0 5.5 3.4 10.4 8.3 12.5-8 .8-14.2-2.6-18-7.8 1.8 9.2 9.9 15.8 20.2 15.8 11.6 0 21-8.3 21-18.5 0-7.4-5-13.8-12.2-16.6 1.3.7 2 1 2 1.2-.1 0-2.3 0-8-.5z"
        fill="#9f89ff"
      />
    </svg>
  );
}

function PatternBackdrop() {
  const rows = [
    { className: 'is-top-left', tokens: ['circle', 'square', 'circle', 'square'] },
    { className: 'is-top-right', tokens: ['star', 'moon', 'star', 'moon'] },
    { className: 'is-mid-right', tokens: ['square', 'circle', 'square', 'circle'] },
    { className: 'is-bottom-right', tokens: ['star', 'moon', 'star', 'moon'] },
  ];

  return (
    <div className="transition-backdrop" aria-hidden="true">
      {rows.map((row) => (
        <div className={`transition-pattern-row ${row.className}`} key={row.className}>
          {row.tokens.map((token, index) => (
            <span className={`transition-pattern-token is-${token}`} key={`${row.className}-${token}-${index}`}>
              <PatternGlyph type={token} />
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

function GuideOwl() {
  return (
    <svg
      viewBox="0 0 320 280"
      className="transition-guide-owl"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="owlBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#b67a3d" />
          <stop offset="100%" stopColor="#8f5926" />
        </linearGradient>
        <linearGradient id="owlBelly" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff7dc" />
          <stop offset="100%" stopColor="#f6dfb0" />
        </linearGradient>
      </defs>

      <g className="owl-float">
        <path d="M96 108L72 62l45 20z" fill="#8f5926" />
        <path d="M200 82l46-18-22 45z" fill="#8f5926" />
        <ellipse cx="150" cy="140" rx="82" ry="78" fill="url(#owlBody)" />
        <ellipse cx="150" cy="166" rx="50" ry="56" fill="url(#owlBelly)" />
        <ellipse cx="122" cy="128" rx="28" ry="30" fill="#fffdf8" />
        <ellipse cx="178" cy="128" rx="28" ry="30" fill="#fffdf8" />
        <circle cx="122" cy="128" r="12" fill="#21344b" />
        <circle cx="178" cy="128" r="12" fill="#21344b" />
        <circle cx="118" cy="123" r="3.8" fill="#ffffff" />
        <circle cx="174" cy="123" r="3.8" fill="#ffffff" />
        <path d="M150 138l-16 18h32z" fill="#f39a2d" />

        <g className="owl-pointer-wing">
          <path
            d="M208 174c38 10 65 34 80 60-14-9-25-12-34-12 5 10 7 19 7 28-16-16-34-28-58-34z"
            fill="#a96931"
          />
          <path d="M278 233c7 4 12 10 16 17-9-2-17-5-24-8z" fill="#f2b166" />
        </g>

        <path d="M92 176c-18 10-28 24-32 42 10-6 19-8 27-7-2 8-2 16 0 24 10-14 22-23 39-29z" fill="#9d632d" />
        <path d="M118 214c-6 14-8 28-8 40" stroke="#b96e29" strokeWidth="6" strokeLinecap="round" />
        <path d="M144 218c-1 12 0 24 4 36" stroke="#b96e29" strokeWidth="6" strokeLinecap="round" />
        <path d="M103 256h20" stroke="#b96e29" strokeWidth="5" strokeLinecap="round" />
        <path d="M136 254h20" stroke="#b96e29" strokeWidth="5" strokeLinecap="round" />

        <g className="owl-magnifier">
          <circle cx="230" cy="112" r="30" fill="rgba(171,226,255,0.32)" stroke="#6cb5e8" strokeWidth="8" />
          <path d="M250 134l22 22" stroke="#6cb5e8" strokeWidth="10" strokeLinecap="round" />
          <circle cx="230" cy="112" r="11" fill="#ffffff" opacity="0.6" />
        </g>
      </g>
    </svg>
  );
}

export default function TransitionScreen({ copy, onContinue }) {
  return (
    <main className="page page-transition">
      <section className="card transition-card">
        <PatternBackdrop />

        <div className="transition-scene">
          <div className="transition-guide" aria-hidden="true">
            <GuideOwl />
          </div>

          <div className="transition-copy">
            <p className="transition-kicker">{copy.question.practice}</p>
            <h1 className="title transition-title">{copy.transition.title}</h1>
            <p className="subtitle transition-subtitle">{copy.transition.subtitle}</p>

            <button type="button" className="cta-button transition-cta" onClick={onContinue}>
              <img
                className="transition-cta-icon"
                src={NEXT_ICON_SRC}
                alt=""
                aria-hidden="true"
                draggable="false"
              />
              <span>{copy.transition.cta}</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
