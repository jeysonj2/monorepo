import { css } from 'lit';

export const style = css`
  :host {
    display: inline-block;
    padding: var(--buttonswitch-padding, 0.3rem);
    background-color: var(--buttonswitch-background, #d9d9d9);
    border-radius: var(
      --buttonswitch-border-radius,
      var(--border-radius-max, 1000px)
    );
  }

  iz-button {
    border-radius: inherit;
    min-width: var(--buttonswitch-button-min-width, 80px);
    padding: var(--buttonswitch-button-padding, 0 2rem);
    --button-background-color: var(
      --buttonswitch-button-active-background,
      white
    );
    --button-hover-background-color: var(
      --buttonswitch-button-active-hover-background,
      #f7f7f7
    );
  }

  iz-button.inactive {
    --button-background-color: var(
      --buttonswitch-button-inactive-background,
      #eaeaea
    );
    --button-hover-background-color: var(
      --buttonswitch-button-inactive-hover-background,
      #e6e6e6
    );
    color: var(--buttonswitch-button-inactive-color, #848484);
  }
`;
