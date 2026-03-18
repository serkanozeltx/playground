import { STIMULUS_TOKENS } from '../data/experimentConfig';

function ColoringPencilIcon({ color = '#f4cf32' }) {
  return (
    <svg
      className="stimulus-chip-pencil"
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
    >
      <g transform="rotate(-28 32 32)">
        <rect x="24" y="12" width="16" height="40" rx="4.5" fill={color} />
        <rect x="24" y="12" width="16" height="5" rx="2.5" fill="rgba(255,255,255,0.28)" />
        <polygon points="24,12 32,2 40,12" fill="#f3c78d" />
        <polygon points="29.5,5.2 32,2 34.5,5.2" fill="#cc6f4d" />
      </g>
    </svg>
  );
}

function StimulusChip({ token }) {
  const item = STIMULUS_TOKENS[token] ?? {
    emoji: token,
    label: token,
  };

  return (
    <div className="stimulus-chip" aria-label={item.label}>
      {item.icon === 'coloring-pencil' ? <ColoringPencilIcon color={item.color} /> : null}
      {item.asset ? (
        <img
          className="stimulus-chip-image"
          src={item.asset}
          alt=""
          aria-hidden="true"
          draggable="false"
        />
      ) : null}
      {!item.icon && !item.asset ? (
        <span className="stimulus-chip-emoji" aria-hidden="true" style={{ filter: item.emojiFilter }}>
          {item.emoji}
        </span>
      ) : null}
    </div>
  );
}

export default function StimulusSequence({ pattern, orientation = 'horizontal', hidden = false, copy }) {
  if (hidden) {
    return (
      <div className="stimulus-hidden" role="status" aria-live="polite">
        {copy.question.hiddenPattern}
      </div>
    );
  }

  return (
    <div className={`stimulus-sequence stimulus-${orientation}`}>
      {pattern.map((token, index) => (
        <StimulusChip token={token} key={`${token}-${index}`} />
      ))}
    </div>
  );
}
