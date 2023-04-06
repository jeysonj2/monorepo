import { css } from 'lit';

export const style = css`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    
    border-radius: var(--badge-border-radius, var(--border-radius-max, 1000px));
    height: var(--badge-height, 1rem);
    padding: var(--badge-padding, 0.3rem 1rem);
    background-color: var(--badge-background-color, var(--colors-neutral-gray, gray));
    color: var(--badge-color, var(--colors-neutral-white, white));
  }

  :host([variant="success"]) {
    background-color: var(--badge-success-background-color, var(--colors-semantic-success, green));
  }
  :host([variant="error"]) {
    background-color: var(--badge-error-background-color, var(--colors-semantic-error, red));
  }
  :host([variant="warning"]) {
    background-color: var(--badge-warning-background-color, var(--colors-semantic-warning, orange));
    color: var(--badge-warning-color, var(--colors-neutral-black, black));
  }
  :host([variant="info"]) {
    background-color: var(--badge-info-background-color, var(--colors-semantic-info, cornflowerblue));
  }

  ::slotted(*) {
    display: inline;
    padding: 0;
    margin: 0;
    color: inherit;
  }
`;
