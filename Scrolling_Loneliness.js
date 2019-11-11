// var s = function ( sketch ){

let pos;
let body_fill,body, sad1_mouth, sad1_eyes, sad2_mouth, sad2_eyes, normal_eyes, normal_mouth, happy1_eyes, happy1_mouth, happy2_eyes, happy2_mouth;

let imgHeight, imgWidth;
let state;
let r,g,b;
let canvas;

  // let h = document.body.clientHeight;
  // let w = document.body.clientHeight;

function preload(){
  body_fill = loadImage('https://raw.githubusercontent.com/elenaleegold/Scrolling_Loneliness/master/body_fill.png');
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

function setup(){

  // jQuery('<div/>', {
  // id: 'siteBox',
  // title: 'div-border'
  // }).appendTo('body');


  // $('#siteBox').css("position", "fixed");

  canvas = createCanvas(700, 700);
    $('#defaultCanvas0').css("box-sizing", "border-box");
    // $('#defaultCanvas0').css("height", "800px");
    $('#defaultCanvas0').css("position", "fixed");
    $('#defaultCanvas0').css("z-index", "10000");
    $('#defaultCanvas0').css("margin", "0");
    $('#defaultCanvas0').css("float", "left");
    $('#defaultCanvas0').css("bottom","0px");
    $('#defaultCanvas0').css("left","0px");

  pos = 0;

  // var canvas = 
  // canvas.child('#siteBox');

  state = "normal";
  imgHeight = body.height + 20;
  imgWidth = body.width + 20;
  r = 0;
  g = 100;
  b = 255;
}


function draw(){
  // console.log("here");
  // console.log( abs(checkScrollSpeed()) );
  clear();
  background(r,g,b,0);
  fill(pos,255,pos);
  if(pos > 256){
    pos = 255;
  }
  else if(pos < 0){
    pos = 0;
  }

  var pLength = document.documentElement.scrollHeight;

  // if(frameCount % 50 == 0){
  //     if (b >= 255){
  //       b = 255;
  //     }
  //     else{
  //       b++;
  //     }
  // }

  var docHeight = $(document).height();
  var scrollTop = $(window).scrollTop();


  var newB = map(scrollTop,0,docHeight, 255, 0);

  var speed = abs(checkScrollSpeed());
  if(speed > 15){
    // b-=50;
  }
  else if(speed < 15 && speed !=0){
    // b--;
  }
  console.log(newB);
  tint(newB,255,255);
  image(body_fill, 2, height-(imgHeight)+2);
  image(body, 2, height-(imgHeight)+2);

  noTint();

  if(newB >= 0 && newB <= 51){
    image(sad2_eyes, 0, height-(imgHeight));
    image(sad2_mouth, 0, height-(imgHeight));
  }
  else if(newB >= 52 && newB <= 102){
    image(sad1_eyes, 0, height-(imgHeight));
    image(sad1_mouth, 0, height-(imgHeight));
  }
  else if(newB >= 103 && newB <= 153){
    image(normal_eyes, 0, height-(imgHeight));
    image(normal_mouth, 0, height-(imgHeight));
  }
  else if(newB >= 154 && newB <= 204){
    image(happy1_eyes, 0, height-(imgHeight));
    image(happy1_mouth, 0, height-(imgHeight));
  }
  else if(newB >= 205 && newB <= 255){
    image(happy2_eyes, 0, height-(imgHeight));
    image(happy2_mouth, 0, height-(imgHeight));
  }


  // tint(0,0,0);
  // image(body, 0, height-(imgHeight));
  //      // print(state);
  // if(b < 300 && b >= 175){
  //   image(sad1_mouth, 0, height-(imgHeight));
  //   image(sad2_eyes, 0, height-(imgHeight));
  // }
  // else if(b < 175 && b >= 145){
  //   image(normal_mouth, 0, height-(imgHeight));
  //   image(normal_eyes, 0, height-(imgHeight));
  // }
  // else if(b < 145 && b >= 95){
  //   image(happy1_eyes, 0, height-(imgHeight));
  //   image(happy1_mouth, 0, height-(imgHeight));
  // }
  
  // if(b < 100){
  //   b = 100;
  // }
  // else if(b > 255){
  //   b = 255;
  // }
  
  // if(r < 100){
  //   r = 100;
  // }

}



function mouseWheel(event) {
  //print(event.delta);
  //move the square according to the vertical scroll amount
  b--;
  r++;
  //uncomment to block page scrolling
  //return false;
}

// }

var checkScrollSpeed = (function(settings){
    settings = settings || {};

    var lastPos, newPos, timer, delta, 
        delay = settings.delay || 50; // in "ms" (higher means lower fidelity )

    function clear() {
      lastPos = null;
      delta = 0;
    }

    clear();

    return function(){
      newPos = window.scrollY;
      if ( lastPos != null ){ // && newPos < maxScroll 
        delta = newPos -  lastPos;
      }
      lastPos = newPos;
      clearTimeout(timer);
      timer = setTimeout(clear, delay);
      return delta;
    };
})();

// listen to "scroll" event
window.onscroll = function(){
  // console.log( checkScrollSpeed() );
};
