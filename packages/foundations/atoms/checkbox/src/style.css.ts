import { css } from 'lit';

// export const style = css`
//   label, input {
//     cursor: var(--checkbox-cursor, pointer);
//   }

//   label.disabled {
//     cursor: var(--checkbox-disabled-cursor, not-allowed);
//     color: var(--checkbox-disabled-color, gray);
//   }
//   label.disabled > input {
//     cursor: var(--checkbox-disabled-cursor, not-allowed);
//   }
// `;

export const style = css`
  button {
    cursor: var(--checkbox-cursor, pointer);
    background: none;
    border: none;

    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }

  div.icon-wrapper {
    content: '';
    width: 16px;
    height: 16px;
  }

  button[disabled] {
    color: var(--checkbox-disabled-color, gray);
    cursor: var(--checkbox-disabled-cursor, not-allowed);
  }
  button[disabled] {
    --icon-base-color: gray;
    color: var(--checkbox-disabled-color, gray);
    cursor: var(--checkbox-disabled-cursor, not-allowed);
  }
`;
