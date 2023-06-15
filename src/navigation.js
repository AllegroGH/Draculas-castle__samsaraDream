import color from 'bash-color';
import map from './data/map.js';
import player from './data/player.js';

const directions = [
  ['8', 'up', 'north'],
  ['6', 'right', 'east'],
  ['2', 'down', 'south'],
  ['4', 'left', 'west'],
  ['9', 'pageup', 'up'],
  ['3', 'pagedown', 'down'],
  ['5', 'clear', 'lookAround'],
];

const mobs = {
  draculas: 'Граф Дракула стоит здесь.',
  ghost: 'Призрак летает вокруг костра.',
};

const printMobs = (room, spaces = 0) => {
  const indent = spaces ? ' '.repeat(spaces) : '';
  const arrOfMobs = room.mobs;
  const entries = Object.entries(mobs);
  const curMobs = entries.map(([idMob, valueMob]) => {
    if (arrOfMobs.includes(idMob)) console.log(color.red(`${indent}${valueMob}`));
    return valueMob;
  });
  return curMobs;
  /*
  for (const [idMob, valueMob] of entries) {
    if (arrOfMobs.includes(idMob)) {
      console.log(color.red(`${indent}${valueMob}`));
    }
  }
  */
};

const getRussianDirection = (direct) => {
  switch (direct) {
    case 'north':
      return 'на севере';
    case 'east':
      return 'на востоке';
    case 'south':
      return 'на юге';
    case 'west':
      return 'на западе';
    case 'up':
      return 'на верху';
    case 'down':
      return 'внизу';
    default:
      return 'Нет такого направления движения.';
  }
};

const getRusForSelectedDir = (direct) => {
  switch (direct) {
    case 'north':
      return 'на север';
    case 'east':
      return 'на восток';
    case 'south':
      return 'на юг';
    case 'west':
      return 'на запад';
    case 'up':
      return 'на верх';
    case 'down':
      return 'вниз';
    default:
      return 'Нет такого направления движения.';
  }
};

const showHPAndRoomDirections = (room, spaces = 0) => {
  const indent = spaces ? ' '.repeat(spaces) : '';
  const roomDirections = Object.keys(room.exits);
  const rusDirect = roomDirections.reduce((acc, dir) => {
    switch (dir) {
      case 'north':
        return `${acc}С`;
      case 'east':
        return `${acc}В`;
      case 'south':
        return `${acc}Ю`;
      case 'west':
        return `${acc}З`;
      case 'up':
        return `${acc}^`;
      case 'down':
        return `${acc}v`;
      default:
        return acc;
    }
  }, '');
  // console.log(color.green(`${indent}<${player.curHP}HP, выходы: ${rusDirect}>`, 'light'));
  console.log(`${indent}<${color.green(`${player.curHP} HP`)}, выходы: ${color.yellow(rusDirect)}>`); // может так?
};

const showDescribSelectedDirection = (direction, nextObj, spaces = 0) => {
  const indent = spaces ? ' '.repeat(spaces) : '';
  console.log(color.black(`Ты пошел ${getRusForSelectedDir(direction)}`, 1));
  console.log(color.blue(nextObj.name, 'light'));
  console.log(color.white(`${indent}${nextObj.description}`));
};

const printLookAround = (LookRoom) => {
  console.log(color.black('Ты огляделся', 1));
  const entries = Object.entries(LookRoom.exits);
  const result = entries.map(([keyDir, valueNextRoom]) => {
    const nextLookRoom = map[valueNextRoom];
    if (nextLookRoom.darkRoom) {
      console.log(`${color.white(getRussianDirection(keyDir))}: темно...`);
      return keyDir;
    }
    console.log(`${color.white(getRussianDirection(keyDir))}: ${color.blue(valueNextRoom, 'light')}`);
    if (nextLookRoom.mobs.length !== 0) {
      printMobs(nextLookRoom, 2);
    }
    return keyDir;
  });
  return result;

  /*
  for (const [keyDir, valueNextRoom] of entries) {
    const nextLookRoom = map[valueNextRoom];
    if (nextLookRoom.darkRoom) {
      console.log(`${color.white(getRussianDirection(keyDir))}: темно...`);
      return;
    }
    console.log(`${color.white(getRussianDirection(keyDir))}: & ${color.blue(valueNextRoom)}`);
    if (nextLookRoom.mobs.length !== 0) {
      printMobs(nextLookRoom, 2);
    }
  }
  */
};

const navigation = (pressedKey) => {
  const direction = directions.reduce((acc, [key1, key2, dir]) => {
    if (key1 === pressedKey || key2 === pressedKey) return dir;
    return acc;
  }, undefined);
  const lastRoom = player.room;
  const lastObj = map[lastRoom];
  if (direction === 'lookAround') {
    printLookAround(lastObj);
    showHPAndRoomDirections(lastObj);
    return;
  }
  if (direction) {
    if (lastObj.exits[direction]) {
      const nextRoom = lastObj.exits[direction];
      player.room = nextRoom;
      const nextObj = map[nextRoom];
      showDescribSelectedDirection(direction, nextObj, 6);
      printMobs(nextObj);
      showHPAndRoomDirections(nextObj);
    } else {
      console.log(color.black('Ты не пожешь идти в этом направлении', 1));
    }
  }
};

export default navigation;
