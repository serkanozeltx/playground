const SHAPE_TOKEN_MAP = {
  s: 'square',
  square: 'square',
  c: 'circle',
  circle: 'circle',
  t: 'triangle',
  triangle: 'triangle',
  r: 'star',
  star: 'star',
};

export function normalizeShapeToken(token) {
  const key = String(token ?? '').trim().toLowerCase();
  return SHAPE_TOKEN_MAP[key] ?? key;
}

function normalizeToken(token) {
  if (token === undefined || token === null) {
    return '';
  }

  const raw = String(token).trim();
  if (!raw) {
    return '';
  }

  const shape = normalizeShapeToken(raw);
  return shape || raw;
}

export function toPatternSignature(items) {
  const map = new Map();
  let nextID = 0;

  return items.map((item) => {
    const normalized = normalizeToken(item);
    if (!map.has(normalized)) {
      map.set(normalized, nextID);
      nextID += 1;
    }
    return map.get(normalized);
  });
}

export function checkPatternIsomorphism(stimulusArray, responseArray) {
  if (!Array.isArray(stimulusArray) || !Array.isArray(responseArray)) {
    return false;
  }

  if (stimulusArray.length !== responseArray.length || stimulusArray.length === 0) {
    return false;
  }

  const left = toPatternSignature(stimulusArray);
  const right = toPatternSignature(responseArray);
  return left.every((value, index) => value === right[index]);
}

export function normalizeResponseArray(rawArray) {
  if (!Array.isArray(rawArray)) {
    return [];
  }

  return rawArray.map((item) => normalizeShapeToken(item));
}

export function serializeResponse(response) {
  if (Array.isArray(response)) {
    return response.join('|');
  }
  return String(response ?? '');
}
