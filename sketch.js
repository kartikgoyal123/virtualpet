var dog,sadDog,happyDog;
var feed,addfood;
var foodObj,food;


function preload(){
  sadDog=loadImage("Dog.png");
  happyDog=loadImage("happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  foodObj=new Food();

  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feeddog);
 
  addfood=createButton("Add food");
  addfood.position(800,95);
  addfood.mousePressed(addfoods);

}

function draw() {
  background(46,139,87);
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock

function feeddog(){
  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
  })
}

function addfoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}