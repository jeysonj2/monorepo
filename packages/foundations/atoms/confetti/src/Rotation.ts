import { Vector } from './Vector.js';

export class Rotation {
  private speed: number;

  public value: number = 0;

  constructor(defaultRotation: number) {
    this.value = defaultRotation;
    const cos = Math.cos(defaultRotation);
    const sin = Math.sin(defaultRotation);

    if (Math.abs(cos) < Math.abs(sin)) {
      this.speed = cos * (0.04 + Math.random() * 0.1);
    } else {
      this.speed = sin * (0.04 + Math.random() * 0.1);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(_vector: Vector) {
    this.value += this.speed;
  }
}
