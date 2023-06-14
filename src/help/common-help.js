import color from 'bash-color';

const help = (arg) => {
  if (arg) console.log('command help!!!!');

  const navDescription = [
    '',
    color.black('  Передвижение персонажа:', true),
    `    ${color.blue('8 ( ▲ )', true)} – пойти на север,`,
    `    ${color.blue('6 ( ► )', true)} – пойти на восток,`,
    `    ${color.blue('2 ( ▼ )', true)} – пойти на юг,`,
    `    ${color.blue('4 ( ◄ )', true)} – пойти на запад,`,
    `    ${color.blue('9 ( PgUp )', true)} – пойти вверх,`,
    `    ${color.blue('3 ( PgDn )', true)} – пойти вниз.`,
    '',
    color.black('  Оглядеться:', true),
    `    ${color.green('5 ( clear )', true)} – оглядеться (отображает информацию о близлежащей территории)`,
    '',
    color.black('  Убежать:', true),
    `    ${color.yellow('–   ')} убежать из боя`,
    '      (используй команду "справка убежать", чтобы получить больше сведений)',
    '',
    color.black('  Режим ввода:', true),
    `    ${color.red('Enter', true)} – изменить режим ввода (или ввести команду):`,
    '      в режиме навигации нажатие кнопки переводит в режим ввода команд,',
    '      в режиме ввода команд выполняется набранная команда или переход в режим навигации (если введена пустая команда).',
  ];

  console.log();
  console.log(color.yellow('Общая информация'));
  console.log('  Для персонажа доступны два режима взаимодействия с игрой: режим навигации и режим ввода команд.');
  console.log('  В режиме навигации персонаж выполняет в основном обычные действия перемещения по карте.');
  console.log('  В режиме ввода команд персонаж может детально осмотреть какой-то предмет или существо, вывести справку или, например, выйти из игры.');
  console.log();
  console.log(color.yellow('Режим навигации', true));
  console.log('  Для навигации используется цифровая панель (NumPad):');

  console.log(`  ┌──────┐┌──────┐┌──────┐┌──────┐${navDescription[0]}`);
  console.log(`  │ Num  ││ /    ││ *    ││ ${color.yellow('–')}    │${navDescription[1]}`);
  console.log(`  │ Lock ││      ││      ││      │${navDescription[2]}`);
  console.log(`  └──────┘└──────┘└──────┘└──────┘${navDescription[3]}`);
  console.log(`  ┌──────┐┌──────┐┌──────┐┌──────┐${navDescription[4]}`);
  console.log(`  │ 7    ││ ${color.blue('8', true)}    ││ ${color.blue('9', true)}    ││ +    │${navDescription[5]}`);
  console.log(`  │ Home ││   ${color.blue('▲', true)}  ││ ${color.blue('PgUp', true)} ││      │${navDescription[6]}`);
  console.log(`  └──────┘└──────┘└──────┘│      │${navDescription[7]}`);
  console.log(`  ┌──────┐┌──────┐┌──────┐│      │${navDescription[8]}`);
  console.log(`  │ ${color.blue('4', true)}    ││ ${color.green('5', true)}    ││ ${color.blue('6', true)}    ││      │${navDescription[9]}`);
  console.log(`  │   ${color.blue('◄', true)}  ││      ││   ${color.blue('►', true)}  ││      │${navDescription[10]}`);
  console.log(`  └──────┘└──────┘└──────┘└──────┘${navDescription[11]}`);
  console.log(`  ┌──────┐┌──────┐┌──────┐┌──────┐${navDescription[12]}`);
  console.log(`  │ 1    ││ ${color.blue('2', true)}    ││ ${color.blue('3', true)}    ││ ${color.red('Enter', true)}│${navDescription[13]}`);
  console.log(`  │ End  ││   ${color.blue('▼', true)}  ││ ${color.blue('PgDn', true)} ││      │${navDescription[14]}`);
  console.log(`  └──────┘└──────┘└──────┘│      │${navDescription[15]}`);
  console.log(`  ┌──────────────┐┌──────┐│      │${navDescription[16]}`);
  console.log(`  │ 0            ││ ,    ││      │${navDescription[17]}`);
  console.log(`  │ Ins          ││ Del  ││      │${navDescription[18]}`);
  console.log(`  └──────────────┘└──────┘└──────┘${navDescription[19]}`);
  console.log();
  console.log(color.yellow('Режим ввода команд', true));
  console.log(`
  справка <команда>
выйти
карта
экипировка
отдохнуть
встать
убежать


осмотреть <что-то>
взять <что-то>
напасть <кто (на кого)>
`);
};

export default help;
