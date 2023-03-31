import { LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';

// style import
import { style } from './style.css.js';

// types & interfaces
export type Size = 'small' | 'medium' | 'large';

export class IconBase extends LitElement {
  static style = style;

  @property() size?: Size = 'medium';

  @property() color?: string;

  @property({ type: Number }) rotate: number = 0;

  @property({ type: Number }) width?: number;

  @property({ type: Number }) height?: number;

  @state() protected inlineStyle!: string;

  protected getInlineStyle() {
    let styleCss: string = '';
    if (this.rotate !== undefined)
      styleCss += `transform: rotate(${this.rotate}deg);`;
    if (this.color !== undefined) styleCss += `color: ${this.color};`;
    return styleCss;
  }

  protected getSize() {
    let { width, height } = this;

    switch (this.size) {
      case 'small':
        width = 12;
        height = 12;
        break;
      case 'medium':
        width = 16;
        height = 16;
        break;
      case 'large':
        width = 24;
        height = 24;
        break;
      default:
        width = 16;
        height = 16;
        break;
    }

    // this.style.width = `${width}px`;
    // this.style.height = `${height}px`;

    return { width, height };
  }
}
