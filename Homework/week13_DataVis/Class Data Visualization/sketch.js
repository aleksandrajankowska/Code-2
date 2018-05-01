// make an empty array to hold our tiles
let tiles = [];
let tileSize = 400;

function preload() {
  // let table = loadTable('https://dl.dropboxusercontent.com/s/cgrl2ekchqrf9hp/Untitled%20form.csv?dl=1&raw=1', 'csv', 'header');
  let table = loadTable('https://dl.dropboxusercontent.com/s/mrq421mkmg31wng/survey.csv?dl=1&raw=1', 'csv', 'header');
  Tile.prototype.table = table;
}

function setup() {
  tiles.push(new JBTile(0, 0, tileSize));
  img = loadImage("assets/stussy.jpg"); 
  img1 = loadImage("assets/bape.png"); 
  img2 = loadImage("assets/yeezy.png"); 
  img3 = loadImage("assets/supreme.png"); 

  createCanvas(tileSize * 1, tileSize * 1);

  noLoop();
}

function draw() {
  background(255);

  textSize(16);
  fill(255,0,0);
  text('How much of a Hypebeast are you?', 20, 30);

  fill(0);

  ellipse(50, 50, answer1, answer1);

  ellipse(70, 50, answer2, answer2);

  ellipse(90, 50, answer3, answer3);

  ellipse(110, 50, answer4, answer4);

  ellipse(130, 50, answer5, answer5);

  image(img, 0, height/2, img.width/2, img.height/2);

  for (var i = 0; i < tiles.length; i++) {
    tiles[i].update();
    tiles[i].display();
  }
}
