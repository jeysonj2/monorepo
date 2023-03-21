import { css } from 'lit';

export const style = css`
  :host {
    height: var(--button-height, 40px);
    min-width: var(--menu-button-min-width, 3rem);
    display: inline-block;
  }

  div {
    display: flex;
    justify-content: flex-start;
    padding: var(--menu-item-padding, 0 0.5rem);
  }
`;
