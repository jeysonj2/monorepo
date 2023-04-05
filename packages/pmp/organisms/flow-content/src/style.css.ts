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

  iz-pmp-flow-end,
  iz-pmp-flow-view {
    scroll-snap-align: center;
    flex: none;
    width: 100%;
    height: 100%;
  }
  iz-pmp-flow-roadmap {
    z-index: 2;
    position: sticky;
    top: var(--flow-roadmap-position-top, 1rem);
    left: var(--flow-roadmap-position-left, 1rem);
  }
  #price {
    position: sticky;
    width: fit-content;
    left: 100%;
    top: var(--flow-content-price-position-top, var(--flow-roadmap-position-top, 1rem));
    left: calc(100% - var(--flow-content-price-position-right, var(--flow-roadmap-position-left, 1rem)));
  }

  /* end view */
  #price.end {
    top: 60%;
    left: 50%;
    animation: centerilizePricebutton 300ms forwards;
  }
  iz-pmp-flow-roadmap.end {
    top: 30%;
    left: 50%;
    animation: centerilizeRoadmap 300ms forwards;
  }

  @keyframes centerilizeRoadmap {
    0%, 100% {
      transform: translate(-50%, -50%) scale(1);
    }
    60% {
      transform: translate(-50%, -50%) scale(1.1);
    }
  }

  @keyframes centerilizePricebutton {
    0% {
      transform: translate(-50%, -50%) scale(1);
    }
    60% {
      transform: translate(-50%, -50%) scale(1.5);
    }
    100% {
      transform: translate(-50%, -50%) scale(1.3);
    }
  }
}
`;
