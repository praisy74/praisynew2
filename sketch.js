var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var sta
gamestate="star"
function preload(){
  back=loadImage("praisy whtjr.png")
  back1=loadImage("wood-1108307.jpg")
}
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 40; j <=width-10; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 40; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }
  for (var j = 40; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }
  for (var j = 40; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }
  for (var j = 65; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,125));
  }
  for (var j = 65; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,225));
  }
  for (var j = 65; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,325));
  }
  for (var j = 65; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,425));
  }
  //create 3rd row of plinko objects

  
  //create 4th row of plinko objects


  //create particle objects

    divi=new Divisions(0,400,10,800)
    divi1=new Divisions(400,0,800,10)
    divi2=new Divisions(800,400,10,800)
    divi3=new Divisions(400,800,800,10)
 
}
 


function draw() {
  background(back1);
  textSize(20)

    fill("lightyellow");

  Engine.update(engine);
  ground.display();
  if(gamestate==="star"){
    background(back)
    text("HI! MY FRIEND I HAVE A GAME FOR WILL YOU PLAY IT ",30,50)
    text("ITS A PLINKO GAME . YOU HAVE 15 CHANCES TO WIN OTHERWISE YOU'LL LOSE ",30,80)
    text("A BALL COME FROM WHERE YOU KEEP THE MOUSE  ",30,110)
    text("SO DO YOU WANT TO PLAY IT THEN 'PRESS SPACE'",30,140)
    keyPressed()
 
  }
  if(gamestate==="play"){
  if(frameCount%60===0){
    particles.push(new Particle(mouseX,0));
    }
   
  
  text("6",40,560)
  text("5",120,560)
  text("3",200,560)
  text("6",280,560)
  text("1",360,560)
  text("1",440,560)
  text("3",520,560)
  text("4",600,560)
  text("5",680,560)
  text("2",760,560)
  text("score:"+score,700,40)
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  for (var v = 0; v < particles.length; v++) {
    particles[v].display();
  }
  divi.display()
  divi1.display()
  divi2.display()
  divi3.display()
console.log(particles.length)
if(score===30&&particles.length<=15){
  gamestate="end1"
}if(score<30&&particles.length>15){
  gamestate="end"
}
}
if(gamestate==="end"){
  textSize(200)

  fill(25,55,88);
text("GAMEOVER",50,400)
text("OVER",50,600)


}
if(gamestate==="end1"){
  textSize(200)

  fill(25,55,5);
text("YOU ",50,400)
text("WON",50,600)

}
}

function keyPressed(){
  if(keyCode===32){
    gamestate="play"
  }
}


  /*Matter.Events.on(engine, 'collisionStart', function(event) {
    let a = event.pairs.bodyA;
    let b = event.pairs.bodyB;
    a:ground;
    b:particles
  score=score+10
    // check bodies, do whatever...
  });
  Matter.Events.on(engine, 'beforeUpdate', function(event) {
    if (pinball.position.x > 450 && pinball.velocity.y > 0) {
      Matter.Body.setVelocity(pinball, { x: 0, y: -10 });
    }
  });)
  if(Matter.Detector.canCollide(ground, particles)){
    score=score+2
return true

  }
/*if(particles.x<100){
  score=score+2
})

  //display the paricles 
//part.debug=true
Matter.Detector.collisions(particles, engine)
}
/*Detector.collisions = function(broadphasePairs, engine) {
  var collisions = [],
      pairsTable = engine.pairs.table;

  
  for (var i = 0; i < broadphasePairs.length; i++) {
      var bodyA = broadphasePairs[i][0], 
          bodyB = broadphasePairs[i][1];

      if ((bodyA.isStatic || bodyA.isSleeping) && (bodyB.isStatic || bodyB.isSleeping))
          continue;
      
      if (!Detector.canCollide(bodyA.collisionFilter, bodyB.collisionFilter))
          continue;))*/

