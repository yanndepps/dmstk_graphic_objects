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

window.preload = () => {
  //---
}

const sketch = () => {
  return ({ width, height }) => {
    background(33);
  };
};

canvasSketch(sketch, settings);
