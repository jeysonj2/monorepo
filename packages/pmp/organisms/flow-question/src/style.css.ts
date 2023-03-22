import { css } from 'lit';

export const style = css`
  :host {
    width: 100%;
    height: 100%;
    display: inline-block;
  }

  div.wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 5rem;
  }

  div.grid {
    display: grid;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    width: 80%;
    justify-content: center;
  }

  iz-pmp-flow-button {
    width: 100%;
  }
`;
