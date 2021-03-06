var canvas = new fabric.Canvas('myCanvas');

var ball_y=0;
var ball_x=0;
var hole_y_1=Math.floor(Math.random() * 100);
var hole_x_1=Math.floor(Math.random() * 1000);
var hole_y=Math.round(hole_y_1/10)*10;
var hole_x=Math.round(hole_x_1/10)*10;
console.log(hole_x,hole_y);


block_image_width = 10;
block_image_height = 10;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img){
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
	canvas.add(hole_obj);
	});
	new_image();
}

function new_image(){
	fabric.Image.fromURL("ball.png", function(Img){
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y,
			left:ball_x
		});
	canvas.add(ball_obj);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
	keyPressed = e.keyCode;
	if ((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML = "You have hit the goal!";
		document.getElementById("myCanvas").style.borderColor="red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up(){
		if(ball_y > 0){
			ball_y = ball_y - block_image_height;
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function down()
	{
		if(ball_y <= 450){
			ball_y = ball_y + block_image_height;
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x = ball_x - block_image_height;
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x = ball_x + block_image_height;
			canvas.remove(ball_obj);
			new_image();
		}
	}
	
}

function Reset(){
	console.log("Reset");
	ball_y = 0;
	ball_x = 0;
	hole_y = Math.floor(Math.random() * 100);
	hole_x = Math.floor(Math.random() * 1000);
	canvas.remove(ball_obj);
	canvas.remove(hole_obj);
	load_img();
	document.getElementById("hd3").innerHTML = "Hit the Goal";
	document.getElementById("myCanvas").style.borderColor="white";
}
