import { css } from 'lit';

export const style = css`
  :host {
    display: flex;
    flex-direction: column;
  }

  .sort-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  iz-button {
    justify-content: space-between;
    padding: var(--tableheadercolumn-button-padding, 4px);;
  }

  .sort-container > iz-icon-caret:first-child {
    transform: translate(25%, 30%);
  }
  .sort-container > iz-icon-caret:last-child {
    transform: translate(25%, -30%);
  }
  .sort-container > iz-icon-caret {
    color: var(--tableheadercolumn-sort-color, grey);
  }
  .sort-container > iz-icon-caret.selected {
    color: var(--tableheadercolumn-sort-color-selected, black);
  }
`;
