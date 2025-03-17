let symmetry = 8;
let angle = 360 / symmetry;
let t = 0;
let brandColors;

function setup() {
  createCanvas(720, 720);
  angleMode(DEGREES);
  colorMode(RGB, 255);
  background(0);
  noFill();

  // brandColors = [color("#0000000"), color("#0000000"), color("#0000000")];
  brandColors = [color("#D01F30"), color("#FFC300"), color("#00B2FF")];
}

function draw() {
  background(0, 15);

  translate(width / 2, height / 2);

  let x1 = ((noise(t) - 0.5) * width) / 2;
  let y1 = ((noise(t + 10) - 0.5) * height) / 2;
  let x2 = ((noise(t + 0.05) - 0.5) * width) / 2;
  let y2 = ((noise(t + 10 + 0.05) - 0.5) * height) / 2;

  t += 0.01;

  let totalColors = brandColors.length;
  let colorSpeed = 0.5;
  let tNorm = (t * colorSpeed) % totalColors;
  let colorIndex = floor(tNorm);
  let tColor = tNorm - colorIndex;
  let colFrom = brandColors[colorIndex];
  let colTo = brandColors[(colorIndex + 1) % totalColors];
  let col = lerpColor(colFrom, colTo, tColor);

  for (let i = 0; i < symmetry; i++) {
    rotate(angle);

    stroke(col);
    strokeWeight(10);

    line(x1, y1, x2, y2);

    push();
    scale(1, -1);
    line(x1, y1, x2, y2);
    pop();
  }
}

function keyPressed() {
  if (key == "s") {
    save("sketch.jpg");
  }
}
