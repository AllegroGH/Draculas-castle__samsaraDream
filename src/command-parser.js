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
  if (commandComplex === 'напасть') console.log(`${_.capitalize(commandComplex)} на кого?`);
  else if (commandComplex === 'осмотреть') console.log(`${_.capitalize(commandComplex)} что?`);
  else console.log('Чего?');
  return [undefined];
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
