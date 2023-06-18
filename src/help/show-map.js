const showMap = (map, player) => {
  var cur_room = `${player.room}`;
  var cur_floor =  `${map[player.room].floor}`;
//  console.log(`showMap resolve ('visited' key in this room): ${map[player.room].visited}`);
//Our map is a matrix 9x7. Every room has number and name. 
  var floor_1 = {6:'room101',13:'room102',14:'room103',15:'room104',
  19:'room102', 20:'room102', 21:'room102', 22:'room102', 23:'room102', 24:'room102', 26:'room102', 27:'room102', 
  28:'room102', 29:'room102', 31:'room102', 32:'room102', 33:'room102', 34:'room102', 35:'room102',  36:'room102',
  41:'room102', 42:'room102', 43:'room102', 50:'room102', 51:'room102', 52:'room102', 60:'room102'}
  var floor_2 = {6:'room101',13:'room102',14:'room103',15:'room104'} 
  var floor_3 = {6:'room101',13:'room102',14:'room103',15:'room104'} 

  function get_up(i,j) {
    var visited = map[floor_1[i]].visited;
    var north = "";
    var obj = map[floor_1[i]].exits;	  
    ('north' in obj)?north = '│   │':north = '┌───┐';	     
    visited?north=north:north='*****';
    return north;  
  }

  function get_dw(i,j) {
    var visited = map[floor_1[i]].visited;
    var obj = map[floor_1[i]].exits;	  
    var south = "";
    ('south' in obj)?south = '│   │':south = '└───┘';
    visited?south=south:south='*****';
    return south;  
  }

  function get_mid(i,j) {
    var visited = map[floor_1[i]].visited;
    var obj = map[floor_1[i]].exits;	  
    var room = "";	
    var west = "";
    var east = "";
    ('west' in obj)?west = ' ':west = '│';
    ('east' in obj)?east = ' ':east = '│';
    room = west+"   "+east;	  
    visited?west=west:room='*****';
    return room;  
  }

  var empty = '*****'	  
//  var middle = '│   │'
//  var south = '└───┘'
//  console.log(JSON.stringify(`${map[player.room].exits}`));
  var k=0;	
  var up=""; 	 
  var mid=""; 	 
  var dw=""; 	 
  for (let i=1; i<64; i++)
  {
    (i in floor_1)?up+=get_up(i,1):up+=empty;	  
    (i in floor_1)?mid+=get_mid(i,1):mid+=empty;	  
    (i in floor_1)?dw+=get_dw(i,1):dw+=empty;	  
//    (i in map_matrix)?console.log(get_up(i)):console.log('damnit');
//    console.log(up);
//    console.log(mid);
//    console.log(dw);
    k++;
    if (k>8) {
      k=0;	    
      console.log(up);
      console.log(mid);
      console.log(dw);
      up=""; 	 
      mid=""; 	 
      dw="";
    }	    
  }
/*  for (let i = 0; i < 7; i++) {
    for (let k = 0; k<9; k++) {
      console.log('┌───┐');
      console.log('│   │');
      console.log('└───┘');
    }
  }  
*/
};
export default showMap;
