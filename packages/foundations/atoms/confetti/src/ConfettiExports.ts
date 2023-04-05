import { html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';

// local import
import { style } from './style.css';
import { ParticleSystem } from './ParticleSystem.js';

// types & interfaces
type TB = 'top' | 'center' | 'bottom';
type LR = 'left' | 'center' | 'right';

export type Placement = `${TB}-${LR}`;

// helper functions
function wait(n: number) {
  return new Promise(res => {
    setTimeout(res, n);
  });
}

export class Confetti extends LitElement {
  static styles = style;

  @property({ type: Array }) placements: Placement[] = ['top-left'];

  @property({ type: Number }) width!: number;

  @property({ type: Number }) height!: number;

  @property({ type: Boolean }) playPopSound: boolean = true;

  @property({ type: Boolean }) playYaySound: boolean = true;

  @query('canvas')
  private canvas!: HTMLCanvasElement;

  private updater: number = -1;

  private ctx!: CanvasRenderingContext2D;

  private particlesystems: ParticleSystem[] = [];

  private popSound = new Audio('/dist/src/sound/pop.mp3');

  private yaySound = new Audio('/dist/src/sound/yay.mp3');

  connectedCallback() {
    super.connectedCallback();

    setTimeout(() => {
      if (!this.width) this.width = this.clientWidth || 200;
      if (!this.height) this.height = this.clientHeight || 200;

      this.canvas.width = this.width;
      this.canvas.height = this.height;
      const ctx = this.canvas.getContext('2d');
      if (ctx) this.ctx = ctx;

      this.placements.forEach(placement => {
        this.particlesystems.push(this.getPS(placement));
      });

      this.gameloop();
    }, 10);
  }

  private getPS(placement: Placement) {
    let x: number = 0;
    let y: number = 0;
    let angle: number = -Math.PI / 2;

    switch (placement) {
      case 'top-left':
        angle = Math.PI / 3;
        break;
      case 'top-center':
        x = this.width / 2;
        angle = Math.PI / 2;
        break;
      case 'top-right':
        x = this.width;
        angle = (Math.PI * 2) / 3;
        break;
      case 'center-left':
        y = this.height / 2;
        angle = 0;
        break;
      case 'center-right':
        y = this.height / 2;
        x = this.width;
        angle = Math.PI;
        break;
      case 'bottom-left':
        y = this.height;
        angle = (Math.PI * 5) / 3;
        break;
      case 'bottom-center':
        x = this.width / 2;
        y = this.height;
        angle = (Math.PI * 3) / 2;
        break;
      case 'bottom-right':
        x = this.width;
        y = this.height;
        angle = (Math.PI * 4) / 3;
        break;
      default:
        x = this.width / 2;
        y = this.height / 2;
    }

    return new ParticleSystem(x, y, angle, this.height, [
      'yellow',
      'cornflowerblue',
      'red',
      'green',
      'orange',
    ]);
  }

  private update_canvas() {
    this.particlesystems.forEach(ps => ps.update());
  }

  private render_canvas() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.particlesystems.forEach(ps => ps.render(this.ctx));
  }

  private gameloop = () => {
    this.update_canvas();
    this.render_canvas();
    this.updater = window.requestAnimationFrame(this.gameloop);
  };

  public async shoot(randomDelayMax = 800, amount = 20, spread = Math.PI / 3) {
    if (this.playYaySound) {
      this.yaySound.pause();
      this.yaySound.currentTime = 0;
      this.yaySound.play();
    }
    for (const ps of this.particlesystems) {
      if (this.playPopSound) {
        this.popSound.pause();
        this.popSound.currentTime = 0;
        this.popSound.play();
      }
      ps.burst(Math.floor(amount + Math.random() * amount), spread);
      // FIXME with generator functions
      // eslint-disable-next-line no-await-in-loop
      await wait(
        Math.floor(Math.random() * randomDelayMax + randomDelayMax / 2)
      );
    }
  }

  public start() {
    this.gameloop();
  }

  public stop() {
    window.cancelAnimationFrame(this.updater);
  }

  render() {
    return html`
      <canvas
        >You need JavasScript enabled to run HTML5 canvas! Consider switching to
        Chrome..</canvas
      >
    `;
  }
}
