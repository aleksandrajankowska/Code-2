function setup(){
	createCanvas(600,600);
}

function draw(){
	background(0);

	fill(255, 0, 0);
	rect(width/2, height/2, 80, 80);

	if(mouseIsPressed){
		if(mouseX < 380 && mouseX > width/2 && mouseY > height/2 && mouseY < 380){
			background(255);
			fill(255, 0, 0);
			rect(width/2, height/2, 80, 80);
		}
	}
	// fill(255, 0, 0);
	// rect(220, 220, 80, 80);
	// fill(0, 0, 255);
	// rect(380, 380, 80, 80);

	
}
