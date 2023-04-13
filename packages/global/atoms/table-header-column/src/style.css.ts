import { css } from 'lit';

export const style = css`
  :host {
    display: flex;
    width: 100%;
    flex-direction: column;
  }

  .sort-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  iz-input {
    min-width: 0px;
  }
  iz-button {
    justify-content: space-between;
    min-width: 1rem;
    padding: var(--tableheadercolumn-button-padding, 4px);;
  }

  .sort-container > iz-icon-caret:first-child {
    transform: translate(25%, 30%);
  }
  .sort-container > iz-icon-caret:last-child {
    transform: translate(25%, -30%);
  }
  .sort-container > iz-icon-caret {
    color: var(--tableheadercolumn-sort-color, #D9D9D9);
  }
  .sort-container > iz-icon-caret.selected {
    color: var(--tableheadercolumn-sort-color-selected, black);
  }
`;
