import { css } from 'lit';

export const style = css`
  :host {
    position: relative;
  }
  iz-popover {
    --popover-gap: var(--dropdown-gap, 0.2rem);
  }
  iz-dropdown-button {
    --button-width: var(--dropdown-button-width);
  }

  .card {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    max-height: var(--dropdown-menu-height, 18rem);

    background-color: var(
      --dropdown-menu-color,
      var(--colors-semantic-white, white)
    );
    box-shadow: var(--dropdown-menu-shadow, 0px 2px 2px rgba(0, 0, 0, 0.25));
  }
`;
