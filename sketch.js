const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var groundi;
var plinkos=[];
var divisions=[];
var particles=[];
var divisionHeight=300;

function setup() {

  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;
  
  groundi=new Ground(width/2,790,width,5);

  for(var k=0; k<=width; k+=80){
    divisions.push(new Division(k, height-divisionHeight/2,10,divisionHeight));
  }

  for(var j=40; j<=width; j+=100){
    plinkos.push(new Plinko(j,75,2));
  }

  for(var i=15; i<=width-10; i+=100){
    plinkos.push(new Plinko(i,175,2));
  }

  for(var l=40; l<=width; l+=100){
    plinkos.push(new Plinko(l,275,2));
  }

  for(var p=15; p<=width-10; p+=100){
    plinkos.push(new Plinko(p,375,2));
  }

  if(frameCount%90===0){
    particles.push(new Particle(random(width/2-10, width/2+10),10,10));
  }
}

function draw() {
  Engine.update(engine);
  background(255,255,255);  

  groundi.display();

  for(var g=0; g<particles.length; g++){
    particles[g].display();
  }

  for(var h=0; h<divisions.length; h++){
    divisions[h].display();
  }

  for(var e=0; e<plinkos.length; e++){
    plinkos[e].display();
  }
  drawSprites();
  console.log("many particles not formed because frame is not changing");
}