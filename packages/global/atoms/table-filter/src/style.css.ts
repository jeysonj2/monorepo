import { css } from 'lit';

export const style = css`
iz-dropdown {
  --button-height-large: var(--button-height-medium, 30px);
}
iz-input {
  --input-height: var(--button-height-medium, 30px);
}
div {
  display: flex;
  justify-content: space-between;
  gap: var(--table-filter-gap, 1rem);
  height: 100%;
}
`;
