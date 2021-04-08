//Create variables here
var dog;
var happydog;
var database;
var foodS;
var foodStock;
var x = 0;

function preload(){
  dogimg = loadImage("images/dogImg.png");
  dogimg1 = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  
  dog = createSprite(300,300);
  dog.addImage(dogimg);
  dog.scale = 0.4;
  database = firebase.database();
 // foodStock = database.ref();
  database.ref('food').on("value",readStock);

}


function draw() {  
  background(46, 139, 87);

  drawSprites();
  //add styles here

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(dogimg1);
  }
  textSize(20)
  fill("red")
  text("food remaining: " + x, 100,50);
}

function readStock(data){
   x = data.val()
}

function writeStock(){
 if(x>0){
   x--} 
  database.ref('/').update({
    food : x
  })
}




