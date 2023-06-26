const showMap = (map, player) => {
  const curRoom = `${player.room}`;
  const curFloor = Number(`${map[player.room].floor}`);
  // var curFloor = 1;
  // Our map is a matrix 10x7. Every room has number and name.
  const floor1 = {
    5: 'room5',
    10: 'room10',
    11: 'room11',
    12: 'room12',
    15: 'room15',
    16: 'room16',
    17: 'room17',
    18: 'room18',
    19: 'room19',
    20: 'room20',
    21: 'room21',
    22: 'room22',
    23: 'room23',
    24: 'room24',
    25: 'room25',
    26: 'room26',
    27: 'room27',
    28: 'room28',
    32: 'room32',
    33: 'room33',
    34: 'room34',
    40: 'room40',
  };
  const floor2 = {
    47: 'room47',
    52: 'room52',
    53: 'room53',
    54: 'room54',
    57: 'room57',
    58: 'room58',
    59: 'room59',
    60: 'room60',
    61: 'room61',
    62: 'room62',
    63: 'room63',
    64: 'room64',
    65: 'room65',
    66: 'room66',
    67: 'room67',
    68: 'room68',
    69: 'room69',
    70: 'room70',
    74: 'room74',
  };
  const floor3 = {
    87: 'room87', 88: 'room88', 89: 'room89', 94: 'room94', 95: 'room95', 96: 'room96', 101: 'room101', 102: 'room102', 103: 'room103', 109: 'room109',
  };
  const floors = { 1: floor1, 2: floor2, 3: floor3 };

  function getUp(i, j) {
    let left = '';
    let right = '';
    let center = '';
    let obj = [];
    const { visited } = map[floors[j][i]];
    obj = map[floors[j][i]].exits;
    center = '   ';
    left = 'west' in obj ? '─' : '┌';
    right = 'east' in obj ? '─' : '┐';
    if ('north' in obj) {
      right = 'east' in obj ? ' ' : '│';
      left = 'west' in obj ? ' ' : '│';
    } else center = '───';
    let head = left + center + right;
    if (!visited) { head = '░░░░░'; }
    return head;
  }

  function getDw(i, j) {
    let left = '';
    let right = '';
    let center = '';
    let obj = [];
    const { visited } = map[floors[j][i]];
    obj = map[floors[j][i]].exits;
    center = '   ';
    left = 'west' in obj ? '─' : '└';
    right = 'east' in obj ? '─' : '┘';
    if ('south' in obj) {
      right = 'east' in obj ? ' ' : '│';
      left = 'west' in obj ? ' ' : '│';
    } else center = '───';
    let tail = left + center + right;
    if (!visited) { tail = '░░░░░'; }
    return tail;
  }

  function getMid(i, j) {
    let room = '';
    let west = '';
    let east = '';
    let obj = [];
    const { visited } = map[floors[j][i]];
    obj = map[floors[j][i]].exits;
    const key = floors[j][i];
    west = 'west' in obj ? ' ' : '│';
    east = 'east' in obj ? ' ' : '│';
    room = curRoom === key ? `${west} * ${east}` : `${west}   ${east}`;
    if (!visited) { room = '░░░░░'; }
    return room;
  }

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
    if (i in floors[curFloor]) {
      token1 = getUp(i, curFloor);
      token2 = getMid(i, curFloor);
      token3 = getDw(i, curFloor);
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
