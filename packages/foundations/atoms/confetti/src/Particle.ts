import { Rotation } from './Rotation.js';
import { Vector } from './Vector.js';

const WIDTH = 10;
const HEIGHT = 10;
export class Particle extends Vector {
  private vel: Vector;

  private color: string;

  private size: number = 0.2;

  private maxsize: number;

  private gravity: number;

  private rotation: Rotation;

  private counter: number = 0;

  private sinmag: number = 0;

  private counterINC: number = 0;

  private sinmagINC: number = 0;

  constructor(
    x: number,
    y: number,
    speed: number,
    direction: number,
    color: string,
    size: number,
    gravity: number = 0.08
  ) {
    super(x, y);

    this.vel = new Vector(speed, 0);
    this.vel.Angle = direction;
    this.rotation = new Rotation(direction);
    this.gravity = gravity;
    this.color = color;
    this.maxsize = size;

    this.counter = 10; // Math.random() * 10;
    this.counterINC = 0.2; // Math.random() * 0.2 + 0.05;
    this.sinmagINC = 0.03; // Math.random() * 0.1 + 0.05;
  }

  update() {
    this.addVector(this.vel);
    this.vel.add(0, this.gravity);

    this.rotation.update(this.vel);

    // this.x += Math.sin(this.counter) * 2;
    // this.y += Math.cos(this.counter) * 2;

    this.vel.x *= 0.998;
    this.vel.y *= 0.998;

    if (this.size < this.maxsize) {
      this.size *= 1.07;
    }

    // this.x += Math.sin(this.counter) * (2 + this.sinmag);

    // this.counter -= this.counterINC;
    // this.sinmag += this.sinmagINC;
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.save();
    // ctx.translate(this.x, this.y);
    ctx.transform(this.size, 0, 0, this.size, this.x, this.y);
    ctx.rotate(this.rotation.value);
    ctx.rect(-WIDTH / 2, -HEIGHT / 2, WIDTH, HEIGHT);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.restore();
    ctx.closePath();
  }
}
