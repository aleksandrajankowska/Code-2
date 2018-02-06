ArrayList<FireworkParticle> fireworkArray = new ArrayList<FireworkParticle>();

int numFireworks = 800;
  PVector position = new PVector(mouseX, mouseY);
  color randomColor = color(random(255), random(255), random(255));

void setup() {
  fullScreen();
  frameRate(60);
  
  //int numFireworks = 350;
  //PVector position = new PVector(random(width/3.0, (2.0/3.0) * width), random(0, height/2));
  //color randomColor = color(random(255), random(255), random(255));
  
  for (int i = 0; i < numFireworks; i++) {
    fireworkArray.add(new FireworkParticle(position, randomColor));
  }
}

void draw() {
  background(#2A172C);
  for (int i = 0; i < fireworkArray.size(); i++) {
    FireworkParticle firework = fireworkArray.get(i);
    firework.update();
    firework.draw();
  }
}

void mousePressed(){
  fill(random(0,255), random(0,255), random(0,255));
  for (int i = 0; i < numFireworks; i++) {
    randomColor =  color(random(255), random(255), random(255));
    fireworkArray.add(new FireworkParticle((position), randomColor));
  }
}