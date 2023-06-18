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
import startBattle from './battle.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});
let rawMode;
let inExit = false;
// let runAway = false;
let gameover;
let pressedKey;

const intro = () => {
  console.log('start game');
};

const outro = () => {
  console.log('game over');
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

const battle = (target, agro = false) => {
  // if (agro) console.log('in battle with agro');
  console.log('in battle');
  startBattle(player, mobs[target], agro);
};

const attack = (arg) => {
  // check mob
  const target = checkMobToAttack(arg);
  if (!target) {
    console.log('Здесь таких нет. На кого ты хочешь напасть?');
    return;
  }
  if (mobs[target].killed) {
    console.log('Надругательство над телами умерших преследуется по закону (УК РФ Статья 244)');
    return;
  }
  // setNavigatinMode(true);
  player.inBattle = true;
  battle(target, 1);
  // console.log(mobs[curMobs[0]].name);
  // battle mob
};

const commander = (command, arg) => {
  switch (command) {
    case 'map':
      showMap(map, player);
      break;
    case 'help':
      help(arg);
      break;
    case 'status':
      status(player, items);
      break;
    case 'attack':
      attack(arg);
      break;
    default:
    // return arg ? false : 0;
  }
  setNavigatinMode(true);
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

  /*
  let i = 0;
  const timerId = setInterval(() => {
    console.log('now ', i);
    i += 1;
    if (i === 20) {
      clearInterval(timerId);
    }
  }, 1000);
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
    // console.log([command, arg]);
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
        if (pressedKey === '0' || pressedKey === 'insert') console.log('0/ins');
        if (pressedKey === '+') console.log('+');
        pressedKey !== 'return' ? navigation(pressedKey, map, player, mobs) : setNavigatinMode(false);
      }
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
