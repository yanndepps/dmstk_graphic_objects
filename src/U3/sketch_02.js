/*
 * Intro to Creative Coding -> Create Graphic Objects
 * pattern grids 02
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

let nb = 12;
let dim;
let f = 0.9;
let margin = 20;
let freq = 2.0;
let x, y;
let dephase = 180.0;

const sketch = ({ width }) => {
  dim = (width - 2 * margin) / nb;
  angleMode(DEGREES);
  return ({ time }) => {
    background(0);
    noStroke();
    fill(255);
    // ---
    // f = sin(freq * frameCount);
    for (let j = 0; j < nb; j++) {
      for (let i = 0; i < nb; i++) {
        x = margin + dim / 2 + i * dim;
        y = margin + dim / 2 + j * dim;
        f = sin(freq * (time * 30) + dephase * dist(width / 2, height / 2, x, y));
        circle(x, y, f * dim);
      }
    }
  };
};

canvasSketch(sketch, settings);
