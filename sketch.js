//constants from matter.js
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;


//declaring variables
var userEngine, userWorld;
var polygon;
var ground, stage1, stage2;
var constraint1;
var mConstraint, canvasMouse;
var gameState = "onSlingShot";
var bubbles, polImg;

var box1, box2, box3, box4, box5, box6, box7,
    box8, box9, box10, box11, box12, box13, box14, box15,
    box16, box17, box18, box19, box20, box21, box22,
    box23, box24, box25;


//loading images
function preload() {
    polImg = loadImage("polygon.png");
    bubbles = loadImage("background.png");
}


//Making Objects
function setup() {

    var canvas = createCanvas(1600, 800);

    userEngine = Engine.create();
    userWorld = userEngine.world;

    var p_options = {
        restitution: 0.5,
        density: 2.2,
        isStatic: false
    }
    polygon = Bodies.circle(200, 500, 25, p_options);
    World.add(userWorld, polygon);

    ground = new Ground(800, height - 15, 1600, 30);
    stage1 = new Ground(600, 500, 300, 20);
    stage2 = new Ground(1100, 400, 300, 20);

    constraint1 = new SlingShot(polygon, { x: 250, y: 400 });

    canvasMouse = Mouse.create(canvas.elt);

    //pyramid1 lower one

    //bottom layer
    box1 = new Box(stage1.x - 80, stage1.y - 20 - 10, "yellow");
    box2 = new Box(stage1.x - 40, stage1.y - 20 - 10, "white");
    box3 = new Box(stage1.x, stage1.y - 20 - 10, "cyan");
    box4 = new Box(stage1.x + 40, stage1.y - 20 - 10, "red");
    box5 = new Box(stage1.x + 80, stage1.y - 20 - 10, "lightgreen"); //

    box6 = new Box(stage1.x - 60, stage1.y - 70, "cyan");//
    box7 = new Box(stage1.x - 20, stage1.y - 70, "white");
    box8 = new Box(stage1.x + 20, stage1.y - 70, "red");
    box9 = new Box(stage1.x + 60, stage1.y - 70, "pink");

    box10 = new Box(stage1.x - 40, stage1.y - 110, "yellow");//
    box11 = new Box(stage1.x, stage1.y - 110, "red");
    box12 = new Box(stage1.x + 40, stage1.y - 110, "AliceBlue");

    box13 = new Box(stage1.x - 20, stage1.y - 150, "BlueViolet");//
    box14 = new Box(stage1.x + 20, stage1.y - 150, "Bisque");

    box15 = new Box(stage1.x, stage1.y - 190, "lightgreen");//top box



    //pyramid2 higher one
    box16 = new Box(stage2.x - 60, stage2.y - 30, "cyan");
    box17 = new Box(stage2.x - 20, stage2.y - 30, "AliceBlue");
    box18 = new Box(stage2.x + 20, stage2.y - 30, "BlueViolet");
    box19 = new Box(stage2.x + 60, stage2.y - 30, "red");

    box20 = new Box(stage2.x - 40, stage2.y - 70, "lightgreen");
    box21 = new Box(stage2.x, stage2.y - 70, "yellow");
    box22 = new Box(stage2.x + 40, stage2.y - 70, "pink");

    box23 = new Box(stage2.x - 20, stage2.y - 110, "Bisque");
    box24 = new Box(stage2.x + 20, stage2.y - 110, "red");

    box25 = new Box(stage2.x, stage2.y - 150, "cyan");


    Engine.run(userEngine);
}

function draw() {
    background(bubbles);

    imageMode(CENTER);
    image(polImg, polygon.position.x, polygon.position.y, 50, 50);

    ground.display();
    stage1.display();
    stage2.display();
    constraint1.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();

    if (keyDown("space")) {
        constraint1.attach(polygon);
        gameState = "onSlingShot";
    }
}
function mouseReleased() {
    setTimeout(() => {
        constraint1.detach();
        gameState = "Launched";
        World.remove(userWorld, mConstraint);
        Body.applyForce(polygon, polygon.position, { x: polygon.velocity.x, y: polygon.velocity.y });
    }, 100);

    //mConstraint.mouse = null;
}
function mouseDragged() {
    if (gameState === "onSlingShot") {
        var m_options = {
            mouse: canvasMouse
        }
        mConstraint = MouseConstraint.create(userEngine, m_options);
        World.add(userWorld, mConstraint);
    }
}