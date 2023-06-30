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

const getDirection = (direct, action) => {
  switch (direct) {
    case 'north':
      return action === 'DescribSelectedDirection' ? 'на север' : 'на севере';
    case 'east':
      return action === 'DescribSelectedDirection' ? 'на восток' : 'на востоке';
    case 'south':
      return action === 'DescribSelectedDirection' ? 'на юг' : 'на юге';
    case 'west':
      return action === 'DescribSelectedDirection' ? 'на запад' : 'на западе';
    case 'up':
      return action === 'DescribSelectedDirection' ? 'наверх' : 'наверху';
    case 'down':
      return action === 'DescribSelectedDirection' ? 'вниз' : 'внизу';
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
  console.log(`${indent}<${color.green(`${player.curHP} HP`)}, выходы: ${color.yellow(rusDirect)}>`);
};

const showDescribSelectedDirection = (direction, nextObj, spaces = 0) => {
  const action = 'DescribSelectedDirection';
  const indent = spaces ? ' '.repeat(spaces) : '';
  console.log(color.black(`Ты пошел ${getDirection(direction, action)}`, 1));
  console.log(color.blue(nextObj.name, 'light'));
  console.log(color.white(`${indent}${nextObj.description}`));
};

const showDescribCurrentRoom = (currentRoom, spaces = 0) => {
  const indent = spaces ? ' '.repeat(spaces) : '';
  console.log(color.blue(currentRoom.name, 'light'));
  console.log(color.white(`${indent}${currentRoom.description}`));
};

const getLookAround = (LookRoom, map, mobs) => {
  const action = 'LookAround';
  console.log(color.black('Ты огляделся', 1));
  const entries = Object.entries(LookRoom.exits);
  const result = entries.map(([keyDir, valueNextRoom]) => {
    const nextLookRoom = map[valueNextRoom];
    const locatedInsideMob = nextLookRoom.mobs[0];
    if (nextLookRoom.darkRoom) {
      console.log(`${color.white(getDirection(keyDir, action))}: темно...`);
      return keyDir;
    }
    console.log(`${color.white(getDirection(keyDir, action))}: ${color.blue(nextLookRoom.name, 'light')}`);
    if (nextLookRoom.mobs.length !== 0 && mobs[locatedInsideMob].killed === false) {
      printMobs(nextLookRoom, mobs, 2);
    }
    return keyDir;
  });
  return result;
};

const getRandomDirection = (numberOfDirections) => Math.floor(Math.random() * numberOfDirections);

const getAggressiveMob = (room, mobs) => {
  const nextMobInRoom = room.mobs[0];
  const objectOfNextMob = mobs[nextMobInRoom];
  if (objectOfNextMob.agro === true) {
    return nextMobInRoom;
  }
  return false;
};

const navigation = (pressedKey, map, player, mobs) => {
  const direction = directions.reduce((acc, [key1, key2, dir]) => {
    if (key1 === pressedKey || key2 === pressedKey) return dir;
    return acc;
  }, undefined);
  const lastRoom = player.room;
  const lastObj = map[lastRoom];
  if (pressedKey === '/') {
    showDescribCurrentRoom(lastObj, 6);
    printMobs(lastObj, mobs);
    showHPAndRoomDirections(player, lastObj);
  }
  if (pressedKey === '-' && player.inBattle) {
    player.inBattle = false;
    const directionsOfEscape = Object.keys(lastObj.exits);
    const id = getRandomDirection(directionsOfEscape.length);
    const directionOfEscape = directionsOfEscape[id];
    const nextRoom = lastObj.exits[directionOfEscape];
    player.room = nextRoom;
    const nextObj = map[nextRoom];
    nextObj.visited = true;
    console.log(color.black('Ты убежал...', 1));
    printMobs(nextObj, mobs);
    showHPAndRoomDirections(player, nextObj);
    if (nextObj.mobs[0]) {
      return getAggressiveMob(nextObj, mobs);
    }
    return false;
  }
  if (pressedKey === '-' && !player.inBattle) {
    console.log(color.white('Зачем бежать? Ты же ни с кем не сражаешься.'));
    return false;
  }
  if (direction === 'lookAround') {
    getLookAround(lastObj, map, mobs);
    showHPAndRoomDirections(player, lastObj);
    return false;
  }
  if (direction && player.inBattle) {
    console.log(color.white('Ты сражаешься и не можешь сейчас никуда идти!'));
    return false;
  }
  if (direction && !player.inBattle) {
    if (lastObj.exits[direction]) {
      const nextRoom = lastObj.exits[direction];
      player.room = nextRoom;
      const nextObj = map[nextRoom];
      nextObj.visited = true;
      showDescribSelectedDirection(direction, nextObj, 6);
      printMobs(nextObj, mobs);
      showHPAndRoomDirections(player, nextObj);
      if (nextObj.mobs[0]) {
        return getAggressiveMob(nextObj, mobs);
      }
    } else {
      console.log(color.black('Ты не можешь идти в этом направлении', 1));
    }
  }
  return false;
};

export default navigation;
