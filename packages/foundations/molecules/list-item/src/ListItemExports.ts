import { html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';

// web-components
import "@interzero/button/wc";

// icons
import "@interzero-icons/icon-close/wc";
import "@interzero-icons/icon-list/wc";

// types 
import type { Size } from '@interzero/button';

// style import
import { style } from './style.css.js';

export class ListItem extends LitElement {
  static styles = style;

  @property({ type: Boolean }) deletable = true;
  @property({ type: Boolean }) draggable = true;
  @property() size:Size = 'medium';

  @state() dragged: boolean = false;

  // class functions
  connectedCallback(): void {
    super.connectedCallback();

    if (!this.hasAttribute('size')) this.setAttribute('size', this.size);

    setTimeout(() => {
      const divitem = this.shadowRoot?.querySelector("div.item");
      if (divitem)
      {
        divitem.addEventListener("mousedown", this.handleClick);
      }
    }, 10);
    window.addEventListener("mouseup", this.handleClickUp);

  }
  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener("mouseup", this.handleClickUp);
  }

  // event functions
  private handleClick = (event:Event) => {
    if (!this.draggable) return;
    this.dragged = true;
  }
  private handleClickUp = () => {
    if (!this.draggable) return;
    this.dragged = false;
  }
  private handleRemove(event:Event) {
    event.preventDefault();
    this.dispatchEvent(new Event("remove"));
  }

  render() {
    return html`
      <div class=${["item", this.dragged ? "dragged" : ""].join(" ")}>
        <div><slot></slot></div>
        ${this.dragged ? html`<iz-icon-list size="large" density="medium"></iz-icon-list>` : null}
      </div>
      ${(this.deletable && !this.dragged) ? html`
        <iz-button @click=${this.handleRemove} size=${this.size} variant="square">
          <iz-icon-close></iz-icon-close>
        </iz-button>
      ` : null}
    `;
  }
}
