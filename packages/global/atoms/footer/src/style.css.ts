import { css } from 'lit';

export const style = css`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--footer-height, 35px);

    background-color: var(--footer-background-color, #fcfcfc);
  }
`;
