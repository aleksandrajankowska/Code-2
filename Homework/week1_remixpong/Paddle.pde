class Paddle {
  float x;
  float y;
  float w;
  float h;
  int playerNum;
  int r,g,b;

  Paddle(int whichPlayer) {
    playerNum = whichPlayer;
    if (whichPlayer == 0) {
      x = 30;
      y = height/2;
      w = 20;
      h = 150;
    } else if (whichPlayer == 1) {
      y = height/2;
      w = 20;
      h = 150;
      x = width-30-w;
    }
  }

  void update() {

    if (playerNum == 0) {
      if (p1Up) {
        y-=10;
      } 
      if (p1Down) {
        y+=10;
      }
    }
    if (playerNum == 1) {
      if (p2Up) {
        y-=10;
      } 
      if (p2Down) {
        y+=10;
      }
    }
  }


  void display() {
    rectMode(CORNER);
    r= int(map(x, 0, width, 0, 255));
   // = int(map(x, 0, height, 60,255));
    g= int(map(y, 0, height, 60,255));
    fill(r, g, b);
    rect(x, y, w, h);
  }
}