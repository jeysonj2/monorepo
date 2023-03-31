import { html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';

// web-components
import "@interzero/confetti/wc";
import "@interzero/button/wc";


// style import
import { style } from './style.css.js';
import { Confetti } from '@interzero/confetti';

export class FlowEnd extends LitElement {
  static styles = style;

  @query('iz-confetti') confettiElement!: Confetti;

  public play() {
    this.confettiElement.shoot();
  }

  private handleClick () {
    this.play();
    this.dispatchEvent(new Event("done"));
  }

  render() {
    return html`
      <iz-confetti .placements=${["bottom-left", "bottom-right"]}></iz-confetti>

      <div>
        <iz-button @click=${this.handleClick}>DONE</iz-button>
      </div>
    `;
  }
}
