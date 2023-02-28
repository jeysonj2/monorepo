export class Translate extends HTMLElement {
  private key!: string;

  private spanElement!: HTMLSpanElement;

  private slotElement!: HTMLSlotElement;

  private shadowRootElem!: ShadowRoot;

  // getters & setters
  get Key() {
    return this.key;
  }

  set Key(value: string | null) {
    if (typeof value === 'string') {
      this.key = value.replace(/<!--\?lit.*?>(.*)/, '$1');
    } else this.key = '';

    this.updateText();
  }

  set innerText(value) {
    this.Key = value;
  }

  get innerText() {
    return this.spanElement.innerText;
  }

  set innerHTML(value) {
    this.Key = value;
  }

  get innerHTML() {
    return this.spanElement.innerText;
  }

  constructor() {
    super();
    this.shadowRootElem = this.attachShadow({ mode: 'open' });
  }

  // class functions
  connectedCallback() {
    this.slotElement = document.createElement('slot');
    this.slotElement.style.display = 'none';
    this.slotElement.addEventListener('slotchange', this.handleSlotChange);
    this.spanElement = document.createElement('span');

    this.shadowRootElem.appendChild(this.spanElement);
    this.shadowRootElem.appendChild(this.slotElement);

    window.izTranslation?.subscribe(this.updateText);
  }

  disconnectedCallback() {
    window.izTranslation?.unsubscribe(this.updateText);
  }

  // event functions
  private handleSlotChange = () => {
    const nodetext = this.slotElement.assignedNodes()?.[0]?.textContent;
    this.Key = nodetext;
  };

  // public functions
  public updateKey(value: string) {
    this.Key = value;
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

    this.spanElement.innerText = text;
  };
}
