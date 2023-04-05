import { css } from 'lit';

export const style = css`
  :host {
    height: 100vh;
  }
  iz-button-switch {
    position: sticky;
    top: 13%;
    left: 50%;
    z-index: 2;
    transform: translateX(-50%);
  }
  iz-pmp-page-template {
    overflow: hidden;
  }
  iz-pmp-flow-content {
    position: absolute;
    top: 0;
    left: 0;
    height: calc(100vh - calc(var(--footer-height, 35px) + var(--header-height, 60px)));
  }
`;
