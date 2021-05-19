//Create database objects,gamestate and playercount ,form,reading and writing gamestate and playercount
var database;
var gameState, playerCount;
var form,game,player;

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-20);
  database = firebase.database();
  game = new Game
  game.readGameState()
  game.start()
}


function draw(){

}


