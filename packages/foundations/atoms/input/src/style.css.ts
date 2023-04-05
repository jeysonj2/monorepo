import { css } from 'lit';

export const style = css`
  :host {
    cursor: text;
    display: block;
    font-family: var(
      --input-font-family,
      var(--typography-font-family, 'Inter')
    );
    font-size: var(--input-font-size, initial);
    color: var(--input-color, black);
    background-color: var(--input-background-color, #fff);
  }

  :host([size='small']) {
    height: var(--input-height-small, 2rem);
  }
  :host([size='medium']) {
    height: var(--input-height-medium, 3rem);
  }
  :host([size='large']) {
    height: var(--input-height-large, 4rem);
  }

  :host([disabled]) {
    background-color: var(--input-disabled-background-color, #ebebeb);
    color: var(--input-disabled-color, #252525);
    cursor: not-allowed;
  }

  input,
  textarea {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    padding: var(--input-padding, 0.5rem);
    text-indent: var(--input-text-indent, 5px);
    border-radius: var(--input-border-radius, 0px);
    border-color: var(--input-border-color, #9a9a9a);
    border-width: var(--input-border-width, 1px);
    background-color: inherit;
    border-style: var(--input-border-style, solid);
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }

  :host(:not([disabled])) input:hover,
  :host(:not([disabled])) textarea:hover {
    border-color: var(--input-hover-border-color, #666);
  }

  :host(:not([disabled])) input:active,
  :host(:not([disabled])) textarea:active {
    border-color: var(--input-active-border-color, #000);
  }

  :host(:not([disabled])) input:focus,
  :host(:not([disabled])) textarea:focus {
    /* outline: none; */
    /* border-color: var(--input-active-border-color, #000); */
    outline-color: var(--input-focus-border-color, #161616);
  }

  /* input:invalid,
  textarea:invalid {
    border-color: var(--colors-semantic-error, red);
  } */
`;
