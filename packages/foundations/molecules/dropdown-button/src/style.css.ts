import { css } from 'lit';

export const style = css`
  :host {
    height: var(--button-height, 40px);
    width: var(--button-width, 160px);
    padding: var(--button-padding, 0);
    display: inline-block;
  }
  :host([variant='text']) {
    --button-height: var(--dropdown-button-height-text, 24px);
    height: var(--dropdown-button-height-text, 24px);
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* position: relative; */
  }

  span.center {
    text-align: center;
    display: block;
    width: 100%;
  }
  span.icon {
    /* position: absolute; */
    /* right: 0; */
    line-height: 1px;
    padding-right: 0.2rem;
  }

  iz-button:not(.text):not(.disabled):active iz-icon-caret {
    color: var(--button-pressed-color, #fff);
  }
`;
