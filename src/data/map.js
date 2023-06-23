// const loadJSON = (path) => JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));
// const descJson = loadJSON('./descriptions.json');

import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const descJson = require('./descriptions.json');

// import descJson from './descriptions.json' assert {type: 'json'};

const map = {
  room5: {
    name: 'Лестница',
    description: descJson.short_5,
    longDescription: descJson.long_5,
    exits: {
      south: 'room12',
      up: 'room47',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 1,
  },
  room12: {
    name: 'Столовая',
    description: descJson.short_12,
    longDescription: descJson.long_12,
    exits: {
      north: 'room5',
      south: 'room19',
      west: 'room11',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 1,
  },
  room11: {
    name: 'Столовая',
    description: descJson.short_11,
    longDescription: descJson.long_11,
    exits: {
      east: 'room12',
      south: 'room18',
      west: 'room10',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 1,
  },
  room10: {
    name: 'Столовая',
    description: descJson.short_10,
    longDescription: descJson.long_10,
    exits: {
      east: 'room11',
      south: 'room17',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 1,
  },
  room15: {
    name: 'Кузница',
    description: descJson.short_15,
    longDescription: descJson.long_15,
    exits: {
      east: 'room16',
      south: 'room22',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 1,
  },
  room16: {
    name: 'Кузница',
    description: descJson.short_16,
    longDescription: descJson.long_16,
    exits: {
      east: 'room17',
      west: 'room15',
      south: 'room23',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 1,
  },
  room17: {
    name: 'Столовая',
    description: descJson.short_17,
    longDescription: descJson.long_17,
    exits: {
      east: 'room18',
      west: 'room16',
      south: 'room24',
      north: 'room10',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 1,
  },
  room18: {
    name: 'Столовая',
    description: descJson.short_18,
    longDescription: descJson.long_18,
    exits: {
      east: 'room19',
      west: 'room17',
      south: 'room25',
      north: 'room11',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 1,
  },
  room19: {
    name: 'Столовая',
    description: descJson.short_19,
    longDescription: descJson.long_19,
    exits: {
      west: 'room18',
      south: 'room26',
      north: 'room12',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 1,
  },
  room20: {
    name: 'Кладовая',
    description: descJson.short_20,
    longDescription: descJson.long_20,
    exits: {
      east: 'room21',
      south: 'room27',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 1,
  },
  room21: {
    name: 'Кладовая',
    description: descJson.short_21,
    longDescription: descJson.long_21,
    exits: {
      west: 'room20',
      south: 'room28',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 1,
  },
  room22: {
    name: 'Кузница',
    description: descJson.short_22,
    longDescription: descJson.long_22,
    exits: {
      east: 'room23',
      north: 'room15',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 1,
  },
  room23: {
    name: 'Кузница',
    description: descJson.short_23,
    longDescription: descJson.long_23,
    exits: {
      north: 'room16',
      west: 'room22',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 1,
  },
  room24: {
    name: 'Столовая',
    description: descJson.short_24,
    longDescription: descJson.long_24,
    exits: {
      east: 'room25',
      north: 'room17',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 1,
  },
  room25: {
    name: 'Столовая',
    description: descJson.short_25,
    longDescription: descJson.long_25,
    exits: {
      east: 'room26',
      north: 'room18',
      west: 'room24',
      south: 'room32',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 1,
  },
  room26: {
    name: 'Столовая',
    description: descJson.short_26,
    longDescription: descJson.long_26,
    exits: {
      east: 'room27',
      west: 'room25',
      north: 'room19',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 1,
  },
  room27: {
    name: 'Кладовая',
    description: descJson.short_27,
    longDescription: descJson.long_27,
    exits: {
      east: 'room28',
      south: 'room34',
      west: 'room26',
      north: 'room20',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 1,
  },
  room28: {
    name: 'Кладовая',
    description: descJson.short_28,
    longDescription: descJson.long_28,
    exits: {
      west: 'room27',
      north: 'room21',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 1,
  },
  room32: {
    name: 'Коридор',
    description: descJson.short_32,
    longDescription: descJson.long_32,
    exits: {
      east: 'room33',
      north: 'room25',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 1,
  },
  room33: {
    name: 'Коридор',
    description: descJson.short_33,
    longDescription: descJson.long_33,
    exits: {
      east: 'room34',
      west: 'room32',
      south: 'room40',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 1,
  },
  room34: {
    name: 'Коридор',
    description: descJson.short_34,
    longDescription: descJson.long_34,
    exits: {
      north: 'room27',
      west: 'room33',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 1,
  },
  room40: {
    name: 'Чулан',
    description: descJson.short_40,
    longDescription: descJson.long_40,
    exits: {
      north: 'room33',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 1,
  },

  room47: {
    name: 'Лестница',
    description: descJson.short_47,
    longDescription: descJson.long_47,
    exits: {
      south: 'room54',
      down: 'room5',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 2,
  },
  room54: {
    name: 'Бальный зал',
    description: descJson.short_54,
    longDescription: descJson.long_54,
    exits: {
      north: 'room47',
      south: 'room61',
      west: 'room53',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 2,
  },
  room53: {
    name: 'Бальный зал',
    description: descJson.short_53,
    longDescription: descJson.long_53,
    exits: {
      east: 'room54',
      south: 'room60',
      west: 'room52',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 2,
  },
  room52: {
    name: 'Бальный зал',
    description: descJson.short_52,
    longDescription: descJson.long_52,
    exits: {
      east: 'room53',
      south: 'room59',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 2,
  },
  room57: {
    name: 'Библиотека',
    description: descJson.short_57,
    longDescription: descJson.long_57,
    exits: {
      east: 'room58',
      south: 'room64',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 2,
  },
  room58: {
    name: 'Библиотека',
    description: descJson.short_58,
    longDescription: descJson.long_58,
    exits: {
      east: 'room59',
      west: 'room57',
      south: 'room65',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 2,
  },
  room59: {
    name: 'Бальный зал',
    description: descJson.short_59,
    longDescription: descJson.long_59,
    exits: {
      east: 'room60',
      west: 'room58',
      south: 'room66',
      north: 'room52',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 2,
  },
  room60: {
    name: 'Бальный зал',
    description: descJson.short_60,
    longDescription: descJson.long_60,
    exits: {
      east: 'room61',
      west: 'room59',
      south: 'room67',
      north: 'room53',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 2,
  },
  room61: {
    name: 'Бальный зал',
    description: descJson.short_61,
    longDescription: descJson.long_61,
    exits: {
      west: 'room60',
      south: 'room68',
      north: 'room54',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 2,
  },
  room62: {
    name: 'Кабинет',
    description: descJson.short_62,
    longDescription: descJson.long_62,
    exits: {
      east: 'room63',
      south: 'room69',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 2,
  },
  room63: {
    name: 'Кабинет',
    description: descJson.short_63,
    longDescription: descJson.long_63,
    exits: {
      west: 'room62',
      south: 'room70',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 2,
  },
  room64: {
    name: 'Кладовая',
    description: descJson.short_64,
    longDescription: descJson.long_64,
    exits: {
      east: 'room65',
      north: 'room67',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 2,
  },
  room65: {
    name: 'Кладовая',
    description: descJson.short_65,
    longDescription: descJson.long_65,
    exits: {
      north: 'room58',
      west: 'room64',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 2,
  },
  room66: {
    name: 'Бальный зал',
    description: descJson.short_66,
    longDescription: descJson.long_66,
    exits: {
      east: 'room67',
      north: 'room59',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 2,
  },
  room67: {
    name: 'Бальный зал',
    description: descJson.short_67,
    longDescription: descJson.long_67,
    exits: {
      east: 'room68',
      north: 'room60',
      west: 'room66',
      south: 'room74',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 2,
  },
  room68: {
    name: 'Бальный зал',
    description: descJson.short_68,
    longDescription: descJson.long_68,
    exits: {
      east: 'room69',
      west: 'room67',
      north: 'room61',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 2,
  },
  room69: {
    name: 'Кабинет',
    description: descJson.short_69,
    longDescription: descJson.long_69,
    exits: {
      east: 'room70',
      west: 'room68',
      north: 'room62',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 2,
  },
  room70: {
    name: 'Кабинет',
    description: descJson.short_70,
    longDescription: descJson.long_70,
    exits: {
      west: 'room69',
      north: 'room63',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 2,
  },
  room74: {
    name: 'Лестница',
    description: descJson.short_75,
    longDescription: descJson.long_75,
    exits: {
      north: 'room67',
      up: 'room109',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 2,
  },
  room109: {
    name: 'Лестница',
    description: descJson.short_109,
    longDescription: descJson.long_109,
    exits: {
      north: 'room102',
      down: 'room74',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 3,
  },
  room102: {
    name: 'Оранжерея',
    description: descJson.short_102,
    longDescription: descJson.long_102,
    exits: {
      north: 'room95',
      east: 'room103',
      south: 'room109',
      west: 'room101',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 3,
  },
  room101: {
    name: 'Оранжерея',
    description: descJson.short_101,
    longDescription: descJson.long_101,
    exits: {
      north: 'room94',
      east: 'room102',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 3,
  },
  room103: {
    name: 'Оранжерея',
    description: descJson.short_103,
    longDescription: descJson.long_103,
    exits: {
      north: 'room96',
      west: 'room102',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 3,
  },
  room94: {
    name: 'Оранжерея',
    description: descJson.short_94,
    longDescription: descJson.long_94,
    exits: {
      north: 'room87',
      east: 'room95',
      south: 'room101',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 3,
  },
  room95: {
    name: 'Оранжерея',
    description: descJson.short_95,
    longDescription: descJson.long_95,
    exits: {
      north: 'room88',
      east: 'room96',
      west: 'room94',
      south: 'room102',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 3,
  },
  room96: {
    name: 'Оранжерея',
    description: descJson.short_96,
    longDescription: descJson.long_96,
    exits: {
      north: 'room89',
      west: 'room95',
      south: 'room103',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 3,
  },
  room87: {
    name: 'Оранжерея',
    description: descJson.short_87,
    longDescription: descJson.long_87,
    exits: {
      east: 'room88',
      south: 'room94',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 3,
  },
  room88: {
    name: 'Оранжерея',
    description: descJson.short_88,
    longDescription: descJson.long_88,
    exits: {
      west: 'room87',
      east: 'room89',
      south: 'room95',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 3,
  },
  room89: {
    name: 'Оранжерея',
    description: descJson.short_89,
    longDescription: descJson.long_89,
    exits: {
      west: 'room88',
      south: 'room96',
    },
    mobs: [],
    items: [],
    hiddenItems: [],
    darkRoom: false,
    visited: true,
    floor: 3,
  },
};

export default map;
