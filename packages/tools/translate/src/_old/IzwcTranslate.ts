import { html, LitElement } from 'lit';
import { state } from 'lit/decorators.js';

// const EXCLUDE_LIST:string[] = [];
export class Translate extends LitElement {
  @state() text!: string;

  private key!: string;

  get innerText() {
    return this.text;
  }

  set innerText(value: string) {
    this.updateKey(value);
  }

  connectedCallback() {
    super.connectedCallback();
    window.izTranslation?.subscribe(this.updateText);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.izTranslation?.unsubscribe(this.updateText);
  }

  attributeChangedCallback(
    name: string,
    _old: string | null,
    value: string | null
  ): void {
    super.attributeChangedCallback(name, _old, value);

    // NOTE if any specific attributes we dont want include them in the exclude list
    // if (EXCLUDE_LIST.includes(name)) return;
  }

  public updateKey(key: string) {
    this.key = key;
    this.updateText();
  }

  private updateText = () => {
    let text =
      window.izTranslation?.current?.translations?.[this.key] || this.key;
    if (text === undefined && this.key === undefined) return;

    const regex = /{([^{}]+)}/g;
    const matches = text.match(regex);

    if (matches) {
      matches.forEach(variable => {
        const sliced = variable.slice(1, -1);
        const value = this.getAttribute(sliced);
        if (value) {
          text = text.replace(variable, value);
        }
      });
    }

    this.text = text;
  };

  private handleSlotChange(event: Event) {
    const slot = event.currentTarget as HTMLSlotElement;

    const nodetext = slot.assignedNodes()?.[0].textContent;
    this.key = nodetext || '';

    // console.log('slot changed??', nodetext);

    if (nodetext === null) {
      throw new Error('You provided false key');
    }

    this.updateText();
  }

  render() {
    return html`
      <slot style="display:none;" @slotchange=${this.handleSlotChange}></slot>
      ${this.text}
    `;
  }
}
