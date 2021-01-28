var dog,sadDog,happyDog;
var feed,addfood;
var foodObj,food;
var lastfed,fedTime;
var database;


function preload(){
  sadDog=loadImage("Dog.png");
  happyDog=loadImage("happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  database = firebase.database();

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
  fedTime = database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastfed = data.val();
})
fill(255,255,254);
textSize(15);
if(lastfed>=12){
  text("Last feed :"+lastfed%12+"PM",350,30);
}else if(lastfed==0){
  text("Last feed : 12 AM",350,30);
}else{
  text("Last feed :"+lastfed+"AM",350,30);
}



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
    FeedTime:hour()
  })
}

function addfoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}