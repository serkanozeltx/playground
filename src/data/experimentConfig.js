export const CONDITION_CODES = {
  C1: 'horizontal-mc',
  C2: 'vertical-mc',
  C3: 'memory-mc',
  C4: 'horizontal-dnd',
  C5: 'vertical-dnd',
  C6: 'memory-dnd',
};

export const LATIN_SQUARE_GROUPS = {
  A: ['C1', 'C2', 'C6', 'C3', 'C5', 'C4', 'C1', 'C2', 'C6', 'C3', 'C5', 'C4'],
  B: ['C2', 'C3', 'C1', 'C4', 'C6', 'C5', 'C2', 'C3', 'C1', 'C4', 'C6', 'C5'],
  C: ['C3', 'C4', 'C2', 'C5', 'C1', 'C6', 'C3', 'C4', 'C2', 'C5', 'C1', 'C6'],
  D: ['C4', 'C5', 'C3', 'C6', 'C2', 'C1', 'C4', 'C5', 'C3', 'C6', 'C2', 'C1'],
  E: ['C5', 'C6', 'C4', 'C1', 'C3', 'C2', 'C5', 'C6', 'C4', 'C1', 'C3', 'C2'],
  F: ['C6', 'C1', 'C5', 'C2', 'C4', 'C3', 'C6', 'C1', 'C5', 'C2', 'C4', 'C3'],
};

export const PRACTICE_QUESTIONS = [
  {
    id: 'P1',
    type: 'practice',
    mode: 'horizontal-mc',
    pattern: ['A', 'B', 'A', 'B'],
    options: [
      ['Square', 'Circle', 'Square', 'Circle'],
      ['Square', 'Square', 'Square', 'Square'],
      ['Circle', 'Square', 'Square', 'Circle'],
    ],
  },
  {
    id: 'P2',
    type: 'practice',
    mode: 'vertical-dnd',
    pattern: ['A', 'B', 'A', 'B'],
  },
  {
    id: 'P3',
    type: 'practice',
    mode: 'memory-mc',
    pattern: ['A', 'B', 'A', 'B'],
    options: [
      ['Square', 'Circle', 'Square', 'Circle'],
      ['Square', 'Square', 'Square', 'Square'],
      ['Triangle', 'Triangle', 'Triangle', 'Triangle'],
    ],
  },
  {
    id: 'P4',
    type: 'practice',
    mode: 'horizontal-dnd',
    pattern: ['A', 'B', 'A', 'B'],
  },
];

export const QUESTION_POOL = {
  C1: [
    {
      id: 'T_C1_ABB',
      pattern: ['A', 'B', 'B', 'A', 'B', 'B'],
      options: [
        ['S', 'C', 'C', 'S', 'C', 'C'],
        ['S', 'S', 'C', 'S', 'S', 'C'],
        ['S', 'C', 'S', 'S', 'C', 'S'],
      ],
    },
    {
      id: 'T_C1_ABC',
      pattern: ['A', 'B', 'C', 'A', 'B', 'C'],
      options: [
        ['S', 'C', 'T', 'S', 'C', 'T'],
        ['S', 'C', 'C', 'S', 'C', 'C'],
        ['S', 'T', 'C', 'S', 'T', 'C'],
      ],
    },
  ],
  C2: [
    {
      id: 'T_C2_ABB',
      pattern: ['A', 'B', 'B', 'A', 'B', 'B'],
      options: [
        ['S', 'C', 'C', 'S', 'C', 'C'],
        ['S', 'S', 'C', 'S', 'S', 'C'],
        ['C', 'S', 'S', 'C', 'S', 'S'],
      ],
    },
    {
      id: 'T_C2_ABC',
      pattern: ['A', 'B', 'C', 'A', 'B', 'C'],
      options: [
        ['S', 'C', 'T', 'S', 'C', 'T'],
        ['S', 'C', 'S', 'S', 'C', 'S'],
        ['T', 'C', 'S', 'T', 'C', 'S'],
      ],
    },
  ],
  C3: [
    {
      id: 'T_C3_ABB',
      pattern: ['A', 'B', 'B', 'A', 'B', 'B'],
      options: [
        ['S', 'C', 'C', 'S', 'C', 'C'],
        ['S', 'S', 'C', 'C', 'S', 'S'],
        ['S', 'C', 'T', 'S', 'C', 'T'],
      ],
    },
    {
      id: 'T_C3_ABC',
      pattern: ['A', 'B', 'C', 'A', 'B', 'C'],
      options: [
        ['S', 'C', 'T', 'S', 'C', 'T'],
        ['S', 'C', 'C', 'S', 'C', 'C'],
        ['S', 'S', 'T', 'S', 'S', 'T'],
      ],
    },
  ],
  C4: [
    {
      id: 'T_C4_ABB',
      pattern: ['A', 'B', 'B', 'A', 'B', 'B'],
    },
    {
      id: 'T_C4_ABC',
      pattern: ['A', 'B', 'C', 'A', 'B', 'C'],
    },
  ],
  C5: [
    {
      id: 'T_C5_ABB',
      pattern: ['A', 'B', 'B', 'A', 'B', 'B'],
    },
    {
      id: 'T_C5_ABC',
      pattern: ['A', 'B', 'C', 'A', 'B', 'C'],
    },
  ],
  C6: [
    {
      id: 'T_C6_ABB',
      pattern: ['A', 'B', 'B', 'A', 'B', 'B'],
    },
    {
      id: 'T_C6_ABC',
      pattern: ['A', 'B', 'C', 'A', 'B', 'C'],
    },
  ],
};

export const LATIN_GROUP_IDS = Object.keys(LATIN_SQUARE_GROUPS);

export const RESPONSE_SHAPES = [
  { id: 'square', label: 'Square', symbol: '■', color: '#004990' },
  { id: 'circle', label: 'Circle', symbol: '●', color: '#004990' },
  { id: 'triangle', label: 'Triangle', symbol: '▲', color: '#004990' },
  { id: 'star', label: 'Star', symbol: '★', color: '#004990' },
];

export const STIMULUS_TOKENS = {
  A: { emoji: '🐟', label: 'Fish' },
  B: { emoji: '🐢', label: 'Turtle' },
  C: { emoji: '🦀', label: 'Crab' },
  D: { emoji: '🐬', label: 'Dolphin' },
};

const MODE_META = {
  'horizontal-mc': { responseType: 'mc', orientation: 'horizontal', isMemory: false },
  'vertical-mc': { responseType: 'mc', orientation: 'vertical', isMemory: false },
  'memory-mc': { responseType: 'mc', orientation: 'horizontal', isMemory: true },
  'horizontal-dnd': { responseType: 'dnd', orientation: 'horizontal', isMemory: false },
  'vertical-dnd': { responseType: 'dnd', orientation: 'vertical', isMemory: false },
  'memory-dnd': { responseType: 'dnd', orientation: 'horizontal', isMemory: true },
};

export const CONDITION_META_BY_CODE = Object.entries(CONDITION_CODES).reduce(
  (acc, [code, mode]) => {
    acc[code] = {
      code,
      mode,
      ...MODE_META[mode],
    };
    return acc;
  },
  {}
);

export function assignLatinGroup(participantID) {
  const cleanID = String(participantID ?? '').trim();
  if (!cleanID) {
    return 'A';
  }

  let hash = 0;
  for (const char of cleanID) {
    hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  }
  return LATIN_GROUP_IDS[hash % LATIN_GROUP_IDS.length];
}

function normalizeMode(mode) {
  return {
    mode,
    ...MODE_META[mode],
  };
}

function cloneOptions(options) {
  return options?.map((option) => [...option]);
}

function buildPracticeQuestions() {
  return PRACTICE_QUESTIONS.map((question, index) => {
    const meta = normalizeMode(question.mode);

    return {
      id: question.id,
      sourceQuestionId: question.id,
      order: index + 1,
      conditionCode: `P${index + 1}`,
      conditionType: question.mode,
      isPractice: true,
      prompt: 'Practice round',
      pattern: [...question.pattern],
      options: cloneOptions(question.options),
      ...meta,
    };
  });
}

export function buildTestQuestionsForGroup(groupID) {
  const sequence = LATIN_SQUARE_GROUPS[groupID] ?? LATIN_SQUARE_GROUPS.A;
  const perCodeCount = {};

  return sequence.map((conditionCode, index) => {
    const questionSet = QUESTION_POOL[conditionCode];
    const seenCount = perCodeCount[conditionCode] ?? 0;
    const selectedTemplate = questionSet[seenCount % questionSet.length];

    perCodeCount[conditionCode] = seenCount + 1;

    const conditionMeta = CONDITION_META_BY_CODE[conditionCode];

    return {
      id: `${selectedTemplate.id}_${seenCount + 1}_${index + 1}`,
      sourceQuestionId: selectedTemplate.id,
      order: index + 5,
      conditionCode,
      conditionType: CONDITION_CODES[conditionCode],
      isPractice: false,
      prompt: 'Find the matching pattern',
      pattern: [...selectedTemplate.pattern],
      options: cloneOptions(selectedTemplate.options),
      ...conditionMeta,
    };
  });
}

export function buildSessionQuestions(groupID) {
  const practice = buildPracticeQuestions();
  const test = buildTestQuestionsForGroup(groupID);
  return [...practice, ...test];
}
