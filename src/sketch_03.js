/*
 * Intro to Creative Coding -> Create Graphic Objects
 * Grids & Combinations
 * Four randomly distributed elements by Vera Molnar
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

let nb = 15;
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
        strokeWeight(2);
        let rnd = int(random(0, 4));
        if (rnd == 0) {
          line(x, y, x + dim, y + dim);
        } else if (rnd == 1) {
          line(x, y + dim, x + dim, y);
        } else if (rnd == 2) {
          line(x + dim / 2, y, x + dim / 2, y + dim);
        } else {
          line(x, y + dim / 2, x + dim, y + dim / 2);
        }
      }
    }
  };
};

canvasSketch(sketch, settings);
