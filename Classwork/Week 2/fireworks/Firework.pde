class Firework{
  color col;
  PVector position;
  PVector vel;
  PVector acceleration;
  int size;
  
  //opacity - alpha
  
  float alpha;
  
  Firework(PVector position, color col){
     this.position = position;
     this.col = col;
     
     this.vel = new PVector(random(-1.2, 1.2), random(-1, 1));
     this.acceleration = new PVector(0, random(0, 0.01));
     
     this.size = 5;
     this.alpha = 255;
  }
  
  void update(){
    vel.add(acceleration);
    position.add(vel);
    
    alpha --;
  }
  
  void display(){
    fill(col, alpha);
    ellipse(position.x, position.y, size, size);
  }
}