import { css } from 'lit';

export const style = css`
  :host {
    display: grid;
    min-height: var(--max-page-height, calc(100vh - 9px));
    grid-template-rows: var(--header-height, 60px) 1fr var(
        --footer-height,
        35px
      );
  }
  main {
    background-color: var(
      --page-template-background-color,
      var(--colors-semantic-lightgray, #f4f4f4)
    );
    box-sizing: border-box;
    padding: var(--page-template-padding, 1rem);
  }
`;
