var mySound1;
var img;
var img0;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;
var canvas;
var canvasX;
var canvasY;
var img1;
var images=[];
var totalnumberofimages = 10;
var currentimage=0;
var drawX1 = 10; 
var drawX2 = 50;
var drawY1= 10; 
var drawY2= 50;

canvasX=400;
canvasY=300;

function preload() {
  img = loadImage("assets/flower1.jpg");
  img0 = loadImage("assets/flower1.jpg");
  img1 = loadImage("assets/flower6.jpg");
  img2 = loadImage("assets/flower7.jpg");
img3 = loadImage("assets/final2.jpg");
img4 = loadImage("assets/final4.jpg");
img5 = loadImage("assets/final3.jpg");
img6 = loadImage("assets/final77.jpg");
img7 = loadImage("assets/final5.jpg");
img8 = loadImage("assets/final6.jpg");
img9 = loadImage("assets/final7.jpg");

mySound1 = loadSound("assets/Step Up.mp3");
}

function setup(){

images.push(img0);
images.push(img1);
images.push(img2);
images.push(img3);
images.push(img4);
images.push(img5);
images.push(img6);
images.push(img7);
images.push(img8);
images.push(img9);



canvas = createCanvas(canvasX,canvasY);

canvas.position(40,110);

var thebuttoncol = color(255,255,255,255);
button = createButton("Next Image");
button.position(200,450);
button.style("background-color", thebuttoncol);
button.mousePressed(switchimage);


text = createDiv('Photography Portfolio');
  text.position(60, 65);
text.style("font-size", 40 + "px" )


text = createDiv('Nikon');
  text.position(5, 240);

text.style("font-size", 20 + "px" );
text.style("rotate", -90);


text = createDiv('A Collection of Images shot by Tayleur Hylton.');
  text.position(260, 250);

text.style("font-size", 20 + "px" );
text.style("rotate", 90);


text = createDiv('Hover For Color|Click for Image');
  
  text.position(100, 410);

  text.style("font-size", 20 + "px" )


  mySound1.play();





}


function draw(){
		
	for (var i = 0; i<drawX2; i++){
	//for(var j = 0; j<10; j++){
	
	for (var j = 0; j<drawY2; j++){




	fill(255,mouseY,0);


	var y = j*drawY1;

	var x = i*drawX1;


	var c = img.get(x,y);
	fill(c);


	rect(x,y, drawX1, drawY1);

	}
}




if(mouseIsPressed){

image(img, 0, 0);



}

}

function mouseMoved(){

drawX1 = mouseX+10; 
drawY1 = mouseY+10;
drawX2=canvasX/drawX1;
drawY2=canvasY/drawY1;
draw();


}

function switchimage(){

if(currentimage==totalnumberofimages-1){currentimage=0;}
	else{currentimage++;}

	img=images[currentimage];
draw();
}