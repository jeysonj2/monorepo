import { Particle } from './Particle.js';

export class ParticleSystem {
  private particles: Particle[];

  private x: number;

  private y: number;

  private height: number;

  private angle: number;

  private colors: string[];

  constructor(
    x: number,
    y: number,
    angle: number,
    height: number,
    colors: string[]
  ) {
    this.particles = [];
    this.x = x;
    this.y = y;
    this.height = height;
    this.colors = colors;
    this.angle = angle;
  }

  private getAngle(spread: number) {
    return this.angle - spread / 2 + Math.random() * spread;
  }

  private getColor() {
    const index = Math.round(Math.random() * (this.colors.length - 1));
    return this.colors[index];
  }

  burst(size: number, spread = Math.PI / 3) {
    for (let i = 0; i < size; i += 1) {
      this.particles.push(
        new Particle(
          this.x,
          this.y,
          Math.random() * 2 + 2,
          this.getAngle(spread),
          this.getColor(),
          0.6 + 0.8 * Math.random(),
          0.02
        )
      );
    }
  }

  update() {
    for (let i = 0; i < this.particles.length; i += 1) {
      const particle = this.particles[i];

      particle.update();

      if (particle.y > this.height) {
        this.particles.splice(i, 1);
        i -= 1;
      }
    }
  }

  render(ctx: CanvasRenderingContext2D) {
    this.particles.forEach(p => p.render(ctx));
  }
}
