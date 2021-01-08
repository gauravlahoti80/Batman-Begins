// Add matter.js first
// give the physics engines
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
// create the array of ranindrops
var raindrops = [];
// make  a new umbrella 
var img;
// give image to the background
var backgroundImg;
// give image to thunder
var thunder1,thunder2 ,thunderImg1 , thunderImg2 , thunderImg3;
function preload(){
  // loading man animation
  umbrella = loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png");
  // load both thunder images
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
  // create canvas
var canvas = createCanvas(1345,598);
  // crate engine + world
    engine = Engine.create();
    world = engine.world;
  // make sprites of thunderImages 1 , 2 , 3 
  //  give positions to the sprites
thunderImg1 = createSprite(displayWidth/2,5,10,40);
thunderImg2 = createSprite(200,5,10,40);
thunderImg3 = createSprite(1100,5,10,40);
// give the positions to img of umbrella
    man = createSprite(1345/2,498);
    man.addAnimation("man",umbrella);
    man.scale = 0.3;
}

function draw(){
  // add image to the background
    background(0);
  // update Engine
    Engine.update(engine);
   // create raindrops by frame count
    if(frameCount % 1 === 0){
      var raindrop = new Drop(random(0, windowWidth), -100,10);
      raindrops.push(raindrop);
    }
// display umbrella img
    //img.display();
// display raindrops
    for(var i = 0; i < raindrops.length; i++){
      raindrops[i].fall(20);
      raindrops[i].display();
    } 
// add random img to the thunder images 1
  // By Using Switch case method
    if(frameCount % 10 === 0) {
    var rand = Math.round(random(1,4));
      switch(rand) {
        case 1:thunderImg1.addImage(thunder1);
                break;
        case 2: thunderImg1.addImage(thunder2);
                break;
        case 3:thunderImg1.addImage(thunder3);
                break;
        case 4: thunderImg1.addImage(thunder4);
                break;
        default: break;
      }
    }   
  // add random img to the thunder images 2
  // By Using Switch case method
    if(frameCount % 10 === 0) {
      var rand = Math.round(random(1,4));
        switch(rand) {
          case 1:thunderImg2.addImage(thunder1);
                  break;
          case 2: thunderImg2.addImage(thunder2);
                  break;
          case 3:thunderImg2.addImage(thunder3);
                  break;
          case 4: thunderImg2.addImage(thunder4);
                  break;
          default: break;
        }
      }   
  // add random img to the thunder images 3
  // By Using Switch case method
      if(frameCount % 10 === 0) {
        var rand = Math.round(random(1,2));
          switch(rand) {
            case 1:thunderImg3.addImage(thunder1);
                    break;
            case 2: thunderImg3.addImage(thunder2);
                    break;
            default: break;
          }
        } 
  // for drawing the sprites write drawSprites at the end 
    drawSprites();
}   

