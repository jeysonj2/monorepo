import { css } from 'lit';

export const style = css`
  iz-button {
    --button-padding: 0;
  }
  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: var(--option-padding, 0 0.5rem);
  }
`;
