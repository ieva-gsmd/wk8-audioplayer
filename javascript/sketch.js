//bool to track start/pause status
let isPlaying = false;

//yourplayer
let player;

//the text variable
let intro;

//your actual text
let startText = "press anywhere to start audio"
let stopText = "press anywhere to stop audio"


function setup() {
  createCanvas(windowWidth, windowHeight);
  //so the text is in the middle
  rectMode(CENTER);
  
  //default text
  intro = startText;

  //create new audio player, set it to loop
  player = new Tone.Player("samples/1.mp3").toDestination();
  player.loop = true;
  player.volume.value = -6;
  
}
function draw() {
  background(220);

  //map mouseX position to -20 to 0dB
  let playerVolume = map(mouseX, 0, width, -20, 0);

  //set those mapped values to the audio player volume
  player.volume.value = playerVolume;
 
  //use user interface text
  text(intro, width/2, height/2);
  
}


function mousePressed() {
  //simple switch bool to start/stop audio
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

