import { html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';

// web-components
// atoms
import '@interzero/button/wc';
import '@interzero/input/wc';
// molecules
import '@interzero/field/wc';
import '@interzero/option/wc';
// organisms
import '@interzero/popup/wc';
import '@interzero/dropdown/wc';

// tools
import '@interzero-tools/translate/wc';

// icons
import '@interzero-icons/icon-close/wc';

// classes
import { Popup } from '@interzero/popup';

// style import
import { style } from './style.css';

// type exports
export type PriceAffectionType = 'multiplication' | 'addition';
export type Data = Partial<{
  priceAffection: number;
  priceAffectionType: PriceAffectionType;
  value: string;
  id: string;
  parent: string;
}>;
// event types
export type SubmitEventType = {
  id?: string;
  parent?: string;
  value: string;
  priceAffection: string;
  priceAffectionType: PriceAffectionType;
};
export type RemoveEventType = { id: string; parent?: string };

export class FlowOptionPopup extends LitElement {
  static styles = style;

  @property({ type: Object }) data?: Data | null;

  @query('iz-popup') popupElement!: Popup;

  // events
  private handleRemove() {
    this.dispatchEvent(
      new CustomEvent<RemoveEventType>('remove', {
        detail: { id: this.data?.id as string, parent: this.data?.parent },
      })
    );
  }

  private handleSubmit = (event: Event) => {
    const formdata = new FormData(event.target as HTMLFormElement);

    const value = formdata.get('value') as string;
    const priceAffection = formdata.get('priceAffection') as string;
    const priceAffectionType = formdata.get(
      'priceAffectionType'
    ) as PriceAffectionType;

    this.dispatchEvent(
      new CustomEvent<SubmitEventType>('submit', {
        detail: {
          id: this.data?.id,
          parent: this.data?.parent,
          value,
          priceAffection,
          priceAffectionType,
        },
      })
    );
  };

  // public function
  public hide() {
    this.popupElement.hide();
  }

  public show() {
    this.popupElement.show();
  }

  render() {
    return html`
      <form @submit=${this.handleSubmit}>
        <iz-popup
          hideonoutsideclick
          .headerTitle=${this.data === undefined ? 'add option' : 'edit option'}
        >
          <iz-field label="Value">
            <iz-input
              required
              name="value"
              placeholder="Type a value"
              value=${this.data?.value || ''}
            ></iz-input>
          </iz-field>
          <iz-field label="Price Affection">
            <iz-input
              required
              type="number"
              name="priceAffection"
              placeholder="Type a price-affection"
              value=${this.data?.priceAffection || ''}
            ></iz-input>
          </iz-field>
          <iz-field label="Price Affection Type">
            <iz-dropdown
              placeholder="Select a Price Affection Type"
              value=${this.data?.priceAffectionType || ''}
              name="priceAffectionType"
            >
              <iz-option variant="plain" value="multiplication">
                <iz-translate>multiplication</iz-translate>
              </iz-option>
              <iz-option variant="plain" value="addition">
                <iz-translate>addition</iz-translate>
              </iz-option>
            </iz-dropdown>
          </iz-field>

          ${this.data === undefined ||
          this.data === null ||
          this.data.id === undefined
            ? html`
                <iz-button slot="footer" type="submit">
                  <iz-translate>add</iz-translate>
                </iz-button>
              `
            : html`
                <iz-button slot="footer" type="submit">
                  <iz-translate>save</iz-translate>
                </iz-button>
                <iz-button slot="footer" @click=${this.handleRemove}>
                  <iz-translate>delete</iz-translate>
                </iz-button>
              `}
        </iz-popup>
      </form>
    `;
  }
}
