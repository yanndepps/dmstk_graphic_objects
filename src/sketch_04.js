/*
 * Intro to Creative Coding -> Create Graphic Objects
 * Grids & Combinations
 * Truchet Tessellation
 */

const canvasSketch = require('canvas-sketch');
const p5 = require('p5');
new p5();

const settings = {
  p5: true,
  dimensions: [500, 500],
  animate: false,
  context: '2d'
};

let nb = 25;
let dim;
let margin = 20;
let x, y;

const sketch = ({ width }) => {
  dim = (width - 2 * margin) / nb;
  return () => {
    background(255);
    // ---
    for (let j = 0; j < nb; j++) {
      for (let i = 0; i < nb; i++) {
        x = margin + i * dim;
        y = margin + j * dim;
        // ---
        // grid
        // noFill();
        // stroke(220, 45);
        // strokeWeight(1);
        // rect(x, y, dim, dim);
        // ---
        // pattern
        stroke(0);
        fill(0);
        let rnd = int(random(0, 4));
        if (rnd == 0) {
          triangle(x + dim, y, x + dim, y + dim, x, y + dim);
        } else if (rnd == 1) {
          triangle(x, y, x + dim, y, x, y + dim);
        } else if (rnd == 2) {
          triangle(x, y, x + dim, y + dim, x, y + dim);
        } else {
          triangle(x, y, x + dim, y, x + dim, y + dim);
        }
      }
    }
  };
};

canvasSketch(sketch, settings);
