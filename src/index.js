// import readlineSync from 'readline-sync';
import readline from 'node:readline';
import color from 'bash-color';

import map from './data/map.js';
import player from './data/player.js';
import mobs from './data/mobs.js';
import items from './data/items.js';

import navigation from './navigation.js';
import showMap from './help/show-map.js';
import status from './status.js';
import help from './help/common-help.js';
import commandParser from './command-parser.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});
let rawMode;
let inExit = false;
let gameover;
let pressedKey;

const intro = () => {
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
};

const outro = () => {
  console.log('game over');
};

const setMode = (mode) => {
  process.stdin.setRawMode(mode);
  rawMode = mode;
  if (mode) console.log(color.black('# включен режим навигации', true));
  else console.log(color.black('# включен режим ввода команд', true));
};

const commander = (command, arg) => {
  switch (command) {
    case 'map':
      return showMap(map, player);
    case 'help':
      return help(arg);
    case 'status':
      return status(player, items);
    default:
      return arg ? false : 0;
  }
};

const temp = async () => {
  /*
  let i = 0;
  const promise = new Promise((resolve) => {
    const timerId = setInterval(() => {
      console.log('now ', i);
      i += 1;
      if (i === 10) {
        clearInterval(timerId);
        resolve(true);
      }
    }, 1000);
  });
  await promise;
  */
  inExit = true;
  console.log('Ты действительно хочешь выйти (напиши "да" или "нет" полностью)?');
};

const doCommand = (line) => {
  if (inExit && line === 'да') return 'exit';
  if (inExit && line === 'нет') {
    console.log('Тогда продолжаем!');
    inExit = false;
    return false;
  }
  if (inExit) {
    console.log('напиши "да" или "нет"');
    return false;
  }
  const [command, arg] = commandParser(line);
  // if (!command) console.log(arg);
  if (!command) temp();
  else {
    console.log([command, arg]);
    commander(command, arg);
  }
  return false;
};

const playGame = async () => {
  process.stdin.setRawMode(true);
  rawMode = true;

  const promise = new Promise((resolve) => {
    process.stdin.on('keypress', (str, key) => {
      if (key.ctrl && key.name === 'c') process.exit();
      if (rawMode) {
        pressedKey = key.name || key.sequence;
        /* eslint no-unused-expressions: ["error", { "allowTernary": true }] */
        pressedKey !== 'return' ? navigation(pressedKey, map, player, mobs) : setMode(false);
      }
    });

    rl.on('line', (line) => {
      if (!rawMode && (line.length || inExit)) {
        gameover = doCommand(line);
        if (gameover) resolve(true);
      }
      if (!rawMode && !line.length && !inExit) setMode(true);
    });
  });
  await promise;
  rl.close();
  return gameover;
};

const game = async () => {
  intro();
  readline.emitKeypressEvents(process.stdin);
  await playGame();
  outro();
};

export default game;
