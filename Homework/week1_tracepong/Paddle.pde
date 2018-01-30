class Paddle {
  float x;
  float y;
  float w;
  float h;
  int playerNum;

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
    fill(255);
    rect(x, y, w, h);
  }
}