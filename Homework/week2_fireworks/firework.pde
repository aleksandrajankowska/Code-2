class FireworkParticle {
  color fireworkColor;
  PVector position;
  PVector velocity;
  PVector acceleration;
  float alpha;
  float size;
  
  FireworkParticle(PVector position, color fireworkColor) {
    reset(position, fireworkColor);
  }
  
  void reset(PVector position, color fireworkColor) {
    this.position = new PVector(mouseX, mouseY);
    this.fireworkColor = fireworkColor;
    
    this.velocity = new PVector(random(-5, 4), random(-10,15));
    this.acceleration = new PVector(random(-10,10), random(0.04));
    
    this.size = random(1,10);
    this.alpha = 255;
  }
  
  void update() {
    velocity.add(acceleration);
    position.sub(velocity);
    
    alpha--;
  }
  
  void draw() {
    noStroke();
    fill(fireworkColor, alpha);
    ellipse(position.x, position.y, size, size);
  }
}