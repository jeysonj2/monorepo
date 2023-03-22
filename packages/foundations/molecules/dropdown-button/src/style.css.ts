import { css } from 'lit';

export const style = css`
  :host {
    height: var(--button-height-large, 40px);
    /* width: var(--button-width, 160px); */
    padding: var(--button-padding, 0);
    display: inline-block;
  }
  :host([variant='text']) {
    height: var(--button-height-small, 25px);
  }

  span.input {
    display: block;
    position: relative;
    /* height: var(--button-height-small, 25px); */
    height: var(--button-height-large, 40px);
    cursor: pointer;
  }
  span.input > span.icon {
    position: absolute;
    right: 0;
    top: 50%;
    height: var(--icon-medium-size, 16px);

    transform: translate(-50%, -50%);
  }
  iz-input {
    height: 100%;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* position: relative; */
  }

  div > span.center {
    text-align: center;
    display: block;
    width: 100%;
  }
  div > span.icon {
    /* position: absolute; */
    /* right: 0; */
    line-height: 1px;
    padding-right: 0.2rem;
  }

  iz-button:not(.text):not(.disabled):active iz-icon-caret {
    color: var(--button-pressed-color, #fff);
  }
`;
