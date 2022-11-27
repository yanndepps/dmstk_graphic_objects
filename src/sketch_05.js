/*
 * Intro to Creative Coding -> Create Graphic Objects
 * Compound shapes 01
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

let nb = 30;
let rot = 1;
let dim = 350;
let fMin = 0.01; // 0.2

const sketch = () => {
  rectMode(CENTER);
  angleMode(DEGREES);
  return ({ width, height }) => {
    background(33);
    translate(width / 2, height / 2);
    noFill();
    stroke(255);
    for (let i = 0; i < nb; i++) {
      f = map(i, 0, nb - 1, 1, fMin);
      square(0, 0, f * dim);
      rotate(rot);
    }
  };
};

canvasSketch(sketch, settings);
