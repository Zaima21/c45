class Game {
  constructor(){}


updateGameState(state){
  database.ref('gameState').set({
    gameState:state
  });
}

readGameState(){
  var gameStateRef = database.ref('gameState')
  gameStateRef.on("value",function(data){
    gameState = data.val();
  })
}

start(){
  form = new Form()
  player = new Player()
  form.display();
}
}