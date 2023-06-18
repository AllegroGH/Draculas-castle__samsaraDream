/* eslint-disable no-param-reassign */
import color from 'bash-color';

const getRandomDamage = (min, max) => Math.round(Math.random() * (max - min)) + min;

const getDamage = (who, whom) => {
  if (!whom.bashed) {
    if (Math.random() <= whom.dodge) return 'dodged';
    if (Math.random() <= whom.block) return 'blocked';
  }
  const damage = getRandomDamage(who.minDamage, who.maxDamage) * (whom.bashed ? 2 : 1);
  whom.curHP -= damage;
  return damage;
};

const getDamageStrength = (damage) => {
  if (damage <= 10) return '';
  if (damage > 10 && damage <= 20) return ' сильно';
  if (damage > 20 && damage <= 40) return ' очень сильно';
  if (damage > 40 && damage <= 60) return color.red(' БОЛЬНО');
  if (damage > 60 && damage <= 80) return color.red(' ОЧЕНЬ БОЛЬНО');
  if (damage > 80 && damage <= 100) return color.red(' НЕВЫНОСИМО БОЛЬНО');
  return color.red(' **************** БОЛЬНО', true);
};

const getPlayerOutputString = (player, mob, damage) => {
  // prettier-ignore
  if (damage === 'dodged') return `(${player.curHP > 0 ? player.curHP : 0} HP) ${color.green('Ты')} попытался ударить ${color.purple(mob.nameV)}, но ${mob.heWord} ${color.yellow(mob.dodgeWord)}.`;
  // prettier-ignore
  if (damage === 'blocked') return `(${player.curHP > 0 ? player.curHP : 0} HP) ${color.green('Ты')} попытался ударить ${color.purple(mob.nameV)}, но ${mob.heWord} ${color.blue(mob.blockWord, true)} удар.`;
  return `(${player.curHP > 0 ? player.curHP : 0} HP) ${color.green('Ты')}${getDamageStrength(damage)} ударил ${color.purple(mob.nameV)}.`;
};

const getMobOutputString = (player, mob, damage) => {
  // prettier-ignore
  if (damage === 'dodged') return `(${mob.curHP > 0 ? mob.curHP : 0} HP) ${color.purple(mob.name)} ${mob.tryWord} ${color.green('тебя')}, но ты ${color.yellow('уклонился')}.`;
  // prettier-ignore
  if (damage === 'blocked') return `(${mob.curHP > 0 ? mob.curHP : 0} HP) ${color.purple(mob.name)} ${mob.tryWord} ${color.green('тебя')}, но ты ${color.blue('блокировал', true)} удар.`;
  return `(${mob.curHP > 0 ? mob.curHP : 0} HP) ${color.purple(mob.name)}${getDamageStrength(damage)} ${mob.hitWord} ${color.green('тебя')}.`;
};

const round = (player, mob, agro, timerId = false) => {
  if (!player.inBattle) {
    clearInterval(timerId);
    return true;
  }
  console.log();
  if (mob.lag > 0) {
    mob.lag -= 1;
    if (!mob.lag) {
      mob.bashed = false;
      console.log(color.purple(`${mob.name} ${mob.gotupWord}`, true));
    }
  }
  const playerDamage = getDamage(player, mob);
  const mobDamage = getDamage(mob, player);

  if (agro) {
    console.log(getMobOutputString(player, mob, mobDamage));
    console.log(getPlayerOutputString(player, mob, playerDamage));
  } else {
    console.log(getPlayerOutputString(player, mob, playerDamage));
    console.log(getMobOutputString(player, mob, mobDamage));
  }

  if (player.curHP < 1 || mob.curHP < 1) {
    if (timerId) clearInterval(timerId);
    return true;
  }
  if (player.bashed) console.log(color.yellow('Тебе лучше встать на ноги!', true));
  if (player.lag > 0) player.lag -= 1;
  return false;
};

const startBattle = (player, mob, agro) => {
  if (agro) console.log('agro!');

  const timerId = setInterval(() => round(player, mob, agro, timerId), 2000);
  /*
  let i = 0;
  const timerId = setInterval(() => {
    console.log('now ', i);
    i += 1;
    if (i === 10) {
      clearInterval(timerId);
    }
  }, 500);
  */
};

export default startBattle;
