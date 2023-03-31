import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

// web-component
import "@interzero/button/wc";
import "@interzero/typography/wc";

// tools
import "@interzero-tools/translate/wc";

// style import
import { style } from './style.css.js';

// types 
export type Answer = { question: string, option: string, questionId: string|"final-screen", optionid: string };

export class FlowRoadmap extends LitElement {
  static styles = style;
  private static instance: FlowRoadmap;

  @property({ type: Array }) answers:Answer[] = [];

  constructor() {
    super();
    if (!FlowRoadmap.instance) FlowRoadmap.instance = this;
  }

  // events 
  private handleClick(answer:Answer) {
    return () => {
      this.dispatchEvent(new CustomEvent<Answer>("select", { detail: answer }));
    }
  }

  render() {
    return html`
      ${this.answers.map(answer => html`
        <span>
          <iz-button variant="text" size="small" @click=${this.handleClick(answer)}>
            ${answer.questionId === "final-screen" 
              ? html`<iz-translate>Overview Screen</iz-translate>` 
              : html`<iz-typography>${answer.question}: ${answer.option}</iz-typography>`
            }
          </iz-button>
        </span>
      `)} 
    `;
  }
}
