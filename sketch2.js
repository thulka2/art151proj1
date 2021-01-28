/* Failed attempt at gradients  */

let bgGradient = {
    r: 26, g: 95, b: 125
};

let movingCircle = {
    x: 50, y: 50, d: 30
};

signs = [1, 1, 1, 1];

function update(val, amount, low, high, sign) {
    if (val < low || val > high - amount ) {
         sign *= -1; 
    } 
    return (val += (sign * amount));
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    
    bgGradient.r = update(bgGradient.r, 1, 26, 90, signs[0]); 
    bgGradient.g = update(bgGradient.g, 4, 95, 250, signs[1]); 
    bgGradient.b = update(bgGradient.b, 3, 125, 250, signs[2]); 

    background(bgGradient.r, bgGradient.g, bgGradient.b);

    movingCircle.x = update(movingCircle.x, 25, 0 + (movingCircle.d / 2), windowWidth - (movingCircle.d / 2), signs[3]); 
    //movingCircle.y = update(movingCircle.y, 5, 0 + (movingCircle.d / 2), windowWidth - (movingCircle.d / 2)); 

    circle(movingCircle.x, movingCircle.y, movingCircle.d);


}