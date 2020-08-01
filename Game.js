class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    car1 = createSprite(100,80);
    car1.addAnimation("car1", ci1);
    car1.scale = 1.5;

    car2 = createSprite(100,187);
    car2.addAnimation("car2", ci2);
    car2.scale = 1.5;

    car3 = createSprite(100,294);
    car3.addAnimation("car3", ci3);
    car3.scale = 1.5;

    car4 = createSprite(100,401);
    car4.addAnimation("car4", ci4);
    car4.scale = 1.5;

    cars = [car1, car2, car3, car4];
  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      
      background("#3BAB21");
      image(track, 1035, 0, 0, displayHeight-280);

      /*textSize(30);
      fill("yellow");
      text("Score: ", 20, 10);*/

      var index = 0;

      var x;

      for(var plr in allPlayers){
        
        index = index + 1 ;

        x = displayWidth + allPlayers[plr].distance;
        cars[index-1].x = x;

        if (index === player.index){
          cars[index - 1].shapeColor = "red";
          camera.position.x = cars[index-1].x;
          camera.position.y = displayHeight-522;
        }
      
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    drawSprites();
  }
}
