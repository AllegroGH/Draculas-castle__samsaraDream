/* eslint-disable no-param-reassign */
import color from 'bash-color';
import gameItems from './data/items.js';

const addParams = (player, gameItem) => {
  player.curHP += gameItem.maxHP || 0;
  player.maxHP += gameItem.maxHP || 0;
  player.minDamage += gameItem.minDamage || 0;
  player.maxDamage += gameItem.maxDamage || 0;
  player.dodge += gameItem.dodge || 0;
  player.block += gameItem.block || 0;
  player.bash += gameItem.bash || 0;
};

const getItems = (player, items) => {
  if (!items.length) return;
  items.map((item) => {
    const gameItem = gameItems[item];
    console.log();
    console.log(color.cyan(gameItem.ifTake, 'light'));
    addParams(player, gameItem);
    player.items.push(item);
    return item;
  });
};

export default getItems;
