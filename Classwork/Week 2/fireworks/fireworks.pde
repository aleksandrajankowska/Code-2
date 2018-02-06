//Firework f;

ArrayList<Firework> fArray = new ArrayList<Firework>();

void setup(){
  size(1500, 1500); 
  
  //f = new Firework(new PVector(width/2, height/2), color(255, 0, 0));
  
  int numFireworks = 350;
  PVector position = new PVector(random(0, width), random(0, height));
  color randomColor = color(random(0,255), random(0,255), random(0,255));
  
  for(int i = 0; i < numFireworks; i++){
    Firework f = new Firework(position, randomColor);
    fArray.add(f);
  }
  
  println("My Array size is: " + fArray.size());
}

void draw(){
  background(255);
  for(int i = 0; i < fArray.size(); i++){
    Firework f = fArray.get(i);   
    f.update();
    f.display();
  }
  
  
  //singleparticle
  
  //f.display();
  //f.update();
}