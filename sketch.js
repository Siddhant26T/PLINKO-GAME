const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var divisions = [];
var particles = [];
var plinkos = [];
var plinkos2 = [];
var divisionHeight = 250;

function setup() {
createCanvas(800,650);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
  //creating ground
  ground = new Ground(600,height,1200,20);
  //creating divisions
  for (var i=0 ;i<= width ; i= i + 80)
  {
     divisions.push(new Division( i ,height-divisionHeight/2,10, divisionHeight));     
  }
  // creating circular type of plinko
  for (var j=40 ;j<= width ; j= j + 50)
  {
     plinkos.push(new Plinko( j,75));     
  }
  for (var j=15 ;j<= width-10 ; j= j + 50)
  {
     plinkos.push(new Plinko( j,125));     
  }
  // creating rectangular type of plinko
  for (var k=40 ;k<= width ; k= k + 80)
  {
     plinkos2.push(new Plinko2( k,175));     
  }
  for (var k=15 ;k<= width-40 ; k= k + 80)
  {
     plinkos2.push(new Plinko2( k,225));     
  }
  // creating circular type of plinko
  for (var j=40 ;j<= width ; j= j + 50)
  {
     plinkos.push(new Plinko( j,275));     
  }
  for (var j=15 ;j<= width-10 ; j= j + 50)
  {
     plinkos.push(new Plinko( j,325));     
  }
  
}

function draw() {
  background("black");
  Engine.update(engine); 
  ground.display(); 
  // creating particles
  if (frameCount% 60 === 0)
  {
     particles.push( new Particle(random(width/2-10,width/2+10),10));
  }
  for  (var m = 0; m<particles.length ; m++)
  {
     particles[m].display();
  }
  for  (var s = 0;s<divisions.length; s++)
  {
     divisions[s].display();
  }
  for (var j=0 ;j<plinkos.length ; j++)
  {
     plinkos[j].display();     
  }
  for (var k=0 ;k<plinkos2.length ; k++)
  {
     plinkos2[k].display();     
  }

  drawSprites();
}