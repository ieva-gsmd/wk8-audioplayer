let isPlaying = false;

let player;

let intro;

let startText = "press anywhere to start audio"
let stopText = "press anywhere to stop audio"


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  
  intro = startText;
  
  player = new Tone.Player("samples/1.mp3").toDestination();
  player.loop = true;
  player.volume.value = -6;
  
}
function draw() {
  background(220);

  let playerVolume = map(mouseX, 0, width, -20, 0);

  player.volume.value = playerVolume;
 
  text(intro, width/2, height/2);
  
}


function mousePressed() {
  if (isPlaying) {
    player.stop();
    isPlaying = false;
    intro = startText;
  } else {
    player.start();
    isPlaying = true;
    intro = stopText;
  }
}

