import { RESPONSE_SHAPES } from '../data/experimentConfig';
import { normalizeResponseArray } from '../utils/pattern';
import ShapeIcon from './ShapeIcon';

const shapeByID = RESPONSE_SHAPES.reduce((acc, shape) => {
  acc[shape.id] = shape;
  return acc;
}, {});

function OptionPreview({ tokens }) {
  const normalized = normalizeResponseArray(tokens);
  const choiceCount = Math.max(normalized.length, 1);

  return (
    <div className="option-preview" style={{ '--choice-count': choiceCount }}>
      {normalized.map((token, index) => {
        const shape = shapeByID[token];
        return (
          <span className="shape-chip" key={`${token}-${index}`} aria-hidden="true">
            <ShapeIcon shapeID={shape?.id ?? token} />
          </span>
        );
      })}
    </div>
  );
}

export default function MultipleChoiceOptions({ copy, options, selectedIndex, onSelect }) {
  return (
    <div className="mc-options-grid" role="list" aria-label={copy.question.answerOptionsAria}>
      {options.map((option, index) => (
        <button
          type="button"
          key={`option-${index}`}
          className={`mc-option-card ${selectedIndex === index ? 'is-selected' : ''}`}
          onClick={() => onSelect(index)}
          role="listitem"
        >
          <OptionPreview tokens={option} />
        </button>
      ))}
    </div>
  );
}
