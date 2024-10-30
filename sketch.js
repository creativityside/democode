let bubbles = [];
// arry is placed in the let indicated as "[]" empty array


function setup() {
 let canvas = createCanvas(600, 400);
 canvas.parent("Project1.2")
  for (let i = 0; i < 5; i++){
  let x = random(width);
  let y = random(height);
  let r = random(10, 50);
  
   let b = new Bubble (x, y, r);
   bubbles.push(b);
  }
}

// function mouseDragged(){
//   let r = random(10, 50);
//   let b = new Bubble(mouseX, mouseY, r);

//   bubbles.push(b);
//   //this is great for design, unique 
// }

function draw() {
  background(0);

 for (let i = 0; i < bubbles.length; i++){

 bubbles[i].move();
 bubbles[i].show();
}
}

function mousePressed(){
  for (let i = 0; i < bubbles.length; i++){
    bubbles[i].click(mouseX, mouseY);
  }
 
}
class Bubble {
  constructor(tempX, tempY, tempR) {
    this.x = tempX;
    this.y = tempY;
    this.r = tempR;
    this.brightness = 0;
  }

click(px, py){
  let d = dist(px, py, this.x, this.y);

  if (d < this.r){
    this.brightness = 125;
    console.log("clicked on bubble");
  }
  

}

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness);
    ellipse(this.x, this.y, this.r * 2);
  }
}

// for and arrays in my ideas it is like you have a custom function and then you have the let function to have acess to place varibles, this creats a uniqe code!

// addd no stroke and fill to make sure that it is a object for display 
//class helps out the let by defining the functions