/* eslint-disable no-param-reassign */
import color from 'bash-color';
import gameItems from './data/items.js';

const accurateSum = (arg1, arg2) => Math.round((arg1 + arg2) * 100) / 100;

const addParams = (player, gameItem) => {
  if (gameItem.maxHP) {
    player.curHP += gameItem.maxHP;
    player.maxHP += gameItem.maxHP;
  }
  if (gameItem.minDamage) player.minDamage += gameItem.minDamage;
  if (gameItem.maxDamage) player.maxDamage += gameItem.maxDamage;
  if (gameItem.dodge) player.dodge = accurateSum(player.dodge, gameItem.dodge);
  if (gameItem.block) player.block = accurateSum(player.block, gameItem.block);
  if (gameItem.bash) player.bash = accurateSum(player.bash, gameItem.bash);
};

const getItems = (player, items) => {
  if (!items.length) return;
  items.map((item) => {
    const gameItem = gameItems[item];
    console.log();
    console.log(color.green(gameItem.ifTake, 'light'));
    addParams(player, gameItem);
    player.items.push(item);
    return item;
  });
};

export default getItems;
