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
import { startBattle, bash, up } from './battle.js';
import inspect from './inspect.js';
import prayer from './prayer.js';

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
  console.log('start game');
};

const outro = () => {
  if (player.gameover === 'player lost') console.log('game over - you LOST');
  if (player.gameover === 'player won') console.log('game over - you WON!!!!!!!!');
};

const setNavigatinMode = (mode) => {
  process.stdin.setRawMode(mode);
  rawMode = mode;
  if (mode) console.log(color.black('# включен режим навигации', true));
  else console.log(color.black('# включен режим ввода команд', true));
};

const checkMobToAttack = (arg) => {
  if (!map[player.room].mobs.length) return false;
  const curMobs = map[player.room].mobs;
  const [target] = curMobs.filter(
    // prettier-ignore
    (curMob) => mobs[curMob].name
      .toLowerCase()
      .split(' ')
      .filter((el) => el.startsWith(arg)).length,
  );
  return target;
};

const attack = (arg) => {
  const target = checkMobToAttack(arg);
  if (!target) {
    console.log('Здесь таких нет. На кого ты хочешь напасть?');
    return;
  }
  if (mobs[target].killed) {
    console.log('Надругательство над телами умерших преследуется по закону (УК РФ Статья 244)');
    return;
  }
  player.inBattle = target;
  startBattle(player, mobs[target]);
};

const exit = () => {
  inExit = true;
  console.log('Ты действительно хочешь выйти (напиши "да" или "нет" полностью)?');
};

const commander = (command, arg) => {
  switch (command) {
    case 'map':
      showMap(map, player);
      setNavigatinMode(true);
      break;
    case 'help':
      help(arg);
      break;
    case 'status':
      status(player, items);
      setNavigatinMode(true);
      break;
    case 'attack':
      setNavigatinMode(true);
      attack(arg);
      break;
    case 'inspect':
      inspect(arg.toLowerCase(), map, player, mobs);
      break;
    case 'prayer':
      prayer(player);
      break;
    case 'exit':
      exit();
      break;
    default:
    // return arg ? false : 0;
  }
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
  if (!command) console.log(arg);
  else commander(command, arg);
  return false;
};

const keypressHandler = (key) => {
  if (key.ctrl && key.name === 'c') process.exit();
  if (rawMode) {
    pressedKey = key.name || key.sequence;
    /* eslint no-unused-expressions: ["error", { "allowTernary": true }] */
    if (pressedKey === '0' || pressedKey === 'insert') bash(player, mobs);
    if (pressedKey === '+') up(player);
    if (pressedKey !== 'return' && !player.lag && !player.bashed) {
      const agro = navigation(pressedKey, map, player, mobs);
      if (agro && !mobs[agro].killed) {
        player.inBattle = agro;
        startBattle(player, mobs[agro], true);
      }
    }
    if (pressedKey === 'return') setNavigatinMode(false);
  }
};

const playGame = async () => {
  process.stdin.setRawMode(true);
  rawMode = true;

  const promise = new Promise((resolve) => {
    process.stdin.on('keypress', (str, key) => {
      if (player.gameover === 'player won' || player.gameover === 'player lost') {
        resolve(true);
        return;
      }
      keypressHandler(key);
    });

    rl.on('line', (line) => {
      if (!rawMode && (line.length || inExit)) {
        gameover = doCommand(line);
        if (gameover) resolve(true);
      }
      if (!rawMode && !line.length && !inExit) setNavigatinMode(true);
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
