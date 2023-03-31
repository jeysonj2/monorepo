import { css } from 'lit';

export const style = css`
  :host {
    display: flex;
    overflow: auto;
    flex: none;
    width: 100%;
    height: 100vh;
    flex-flow: column nowrap;
    scroll-snap-type: y mandatory;
  }

  #price {
    position: fixed;
    min-width: fit-content;
    top: var(--flow-page-price-position-top, var(--flow-roadmap-position-top, 1rem));
    right: var(--flow-page-price-position-right, var(--flow-roadmap-position-left, 1rem));
  }

  iz-pmp-flow-end,
  iz-pmp-flow-view {
    scroll-snap-align: center;
    flex: none;
    width: 100%;
    height: 100%;
  }
  iz-pmp-flow-roadmap {
    z-index: 2;
  }
`;
