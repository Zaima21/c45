class Player {


  updatePlayerCount(player){
    database.ref('playerCount').set({
      playerCount:player
    });
  }

readPlayerCount(){
  var playerRef = database.ref('playerCount')
  playerRef.on("value",function(data){
    playerCount = data.val();
  });

}
}
