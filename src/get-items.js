/* eslint-disable no-param-reassign */
import color from 'bash-color';
import gameItems from './data/items.js';

const getItems = (player, items) => {
  if (!items.length) return;
  const result = items.map((item) => {
    const gameItem = gameItems[item];
    console.log();
    console.log(color.green(gameItem.ifTake, 'light'));
    if (gameItem.maxHP) {
      player.curHP += gameItem.maxHP;
      player.maxHP += gameItem.maxHP;
    }
    if (gameItem.minDamage) player.minDamage += gameItem.minDamage;
    if (gameItem.maxDamage) player.maxDamage += gameItem.maxDamage;
    if (gameItem.dodge) player.dodge = Math.round((player.dodge + gameItem.dodge) * 100) / 100;
    if (gameItem.block) player.block = Math.round((player.block + gameItem.block) * 100) / 100;
    if (gameItem.bash) player.bash = Math.round((player.bash + gameItem.bash) * 100) / 100;

    player.items.push(item);
    return item;
  });
  console.log(result);
  console.log(player);
};

export default getItems;
