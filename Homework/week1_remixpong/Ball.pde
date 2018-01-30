class Ball {
  float x;   //x position
  float y;   //y position
  float dx;  //x velocity
  float dy;  //y velocity
  int size;
  int r,g,b;

  //think of the constructor function as the setup() for the object instance.
  //notice there is no "void" or return type. Technically it returns itself (a Ball)
  //this constructor takes no arguments - it sets all fields automatically.
  Ball() {
    x = width/2;
    y = height/2;
    dx = 10;  //set a random velocity
    dy = random(-3, 3);
    size = 10;
  }

  // call this method to display the ball
  void display() {
    noStroke();
    fill(r,g,b,30);
    rect(0,0, width, height);
    
   //r= int(map(x, 0, width, 0, 255));
    g = int(map(x, 0, height, 60,255));
    b = int(map(y, 0, height, 60,255));
    
    fill(r,g,b);
    
    ellipseMode(CENTER);
    ellipse(x, y, size, size);
    //for(int i = 0; i<pos.size(); i++){
    //  ellipse(pos.get(i).x, pos.get(i).y, 10, 10);
    //}
  }

  // call this method to update the ball's position
  void update() {
    //c = color(map(dist(mouseX,mouseY,x,y),0,100,255,0));
    x += dx;
    pos.add(new PVector (x,y));
    if (x < 0 || x > width) {

      if (x < 0) {
        p2Score++;
      }

      if (x > width) {
        p1Score++;
      }

      x = width/2;
      y = height/2;
      dx = -dx;  //set a random velocity
      dy = random(-3, 3);
      pos = new ArrayList<PVector>();
    } 

    if (y < 0 || y > height) {
      dy *= -1;
      y += dy;
    } else { 
      y += dy;
    }
  }

  void checkCollisionWithPaddle(Paddle p) {
    if (x > p.x && x < p.x + p.w) {
      if (y > p.y && y < p.y + p.h) {
        dx = -dx;
        dy = random(-10, 10);
        size ++;
      }
    }
  }
}