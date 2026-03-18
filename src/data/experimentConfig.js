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
    pattern: [
      'practice_1_star',
      'practice_1_moon',
      'practice_1_star',
      'practice_1_moon',
      'practice_1_star',
      'practice_1_moon',
    ],
    options: [
      ['Circle', 'Square', 'Circle', 'Square', 'Circle', 'Square'],
      ['Square', 'Circle', 'Triangle', 'Circle', 'Triangle', 'Circle'],
      ['Triangle', 'Triangle', 'Circle', 'Circle', 'Triangle', 'Triangle'],
    ],
  },
  {
    id: 'P2',
    type: 'practice',
    mode: 'memory-mc',
    pattern: [
      'practice_2_apricot',
      'practice_2_apple',
      'practice_2_apricot',
      'practice_2_apple',
      'practice_2_apricot',
      'practice_2_apple',
    ],
    options: [
      ['Triangle', 'Square', 'Circle', 'Square', 'Circle', 'Square'],
      ['Square', 'Circle', 'Square', 'Circle', 'Square', 'Circle'],
      ['Triangle', 'Circle', 'Circle', 'Triangle', 'Triangle', 'Circle'],
    ],
  },
  {
    id: 'P3',
    type: 'practice',
    mode: 'horizontal-dnd',
    pattern: [
      'practice_3_bear',
      'practice_3_monkey',
      'practice_3_bear',
      'practice_3_monkey',
      'practice_3_bear',
      'practice_3_monkey',
    ],
  },
  {
    id: 'P4',
    type: 'practice',
    mode: 'memory-dnd',
    pattern: [
      'practice_4_cat',
      'practice_4_tree',
      'practice_4_cat',
      'practice_4_tree',
      'practice_4_cat',
      'practice_4_tree',
    ],
  },
];

export const QUESTION_POOL = {
  C1: [
    {
      id: 'T_C1_ABB',
      pattern: [
        'hor_mc_abb_comb',
        'hor_mc_abb_scissors',
        'hor_mc_abb_scissors',
        'hor_mc_abb_comb',
        'hor_mc_abb_scissors',
        'hor_mc_abb_scissors',
      ],
      options: [
        ['Square', 'Triangle', 'Square', 'Square', 'Triangle', 'Square'],
        ['Circle', 'Square', 'Square', 'Circle', 'Square', 'Square'],
        ['Circle', 'Square', 'Triangle', 'Circle', 'Square', 'Triangle'],
      ],
    },
    {
      id: 'T_C1_ABC',
      pattern: [
        'hor_mc_abc_cherry',
        'hor_mc_abc_star',
        'hor_mc_abc_apple',
        'hor_mc_abc_cherry',
        'hor_mc_abc_star',
        'hor_mc_abc_apple',
      ],
      options: [
        ['Square', 'Triangle', 'Square', 'Triangle', 'Square', 'Triangle'],
        ['Square', 'Circle', 'Triangle', 'Square', 'Circle', 'Triangle'],
        ['Square', 'Triangle', 'Triangle', 'Square', 'Triangle', 'Triangle'],
      ],
    },
  ],
  C2: [
    {
      id: 'T_C2_ABB',
      pattern: [
        'vertical_mc_abb_banana',
        'vertical_mc_abb_watermelon',
        'vertical_mc_abb_watermelon',
        'vertical_mc_abb_banana',
        'vertical_mc_abb_watermelon',
        'vertical_mc_abb_watermelon',
      ],
      options: [
        ['Triangle', 'Square', 'Square', 'Triangle', 'Square', 'Square'],
        ['Triangle', 'Circle', 'Square', 'Triangle', 'Circle', 'Square'],
        ['Triangle', 'Square', 'Triangle', 'Triangle', 'Square', 'Triangle'],
      ],
    },
    {
      id: 'T_C2_ABC',
      pattern: [
        'vertical_mc_abc_orange_cap',
        'vertical_mc_abc_green_cap',
        'vertical_mc_abc_purple_cap',
        'vertical_mc_abc_orange_cap',
        'vertical_mc_abc_green_cap',
        'vertical_mc_abc_purple_cap',
      ],
      options: [
        ['Square', 'Triangle', 'Square', 'Triangle', 'Square', 'Triangle'],
        ['Circle', 'Triangle', 'Square', 'Circle', 'Triangle', 'Square'],
        ['Square', 'Square', 'Square', 'Square', 'Square', 'Square'],
      ],
    },
  ],
  C3: [
    {
      id: 'T_C3_ABB',
      pattern: [
        'mem_mc_abb_pencil_red',
        'mem_mc_abb_pencil_yellow',
        'mem_mc_abb_pencil_yellow',
        'mem_mc_abb_pencil_red',
        'mem_mc_abb_pencil_yellow',
        'mem_mc_abb_pencil_yellow',
      ],
      options: [
        ['Square', 'Circle', 'Circle', 'Square', 'Circle', 'Circle'],
        ['Square', 'Circle', 'Triangle', 'Square', 'Circle', 'Triangle'],
        ['Square', 'Square', 'Square', 'Square', 'Square', 'Square'],
      ],
    },
    {
      id: 'T_C3_ABC',
      pattern: [
        'mem_mc_blue_socks',
        'mem_mc_blue_tshirt',
        'mem_mc_blue_pants',
        'mem_mc_blue_socks',
        'mem_mc_blue_tshirt',
        'mem_mc_blue_pants',
      ],
      options: [
        ['Circle', 'Square', 'Triangle', 'Circle', 'Square', 'Triangle'],
        ['Square', 'Square', 'Circle', 'Square', 'Square', 'Circle'],
        ['Square', 'Circle', 'Square', 'Circle', 'Square', 'Circle'],
      ],
    },
  ],
  C4: [
    {
      id: 'T_C4_ABB',
      pattern: [
        'hor_dd_abb_butterfly',
        'hor_dd_abb_duck',
        'hor_dd_abb_duck',
        'hor_dd_abb_butterfly',
        'hor_dd_abb_duck',
        'hor_dd_abb_duck',
      ],
    },
    {
      id: 'T_C4_ABC',
      pattern: [
        'hor_dd_abc_cloud',
        'hor_dd_abc_crescent',
        'hor_dd_abc_bird',
        'hor_dd_abc_cloud',
        'hor_dd_abc_crescent',
        'hor_dd_abc_bird',
      ],
    },
  ],
  C5: [
    {
      id: 'T_C5_ABB',
      pattern: [
        'vertical_dd_abb_plane',
        'vertical_dd_abb_ship',
        'vertical_dd_abb_ship',
        'vertical_dd_abb_plane',
        'vertical_dd_abb_ship',
        'vertical_dd_abb_ship',
      ],
    },
    {
      id: 'T_C5_ABC',
      pattern: [
        'vertical_dd_blue_hearth',
        'vertical_dd_orange_hearth',
        'vertical_dd_pink_hearth',
        'vertical_dd_blue_hearth',
        'vertical_dd_orange_hearth',
        'vertical_dd_pink_hearth',
      ],
    },
  ],
  C6: [
    {
      id: 'T_C6_ABB',
      pattern: [
        'mem_dd_abb_fork_green',
        'mem_dd_abb_fork_red',
        'mem_dd_abb_fork_red',
        'mem_dd_abb_fork_green',
        'mem_dd_abb_fork_red',
        'mem_dd_abb_fork_red',
      ],
    },
    {
      id: 'T_C6_ABC',
      pattern: ['mem_dd_abc_bird', 'mem_dd_abc_sun', 'mem_dd_abc_cap', 'mem_dd_abc_bird', 'mem_dd_abc_sun', 'mem_dd_abc_cap'],
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
  practice_1_star: { asset: '/icons/patterns/practice_1_star.png', label: 'Star' },
  practice_1_moon: { asset: '/icons/patterns/practice_1_moon.png', label: 'Moon' },
  practice_2_apricot: { asset: '/icons/patterns/practice_2_apricot.png', label: 'Apricot' },
  practice_2_apple: { asset: '/icons/patterns/practice_2_apple.png', label: 'Apple' },
  practice_3_bear: { asset: '/icons/patterns/practice_3_bear.png', label: 'Bear' },
  practice_3_monkey: { asset: '/icons/patterns/practice_3_monkey.png', label: 'Monkey' },
  practice_4_cat: { asset: '/icons/patterns/practice_4_cat.png', label: 'Cat' },
  practice_4_tree: { asset: '/icons/patterns/practice_4_tree.png', label: 'Tree' },
  Banana: { emoji: '🍌', label: 'Banana' },
  Watermelon: { emoji: '🍉', label: 'Watermelon' },
  comb: { emoji: '🪮', label: 'Comb' },
  scissors: { emoji: '✂️', label: 'Scissors' },
  hor_mc_abb_comb: { asset: '/icons/patterns/hor_mc_abb_comb.svg', label: 'Comb' },
  hor_mc_abb_scissors: { asset: '/icons/patterns/hor_mc_abb_scissors.svg', label: 'Scissors' },
  hor_mc_abc_cherry: { asset: '/icons/patterns/hor_mc_abc_cherry.svg', label: 'Cherry' },
  hor_mc_abc_star: { asset: '/icons/patterns/hor_mc_abc_star.svg', label: 'Star' },
  hor_mc_abc_apple: { asset: '/icons/patterns/hor_mc_abc_apple.svg', label: 'Apple' },
  'red pencil': {
    icon: 'coloring-pencil',
    color: '#f44357',
    label: 'Red coloring pencil',
  },
  'yellow pencil': {
    icon: 'coloring-pencil',
    color: '#f4cf32',
    label: 'Yellow coloring pencil',
  },
  butterfly: { asset: '/icons/patterns/butterfly.svg', label: 'Butterfly' },
  duck: { asset: '/icons/patterns/duck.svg', label: 'Duck' },
  hor_dd_abb_butterfly: { asset: '/icons/patterns/hor_dd_abb_butterfly.svg', label: 'Butterfly' },
  hor_dd_abb_duck: { asset: '/icons/patterns/hor_dd_abb_duck.svg', label: 'Duck' },
  plane: { asset: '/icons/patterns/plane.svg', label: 'Plane' },
  ship: { asset: '/icons/patterns/ship.svg', label: 'Ship' },
  cloud: { asset: '/icons/patterns/cloud.svg', label: 'Cloud' },
  crescent: { asset: '/icons/patterns/crescent.svg', label: 'Crescent' },
  bird: { asset: '/icons/patterns/bird.svg', label: 'Bird' },
  bird2: { asset: '/icons/patterns/bird2.svg', label: 'Bird' },
  sun: { asset: '/icons/patterns/sun.svg', label: 'Sun' },
  cap: { asset: '/icons/patterns/cap.svg', label: 'Cap' },
  vertical_mc_abc_orange_cap: { asset: '/icons/patterns/vertical_mc_abc_orange_cap.svg', label: 'Orange cap' },
  vertical_mc_abc_green_cap: { asset: '/icons/patterns/vertical_mc_abc_green_cap.svg', label: 'Green cap' },
  vertical_mc_abc_purple_cap: { asset: '/icons/patterns/vertical_mc_abc_purple_cap.svg', label: 'Purple cap' },
  mem_dd_abc_bird: { asset: '/icons/patterns/mem_dd_abc_bird.svg', label: 'Bird' },
  mem_dd_abc_sun: { asset: '/icons/patterns/mem_dd_abc_sun.svg', label: 'Sun' },
  mem_dd_abc_cap: { asset: '/icons/patterns/mem_dd_abc_cap.svg', label: 'Cap' },
  hor_dd_abc_cloud: { asset: '/icons/patterns/hor_dd_abc_cloud.svg', label: 'Cloud' },
  hor_dd_abc_crescent: { asset: '/icons/patterns/hor_dd_abc_crescent.svg', label: 'Crescent' },
  hor_dd_abc_bird: { asset: '/icons/patterns/hor_dd_abc_bird.svg', label: 'Bird' },
  mem_mc_blue_socks: { asset: '/icons/patterns/mem_mc_blue_socks.svg', label: 'Blue socks' },
  mem_mc_blue_tshirt: { asset: '/icons/patterns/mem_mc_blue_tshirt.svg', label: 'Blue t-shirt' },
  mem_mc_blue_pants: { asset: '/icons/patterns/mem_mc_blue_pants.svg', label: 'Blue pants' },
  mem_mc_abb_pencil_red: { asset: '/icons/patterns/mem_mc_abb_pencil_red.svg', label: 'Red pencil' },
  mem_mc_abb_pencil_yellow: { asset: '/icons/patterns/mem_mc_abb_pencil_yellow.svg', label: 'Yellow pencil' },
  vertical_mc_abb_banana: { asset: '/icons/patterns/vertical_mc_abb_banana.svg', label: 'Banana' },
  vertical_mc_abb_watermelon: { asset: '/icons/patterns/vertical_mc_abb_watermelon.svg', label: 'Watermelon' },
  mem_dd_abb_fork_green: { asset: '/icons/patterns/mem_dd_abb_fork_green.svg', label: 'Green fork' },
  mem_dd_abb_fork_red: { asset: '/icons/patterns/mem_dd_abb_fork_red.svg', label: 'Red fork' },
  vertical_dd_blue_hearth: { asset: '/icons/patterns/vertical_dd_blue_hearth.svg', label: 'Blue heart' },
  vertical_dd_orange_hearth: { asset: '/icons/patterns/vertical_dd_orange_hearth.svg', label: 'Orange heart' },
  vertical_dd_pink_hearth: { asset: '/icons/patterns/vertical_dd_pink_hearth.svg', label: 'Pink heart' },
  vertical_dd_abb_plane: { asset: '/icons/patterns/vertical_dd_abb_plane.svg', label: 'Plane' },
  vertical_dd_abb_ship: { asset: '/icons/patterns/vertical_dd_abb_ship.svg', label: 'Ship' },
  cherries: { emoji: '🍒', label: 'Cherries' },
  star: { emoji: '⭐', label: 'Star' },
  'green apple': { emoji: '🍏', label: 'Green apple' },
  'Orange baseballcap': {
    emoji: '🧢',
    emojiFilter: 'invert(62%) sepia(66%) saturate(1331%) hue-rotate(342deg) brightness(101%) contrast(98%)',
    label: 'Orange baseballcap',
  },
  'Green baseballcap': {
    emoji: '🧢',
    emojiFilter: 'invert(47%) sepia(55%) saturate(846%) hue-rotate(96deg) brightness(95%) contrast(92%)',
    label: 'Green baseballcap',
  },
  'Purple baseballcap': {
    emoji: '🧢',
    emojiFilter: 'invert(44%) sepia(49%) saturate(1088%) hue-rotate(236deg) brightness(93%) contrast(95%)',
    label: 'Purple baseballcap',
  },
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
