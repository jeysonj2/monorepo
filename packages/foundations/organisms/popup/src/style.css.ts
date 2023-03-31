import { css } from 'lit';

export const style = css`

  div.wrapper {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 700;
    isolation: isolate;
  }
  div.wrapper.global {
    position: fixed;
    width: 100vw;
    height: 100vh;
  }
  div.wrapper:before {
    position: absolute;
    top: 0;
    left: 0;

    background-color: var(--popup-backdrop-background, rgba(0, 0, 0, 0.1));
    backdrop-filter: var(--popup-backdrop-filter, blur(0px));
    content: '';
    width: inherit;
    height: inherit;
    display: block;
    z-index: 1;
  }

  iz-card {
    width: fit-content;
    height: fit-content;
    z-index: 2;

    position: absolute;
    top: 50%;
    left: 50%;
    overflow-y: auto;
    overflow-x: hidden;
    transform: translate(-50%, -50%);
    width: fit-content;
    height: fit-content;
    max-width: calc(100% - 9px);
    max-height: calc(100% - 9px);
    background-color: white;
  }

  div.wrapper.show {
    display: block;
  }
`;
