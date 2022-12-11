/*
 * Intro to Creative Coding -> Create Graphic Objects
 * The Flow Field
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

/*
 * Create x number of particles, with aging alpha, random noise angle
 * and noise scale
 *
 * @param pNum           // num of particles
 * @param br             // borders top/bottom, left/right
 * @param ns             // noise scale
 * @param am             // max age of the particle alphas
 * @param na             // noise angle
 * @param np             // noise speed
 * @param p              // an array of x (pNum) number of particles
 */

const pNum = 1500;
let br;
let ns = 0.03;
let am = 64;
let na = int(random(-180, 180));
let np = 8;
let p = Array(pNum);

const sketch = ({ width, height }) => {
  angleMode(DEGREES);
  background(33);
  br = ceil(width * 0.050);
  console.log('na -> ', na);
  console.log('br -> ', br);
  for (let i = 0; i < pNum; i++) {
    p[i] = new Particle(random(br, width - br), random(br, height - br));
  }
  return ({ frame }) => {
    // fill(255, 128);
    stroke(255, map(frame, 1, am, 255, 0));
    //---
    for (let i = 0; i < pNum; i++) {
      p[i].draw();
    }
    //---
  };
};

// --- Class Particle --- //
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = random(-2, 2);
    this.vy = random(-2, 2);
  }
  //---
  draw() {
    let n = na * noise(ns * this.x, ns * this.y);
    this.vx = np * cos(n);
    this.vy = np * sin(n);
    //---
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
    if (this.x < br || this.x > width - br || this.y < br || this.y > height - br) {
      this.x = random(br, width - br);
      this.y = random(br, height - br);
    }
    //---
    point(this.x, this.y);
  }
}


canvasSketch(sketch, settings);
