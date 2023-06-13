import color from 'bash-color';
import map from './data/map.js';
import player from './data/player.js';
// раскомментируй импорты при работе (закомментил, чтобы линтер не ругался)

const directions = [
  ['8', 'up', 'north'],
  ['6', 'right', 'east'],
  ['2', 'down', 'south'],
  ['4', 'left', 'west'],
  ['9', 'pageup', 'up'],
  ['3', 'pagedown', 'down'],
  ['5', 'clear', 'lookAround'],
];

getRussianDirection = (direct) => {
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
  }
}

const getRoomDirections = (room) => {
  const roomDirections = Object.keys(room.exits);
  return roomDirections.toString();
};

const printLookAround = (LookRoom) => {
  const entries = Object.entries(LookRoom.exits);
  for (const [keyDir, valueNextRoom] of entries) {
    console.log(`${getRussianDirection(keyDir)}: ${valueNextRoom}`);
    const nextLookRoom = map[valueNextRoom];
    if (nextLookRoom.darkRoom) {
      console.log('В комнате темно');
    }
    if (nextLookRoom.mobs.length !== 0) {
      console.log(`Здесь находится: ${nextLookRoom.mobs.toString()}`)
    } else {
      console.log(`Здесь никого нет`);
    }
  }
}

const navigation = (pressedKey) => {
  const direction = directions.reduce((acc, [key1, key2, dir]) => {
    if (key1 === pressedKey || key2 === pressedKey) {
      acc = dir;
    }
    return acc;
  }, undefined);
  const lastRoom = player.room;
  const lastObj = map[lastRoom];
  if (direction === 'lookAround') {
    return printLookAround(lastObj);
  }
  if (direction) {
    if (lastObj.exits[direction]) {
      const nextRoom = lastObj.exits[direction];
      player.room = nextRoom;
      const nextObj = map[nextRoom]
      console.log(`Ты пошел на ${direction}`);
      console.log(nextObj.name);
      console.log(nextObj.description);
      console.log(`<${player.curHP}HP, выходы: ${getRoomDirections(nextObj)}>`)
    } else {
      console.log(`Ты не пожешь идти в этом направлении`);
    };
  }
};

export default navigation;
