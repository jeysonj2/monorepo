import { css } from 'lit';

export const style = css`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    height: 100%;
  }

  .grid {
    display: grid;
    width: 80%;
    grid-template-columns: repeat(auto-fit, minmax(160px, max-content));
    justify-content: center;
    grid-gap: var(--flow-view-grid-gap, 1rem);
  }
`;
