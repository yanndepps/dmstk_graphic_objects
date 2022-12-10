/*
 * Intro to Creative Coding -> Create Graphic Objects
 * Construction of Interactive Words #1
 */

const canvasSketch = require('canvas-sketch');
const p5 = require('p5');
new p5();

const settings = {
  p5: true,
  dimensions: [512, 512],
  animate: true,
  context: '2d'
};

/*
 * @param font         // load & store our font
 * @param points       // outline our txt with points
 * @param xTxt         // x pos of our text
 * @param yTxt         // y pos or our text
 * @param fs           // font size
 * @param txt          // text to display
 * @param cs           // circle size, diameter of a point
 */

let font;
let points;
let xTxt;
let yTxt;
const fs = 130;
const txt = "YES&NO";
const cs = 4;

window.preload = () => {
  font = loadFont('../../assets/font/bauhaus.otf');
};

const sketch = ({ width, height }) => {
  xTxt = width / 2;
  yTxt = height / 2;
  return () => {
    // computePoints(map(mouseX, 0, width, 0.005, 0.1));
    computePoints(0.01);
    background(33);
    //---
    noFill();
    stroke(255);
    strokeWeight(1);
    beginShape();
    for (let i = 0; i < points.length; i++) {
      vertex(points[i].x, points[i].y);
    }
    endShape();
    //---
    strokeWeight(0.5);
    fill(33);
    for (let i = 0; i < points.length; i++) {
      circle(points[i].x, points[i].y, cs);
    }
  };
};

/*
 */

function computePoints(factor) {
  points = font.textToPoints(txt, xTxt, yTxt, fs, {
    sampleFactor: factor
  });
  let bounds = font.textBounds(txt, xTxt, yTxt, fs);
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    p.x = p.x - (bounds.x - xTxt + bounds.w / 2);
    p.y = p.y + bounds.h / 2;
  }
}

canvasSketch(sketch, settings);
