/*
 * Intro to Creative Coding -> Create Graphic Objects
 * Construction of Interactive Words #2
 */

const canvasSketch = require('canvas-sketch');
const Tweakpane = require('tweakpane');
const p5 = require('p5');
new p5();

const settings = {
  p5: true,
  dimensions: [512, 512],
  animate: true,
  fps: 60,
  duration: 6,
  loop: true,
  context: '2d'
};

/*
 * @param font         // load & store our font
 * @param points       // outline our txt with points
 * @param xTxt         // x pos of our text
 * @param yTxt         // y pos or our text
 * @param fs           // font size
 * @param message      // text to display
 * @param cs           // circle size, diameter of a point
 * @param factor       // sample factor
 */

const params = {
  factor: 0.1,
  cs: 4,
  sw: 0.5,
  lw: 1,
  message: 'YES&NO',
  fs: 130,
}

let font;
let points;
let xTxt;
let yTxt;
let speed = 2;

window.preload = () => {
  font = loadFont('../../assets/font/bauhaus.otf');
};

const sketch = ({ width, height }) => {
  angleMode(DEGREES);
  xTxt = width / 2;
  yTxt = height / 2;
  return ({ frame }) => {
    // computePoints(map(mouseX, 0, width, 0.005, 0.1));
    computePoints(params.factor);
    background(33);
    //---
    noFill();
    stroke(255);
    strokeWeight(params.lw);
    beginShape();
    for (let i = 0; i < points.length; i++) {
      vertex(points[i].x, points[i].y);
    }
    endShape();
    //---
    fill(33);
    strokeWeight(params.sw);
    let d = 0;
    let phase = 0;
    for (let i = 0; i < points.length; i++) {
      phase = dist(mouseX, mouseY, points[i].x, points[i].y);
      d = sin(speed * frame + phase);
      circle(points[i].x, points[i].y, d * params.cs);
    }
  };
};

/*
 */

function computePoints(factor) {
  points = font.textToPoints(params.message, xTxt, yTxt, params.fs, {
    sampleFactor: factor
  });
  let bounds = font.textBounds(params.message, xTxt, yTxt, params.fs);
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    p.x = p.x - (bounds.x - xTxt + bounds.w / 2);
    p.y = p.y + bounds.h / 2;
  }
}

const createPane = () => {
  const pane = new Tweakpane.Pane();
  let folder;
  folder = pane.addFolder({ title: 'parameters' });
  folder.addInput(params, 'factor', { min: 0.01, max: 0.2, step: 0.01 });
  folder.addInput(params, 'cs', { min: 1, max: 32, step: 1 });
  folder.addInput(params, 'sw', { min: 0.5, max: 4, step: 0.1 });
  folder.addInput(params, 'lw', { min: 0.5, max: 4, step: 0.1 });
  folder = pane.addFolder({ title: 'text' });
  folder.addInput(params, 'message');
  folder.addInput(params, 'fs', { min: 80, max: 130, step: 10 });
};
createPane();

canvasSketch(sketch, settings);
