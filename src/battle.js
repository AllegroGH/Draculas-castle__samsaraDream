/* eslint-disable no-param-reassign */
import color from 'bash-color';
import getItems from './get-items.js';

// secondary battle functions
const getRandomDamage = (min, max) => Math.round(Math.random() * (max - min)) + min;

const getDamage = (who, whom) => {
  if (!whom.bashed) {
    if (Math.random() <= whom.dodge) return 'dodged';
    if (Math.random() <= whom.block) return 'blocked';
  }
  const damage = getRandomDamage(who.minDamage, who.maxDamage);
  const correctedDamage = Math.round((damage * (whom.bashed ? 1.5 : 1)) / (who.bashed ? 1.5 : 1));
  whom.curHP -= correctedDamage;
  return correctedDamage;
};

const getDamageStrength = (damage) => {
  if (damage <= 10) return '';
  if (damage > 10 && damage <= 20) return ' сильно';
  if (damage > 20 && damage <= 40) return ' очень сильно';
  if (damage > 40 && damage <= 60) return color.purple(' БОЛЬНО');
  if (damage > 60 && damage <= 80) return color.purple(' ОЧЕНЬ БОЛЬНО');
  if (damage > 80 && damage <= 100) return color.purple(' НЕВЫНОСИМО БОЛЬНО');
  return color.purple(' ************* КАК БОЛЬНО', true);
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
const doBeforeRound = (mob) => {
  console.log();
  if (mob.lag === 0 && mob.bashed) {
    mob.bashed = false;
    console.log(color.red(`${mob.name} ${mob.gotupWord}`, true));
  }
  if (mob.lag > -1) mob.lag -= 1;
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

const doAfterRound = (player) => {
  if (player.bashed) console.log(color.yellow('Тебе лучше встать на ноги!', 'light'));
  if (player.lag > 0) player.lag -= 1;
};

const round = (player, mob, agro, timerId = false) => {
  if (!player.inBattle || player.curHP < 1 || mob.curHP < 1) {
    clearInterval(timerId);
    return 'runAway or oneShot';
  }

  doBeforeRound(mob);
  countDamageAndPrint(player, mob, agro);

  if ((player.curHP < 1 || mob.curHP < 1) && timerId) clearInterval(timerId);
  if (player.curHP < 1) {
    player.gameover = 'player lost';
    console.log('сдох ты.... press any key');
    return 'player lost';
  }
  if (mob.curHP < 1) {
    mob.killed = true;
    player.inBattle = false;
    getItems(player, mob.items);
    return 'player won';
  }

  doAfterRound(player);
  return 'the battle continues';
};

const startBattle = (player, mob, agro) => {
  player.curHP = 500;
  // mob.curHP = 500;
  // player.maxDamage = 100;
  // player.dodge = 0;
  // player.block = 0;
  player.bash = 0.8;
  // mob.dodge = 0.5;
  // mob.block = 0.5;
  // mob.lag = 3;
  // mob.bashed = 1;

  round(player, mob, agro);
  const timerId = setInterval(() => {
    const roundResult = round(player, mob, agro, timerId);
    if (roundResult !== 'the battle continues') console.log('battle ended...');
    if (roundResult === 'player won') console.log('you won this battle...');
  }, 2000);
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

const up = (player) => {
  if (player.lag || !player.bashed) return;
  player.bashed = false;
  console.log(color.green('Ты встал на ноги', true));
};

export { startBattle, bash, up };
