import { STIMULUS_TOKENS } from '../data/experimentConfig';

function StimulusChip({ token }) {
  const item = STIMULUS_TOKENS[token] ?? {
    emoji: token,
    label: token,
  };

  return (
    <div className="stimulus-chip" aria-label={item.label}>
      <span className="stimulus-chip-emoji" aria-hidden="true" style={{ filter: item.emojiFilter }}>
        {item.emoji}
      </span>
    </div>
  );
}

export default function StimulusSequence({ pattern, orientation = 'horizontal', hidden = false }) {
  if (hidden) {
    return (
      <div className="stimulus-hidden" role="status" aria-live="polite">
        Pattern hidden. Choose the matching answer.
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
