import _ from 'lodash';

const trustedSimpleCommands = [
  ['экипировка', 'equip'],
  ['отдохнуть', 'startRest'],
  ['встать', 'stopRest'],
  ['', ''],
  ['карта', 'map'],
  ['справка', 'help'],
  ['выйти', 'exit'],
];

const trustedComplexCommands = [
  ['осмотреть', 'inspect'],
  ['взять', 'take'],
  ['напасть', 'attack'],
];

const commandParser = (line) => {
  const fineLine = line.toLowerCase().trim();
  const [command, arg] = fineLine.split(' ').filter((el) => el !== '');

  if (!arg && [curCommand] = trustedComplexCommands.filter(([elCommand]) => elCommand.includes(command)).length) {    
    switch (curCommand) {
      case 'напасть':
        console.log(`${_.capitalize(command)} на кого?`);
        break;
      default:
        console.log(`${_.capitalize(command)} что?`);
        break;
    }
    return;
  }

  console.log(`Command parser result: ${command}|${arg}`);
};

export default commandParser;
