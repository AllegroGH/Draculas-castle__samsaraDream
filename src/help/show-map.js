const fl1 = [5, 10, 11, 12, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 32, 33, 34, 40];
const fl2 = [47, 52, 53, 54, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 74];
const fl3 = [87, 88, 89, 94, 95, 96, 101, 102, 103, 109];
const floors = { 1: fl1, 2: fl2, 3: fl3 };

function getUp(map, i) {
  let left = '';
  let right = '';
  let center = '';
  const tkn = i.toString();
  const { visited } = map[`room${tkn}`];
  const { exits } = map[`room${tkn}`];
  center = '   ';
  left = 'west' in exits ? '─' : '┌';
  right = 'east' in exits ? '─' : '┐';
  if ('north' in exits) {
    right = 'east' in exits ? ' ' : '│';
    left = 'west' in exits ? ' ' : '│';
  } else center = '───';
  let head = left + center + right;
  if (!visited) { head = '░░░░░'; }
  return head;
}

function getDw(map, i) {
  let left = '';
  let right = '';
  let center = '';
  const tkn = i.toString();
  const { visited } = map[`room${tkn}`];
  const { exits } = map[`room${tkn}`];
  center = '   ';
  left = 'west' in exits ? '─' : '└';
  right = 'east' in exits ? '─' : '┘';
  if ('south' in exits) {
    right = 'east' in exits ? ' ' : '│';
    left = 'west' in exits ? ' ' : '│';
  } else center = '───';
  let tail = left + center + right;
  if (!visited) { tail = '░░░░░'; }
  return tail;
}

function getMid(map, curRoom, i) {
  let room = '';
  let west = '';
  let east = '';
  const tkn = i.toString();
  const { visited } = map[`room${tkn}`];
  const { exits } = map[`room${tkn}`];
  const key = `room${tkn}`;
  west = 'west' in exits ? ' ' : '│';
  east = 'east' in exits ? ' ' : '│';
  room = curRoom === key ? `${west} * ${east}` : `${west}   ${east}`;
  if (!visited) { room = '░░░░░'; }
  return room;
}

const showMap = (map, player) => {
  const curRoom = `${player.room}`;
  const curFloor = Number(`${map[player.room].floor}`);

  console.log(`Этаж ${curFloor}`);
  const empty = '░░░░░';
  let k = 0;
  let up = '';
  let mid = '';
  let dw = '';
  let start;
  let finish;
  let token1 = '';
  let token2 = '';
  let token3 = '';
  if (curFloor === 1) {
    start = 1;
    finish = 43;
  }
  if (curFloor === 2) {
    start = 43;
    finish = 80;
  }
  if (curFloor === 3) {
    start = 78;
    finish = 113;
  }
  for (let i = start; i < finish; i += 1) {
    if (floors[curFloor].includes(i)) {
      token1 = getUp(map, i);
      token2 = getMid(map, curRoom, i);
      token3 = getDw(map, i);
    } else {
      token1 = empty;
      token2 = empty;
      token3 = empty;
    }
    up += token1;
    mid += token2;
    dw += token3;
    k += 1;
    if (k > 6) {
      k = 0;
      console.log(up);
      console.log(mid);
      console.log(dw);
      up = '';
      mid = '';
      dw = '';
    }
  }
};
export default showMap;