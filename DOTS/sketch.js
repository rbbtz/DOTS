let pinkCounter = 0;
let greenCounter = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  // Increment the counter variables
  pinkCounter++;
  greenCounter++;

  // Draw the pink cow pattern
  fill('pink');
  noStroke();
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
      // Use the modulo operator and a random number to determine if the circle should be visible or not
      if (pinkCounter % floor(random(10, 20)) == 0) {
        ellipse(i * 20, j * 20, 16, 16);
      }
    }
  }

  // Draw the green cow pattern on top of the pink cow pattern
  fill('green');
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
      if ((i + j) % 2 == 0) {
        // Use the modulo operator and a random number to determine if the circle should be visible or not
        if (greenCounter % floor(random(10, 20)) == 0) {
          ellipse(i * 20, j * 20, 16, 16);
        }
      }
    }
  }
}