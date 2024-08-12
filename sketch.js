function setup() {
    createCanvas(600, 600);
    background("rgb(0,255,158)");
  }
  
  function draw() {
    
    stroke("red");
    fill("purple");
    
    // console.log(mouseIsPressed)
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 40, 65);
    }
  }
