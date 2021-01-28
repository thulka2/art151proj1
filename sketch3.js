/* Messing around with key press */

/* W - speed up FPS, S - speed down FPS, A - decrease angle, D increase angle */
let dim;
let dim2;
let angle;
let frames;

/*
function keyPressed() {
    
    if (key == 'w' && frames < 60) {
      frames += 1;
      
    }

    if (key == 's' && frames > 0) {
        frames -= 1;
    }

    
} */


function setup() {
    createCanvas(windowWidth, windowHeight);
    dim = width / 16;
    dim2 = height/ 8;
    frames = 30;
    angle = 350;
    background(0);
    colorMode(HSB, 360, 100, 100);
    
    noStroke();
    ellipseMode(RADIUS);
    frameRate(frames);
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
    for (let x = 0; x <= width; x += dim) {
        for (let y = 0; y <= height; y += dim2) {
            drawGradient(x, y);
        }
    }
    

}

function drawGradient(x, y) {
    
    let radius = map(frames, 0, 60, 0, dim / 2);
    let h = random(0, 360);
    for (let r = radius; r > 0; --r) {
      fill(h, 90, 90);
      ellipse(x, y, r, r);
      h = (h + 1) % angle;
    }
  }