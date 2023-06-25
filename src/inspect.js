/* eslint-disable no-param-reassign */
import color from 'bash-color';
import getItems from './get-items.js';

const roomInspect = (room) => {
  console.log(color.blue(room.name, 'light'));
  console.log(`    ${room.longDescription}`);
  console.log();
};

const hiddenItemsInspect = (curItem, curDescription, player) => {
  console.log(color.yellow(`      ${curDescription}`));
  getItems(player, [curItem]);
};

const checkMob = (inspected, map, player, mobs) => {
  if (!map[player.room].mobs.length) return false;
  const curMobs = map[player.room].mobs;
  const [target] = curMobs.filter(
    // prettier-ignore
    (curMob) => mobs[curMob].name
      .toLowerCase()
      .split(' ')
      .filter((el) => el.startsWith(inspected)).length,
  );
  return target;
};

const inspect = (inspected, map, player, mobs) => {
  if ('комната'.startsWith(inspected) || 'комнату'.startsWith(inspected)) {
    roomInspect(map[player.room]);
    return;
  }

  const [curHiddenItem, curItem, curDescription] = map[player.room].hiddenItems;
  if (curHiddenItem && curHiddenItem.includes(inspected)) {
    hiddenItemsInspect(curItem, curDescription, player);
    map[player.room].hiddenItems = [];
    return;
  }

  const mob = checkMob(inspected, map, player, mobs);
  if (mob && !mobs[mob].killed) {
    console.log(color.red(`    ${mobs[mob].description}`, 'light'));
    return;
  }

  console.log('Что осмотреть?...');
};

export { inspect, checkMob };
