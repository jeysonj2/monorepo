import { property } from 'lit/decorators.js';
import type {PropertyDeclaration} from '@lit/reactive-element';

function isPrimitive(value: any): boolean {
  return value !== Object(value);
}

function BooleanConverter(value: string | null): boolean {
  return !!['true', true, ''].includes((value || '').toLowerCase());
}

// PropertyDeclaration
export function EnhancedProperty(options: PropertyDeclaration) {
  return function (target: any, propertyKey: string) {

    let propertyOptions = { ...options };

    if (options.type === Boolean) {
      propertyOptions = { ...options, converter: BooleanConverter };
    }


    // Apply the @property decorator from Lit with the modified options
    property(propertyOptions)(target, propertyKey);
  };
}

type Options = PropertyDeclaration & { trigger?: boolean, debug?: boolean };

export function ReactiveProperty(options: Options) {
  return function (target: any, propertyKey: string) {
    const privatePropertyKey = `_${propertyKey}`;
    const innerPropertyKey = `inner${propertyKey}`;

    target[innerPropertyKey] = false;

    Object.defineProperty(target, propertyKey, {
      get: function () {
        return this[privatePropertyKey];
      },
      set: function (value: any) {
        
        if (this[innerPropertyKey]) {
          this[innerPropertyKey] = false;
          return;
        }

        const stringValue = isPrimitive(value) ? value.toString() : JSON.stringify(value);

        if (this.getAttribute(propertyKey) !== stringValue) {
          if (this.getAttribute(propertyKey) !== null && this[privatePropertyKey] !== undefined) 
          {
            // initial set (but it could potentially spook if we set null..)
            this[innerPropertyKey] = true;
          }
          this.setAttribute(propertyKey, stringValue);
        }

        if (options.debug) console.log('value assigned', propertyKey, value);

        this[privatePropertyKey] = value;
        if (options.trigger) 
        {
          this.dispatchEvent(new CustomEvent(propertyKey+"-change", { detail: { value }}));
        }

        this.requestUpdate();
      },
      enumerable: true,
      configurable: true,
    });

    EnhancedProperty(options)(target, propertyKey);
  };
}