import { property } from 'lit/decorators.js';

import { FormElement } from '@interzero/form-element';

// style import
import { style } from './style.css.js';

type BaseErrorTypes =
  | 'badInput'
  | 'customError'
  | 'patternMismatch'
  | 'rangeOverflow'
  | 'rangeUnderflow'
  | 'stepMismatch'
  | 'tooLong'
  | 'tooShort'
  | 'valid'
  | 'typeMismatch'
  | 'valueMissing';

export type ErrorTypes = BaseErrorTypes | 'matchOther'; // custom error type to match other values inside the same form

export type Errors = Partial<{ [key in ErrorTypes]: string }>;

export interface IEvent<E = HTMLInputElement> extends Event {
  target: EventTarget & E;
}

export interface StateEvent {
  message: string | null;
  type: 'error' | 'warning' | 'success';
}
export interface ChangeEvent {
  value: string;
}

export interface InputEventMap {
  'input-warning': CustomEvent<StateEvent>;
  'input-success': CustomEvent<StateEvent>;
  'input-error': CustomEvent<StateEvent>;
  'input-change': CustomEvent<ChangeEvent>;
}

// type OptionsAdd = boolean | AddEventListenerOptions;
// type OptionsRemove = boolean | EventListenerOptions;
// export interface InputTemplate extends EventTarget {
//   addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: OptionsAdd): void;
//   addEventListener<K extends keyof InputEventMap>(type: K, listener: (this: InputTemplate, ev: InputEventMap[K]) => void, options?: OptionsAdd): void;
//   removeEventListener<K extends keyof InputEventMap>(type: K, listener: (this: InputTemplate, ev: InputEventMap[K]) => void, options?: OptionsRemove): void;
//   removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: OptionsRemove): void;
// }

// classes
export class InputTemplate extends FormElement {
  static styles = style;

  private __formelement?: HTMLFormElement | null;

  private __hiddeninput?: HTMLInputElement;

  private otherInput?: HTMLInputElement;

  private suspenseTimer: number = -1;

  public INPUTTEMPLATE = true;

  @property({
    type: Boolean,
    converter: value =>
      !!['true', true, ''].includes((value || '').toLowerCase()),
  })
  required?: boolean;

  @property() name?: string;

  @property() type: string = 'text';

  @property() value?: string;

  @property() defaultValue?: string;

  @property({ type: Number }) min?: number;

  @property({ type: Number }) max?: number;

  @property({ type: Number }) minlength?: number;

  @property({ type: Number }) maxlength?: number;

  @property() pattern?: string;

  @property() matchOther?: string;

  @property({ type: Boolean }) validateAtStart: boolean = false;

  @property({ type: Boolean }) includeAllErrorTypes: boolean = false;

  @property({ type: Object }) errors?: Errors; // TODO possibiliy to use string with JSON.parse(...)

  @property({ type: Object }) warnings?: Errors; // TODO possibiliy to use string with JSON.parse(...)

  @property({ type: Number }) suspenseDelay: number = 500;

  connectedCallback() {
    super.connectedCallback();

    if (this.name) {
      this.__formelement = this.findFormElement('form', this);
      if (this.__formelement && !this.__hiddeninput) {
        this.__hiddeninput = document.createElement('input');
        this.__hiddeninput.setAttribute('id', this.name);
        this.__hiddeninput.setAttribute('type', this.type);
        this.__hiddeninput.setAttribute('name', this.name);
        this.__hiddeninput.setAttribute('hidden', 'true');
        this.__hiddeninput.setAttribute(
          'value',
          this.value || this.defaultValue || ''
        );

        if (this.min)
          this.__hiddeninput.setAttribute('min', this.min.toString());
        if (this.max)
          this.__hiddeninput.setAttribute('max', this.max.toString());
        if (this.minlength)
          this.__hiddeninput.setAttribute(
            'minlength',
            this.minlength.toString()
          );
        if (this.maxlength)
          this.__hiddeninput.setAttribute(
            'maxlength',
            this.maxlength.toString()
          );
        if (this.pattern)
          this.__hiddeninput.setAttribute('pattern', this.pattern);
        if (this.required) this.__hiddeninput.setAttribute('required', 'true');

        this.__formelement.appendChild(this.__hiddeninput);

        if (this.matchOther) {
          // we need to listen to changes of the other input to validate current input
          this.otherInput =
            this.__formelement.querySelector(this.matchOther) || undefined;
          this.otherInput?.addEventListener('change', this.checkError);
        }

        if (this.validateAtStart) {
          setTimeout(() => {
            this.checkError();
          }, 1);
        }
      }
    }
  }

  attributeChangedCallback(
    name: string,
    _old: string | null,
    value: string | null
  ): void {
    super.attributeChangedCallback(name, _old, value);

    if (name === 'value' || name === 'defaultValue') {
      this.updateHidden(value || '');
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearTimeout(this.suspenseTimer);
    if (this.__hiddeninput) {
      this.__hiddeninput.parentElement?.removeChild(this.__hiddeninput);
      this.__hiddeninput = undefined;
    }

    if (this.otherInput) {
      this.otherInput.removeEventListener('change', this.checkError);
      this.otherInput = undefined;
    }
  }

  public updateHidden(value: string, event?: IEvent<HTMLInputElement>) {
    this.value = value;

    if (this.__hiddeninput) {
      this.__hiddeninput.setAttribute('value', value);

      // dispatch change event (mainly for the "matchOther")
      this.__hiddeninput.dispatchEvent(new Event('change'));
    }

    if (event) this.checkError();

    // TODO should this be rather (event.target.value ?)
    this.dispatchEvent(
      new CustomEvent<ChangeEvent>('input-change', {
        detail: { value },
      })
    );

    clearTimeout(this.suspenseTimer);
    this.suspenseTimer = setTimeout(() => {
      this.dispatchEvent(
        new CustomEvent<ChangeEvent>('suspended-input-change', {
          detail: { value },
        })
      );
    }, this.suspenseDelay) as unknown as number;
  }

  public reset() {
    if (this.defaultValue) this.updateHidden(this.defaultValue);
    else this.updateHidden('');
  }

  private checkError = () => {
    let message: string | null = null;
    let type: 'warning' | 'error' | 'success' = 'success';

    const target = this.__hiddeninput;
    if (!target) return;
    const validity = {
      badInput: target.validity.badInput,
      customError: target.validity.customError,
      patternMismatch: target.validity.patternMismatch,
      rangeOverflow: target.validity.rangeOverflow,
      rangeUnderflow: target.validity.rangeUnderflow,
      stepMismatch: target.validity.stepMismatch,
      tooLong: target.validity.tooLong,
      tooShort: target.validity.tooShort,
      valid: target.validity.valid,
      typeMismatch: target.validity.typeMismatch,
      valueMissing: target.validity.valueMissing,
      matchOther: false,
    };

    if (validity) {
      // check the "matchOther" error type
      if (
        this.matchOther &&
        this.otherInput &&
        this.value !== this.otherInput.value
      ) {
        validity.matchOther = true;
        validity.valid = false;
      }

      if (this.minlength && target.value.length < this.minlength) {
        validity.tooShort = true;
        validity.valid = false;
      }
      if (this.maxlength && target.value.length > this.maxlength) {
        validity.tooLong = true;
        validity.valid = false;
      }

      if (validity.valid) {
        this.__hiddeninput?.setCustomValidity('');
        this.dispatchEvent(
          new CustomEvent<StateEvent>('input-success', {
            detail: { message: null, type: 'success' },
          })
        );
        return;
      }

      for (const et of Object.keys(validity)) {
        const errortype = et as BaseErrorTypes;

        if (errortype !== 'valid' && validity[errortype]) {
          if (this.errors && this.errors[errortype]) {
            // We check first error
            // we need to find the target
            const error = this.errors[errortype];
            if (error) {
              message = error;
              type = 'error';
              break;
            }
          } else if (this.warnings && this.warnings[errortype]) {
            // then we check warning
            // we need to find the target
            const error = this.warnings[errortype];
            if (error) {
              message = error;
              type = 'warning';
              break;
            }
          } else if (this.includeAllErrorTypes) {
            // default type is error
            // we need to tell child that some of the error is missing
            type = 'error';
            message = errortype;
            break;
          }
        }
      }
    }

    if (type) {
      if (type === 'error') {
        this.__hiddeninput?.setCustomValidity(message || type);
      } else if (type === 'success') {
        this.__hiddeninput?.setCustomValidity('');
      }
      this.dispatchEvent(
        new CustomEvent<StateEvent>(`input-${type}`, {
          detail: { message, type },
        })
      );
    }
  };
}
