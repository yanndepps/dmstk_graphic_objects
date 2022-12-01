/*
 * Intro to Creative Coding -> Create Graphic Objects
 * The Particle System, part 01
 */

const canvasSketch = require('canvas-sketch');
const p5 = require('p5');
new p5();

const settings = {
  p5: true,
  dimensions: [500, 500],
  animate: true,
};

const sketch = () => {
  return ({ width, height }) => {
    background(33);
  };
};

canvasSketch(sketch, settings);
