let pos;
let body_fill,body, sad1_mouth, sad1_eyes, sad2_mouth, sad2_eyes, normal_eyes, normal_mouth, happy1_eyes, happy1_mouth, happy2_eyes, happy2_mouth;

let imgHeight, imgWidth;
let state;
let r,g,b;

  let h = document.body.clientHeight;
  let w = document.body.clientHeight;

function preload() {
  body_fill = loadImage('https://raw.githubusercontent.com/elenaleegold/Scrolling_Loneliness/master/images/body_fill.png');
  body = loadImage('https://raw.githubusercontent.com/elenaleegold/Scrolling_Loneliness/master/images/body.png');
  sad1_mouth = loadImage('https://raw.githubusercontent.com/elenaleegold/Scrolling_Loneliness/master/images/sad1_mouth.png');
  sad2_mouth = loadImage('https://raw.githubusercontent.com/elenaleegold/Scrolling_Loneliness/master/images/sad2_mouth.png');
  normal_mouth = loadImage('https://raw.githubusercontent.com/elenaleegold/Scrolling_Loneliness/master/images/normal_mouth.png');
  happy1_mouth = loadImage('https://raw.githubusercontent.com/elenaleegold/Scrolling_Loneliness/master/images/happy1_mouth.png');
  happy2_mouth = loadImage('https://raw.githubusercontent.com/elenaleegold/Scrolling_Loneliness/master/images/happy1_mouth.png');
  sad1_eyes = loadImage('https://raw.githubusercontent.com/elenaleegold/Scrolling_Loneliness/master/images/sad1_eyes.png');
  sad2_eyes = loadImage('https://raw.githubusercontent.com/elenaleegold/Scrolling_Loneliness/master/images/sad2_eyes.png');
  normal_eyes = loadImage('https://raw.githubusercontent.com/elenaleegold/Scrolling_Loneliness/master/images/normal_eyes.png');
  happy1_eyes = loadImage('https://raw.githubusercontent.com/elenaleegold/Scrolling_Loneliness/master/images/happy1_eyes.png');
  happy2_eyes = loadImage('https://raw.githubusercontent.com/elenaleegold/Scrolling_Loneliness/master/images/happy1_eyes.png');
}

function setup() {
  pos = 0;
  var canvas = createCanvas(500, h-100);
  // canvas.parent('#sketch-holder');
  state = "normal";
  imgHeight = body.height + 20;
  imgWidth = body.width + 20;
  r = 0;
  g = 100;
  b = 255;
}


function draw() {
  background(r,g,b);
  fill(pos,255,pos);
  if(pos > 256){
    pos = 255;
  }
  else if(pos < 0){
    pos = 0;
  }
  rect(0, 0, 50, 50);

  if(frameCount % 10 == 0){
      r-=2;
      b+=2;
  }
  image(body_fill, 0, height-(imgHeight));
  image(body, 0, height-(imgHeight));
       print(state);
  if(b < 300 && b >= 175){
    image(sad1_mouth, 0, height-(imgHeight));
    image(sad2_eyes, 0, height-(imgHeight));
  }
  else if(b < 175 && b >= 145){
    image(normal_mouth, 0, height-(imgHeight));
    image(normal_eyes, 0, height-(imgHeight));
  }
  else if(b < 145 && b >= 95){
    image(happy1_eyes, 0, height-(imgHeight));
    image(happy1_mouth, 0, height-(imgHeight));
  }
  
  if(b < 100){
    b = 100;
  }
  else if(b > 255){
    b = 255;
  }
  
  if(r < 100){
    r = 100;
  }
  
  print("red is " + r);
  print("blue is " + b);

}


function mouseWheel(event) {
  //print(event.delta);
  //move the square according to the vertical scroll amount
  b--;
  r++;
  //uncomment to block page scrolling
  //return false;
}
