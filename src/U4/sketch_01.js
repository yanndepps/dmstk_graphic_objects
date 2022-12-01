/*
 * Intro to Creative Coding -> Create Graphic Objects
 * The Particle System
 */

const canvasSketch = require('canvas-sketch');
const p5 = require('p5');
new p5();

const settings = {
  p5: true,
  dimensions: [500, 500],
  animate: true,
};

const pNum = 10;
const dMin = 150;
const sz = 5;
let p = Array(pNum);

const sketch = ({ width, height }) => {
  for (let i = 0; i < pNum; i++) {
    p[i] = new Particle(random(0, width), random(0, height), sz);
  }
  return () => {
    background(33);
    fill(255);
    //---
    for (let i = 0; i < pNum; i++) {
      p[i].draw();
    }
    //---
    stroke(255);
    for (let i = 0; i < pNum; i++) {
      let pi = p[i];
      for (let j = i + 1; j < pNum; j++) {
        let pj = p[j];
        let d = dist(pi.x, pi.y, pj.x, pj.y);
        if (d < dMin) {
          line(pi.x, pi.y, pj.x, pj.y);
        }
      }
    }
  };
};

// --- Class Particle --- //
class Particle {
  constructor(x, y, sz) {
    this.x = x;
    this.y = y;
    this.sz = sz;
    this.vx = random(-2, 2);
    this.vy = random(-2, 2);
  }
  //---
  draw() {
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
    if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
      this.x = random(0, width);
      this.y = random(0, height);
    }
    //---
    circle(this.x, this.y, this.sz);
  }
}


canvasSketch(sketch, settings);
