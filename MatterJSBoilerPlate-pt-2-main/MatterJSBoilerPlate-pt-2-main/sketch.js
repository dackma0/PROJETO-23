
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bolinha1
var bolinha2
var bolinha3
var bolinha4
var bolinha5
var bolinha6
var engine;
var chao;
var bloco1;
var bloco2;
var gira1
var gira2
var gira3
var angulo1 = 60;
var angulo2 = 60;
var angulo3 = 60;



function setup() {
	createCanvas(600, 600);


	engine = Matter.Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.

	var taparado = {isStatic: true};
	var naotaparado = {isStatic: false};



	chao = Bodies.rectangle(300, 600, 600, 20, taparado);
	bloco1 = Bodies.rectangle (150, 400, 150, 20, taparado);
	bloco2 = Bodies.rectangle (450, 400, 150, 20, taparado);

	World.add (world, chao);
	World.add (world, bloco1);
	World.add (world, bloco2);

	gira1 = Bodies.rectangle(300, 200, 150, 20, taparado);
	gira2 = Bodies.rectangle(300, 200, 150, 20, taparado);
	gira3 = Bodies.rectangle(300, 200, 150, 20, taparado);
	World.add (world, gira1);
	World.add (world, gira2);
	World.add (world, gira3);


 bolinha1 = Bodies.rectangle (300, 0, 20, 20, naotaparado);
 bolinha2 = Bodies.rectangle (300, 0, 20, 20, naotaparado);
 bolinha3 = Bodies.rectangle (300, 0, 20, 20, naotaparado);
 bolinha4 = Bodies.rectangle (300, 0, 20, 20, naotaparado);
 bolinha5 = Bodies.rectangle (300, 0, 20, 20, naotaparado);
 bolinha6 = Bodies.rectangle (300, 0, 20, 20, naotaparado);

 World.add (world, bolinha1);
 World.add (world, bolinha2);
 World.add (world, bolinha3);
 World.add (world, bolinha4);
 World.add (world, bolinha5);
 World.add (world, bolinha6);

	Engine.run(engine);


  


}


function draw() {
  rectMode(CENTER);
  background("black");

  fill ("white");

  angulo1 += 20
  angulo2 += 10
  angulo3 += 15
  
  rect (chao.position.x, chao.position.y, 600, 20);
  rect (bloco1.position.x, bloco1.position.y, 150, 20);
  rect (bloco2.position.x, bloco2.position.y, 150, 20);

  Body.rotate (gira1, angulo1);
  Body.rotate (gira2, angulo2);
  Body.rotate (gira3, angulo3);

  ellipse (bolinha1.position.x, bolinha1.position.y, 20, 20);
  ellipse (bolinha2.position.x, bolinha2.position.y, 20, 20);
  ellipse (bolinha3.position.x, bolinha3.position.y, 20, 20);
  ellipse (bolinha4.position.x, bolinha4.position.y, 20, 20);
  ellipse (bolinha5.position.x, bolinha5.position.y, 20, 20);
  ellipse (bolinha6.position.x, bolinha6.position.y, 20, 20);

  push ();
  translate (gira1.position.x, gira1.position.y);
  rotate (angulo1);
  rect (0, 0, 150, 20);
 pop ();


push ();
translate (gira2.position.x, gira2.position.y);
rotate (angulo2);
rect (0, 0, 150, 20);
pop ();


push ();
translate (gira3.position.x, gira3.position.y);
rotate (angulo3);
rect (0, 0, 150, 20);
pop ();




 
  Engine.update(engine);
}



