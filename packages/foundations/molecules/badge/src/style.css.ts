import { css } from 'lit';

export const style = css`
  :host {
    height: 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding: var(--badge-padding, 0.3rem 1rem);
    background-color: var(--badge-background, gray);
    border-radius: 2rem;
  }

  :host-context([variant='success']) {
    background-color: var(--colors-semantic-success, green);
  }
  :host-context([variant='error']) {
    background-color: var(--colors-semantic-error, red);
  }
  :host-context([variant='warning']) {
    background-color: var(--colors-semantic-warning, orange);
    color: var(--colors-neutral-black, black);
  }
  :host-context([variant='info']) {
    background-color: var(--colors-semantic-info, cornflowerblue);
  }

  ::slotted(*) {
    display: inline;
    padding: 0;
    margin: 0;
    color: var(--colors-neutral-white, white);
  }
`;
