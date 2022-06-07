var Engine = Matter.Engine,
Render = Matter.Render,
Composites = Matter.Composites,
  Composite = Matter.Composite,
Mouse = Matter.Mouse,
World = Matter.World,
Constraint = Matter.Constraint,
Bodies = Matter.Bodies,
Body = Matter.Body;

var engine = Engine.create();

var render = Render.create({
element: document.body,
engine: engine,
options: {
  width: 1500,
  height: 500,
  wireframes: false
}
});

var topWall = Bodies.rectangle(750, 0, 1500, 20, { isStatic: true });
var leftWall = Bodies.rectangle(0, 250, 20, 500, { isStatic: true });
var rightWall = Bodies.rectangle(1500, 250, 20, 500, { isStatic: true });
var bottomWall = Bodies.rectangle(750,500, 1500, 20, { isStatic: true });

var porteriaizq = Bodies.rectangle(80,200,140,20,{isStatic:true})

var porteriader=Bodies.rectangle(1420,200,140,20,{isStatic:true})


var ball = Bodies.circle(750, 280, 20, {
render: {
  sprite: {
    texture: "https://opengameart.org/sites/default/files/styles/medium/public/SoccerBall_0.png",
    xScale: 0.4,
    yScale: 0.4
  }
}
});

var car = Composites.car(1200, 100, 100, 50, 30);

var car2 = Composites.car(250, 100, 100, 50, 30);
var score=0


World.add(engine.world, [topWall, leftWall, rightWall, bottomWall, ball,car, car2,porteriaizq,porteriader]);

Engine.run(engine);

Render.run(render);

$('.red-friction').on('click', function () {
    ball.friction = 0.05;
    ball.frictionAir = 0.0005;
    ball.restitution = 0.85;
  });
  
  


function draw(){
  if(keyDown("left")){
    Body.applyForce(car.bodies[0],{x:car.bodies[0].position.x, y:car.bodies[0].position.y},{x:-0.04,y:0})
    score+=+1
  
  }
if(keyWentUp("up")){
  Body.applyForce(car.bodies[0],{x:car.bodies[0].position.x, y:car.bodies[0].position.y},{x:-0,y:-0.3 })

}
if(keyDown("right")){
  Body.applyForce(car.bodies[0],{x:car.bodies[0].position.x, y:car.bodies[0].position.y},{x:+0.04,y:0})

}
if(keyDown("a")){
  Body.applyForce(car2.bodies[0],{x:car2.bodies[0].position.x, y:car2.bodies[0].position.y},{x:-0.04,y:0})


}
if(keyDown("d")){
  Body.applyForce(car2.bodies[0],{x:car2.bodies[0].position.x, y:car2.bodies[0].position.y},{x:+0.04,y:0})


}
if(keyWentUp("w")){
  Body.applyForce(car2.bodies[0],{x:car2.bodies[0].position.x, y:car2.bodies[0].position.y},{x:0,y:-0.3})

}


}
