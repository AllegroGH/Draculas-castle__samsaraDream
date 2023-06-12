const showMap = (map, player) => {
  console.log(`showMap resolve (now player in the room): ${player.room}`);
  console.log(`showMap resolve ('visited' key in this room): ${map[player.room].visited}`);
};

export default showMap;
