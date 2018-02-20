//PSEUDO CODE

//class Vehicle

//properties - velocity, acceleration, size, color, position, 

//actions - track/seek, move/apply force, collision, update

let vehicles = []; 


function setup (){
	createCanvas(1270,570);
	let numVehicles = 30;
	for (let i = i < numVehicles;i++) {
		v = new Vehicle(random(0, width), random(0, height));
		v.color = (random(0, 255), random(0, 255), random(0, 255));	
		v.maxSpeed = random(1, 8);
		vehicles.push(v);
	}
}

function draw (){
	background(192, 250, 210);
	fill(200);
	stroke(0);
	strokeWeight(2)
	noCursor();
	ellipse(mouseX, mouseY, 48, 48);
;
	for(let v of vehicles) {
	v.update();
	v.display();
	v.seek(createVector(mouseX, mouseY));
	v.applyForce();
	}
}

class Vehicle {	
	constructor(position){

		this.position = position;
		this.velocity = createVector(0,0);
		this.acceleration = createVector(0,0);
		//r = size
		this.r = 6;
		this.color = color(random(0,255), random(0, 255), random(0,255)); 

		this.maxSpeed = 4;
	}

	//seek target

	seek(target){
		//note that this.position is a vector 
		//note that target is a vector
		//find the desired vector of travel by subtracting from target 

		let desired = target.sub(this.position);

		desired.setMag(this.maxSpeed);

		//find the 'steering' vector

		let steer = desired.sub(this.velocity);
		this.applyForce(steer);
	}

	//apply force
	//this is how we move the car in given direction with given vector

	applyForce(force){
		this.acceleration.add(force);
		//note that we can do more physics simulation here
		//ex give car mass and calculate acceleration delta as A = F/M

	}

	//update
	//run simulation
	//update properties based on changes since last update

	update() {
		//update velocity
		this.velocity.add(this.acceleration);
		//update position
		this.position.add(this.velocity);

		//reset
		this.acceleration.mult(0);
	}
	//display 
	display(){
		//draw triangle rotated in direction of velocity

		//get angle from velocity
		let theta = this.velocity.heading() + HALF_PI;

		//set drawing properties

		fill(this.color);
		stroke(0);
		strokeWeight(1);

		// move center of the canvas to the vehicle's position
		translate(this.position.x, this.position.y);
		//rotate canvas to the heading calculated above 
		rotate(theta);

		//draw triangle (vehicle shape)
		beginShape();
			vertex(0, -this.r*2);
			vertex(-this.r, this.r*2);
			vertex(this.r, this.r*2);
		endShape(CLOSE);

		//end transforms
		resetMatrix();
	}
}



