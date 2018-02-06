Dog myDog;

void setup() {
  size (1000, 1000);
  
  myDog = new Dog("blue", 50, color(255, 0, 0), new PVector(width/2, height/2));
  println("myDog's name is: " + myDog.name);
  
  myDog.name = "red";
  println("myDog's name is now: " + myDog.name);
  
  myDog.furColor = color(0, 255, 0);
  
  

}

void draw() {
  background(0);
  myDog.draw();
}