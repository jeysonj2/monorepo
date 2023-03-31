import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

// web-components
import "@interzero/button/wc";
import "@interzero/checkbox/wc";

// tools
import "@interzero-tools/translate/wc";

// icons
import "@interzero-icons/icon-close/wc";

// style import
import { style } from './style.css';

// type exports
export type Variant = 'default' | 'edit' | 'add';

// event type exports
export type ClickEvent = { id: string; };

export class FlowButton extends LitElement {
  static styles = style;

  @property() value!:string;
  @property() variant:Variant = 'default';
  @property({ type: Boolean }) checked: boolean = false;

  // events
  private handleClick(event:Event) {
    this.dispatchEvent(new CustomEvent<ClickEvent>("toggle", { detail: { id: this.getAttribute("id") as string } }));
  }
  private handleEditClick(event:Event) {
    this.dispatchEvent(new CustomEvent<ClickEvent>("edit", { detail: { id: this.getAttribute("id") as string } }));
  }
  private handleAddClick(event:Event) {
    this.dispatchEvent(new Event("add"));
  }

  render() {
    if (this.variant === "add")
    {
      return html`
        <iz-button @click=${this.handleAddClick}>
          <iz-icon-close size="large" rotate="45"></iz-icon-close>
        </iz-button>
      `;
    }

    const main = html`
      <iz-button @click=${this.handleClick}>
        <iz-checkbox checked=${this.checked}></iz-checkbox>
        ${this.value}
      </iz-button>
    `;

    if (this.variant === "default") return main;

    return html`
      ${main}
      <iz-button size="small" @click=${this.handleEditClick}>
        <iz-translate>edit</iz-translate>
      </iz-button>
    `;
  }
}
