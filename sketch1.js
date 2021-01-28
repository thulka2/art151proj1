/* Messing around with variables */

let x = 50;
let y = 50;
let flag = 1; 
let yflag = 1; 

let x2 = 150;
let y2 = 200;
let flag2 = 5; 
let yflag2 = 10; 

let x3 = 150;
let y3 = 200;
let flag3 = 25; 
let yflag3 = 50; 

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(252, 186, 3);

}

function draw() { 
    stroke(0);
    strokeWeight(0);
    fill(255, 80, 20, 15);
    rect(x2, y2, 100, 100);
    fill(150, 0, 20);
    stroke(25);
    strokeWeight(4);
    circle(x3, y3, 100);
    fill(0, 120, 20, 15);
    stroke(15);
    strokeWeight(2);
    ellipse(x, y, 250, 50);

    if (x + 125 >= windowWidth) {
        flag = -1;

    } else if (x - 125 <= 0) {
        flag = 1;

    } 
    if (y + 25 >= windowHeight) {
        yflag = -1;

    } else if (y - 25 <= 0) {
        yflag = 1;

    } 
    x += (flag * 10);
    y += (yflag * 10);

    if ( x2 > windowWidth - 200 || x2 < 200) {
        flag2 *= -1;
    }

    if ( y2 > windowHeight - 150 || y2 < 150) {
        yflag2 *= -1;
    }
    x2 += flag2;
    y2 += yflag2;
    
    
    
    if ( x3 > windowWidth - 50 || x3 < 50) {
        flag3 *= -1;
    }

    if ( y3 > windowHeight - 50 || y3 < 50) {
        yflag3 *= -1;
    }
    x3 += flag3;
    y3 += yflag3;
    

}