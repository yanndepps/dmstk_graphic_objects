/*
 * Intro to Creative Coding -> Create Graphic Objects
 * Composition -> Bruno Munari #1
 */

const canvasSketch = require('canvas-sketch');
const p5 = require('p5');
new p5();

const settings = {
  p5: true,
  dimensions: [500, 500],
  animate: true,
  context: '2d'
};

const ym = 400;
const ye = 150;
const de = 30;

const sketch = () => {
  strokeWeight(8);
  return () => {
    stroke(0);
    background(255);
    // vertical lines
    line(50, 50, 50, 450);
    line(150, 50, 150, 450);
    line(250, 50, 250, 450);
    line(350, 50, 350, 450);
    line(450, 50, 450, 450);
    // horizontal lines
    line(50, 50, 450, 50);
    line(50, 150, 450, 150);
    line(50, 250, 450, 250);
    line(50, 350, 450, 350);
    line(50, 450, 450, 450);
    // left eyebrow
    line(50, 150, 150, 50);
    line(150, 50, 250, 150);
    // right eyebrow
    line(250, 150, 350, 50);
    line(350, 50, 450, 150);
    // nose
    line(150, 250, 250, 350);
    line(250, 350, 350, 250);
    // mouth
    line(150, ym, 350, ym);
    // eyes
    fill(0);
    noStroke();
    circle(150, ye, de);
    circle(350, ye, de);
  };
};

canvasSketch(sketch, settings);
