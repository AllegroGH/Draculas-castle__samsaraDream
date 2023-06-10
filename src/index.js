import color from 'bash-color';
import map from './data/map.js';
import player from './data/player.js';

const game = () => {
  console.log(color.yellow('Объект карты', 1));
  console.log(map);
  console.log();
  console.log(color.yellow('Объект игрока', 1));
  console.log(player);
  console.log();
  console.log(color.yellow('Примеры вывода цветного текста', 1));
  console.log(color.black('grey example == black highlighted', true));
  console.log(color.green('green example'));
  console.log(color.green('green example (highlighted)', true));
  console.log(`${color.blue('blue')} & ${color.red('red')}`);

  // просто пример использования объектов
  console.log(map[player.room]);
};

export default game;
