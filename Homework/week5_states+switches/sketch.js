//Paddle Game
//Use your mouse to bounce the ball up and down without falling. Every time the paddle is hit by the ball, the state changes
//States include: Background color change, ball gravity change, paddle size change

//1. Don't know why paddle isn't showing up or collision is not working against parameters
//2. When I figure that out I will change speed and size of paddle according to collisions and after x amount
//of collisions the paddle will move along y axis instead. 


var x = 180;
var y = 180;
var xspeed = 6;
var yspeed = 2;
var counter = 0;

var col;

let sceneStates = Object.freeze({
	INTRO:0,
	TUTORIAL:1,
	GAME:2,
	SCORE:3,
	CHANGE:4
});

let currentState = sceneStates.INTRO;

let keyOn = false;
let tutorialTimer;

let gameTimer;

function setup(){
	createCanvas(800,800);
}

function draw(){
	drawScene();
	checkTransition();
	keyOn = false;

}

function drawScene() {
	switch(currentState) {
		case sceneStates.INTRO:
			background(100 + sin(frameCount*0.05) * 150, 15, 10);
			console.log("frameCount: " + frameCount);
			console.log("sin(frameCount): " + sin(frameCount))
			fill(255);
			textSize(80);
			textAlign(CENTER, CENTER);
			text("Crazy Paddle Ball", width/2, height/2);
			textSize(40);
			text("Hit a key to begin", width/2, height/2 + 190)
			break;
		case sceneStates.TUTORIAL:
			background((100 + sin(frameCount*0.05) * 150, 15, 100 + sin(frameCount*0.05) * 150));
			fill(255, 0, 0);
			textSize(48);
			textAlign(CENTER, CENTER);
			text("HOW TO PLAY", width/2, height/2 - 100);
			textSize(32);
			text("It's quite simple really", width/2, height/2);
			textSize(24);
			text("Just bounce the ball off of the paddle on the bottom.", width/2, height/2 + 90);
			if (millis() > tutorialTimer + 3000){  // 3000 = 3 seconds 
				text("To begin, press a key", width/2, height/2 + 190);
			} 
			break;
		case sceneStates.GAME:
			background(0);
			//timer
			// let gameTimer = millis()/1000;
			// fill(255);
			// textSize(60);
			// textAlign(CENTER,CENTER);
			// text(gameTimer.toFixed(1), width/2, height/2 - 200);

			//ball bounce + trail

			fill(255);
			var d = dist(800/2, 800/2, 10, 10);

			ellipse(x-20, y-20, 10, 10)

			x = x + xspeed;
		  	if (x > 800 || x < 0)  {
		     	xspeed = -xspeed;
		     	background(random(255), random(255), random(255));
		     	counter++;
		  	}
		  	//bouncing veritcally
		  	y = y + yspeed; 
		  	if (y < 0 || y > 800) {
			 	  yspeed = -yspeed;
			 	  background(random(255), random(255), random(255));
			 	  counter++;
		  	}

		  	//paddle
		  	fill(255);
		  	rect(mouseX, 800/2 + 400, 80, 10);

			break;
		case sceneStates.CHANGE:
			fill(255);
			rect(800/2 + 400, mouseY, 10, 80);

			fill(255);
			var d = dist(800/2, 800/2, 10, 10);

			ellipse(x, y, 10, 10)

			x = x + xspeed;
		  	if (x > 800 || x < 0)  {
		     	xspeed = -xspeed;
		     	// background(random(255), random(255), random(255));
		     	counter++;
		  	}
		  	//bouncing veritcally
		  	y = y + yspeed; 
		  	if (y < 0 || y > 800) {
			 	  yspeed = -yspeed;
			 	  // background(random(255), random(255), random(255));
			 	  counter++;
		  	}


		case sceneStates.SCORE:
			background(0);
			fill(255);
			textSize(64);
			textAlign(CENTER, CENTER);
			text("Your Score is\nResult: " + gameTimer, width/2, height/2);
			textSize(24);
			text("Press any key to try again", width/2, height - 100);
			break;


	}
}


function checkTransition(){
	switch(currentState){
		case sceneStates.INTRO:
			if(keyOn){
				currentState++;
				setupScene();
			}
			break;
		case sceneStates.TUTORIAL:
			if(millis() > tutorialTimer + 3000){
				if(keyOn){
					currentState++;
					setupScene(currentState);
				}
			}
			break;
		case sceneStates.GAME:
			if(keyOn){
				if(y === 800){
					currentState = sceneStates.SCORE;
					setupScene();
				}
				if(counter === 800){
					currentState = sceneStates.CHANGE;
					setupScene();
				}
			}
			break;
		case sceneStates.CHANGE:
			if(keyOn){
				if(x === 800){
					currentState = sceneStates.SCORE;
					setupScene();
				}
			}
		case sceneStates.SCORE:
			if (keyOn){
				currentState = sceneStates.INTRO;
				setupScene();
			}
			break;
	}
}

function setupScene(){
	switch(currentState){
		case sceneStates.INTRO:
			break;
		case sceneStates.TUTORIAL:
			tutorialTimer = millis();
			break;
		case sceneStates.GAME:
			gameTimer = millis();
			break;
		case sceneStates.SCORE:
			gameTimer = millis();
	}
}

function keyPressed(){
	keyOn = true;
}

//sample ball bounce

// var x = 180;
// var y = 180;
// var xspeed = 9;
// var yspeed = 10;


// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background (25);

// }

// function draw() {

// 	//distance from center of the screen
// 	var d = dist(windowWidth/2, windowHeight/2, mouseX, mouseY);

//   	fill (random(200, 250), random(200, 250), random(200, 250));
//   	ellipse (x, y, d, d);

//   	//bouncing horizontally
//  	 x = x + xspeed;
  	
//   	 if (x > windowWidth || x < 0)  {
//      	xspeed = -xspeed;
//   	}

//   	//bouncing veritcally
//   	y = y + yspeed;

//   	if (y > windowHeight || y < 0) {
// 	 	  yspeed = -yspeed;
//   	}

// }