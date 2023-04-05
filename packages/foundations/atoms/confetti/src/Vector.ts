export class Vector {
  public x: number;

  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add(x: number, y: number) {
    this.x += x;
    this.y += y;
  }

  normalise() {
    const m = this.Mag;
    this.x /= m;
    this.y /= m;
  }

  addVector(vector: Vector) {
    this.x += vector.x;
    this.y += vector.y;
  }

  get Angle() {
    return Math.atan2(this.y, this.x);
  }

  set Angle(value: number) {
    const m = this.Mag;
    this.x = m * Math.cos(value);
    this.y = m * Math.sin(value);
  }

  get Mag() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  set Mag(value: number) {
    this.normalise();
    this.x *= value;
    this.y *= value;
  }
}
