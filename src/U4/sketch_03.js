/*
 * Intro to Creative Coding -> Create Graphic Objects
 * Create a Typography
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

let font;
let points;

window.preload = () => {
  font = loadFont('../../assets/font/bauhaus.otf');
};

const sketch = () => {
  noStroke();
  points = font.textToPoints("YES", 10, 300, 200, {
    sampleFactor: 0.1
  });
  return () => {
    background(33);
    for (let i = 0; i < points.length; i++) {
      circle(points[i].x, points[i].y, 4);
    }
  };
};

canvasSketch(sketch, settings);
