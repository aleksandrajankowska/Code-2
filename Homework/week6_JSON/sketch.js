var character;
var rickMortyCharacters;
function preload() {
  // Get the most recent earthquake in the database
  picker = random(396);
  pick = picker.toFixed(0);
 

  var url = 'https://rickandmortyapi.com/api/character/' + pick;
  rickMortyCharacters = loadJSON(url);


  // console.log(rickMortyCharacters["image"]);
  // character = loadImage(rickMortyCharacters.image);
}

function setup() {
  noLoop();
  console.log(rickMortyCharacters);
  createCanvas(800,800);
}

function draw() {
  background(255);
  
  //var rick = rickMortyCharacters["0"];
  
  textSize(50);
  textAlign(CENTER,CENTER);

  if(rickMortyCharacters.status === "Alive"){
    fill(0,255,0);
    ellipse(width/2, height/2 + 100, 50, 50);
  }

  if(rickMortyCharacters.status === "Dead"){
    fill(255, 0, 0);
    ellipse(width/2, height/2 + 100, 50, 50);
  }

  if(rickMortyCharacters.status === "unknown"){
    fill(0, 0, 100);
    ellipse(width/2, height/2 + 100, 50, 50);
  }


  text("Find out if they are alive!", width/2, height/2 - 200);
  text(rickMortyCharacters.name, width/2, height/2);
  textSize(30);
  text("REFRESH PAGE FOR NEXT", width/2, height/2 + 200);

  if(mouseIsPressed){
    redraw();
  }



  


  // fill(0);
  // textAlign(CENTER);
  // text(rickMortyCharacters.name, 0, height - 30, width, 30);
}