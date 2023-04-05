import { css } from 'lit';

export const style = css`
  :host {
    display: grid;
    min-height: var(--max-page-height, 100vh);
    grid-template-rows: var(--header-height, 60px) 1fr var(
        --footer-height,
        35px
      );
  }

  main {
    position: relative;
  }
`;
