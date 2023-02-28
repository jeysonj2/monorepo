import { css } from 'lit';

export const style = css`
  :host {
    display: flex;
    width: 100%;
    height: var(--header-height, 60px);
    align-items: center;
    position: relative;
    background-color: var(--header-color, #fcfcfc);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    padding: var(--header-padding, 1rem);
  }
  .right {
    position: absolute;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    right: 0;
  }

  iz-icon-home {
    color: var(--header-color, var(--colors-neutral-black, black));
  }
`;
