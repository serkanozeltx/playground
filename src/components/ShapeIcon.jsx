function StarPath() {
  return (
    <path
      d="M50 10 L61.8 35.6 L90 39.2 L69 58.8 L74.8 87.2 L50 73.6 L25.2 87.2 L31 58.8 L10 39.2 L38.2 35.6 Z"
      fill="currentColor"
    />
  );
}

export default function ShapeIcon({ shapeID, className = '' }) {
  if (shapeID === 'square') {
    return (
      <svg className={`shape-icon ${className}`.trim()} viewBox="0 0 100 100" aria-hidden="true" focusable="false">
        <rect x="18" y="18" width="64" height="64" rx="4" ry="4" fill="currentColor" />
      </svg>
    );
  }

  if (shapeID === 'circle') {
    return (
      <svg className={`shape-icon ${className}`.trim()} viewBox="0 0 100 100" aria-hidden="true" focusable="false">
        <circle cx="50" cy="50" r="32" fill="currentColor" />
      </svg>
    );
  }

  if (shapeID === 'triangle') {
    return (
      <svg className={`shape-icon ${className}`.trim()} viewBox="0 0 100 100" aria-hidden="true" focusable="false">
        <polygon points="50,12 86,84 14,84" fill="currentColor" />
      </svg>
    );
  }

  if (shapeID === 'star') {
    return (
      <svg className={`shape-icon ${className}`.trim()} viewBox="0 0 100 100" aria-hidden="true" focusable="false">
        <StarPath />
      </svg>
    );
  }

  return (
    <svg className={`shape-icon ${className}`.trim()} viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <circle cx="50" cy="50" r="10" fill="currentColor" />
    </svg>
  );
}
