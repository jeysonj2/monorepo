import { css } from 'lit';

export const style = css`
  :host {
    display: flex;
    flex-direction: column;
  }
  div {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    gap: 0.8rem;
  }
`;
