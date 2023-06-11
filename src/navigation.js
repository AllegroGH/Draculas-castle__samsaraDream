// import color from 'bash-color';
// import map from './data/map.js';
// import player from './data/player.js';
// раскомментируй импорты при работе (закомментил, чтобы линтер не ругался)

const directions = [
  ['8', 'up', 'north'],
  ['6', 'right', 'east'],
  ['2', 'down', 'south'],
  ['4', 'left', 'west'],
  ['9', 'pageup', 'up'],
  ['3', 'pagedown', 'down'],
];
const navigation = (pressedKey) => {
  const direction = directions.reduce((acc, [key1, key2, dir]) => {
    if (key1 === pressedKey || key2 === pressedKey) {
      acc = dir;
    }
    return acc;
  }, undefined);
  if (direction) {
    console.log(direction);
    const lastRoom = player.room;
    const lastObj = map[lastRoom];
    if (lastObj.exits[direction]) {
      const nextRoom = lastObj.exits[direction];
      player.room = nextRoom;
      const nextObj = map[nextRoom]
      console.log(`Вы перешли в ${nextObj.description}`);
    } else {
      console.log(`В направлении ${direction} нет двери`);
    };
  } else {
    console.log('Данная кнопка не управляет воином');
  }
};

export default navigation;
