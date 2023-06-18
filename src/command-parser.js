import _ from 'lodash';

const simpleCommands = [
  ['встать', 'stopRest'],
  ['выйти', 'exit'],
  ['карта', 'map'],
  ['отдохнуть', 'startRest'],
  ['справка', 'help'],
  ['состояние', 'status'],
];

const complexCommands = [
  ['напасть', 'attack'],
  ['осмотреть', 'inspect'],
  ['справка', 'help'],
];

const commandParser = (line) => {
  const fineLine = line.toLowerCase().trim();
  const [command, arg] = fineLine.split(' ').filter((el) => el !== '');
  // prettier-ignore
  const [commandSimple, sendSimple] = simpleCommands
    .filter(([el]) => el.startsWith(command)).flat();
  // prettier-ignore
  const [commandComplex, sendComplex] = complexCommands
    .filter(([el]) => el.startsWith(command)).flat();

  if (!arg) {
    if (commandSimple) return [sendSimple];
    if (commandComplex) {
      switch (commandComplex) {
        case 'напасть':
          return [undefined, `${_.capitalize(commandComplex)} на кого?`];
        default:
          return [undefined, `${_.capitalize(commandComplex)} что?`];
      }
    }
    return [undefined, 'Чо?'];
  }
  if (commandComplex) return [sendComplex, arg];
  return [undefined, 'Чо?'];
};

export default commandParser;
