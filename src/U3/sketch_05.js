/*
 * Intro to Creative Coding -> Create Graphic Objects
 * Compound shapes
 */

const canvasSketch = require('canvas-sketch');
const Tweakpane = require('tweakpane');
const p5 = require('p5');
new p5();

const settings = {
  p5: true,
  dimensions: [500, 500],
  animate: true,
  context: '2d'
};

const params = {
  nb: 30,
  rot: 1,
  dim: 350,
  f: 1,
  fMin: 0.2
};

// let nb = params.nb;
// let rot = params.rot;
let dim = params.dim;
let f = params.f;
// let fMin = params.fMin; // 0.2

const sketch = () => {
  rectMode(CENTER);
  angleMode(DEGREES);
  return ({ width, height }) => {
    background(33);
    translate(width / 2, height / 2);
    stroke(255);
    noFill();
    for (let i = 0; i < params.nb; i++) {
      f = map(i, 0, params.nb - 1, 1, params.fMin);
      square(0, 0, f * dim);
      rotate(params.rot);
    }
  };
};

const createPane = () => {
  const pane = new Tweakpane.Pane();
  let folder;
  folder = pane.addFolder({ title: 'parameters' });
  folder.addInput(params, 'fMin', { min: 0.0, max: 1.0, step: 0.01 });
  folder.addInput(params, 'rot', { min: -180, max: 180, step: 1 });
  folder.addInput(params, 'nb', { min: 2, max: 50, step: 1 });
  //---
};

createPane();

canvasSketch(sketch, settings);
