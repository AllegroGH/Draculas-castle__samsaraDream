/* eslint-disable no-param-reassign */
import _ from 'lodash';
import color from 'bash-color';

// prettier-ignore
const getPlayerParams = (player) => [
  `${color.green('Очки здоровья:   ', 'light')} ${player.curHP}/${player.maxHP}`,
  `${color.green('Наносимый урон:  ', 'light')} ${player.minDamage}-${player.maxDamage}`,
  `${color.green('Уклонение:       ', 'light')} ${Math.floor(player.dodge * 100)}%`,
  `${color.green('Блок щитом:      ', 'light')} ${Math.floor(player.block * 100)}%`,
  `${color.green('Сбить противника:', 'light')} ${Math.floor(player.bash * 100)}%`,
].join('\n');

// prettier-ignore
const getPlayerEquip = (player, items) => _.sortBy(
  player.items.map((item) => [items[item].showPriority, items[item].where, items[item].name]),
  0,
)
  .map(([, where, what]) => `${where} ${color.cyan(what, 'light')}`)
  .join('\n');

const status = (player, items) => {
  console.log(color.yellow('Текущее состояние персонажа', 'light'));
  console.log(color.black('(характеристики)', 'light'));
  console.log(color.green(getPlayerParams(player)));
  console.log(color.black('(экипировка)', 'light'));
  console.log(getPlayerEquip(player, items));
};

export default status;
