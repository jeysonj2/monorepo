import { html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';

// web-components
import '@interzero/typography/wc';
import '@interzero-tools/translate/wc';
import '@interzero-icons/icon-error/wc';
import '@interzero-icons/icon-warning/wc';

// classes & types
import { InputTemplate } from '@interzero/input-template';
import type {
  StateEvent as HiddenStateEvent,
  ChangeEvent as HiddenChangeEvent,
} from '@interzero/input-template';

import { style } from './style.css.js';

// types & interfaces
type InputState = 'warning' | 'error' | 'success'; // |"info"; // NOTE info is not used now

export class Field extends LitElement {
  static styles = style;

  @property({ type: String }) label?: string;

  @property({
    type: Boolean,
    converter: value =>
      !!['true', true, ''].includes((value || '').toLowerCase()),
  })
  counter?: boolean;

  @property({ type: String }) help?: string;

  @state() private leftslot: boolean = false;

  @state() private rightslot: boolean = false;

  @state() private message: string | null = null;

  @state() private inputstate: InputState | 'help' = 'help';

  private counterValue: HTMLElement | null = null;

  private counterMax: HTMLElement | null = null;

  private slotChange(name: string) {
    return (event: Event) => {
      const slot = event.currentTarget as HTMLSlotElement;

      if (name === 'left') this.leftslot = !!slot;
      if (name === 'right') this.rightslot = !!slot;

      if (name === 'default') {
        const nodes = slot
          .assignedNodes()
          .filter(node => (node as any).INPUTTEMPLATE);

        if (nodes.length > 0) {
          this.updateDefaultSlot(nodes[0] as InputTemplate);
        }
      }
    };
  }

  private updateDefaultSlot(element: InputTemplate) {
    if (this.counterMax)
      this.counterMax.innerText = (element.maxlength || 0).toString();

    element.addEventListener('input-error', this.handleInputState('error'));
    element.addEventListener('input-warning', this.handleInputState('warning'));
    element.addEventListener('input-success', this.handleInputState('success'));
    element.addEventListener('input-change', this.handleInputChange);
  }

  private handleInputChange = (_event: Event) => {
    const event = _event as CustomEvent<HiddenChangeEvent>;
    if (this.counterValue) {
      this.counterValue.innerText = event.detail.value.length.toString();
    }
  };

  private handleInputState(inputState: InputState) {
    return (_event: Event) => {
      const event = _event as CustomEvent<HiddenStateEvent>;
      if (inputState === 'success') {
        // NOTE success will remove the previous set states
        this.inputstate = 'help';
      } else {
        this.inputstate = inputState;
        this.message = event.detail.message;
      }
    };
  }

  public displayMessage(message: string, type: InputState) {
    // this.messageState = {message,type};
    this.message = message;
    this.inputstate = type;
  }

  firstUpdated() {
    this.counterMax = this.shadowRoot!.querySelector('#counter-max');
    this.counterValue = this.shadowRoot!.querySelector('#counter-value');
  }

  render() {
    return html`
      <div class=${['left', this.leftslot ? 'show' : 'hide'].join(' ')}>
        <slot @slotchange=${this.slotChange('left')} name="left"></slot>
      </div>
      <div class=${['right', this.rightslot ? 'show' : 'hide'].join(' ')}>
        <slot @slotchange=${this.slotChange('right')} name="right"></slot>
      </div>

      <div class="field">
        <label for="target" class="${this.label ? 'show' : 'hide'}">
          <iz-typography variant="label"
            ><iz-translate>${this.label}</iz-translate></iz-typography
          >
        </label>
        <div id="target">
          <slot @slotchange=${this.slotChange('default')}></slot>
        </div>
        <div
          class=${`error message ${
            this.inputstate === 'error' ? 'show' : 'hide'
          }`}
        >
          <slot name="error-icon"><iz-icon-error></iz-icon-error></slot>
          <iz-typography variant="help"
            ><iz-translate>${this.message}</iz-translate></iz-typography
          >
        </div>

        <div
          class=${`success message ${
            this.inputstate === 'success' ? 'show' : 'hide'
          }`}
        >
          <slot name="success-icon"></slot>
          <iz-typography variant="help"
            ><iz-translate>${this.message}</iz-translate></iz-typography
          >
        </div>

        <div
          class=${`warning message ${
            this.inputstate === 'warning' ? 'show' : 'hide'
          }`}
        >
          <slot name="warning-icon"><iz-icon-warning></iz-icon-warning></slot>
          <iz-typography variant="help"
            ><iz-translate>${this.message}</iz-translate></iz-typography
          >
        </div>

        <div
          class=${`help message ${
            this.inputstate === 'help' ? 'show' : 'hide'
          }`}
        >
          <slot name="help-icon"></slot>
          <iz-typography variant="help"
            ><iz-translate>${this.help}</iz-translate></iz-typography
          >
        </div>

        <div class=${['counter', this.counter ? 'show' : 'hide'].join(' ')}>
          <iz-typography variant="help" id="counter-value">0</iz-typography>
          <iz-typography variant="help">/</iz-typography>
          <iz-typography variant="help" id="counter-max">0</iz-typography>
        </div>
      </div>
    `;
  }
}
