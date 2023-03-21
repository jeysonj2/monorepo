import { css } from 'lit';

export const style = css`
  :host {
    height: var(--button-height, 40px);
    min-width: var(--menu-button-min-width, 3rem);
    /* padding: var(--button-padding, 0); */
    display: inline-block;
  }
  :host([variant='text']) {
    --button-height: var(--dropdown-button-height-text, 24px);
    height: var(--dropdown-button-height-text, 24px);
  }

  iz-button {
    --button-width: var(--menu-button-min-width, 3rem);
    --button-padding: var(--menu-button-padding, 0 0.5rem 0 1rem);
  }

  div {
    display: inline-flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    gap: var(--menu-button-gap, 0.2rem);
  }

  span.icon {
    line-height: 1px;
    padding-right: 0.2rem;
  }

  iz-button:not(.text):active iz-icon-caret {
    color: var(--button-pressed-color, #fff);
  }
`;
