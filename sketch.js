
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine;
var block1,block2;
var rotator1,rotator2,rotator3;
var particle1,particle2,particle3,particle4,particle5;
var plane;
var angle1 = 60;
var angle2 = 120;
var angle3 = 180;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	//Crie os Corpos aqui.
	block1 = Bodies.rectangle(300,200,150,20);
	World.add(world.block1);
	.2;
	block2 = Bodies.rectangle(300,200,150,20);
	World.add(world,block2);
	rotator1 = Bodies.rectangle(250,200,150,20,rotator_options);
	World.add(world,rotator1);
	Matter.Body.rotate(rotator1,angle1);
	push();
	translate(rotator1.positionx,rotator1.position.y);
	rotate(angle1);
	rect(0,0,150,20);
	pop();
	angle1+=0.2;
	rotator2 = Bodies.rectangle(250,200,150,20,rotator_options);
	World.add(world,rotator2);
	Matter.Body.rotate(rotator2,angle2);
	push();
	translate(rotator2.positionx,rotator2.position.y);
	rotate(angle2);
	rect(0,0,150,20);
	pop();
	angle2+=0.2;
	rotator3 = Bodies.rectangle(250,200,150,20,rotator_options);
	World.add(world,rotator3);
	Matter.Body.rotate(rotator3,angle3);
	push();
	translate(rotator3.positionx,rotator3.position.y);
	rotate(angle3);
	rect(0,0,150,20);
	pop();
	angle3+=0.2;
	var plane_options={
		isStatic:true
	}
	var rotator_options={
		isStatic:true
	}
	var particle_options={
		restitution:0.4,
		friction:0.02
	}
particle1=Bodies.circle(220,10,10,particle_options);
World.add(world,particle1);
particle2=Bodies.circle(220,10,10,particle_options);
World.add(world,particle2);
particle3=Bodies.circle(220,10,10,particle_options);
World.add(world,particle3);
particle4=Bodies.circle(220,10,10,particle_options);
World.add(world,particle4);
particle5=Bodies.circle(220,10,10,particle_options);
World.add(world,particle5);

	Engine.run(engine);
  
}


function draw() {
  background("lightgreen");
  Engine.update(engine);
	ellipseMode(RADIUS);
	ellipse(particle1.position.x,particle1.position.y,20);
	ellipse(particle2.position.x,particle2.position.y,20);
	ellipse(particle3.position.x,particle3.position.y,20);
	ellipse(particle4.position.x,particle4.position.y,20);
	ellipse(particle5.position.x,particle5.position.y,20);
  rectMode(CENTER);
  rect(plane.position.x,plane.position.y,20);
  rect(particle1.position.x,particle1.position.y,20);
  rect(particle2.position.x,particle2.position.y,20);
  rect(particle3.position.x,particle3.position.y,20);
  rect(particle4.position.x,particle4.position.y,20);
  rect(particle5.position.x,particle5.position.y,20);
 
  
  drawSprites();
 
}



