function setup(){
	createCanvas(600,600);
}

function draw(){
	background(0);
	fill(255, 255, 102);
	rect(width/2, height/2, mouseX-255, 80);
	fill(255, 0, 0);
	rect(220, 220, mouseX-255, 80);
	fill(0, 0, 255);
	rect(380, 380, mouseX-255, 80);
}
