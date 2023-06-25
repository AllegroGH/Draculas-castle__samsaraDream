/* eslint-disable no-param-reassign */
import color from 'bash-color';

const prayer = (player) => {
  if (player.inBattle) return;
  if (Math.random() <= 0.35) {
    console.log(color.cyan('Ты вознес руки к небесам и Господь услышал тебя! (твое здоровье восстановлено)', 1));
    player.curHP = player.maxHP;
  } else console.log(color.black('Ты вознес руки к небесам, но Господь не услышал твою молитву...', 'light'));
};

export default prayer;
