import readlineSync from 'readline-sync';
import readline from 'node:readline';
import color from 'bash-color';

import map from './data/map.js';
import player from './data/player.js';

import navigation from './navigation.js';

// const doCommand = () => {
// const command = readlineSync.question('Which program starts do you want? ');
// console.log(command);
// };

const getKeyPress = async () => {
  let pressedKey;
  readline.emitKeypressEvents(process.stdin);
  if (process.stdin.isTTY) process.stdin.setRawMode(true);

  const promise = new Promise((resolve) => {
    process.stdin.on('keypress', (str, key) => {
      if (key.ctrl && key.name === 'c') {
        process.exit();
      }
      if (key.name) pressedKey = key.name;
      else pressedKey = key.sequence;
      navigation(pressedKey);
      // if (pressedKey === 'return') doCommand();
      if (pressedKey === 'c') resolve(true);
    });
  });
  await promise;

  process.stdin.setRawMode(false);
  return pressedKey;
};

const game = async () => {
  console.log(color.yellow('Объект карты', 1));
  console.log(map);
  console.log();
  console.log(color.yellow('Объект игрока', 1));
  console.log(player);
  console.log();
  console.log(color.yellow('Примеры вывода цветного текста', 1));
  console.log(color.black('grey example == black highlighted', true));
  console.log(color.green('green example'));
  console.log(color.green('green example (highlighted)', true));
  console.log(`${color.blue('blue')} & ${color.red('red')}`);
  console.log();
  console.log(color.yellow('Просто пример использования объектов', 1));
  console.log(map[player.room]);

  await getKeyPress();
  readlineSync.keyIn('press any key...');
};

export default game;
