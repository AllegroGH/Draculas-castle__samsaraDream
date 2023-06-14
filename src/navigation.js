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
  ghost: 'Призрак летает вокруг костра.'
};

const printMobs = (room) => {
  const arrOfMobs = room.mobs;
  const entries = Object.entries(mobs);
  for (const [idMob, valueMob] of entries) {
    if (arrOfMobs.includes(idMob)) {
      console.log(color.red(valueMob));
    }
  }
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
  }
}


const getRoomDirections = (room) => {
  const roomDirections = Object.keys(room.exits);
  const rusDirect = roomDirections.reduce((acc, dir) => {
    switch (dir) {
      case 'north':
        return acc + 'С';
      case 'east':
        return acc + 'В';
      case 'south':
        return acc + 'Ю';
      case 'west':
        return acc + 'З';
      case 'up':
        return acc + 'Вверх';
      case 'down':
        return acc + 'Вниз';
    }
  }, '');
  return rusDirect;
}

const printLookAround = (LookRoom) => {
  console.log(color.green(`<${player.curHP}HP, выходы: ${getRoomDirections(nextObj)}>`))
  console.log(color.black('Ты огляделся'));
  const entries = Object.entries(LookRoom.exits);
  for (const [keyDir, valueNextRoom] of entries) {
    console.log(`${color.white(getRussianDirection(keyDir))}: & ${color.red(valueNextRoom)}`);
    const nextLookRoom = map[valueNextRoom];
    if (nextLookRoom.darkRoom) {
      console.log('В комнате темно');
    }
    if (nextLookRoom.mobs.length !== 0) {
      printMobs(nextLookRoom);
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
      console.log(color.green(`<${player.curHP}HP, выходы: ${getRoomDirections(nextObj)}>`))
      console.log(color.black(`Ты пошел на ${direction}`));
      console.log(color.blue(nextObj.name));
      console.log(color.white(`  ${nextObj.description}`));
    } else {
      console.log(color.black('Ты не пожешь идти в этом направлении'));
    };
  }
};

export default navigation;
