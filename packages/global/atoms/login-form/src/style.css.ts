import { css } from 'lit';

export const style = css`
  :host {
    width: 100%;
    display: inline-block;
  }

  div {
    margin-left: calc(var(--icon-medium-size, 16px) + var(--field-gap, 0.4rem));

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      'button submit'
      'empty link';
    grid-column-gap: var(--login-form-column-gap, 2rem);
    grid-row-gap: var(--login-form-row-gap, 1rem);
  }

  iz-button {
    --button-width: 50px;
    grid-area: button;
  }
  iz-button[type='submit'] {
    grid-area: submit;
  }
  iz-link {
    grid-area: link;
    text-align: right;
  }

  form:invalid iz-button[type='submit'] {
    pointer-events: none;
    position: relative;
    --button-color: var(--button-disabled-color, #333);
    background-color: var(--button-disabled-background-color, #d2d2d2);
  }
  form:invalid iz-button[type='submit']::after {
    content: '';
    display: block;
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: auto;
    cursor: var(--button-disabled-cursor, not-allowed);
  }
`;
