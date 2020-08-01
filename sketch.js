var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var ci1, ci2, ci3, ci4;

var track, ground;

function preload() {
  ci1 = loadAnimation("b1r1.png", "b1r2.png", "b1r3.png", "b1r4.png", "b1r5.png", "b1r6.png");
  ci2 = loadAnimation("b2r1.png", "b2r2.png", "b2r3.png", "b2r4.png", "b2r5.png", "b2r6.png");
  ci3 = loadAnimation("b3r1.png", "b3r2.png", "b3r3.png", "b3r4.png", "b3r5.png", "b3r6.png");
  ci4 = loadAnimation("b4r1.png", "b4r2.png", "b4r3.png", "b4r4.png", "b4r5.png", "b4r6.png");

  track = loadImage("track.jpg");
  ground = loadImage("ground.png");
}

function setup(){
  createCanvas(displayWidth-400, displayHeight-290);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
    /*textSize(30);
    fill("yellow");
    text("Score: ", 20, 10);*/
  }
}
