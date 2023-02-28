import { html, LitElement } from 'lit';

export class Translate extends LitElement {
  private key!: string;

  private innerUpdate: boolean = false;

  private spanElement!: HTMLSpanElement;

  // public functions
  public updateKey(key: string) {
    this.key = key;
    this.updateText();
  }

  public get parentNode() {
    return this;
  }

  // private functions
  private updateText = () => {
    if (!this.spanElement) return;
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

    // console.log("TEXT SHOULD BE", text);
    // this.text = text;
    this.innerUpdate = true;
    // this.innerText = text;
    this.spanElement.innerText = text;
  };

  // event functions
  private handleSlotChange(event: Event) {
    // console.log("UPDATE?")
    if (this.innerUpdate) {
      this.innerUpdate = false;
      return;
    }

    const slot = event.currentTarget as HTMLSlotElement;
    // console.log(slot.assignedNodes())
    const nodetext = slot.assignedNodes()?.[0]?.textContent;
    this.key = nodetext || '';

    if (nodetext === null) {
      throw new Error('You provided false key');
    }

    this.updateText();
  }

  // class functions
  connectedCallback() {
    super.connectedCallback();
    setTimeout(() => {
      const span = this.shadowRoot?.querySelector('span');
      if (span) this.spanElement = span;
      window.izTranslation?.subscribe(this.updateText);
    }, 1);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.izTranslation?.unsubscribe(this.updateText);
  }

  render() {
    return html`
      <span>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </span>
    `;
  }
}
