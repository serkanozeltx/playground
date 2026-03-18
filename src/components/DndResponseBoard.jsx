import {
  DndContext,
  MouseSensor,
  PointerSensor,
  TouchSensor,
  useDraggable,
  useDroppable,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { RESPONSE_SHAPES } from '../data/experimentConfig';
import ShapeIcon from './ShapeIcon';
import { formatCopy } from '../i18n';

const shapeByID = RESPONSE_SHAPES.reduce((acc, shape) => {
  acc[shape.id] = shape;
  return acc;
}, {});

function PaletteShape({ shape, copy }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: `palette-${shape.id}`,
    data: { shapeID: shape.id },
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    zIndex: isDragging ? 4 : 1,
  };

  return (
    <button
      type="button"
      className="palette-shape"
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      aria-label={copy.shapes[shape.id] ?? shape.label}
    >
      <span className="palette-shape-token" aria-hidden="true">
        <ShapeIcon shapeID={shape.id} />
      </span>
    </button>
  );
}

function DropSlot({ index, value, onClear, copy }) {
  const slotID = `slot-${index}`;
  const { setNodeRef, isOver } = useDroppable({ id: slotID });
  const shape = value ? shapeByID[value] : null;
  const shapeLabel = shape ? copy.shapes[shape.id] ?? shape.label : '';

  return (
    <button
      type="button"
      className={`drop-slot ${shape ? 'is-filled' : ''} ${isOver ? 'is-over' : ''}`}
      ref={setNodeRef}
      onClick={() => {
        if (shape) {
          onClear(index);
        }
      }}
      aria-label={
        shape
          ? formatCopy(copy.dnd.slotFilled, { shape: shapeLabel })
          : `${copy.dnd.emptySlot} ${index + 1}`
      }
    >
      {shape ? (
        <span className="drop-slot-shape">
          <ShapeIcon shapeID={shape.id} />
        </span>
      ) : (
        <span className="drop-slot-empty" aria-hidden="true">
          +
        </span>
      )}
    </button>
  );
}

export default function DndResponseBoard({
  copy,
  answers,
  onChange,
  orientation = 'horizontal',
  disabled = false,
}) {
  // Touch sensor starts immediately (delay: 0) so kids do not need long-press.
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 0 },
    }),
    useSensor(TouchSensor, {
      activationConstraint: { delay: 0, tolerance: 0 },
    }),
    useSensor(MouseSensor, {
      activationConstraint: { distance: 0 },
    })
  );

  function handleDragEnd(event) {
    if (disabled) {
      return;
    }

    const shapeID = event.active?.data?.current?.shapeID;
    const overID = event.over?.id;

    if (!shapeID || typeof overID !== 'string' || !overID.startsWith('slot-')) {
      return;
    }

    const slotIndex = Number(overID.replace('slot-', ''));
    if (Number.isNaN(slotIndex)) {
      return;
    }

    const nextAnswers = [...answers];
    nextAnswers[slotIndex] = shapeID;
    onChange(nextAnswers);
  }

  function clearSlot(slotIndex) {
    const nextAnswers = [...answers];
    nextAnswers[slotIndex] = null;
    onChange(nextAnswers);
  }

  return (
    <div className="dnd-shell">
      <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
        <div className="shape-palette" aria-label={copy.dnd.shapeBank}>
          {RESPONSE_SHAPES.map((shape) => (
            <PaletteShape shape={shape} key={shape.id} copy={copy} />
          ))}
        </div>

        <div className={`drop-slot-grid slot-${orientation}`}>
          {answers.map((value, index) => (
            <DropSlot index={index} value={value} key={index} onClear={clearSlot} copy={copy} />
          ))}
        </div>
      </DndContext>
    </div>
  );
}
