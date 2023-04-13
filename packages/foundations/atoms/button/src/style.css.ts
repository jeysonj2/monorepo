import { css } from 'lit';

export const style = css`
  :host {
    display: inline-block;
    cursor: var(--button-cursor, pointer);
    min-width: var(--button-min-width, 160px);
    /* padding: 1rem; */
    box-sizing: border-box;

    display: flex;
    justify-content: center;
    align-items: center;
    
    /* without specifing size will be large */
  }

  /** properties *****************/
  /** small size */
  :host([size='small']) {
    height: var(--button-height-small, 25px);
  }
  :host([size='small']:is([variant='circle'], [variant='square'])) {
    min-width: var(--button-height-small, 25px);
  }
  /** medium size */
  :host([size='medium']) {
    height: var(--button-height-medium, 30px);
  }
  :host([size='medium']:is([variant='circle'], [variant='square'])) {
    min-width: var(--button-height-medium, 30px);
  }
  /** large size */
  :host([size='large']) {
    height: var(--button-height-large, 40px);
  }
  :host([size='large']:is([variant='circle'], [variant='square'])) {
    min-width: var(--button-height-large, 40px);
  }

  :host([variant='default']) {
    background-color: var(--button-background-color, buttonface);
    padding: var(--button-padding, 0 1rem);
  }
  :host([variant='text']) {
    background-color: var(--button-text-background-color, transparant);
    padding: var(--button-padding, 0 1rem);
  }
  :host([variant='circle']) {
    background-color: var(--button-circle-background-color, transparant);
    border-radius: 50%;
  }
  :host([variant='square']) {
    background-color: var(--button-square-background-color, transparant);
  }

  /** user interaction *****************/
  :host(:not([disabled]):hover) {
    background-color: var(--button-hover-background-color, #c7c7c7);
  }
  :host(:not([disabled], [variant='default']):hover) {
    background-color: var(
      --button-transparant-hover-background-color,
      rgba(232, 232, 232, 0.2)
    );
  }
  :host(:not([disabled]):active) {
    background-color: var(--button-pressed-background-color, #555555);
    color: var(--button-pressed-color, #fff);
  }
  :host(:not([disabled], [variant='default']):active) {
    background-color: var(
      --button-transparant-pressed-background-color,
      rgba(205, 205, 205, 0.4)
    );
    color: var(--button-color, #000);
  }

  /** disabled *****************/
  :host([disabled]) {
    cursor: var(--button-disabled-cursor, not-allowed);
    color: var(--button-disabled-color, #333);
  }
  :host([disabled]:is([variant='default'])) {
    background-color: var(--button-disabled-background-color, #d2d2d2);
  }
`;
