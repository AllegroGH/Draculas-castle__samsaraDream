const showMap = (map, player) => {
  var cur_room = `${player.room}`;
  var cur_floor =  `${map[player.room].floor}`;
  var cur_floor = 1;
//  console.log(`showMap resolve ('visited' key in this room): ${map[player.room].visited}`);
//Our map is a matrix 10x7. Every room has number and name. 
  var floor_1 = {5:'room5',10:'room10',11:'room11',12:'room12',
  15:'room15', 16:'room16', 17:'room17', 18:'room18', 19:'room19', 20:'room20', 21:'room21', 22:'room22', 
  23:'room23', 24:'room24', 25:'room25', 26:'room26', 27:'room27', 28:'room28', 32:'room32',  33:'room33',
  34:'room34', 40:'room40'}
  var floor_2 = {47:'room47',52:'room52',53:'room53',54:'room54',57:'room57',58:'room58',59:'room59',60:'room60',
  61:'room61',62:'room62',63:'room63',64:'room64',65:'room65',66:'room66',67:'room67',68:'room68',
  69:'room69',70:'room70',75:'room75'} 
  var floor_3 = {87:'room87',88:'room88',89:'room89',94:'room94', 95:'room95',96:'room96',101:'room101',102:'room102',
  103:'room103',109:'room109'} 

  function get_up(i,j) {
    var visited = map[floor_1[i]].visited;
    var left = "";
    var right = "";
    var center = "";
    var obj = map[floor_1[i]].exits;	  
    center = '   ';
    ('west' in obj)?left = '─':left = '┌';	     
    ('east' in obj)?right = '─':right = '┐';
    if ('north' in obj)
    {
      ('east' in obj)?right=' ':right = '│';
      ('west' in obj)?left=' ':left = '│';
    }
    else center = '───';
    var head = left+center+right;	  
    visited?head=head:head='*****';
    return head;  
  }

  function get_dw(i,j) {
    var visited = map[floor_1[i]].visited;
    var left = "";
    var right = "";
    var center = "";
    var obj = map[floor_1[i]].exits;	  
    center = '   ';
    ('west' in obj)?left = '─':left = '└';	     
    ('east' in obj)?right = '─':right = '┘';
    if ('south' in obj)
    {
      ('east' in obj)?right=' ':right = '│';
      ('west' in obj)?left=' ':left = '│';
    }
    else center = '───';
    var tail = left+center+right;	  
    visited?tail=tail:tail='*****';
    return tail;  
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
  for (let i=1; i<43; i++)
  {
    if (cur_floor==1)
    {
      (i in floor_1)?up+=get_up(i,cur_floor):up+=empty;	  
      (i in floor_1)?mid+=get_mid(i,cur_floor):mid+=empty;	  
      (i in floor_1)?dw+=get_dw(i,cur_floor):dw+=empty;	  
    }
    if (cur_floor==2)
    {
      (i in floor_2)?up+=get_up(i,cur_floor):up+=empty;	  
      (i in floor_2)?mid+=get_mid(i,cur_floor):mid+=empty;	  
      (i in floor_2)?dw+=get_dw(i,cur_floor):dw+=empty;	  
    }
    if (cur_floor==3)
    {
      (i in floor_3)?up+=get_up(i,cur_floor):up+=empty;	  
      (i in floor_3)?mid+=get_mid(i,cur_floor):mid+=empty;	  
      (i in floor_3)?dw+=get_dw(i,cur_floor):dw+=empty;	  
    }
    k++;
    if (k>6) {
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
