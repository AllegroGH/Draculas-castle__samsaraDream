import _ from 'lodash';

const simpleCommands = [
  ['выйти', 'exit'],
  ['карта', 'map'],
  ['молитва', 'prayer'],
  ['справка', 'help'],
  ['состояние', 'status'],
];

const complexCommands = [
  ['напасть', 'attack'],
  ['осмотреть', 'inspect'],
  ['справка', 'help'],
];

const parserResult = (arg, commandSimple, sendSimple, commandComplex, sendComplex) => {
  if (commandComplex && arg) return [sendComplex, arg];
  if (commandSimple && !arg) return [sendSimple];
  if (commandComplex === 'напасть') return [undefined, `${_.capitalize(commandComplex)} на кого?`];
  if (commandComplex === 'осмотреть') return [undefined, `${_.capitalize(commandComplex)} что?`];
  return [undefined, 'Чего?'];
};

const commandParser = (line) => {
  const fineLine = line.toLowerCase().trim();
  const [command, arg] = fineLine.split(' ').filter((el) => el !== '');
  // prettier-ignore
  const [commandSimple, sendSimple] = simpleCommands
    .filter(([el]) => el.startsWith(command)).flat();
  // prettier-ignore
  const [commandComplex, sendComplex] = complexCommands
    .filter(([el]) => el.startsWith(command)).flat();

  return parserResult(arg, commandSimple, sendSimple, commandComplex, sendComplex);
};

export default commandParser;
