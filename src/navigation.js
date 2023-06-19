/* eslint-disable no-param-reassign */
import color from 'bash-color';

const directions = [
  ['8', 'up', 'north'],
  ['6', 'right', 'east'],
  ['2', 'down', 'south'],
  ['4', 'left', 'west'],
  ['9', 'pageup', 'up'],
  ['3', 'pagedown', 'down'],
  ['5', 'clear', 'lookAround'],
];

/*
const mobs = {
  draculas: 'Граф Дракула стоит здесь.',
  ghost: 'Призрак летает вокруг костра.',
};
*/

const printMobs = (room, mobs, spaces = 0) => {
  const indent = spaces ? ' '.repeat(spaces) : '';
  const arrOfMobs = room.mobs;
  const result = arrOfMobs
    .map((el) => {
      if (!mobs[el].killed) return color.red(mobs[el].ifAlive);
      return color.yellow(mobs[el].ifDead);
    })
    .join('\r');
  console.log(`${indent}${result}`);
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

const showHPAndRoomDirections = (player, room, spaces = 0) => {
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

const printLookAround = (LookRoom, map, mobs) => {
  console.log(color.black('Ты огляделся', 1));
  const entries = Object.entries(LookRoom.exits);
  const result = entries.map(([keyDir, valueNextRoom]) => {
    const nextLookRoom = map[valueNextRoom];
    const locatedInsideMob = nextLookRoom.mobs[0];
    if (nextLookRoom.darkRoom) {
      console.log(`${color.white(getRussianDirection(keyDir))}: темно...`);
      return keyDir;
    }
    console.log(`${color.white(getRussianDirection(keyDir))}: ${color.blue(valueNextRoom, 'light')}`);
    if (nextLookRoom.mobs.length !== 0 && mobs[locatedInsideMob].killed === false) {
      printMobs(nextLookRoom, mobs, 2);
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

const getRandomDirection = (numberOfDirections) => Math.floor(Math.random() * numberOfDirections);

const navigation = (pressedKey, map, player, mobs) => {
  const direction = directions.reduce((acc, [key1, key2, dir]) => {
    if (key1 === pressedKey || key2 === pressedKey) return dir;
    return acc;
  }, undefined);
  const lastRoom = player.room;
  const lastObj = map[lastRoom];
  lastObj.visited = true;
  if (pressedKey === '-' && player.inBattle === true) {
    player.inBattle = false;
    const directionsOfEscape = Object.keys(lastObj.exits);
    const id = getRandomDirection(directionsOfEscape.length);
    const directionOfEscape = directionsOfEscape[id];
    const nextRoom = lastObj.exits[directionOfEscape];
    player.room = nextRoom;
    const nextObj = map[nextRoom];
    showDescribSelectedDirection(directionOfEscape, nextObj, 6);
    printMobs(nextObj, mobs);
    showHPAndRoomDirections(player, nextObj);
    if (nextObj.mobs[0]) {
      const nextMobInRoom = nextObj.mobs[0];
      const objectOfNextMob = mobs[nextMobInRoom];
      // console.log(`test: ${objectOfNextMob.agro}`);
      if (objectOfNextMob.agro === true) {
        // console.log(nextMobInRoom);
        return nextMobInRoom;
      }
    }
    return false;
  }
  if (pressedKey === '-' && player.inBattle === false) {
    console.log(color.white('Зачем бежать? Ты же ни с кем не сражаешься.'));
    return false;
  }
  if (direction === 'lookAround') {
    printLookAround(lastObj, map, mobs);
    showHPAndRoomDirections(player, lastObj);
    return false;
  }
  if (direction && player.inBattle === true) {
    console.log(color.white('Ты сражаешься и не можешь сечас никуда идти!'));
    return false;
  }
  if (direction && player.inBattle === false) {
    if (lastObj.exits[direction]) {
      const nextRoom = lastObj.exits[direction];
      player.room = nextRoom;
      const nextObj = map[nextRoom];
      showDescribSelectedDirection(direction, nextObj, 6);
      printMobs(nextObj, mobs);
      showHPAndRoomDirections(player, nextObj);
      if (nextObj.mobs[0]) {
        const nextMobInRoom = nextObj.mobs[0];
        const objectOfNextMob = mobs[nextMobInRoom];
        // onsole.log(`test: ${objectOfNextMob.agro}`);
        if (objectOfNextMob.agro === true) {
          // console.log(nextMobInRoom);
          return nextMobInRoom;
        }
      }
    } else {
      console.log(color.black('Ты не пожешь идти в этом направлении', 1));
    }
  }
  return false;
};

export default navigation;
