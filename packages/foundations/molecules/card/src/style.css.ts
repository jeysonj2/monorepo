import { css } from 'lit';

export const style = css`
  :host {
    display: block;
    background-color: var(
      --card-background-color,
      var(--colors-neutral-white, white)
    );
    border-radius: var(--card-radius, 0.5rem);
    min-width: var(--card-width, 15rem);
  }

  main {
    padding: var(--card-padding, 1rem);
    min-height: var(--card-min-height, 5rem);
  }

  header {
    padding: var(--card-header-padding, 1rem);
  }
  footer {
    padding: var(--card-footer-padding, 1.2rem 1rem);
  }

  header,
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-width: var(--card-border-width, 1px);
    border-color: var(
      --card-border-color,
      var(--colors-neutral-gray2, #c6c6c6)
    );
  }

  header {
    border-bottom-style: solid;
  }
  footer {
    border-top-style: solid;
  }

  ::slotted(*) {
    margin: 0;
    padding: 0;
  }
`;
