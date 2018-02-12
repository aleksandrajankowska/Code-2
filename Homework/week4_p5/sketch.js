var size;

function setup() {
  createCanvas(1000,1000);
  background(255);
  size = random(1, 5);

}

function draw() {
	noStroke();
	fill(random(0,50), random(100,255), random(50,255));
  	translate(mouseX, mouseY);
  	rotate(frameCount*2);
  	rect(random(20,50),random(20,10), size, size);
  	ellipse(random(20,50),random(20,10), size, size);

  	if(mouseIsPressed){
  		size++;
  	}
}