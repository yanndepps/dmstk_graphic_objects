/*
 * Intro to Creative Coding -> Create Graphic Objects
 * pattern grids 01
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

let nb = 20;
let dim;
let f = 0.9;
let margin = 20;

const sketch = ({ width, height }) => {
  dim = (width - 2 * margin) / nb;
  return () => {
    background(0);
    noStroke();
    fill(255);
    for (let j = 0; j < nb; j++) {
      for (let i = 0; i < nb; i++) {
        circle(margin + dim / 2 + i * dim, margin + dim / 2 + j * dim, f * dim);
      }
    }
  };
};

canvasSketch(sketch, settings);
