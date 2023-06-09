/* eslint-disable no-param-reassign */
import color from 'bash-color';
import getItems from './get-items.js';

// secondary battle functions
const getRandomDamage = (min, max) => Math.round(Math.random() * (max - min)) + min;

const getCorrectDamage = (who, whom) => {
  const damage = getRandomDamage(who.minDamage, who.maxDamage);
  return Math.round((damage * (whom.bashed ? 1.5 : 1)) / (who.bashed ? 1.5 : 1));
};

const getDamage = (who, whom) => {
  if (!whom.bashed && Math.random() <= whom.dodge) return 'dodged';
  if (!whom.bashed && Math.random() <= whom.block) return 'blocked';
  const damage = getCorrectDamage(who, whom);
  whom.curHP -= damage;
  return damage;
};

const getDamageStrength = (damage) => {
  let result;
  switch (true) {
    case damage <= 10:
      result = '';
      break;
    case damage > 10 && damage <= 20:
      result = ' сильно';
      break;
    case damage > 20 && damage <= 40:
      result = ' очень сильно';
      break;
    case damage > 40 && damage <= 60:
      result = color.purple(' БОЛЬНО');
      break;
    case damage > 60 && damage <= 80:
      result = color.purple(' ОЧЕНЬ БОЛЬНО');
      break;
    case damage > 80 && damage <= 100:
      result = color.purple(' НЕВЫНОСИМО БОЛЬНО');
      break;
    default:
      result = color.purple(' ************* КАК БОЛЬНО', true);
  }
  return result;
};

const getPlayerOutputString = (player, mob, damage) => {
  const playerHP = `(${player.curHP > 0 ? player.curHP : 0} HP)`;
  const playerTryHit = `${color.green('Ты')} попытался ударить ${color.red(mob.nameV)}, но ${mob.heWord}`;
  const playerHit = `${color.green('Ты')}${getDamageStrength(damage)} ударил ${color.red(mob.nameV)}`;
  const mobDodged = color.yellow(mob.dodgeWord);
  const mobBlocked = color.blue(mob.blockWord, true);

  if (damage === 'dodged') return `${playerHP} ${playerTryHit} ${mobDodged}`;
  if (damage === 'blocked') return `${playerHP} ${playerTryHit} ${mobBlocked} удар`;
  return `${playerHP} ${playerHit}`;
};

const getMobOutputString = (player, mob, damage) => {
  const mobHP = `(${mob.curHP > 0 ? mob.curHP : 0} HP)`;
  const mobTryHit = `${color.red(mob.name)} ${mob.tryWord} ${color.green('тебя')}, но ты`;
  const mobHit = `${color.red(mob.name)}${getDamageStrength(damage)} ${mob.hitWord} ${color.green('тебя')}`;
  const playerDodged = color.yellow('уклонился');
  const playerBlocked = color.blue('блокировал', true);

  if (damage === 'dodged') return `${mobHP} ${mobTryHit} ${playerDodged}`;
  if (damage === 'blocked') return `${mobHP} ${mobTryHit} ${playerBlocked} удар`;
  return `${mobHP} ${mobHit}`;
};

// primary battle functions
const doBeforeRound = (player, mob) => {
  console.log();
  if (mob.lag === 0 && mob.bashed) {
    mob.bashed = false;
    console.log(color.red(`${mob.name} ${mob.gotupWord}`, true));
  }
  if (mob.lag > -1) mob.lag -= 1;
  if (mob.isDracula && !mob.bashed && Math.random() <= 0.5) {
    mob.curHP += 100;
    player.curHP -= 100;
    console.log(color.red('Дракула вонзил в тебя свои клыки, истощая твою жизненную силу!', 'light'));
  }
};

const countDamageAndPrint = (player, mob, agro) => {
  const playerDamage = getDamage(player, mob);
  const mobDamage = getDamage(mob, player);

  if (agro) {
    console.log(getMobOutputString(player, mob, mobDamage));
    console.log(getPlayerOutputString(player, mob, playerDamage));
  } else {
    console.log(getPlayerOutputString(player, mob, playerDamage));
    console.log(getMobOutputString(player, mob, mobDamage));
  }
};

const doPlayerLost = (player) => {
  player.gameover = 'player lost';
  console.log();
  console.log('Ты проиграл... (нажми любую клавишу)');
  return 'player lost';
};

const doMobLost = (mob, player) => {
  mob.killed = true;
  player.inBattle = false;
  player.bashed = false;
  player.lag = 0;
  getItems(player, mob.items);
  if (mob.isDracula) {
    console.log();
    console.log('Ты победил! (нажми любую клавишу)');
    player.gameover = 'player won';
  } else console.log(color.blue('Ты победил в этом бою! Пора двигаться дальше.'));
  return 'player won';
};

const checkEndOfBattle = (player, mob, timerId) => {
  if ((player.curHP < 1 || mob.curHP < 1) && timerId) clearInterval(timerId);
  if (player.curHP < 1) return doPlayerLost(player);
  if (mob.curHP < 1) return doMobLost(mob, player);
  return false;
};

const doAfterRound = (player) => {
  if (player.bashed) console.log(color.yellow('Тебе лучше встать на ноги!', 'light'));
  if (player.lag > 0) player.lag -= 1;
};

const round = (player, mob, agro, timerId = false) => {
  if (!player.inBattle || player.curHP < 1 || mob.curHP < 1) {
    clearInterval(timerId);
    return 'runAway or oneShot';
  }

  doBeforeRound(player, mob);
  countDamageAndPrint(player, mob, agro);

  const endOfBattle = checkEndOfBattle(player, mob, timerId);
  if (endOfBattle) return endOfBattle;

  doAfterRound(player, mob);
  return 'the battle continues';
};

const startBattle = (player, mob, agro) => {
  mob.curHP = mob.maxHP;
  round(player, mob, agro);
  const timerId = setInterval(() => round(player, mob, agro, timerId), 2000);
};

const doBash = (player, mob) => {
  if (Math.random() <= (mob.bashed ? player.bash / 2 : player.bash)) {
    console.log(color.green(`Своим мощным ударом ты повалил ${mob.nameV} на пол!`, true));
    mob.bashed = true;
    mob.lag = 3;
    player.lag = 2;
  } else {
    console.log(color.red(`Ты попытался повалить ${mob.nameV}, но в результате упал сам!`, true));
    player.bashed = true;
    player.lag = 3;
  }
};

const bash = (player, mobs) => {
  if (player.lag) return;
  if (!player.inBattle) {
    console.log('Ты же ни с кем не сражаешься, но тренировка не помешает – это точно)');
    return;
  }
  if (player.bashed) {
    console.log(color.yellow('Тебе лучше встать на ноги!', true));
    return;
  }
  const mob = mobs[player.inBattle];

  doBash(player, mob);
};

const up = (player) => {
  if (player.lag) return;
  if (!player.bashed) {
    console.log('Ты и так стоишь как вкопанный!');
    return;
  }
  player.bashed = false;
  console.log(color.green('Ты встал на ноги', true));
};

export { startBattle, bash, up };
