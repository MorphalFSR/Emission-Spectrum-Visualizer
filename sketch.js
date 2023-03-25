let wavelengths = [[530, 580, 614, 642, 684], [476, 505, 530, 615, 705], [444, 557, 609], [487, 562, 631, 656, 702]];
let bottom_w = 380;
let top_w = 750;
let gasSlider;
function setup() {
  createCanvas(400, 400);
  gasSlider = createSlider(0, wavelengths.length - 1, 0, 1);
}

function draw() {
  background(0);
  fill(255);
  textSize(10);
  rect(0, height*3/4, width, height/4);
  for (w of wavelengths[gasSlider.value()]){
    stroke(getColor(w));
    line(cmap(w), 0, cmap(w), height*3/4);

    stroke(0);
    strokeWeight(2);
    line(cmap(w), height*3/4, cmap(w), height*13/16);
    strokeWeight(3);
    text(w, cmap(w), height*27/32);
  }
  textSize(12);
  for (w = 300; w < 800; w += 100){
    strokeWeight(2);
    line(cmap(w), height*3/4, cmap(w), height*7/8);
    strokeWeight(3);
    text(w, cmap(w), height*15/16);
  }
}

function f(l, a, b){
  return 256 * exp(-((l-(b+a)/2)/((b-a)/2))*((l-(b+a)/2)/((b-a)/2)));
}

function getColor(w){
  return color(f(w, 520, 630), f(w, 500, 590), f(w, 410, 480));
}

function cmap(w){
  return map(w, bottom_w, top_w, 0, width)
}