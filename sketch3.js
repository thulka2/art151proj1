/* Messing around with key press */
/* 

I am working with frame rate, size of shapes, and gradient color choices that are all manipulated by key presses 
The frame rate and size of the squares are directly linked, so increasing the square size will also increase the frame rate. 
The angle of the gradient determines how 'wide' the color spectrum is, so decreasing the angle will decrease the amount of colors that are transitioned between 


tempo
*/

/* W - speed up FPS, S - speed down FPS, A - decrease angle of gradient, D increase angle */
let dim;
let dim2;
let angle;
let frames;
let minx;





function setup() {
    createCanvas(windowWidth, windowHeight);
    dim = width / 16;
    dim2 = height/ 8;
    frames = 30;
    angle = 350;
    background(0);
    colorMode(HSB, 360, 100, 100);
    minx = 0;
    
    noStroke();
    ellipseMode(RADIUS);
    rectMode(CENTER);
    frameRate(frames);
    alert("The formal elements in this piece are Pattern and Color. Through keyboard interaction the user can change the size of the squares, which also changes the framerate of the piece, and how wide the color gradient is (how many colors to transition between). The keypresses are as follows: \n W - Increase square size (and FPS) \n A - Decrease gradient radius (number of colors) \n S - Decrease square size \n D - Increase gradient radius");

}

function draw() {
    
    if (keyIsDown(87) && frames < 60) {
        frames *= 1.015;
    }

    if (keyIsDown(83) && frames > 0) {
        frames /= 1.015;
    }

    if (keyIsDown(65) && angle > 0) {
        angle -= 3.1415;
    }

    
    if (keyIsDown(68) && angle < 360) {
        angle += 3.1415;
    }

    frameRate(frames);

    
    background(0);
    for (let x = minx; x <= width; x += dim) {
        for (let y = 0; y <= height; y += dim) {
            drawGradient(x, y);
            
        }
    }

   
    
    // shifts over the rectangles bit by bit 
    if (minx > dim) {
        minx = 0;
    } else {
        minx += 1;
    }

}

function drawGradient(x, y) {
    
    let radius = map(frames, 0, 30, 0, dim / 2);
    let h = random(0, 360);
    for (let r = radius; r > 0; --r) {
      fill(h, 90, 90);
      //ellipse(x, y, r, r);
     // rotate(PI/4);
      rect(x, y, r, r);
      h = (h + 1) % angle;
    }
  }