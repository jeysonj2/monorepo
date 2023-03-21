import { css } from 'lit';

export const style = css`
  main {
    background-color: var(
      --background-color,
      var(--colors-semantic-lightgray, #f4f4f4)
    );
    padding: var(--padding, 1rem);
    min-height: calc(100vh - var(--header-height, 60px));
  }
`;
