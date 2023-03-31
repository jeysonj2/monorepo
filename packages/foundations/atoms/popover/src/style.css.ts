import { css } from 'lit';

export const style = css`
  :host {
    display: inline-block;
    position: absolute;
    z-index: 5;
    pointer-events: none;
  }

  div.wrapper {
    position: absolute;
    pointer-events: auto;
  }
  :host([matchwidth]) div.wrapper {
    width: 100%;
  }
  div.wrapper.hide {
    visibility: hidden;
  }
  div.wrapper.show {
    visibility: visible;
  }

  /* assigning the placement gaps */
  div.wrapper.top {
    padding-bottom: var(--popover-gap, 1rem);
    top: 0;
  }
  div.wrapper.bottom {
    padding-top: var(--popover-gap, 1rem);
    bottom: 0;
  }
  div.wrapper.left {
    padding-right: var(--popover-gap, 1rem);
    left: 0;
  }
  div.wrapper.right {
    padding-left: var(--popover-gap, 1rem);
    right: 0;
  }

  /* tops */
  div.wrapper.top-left {
    transform: translate(0, -100%);
    right: 0;
  }
  div.wrapper.top-center {
    transform: translate(-50%, -100%);
    left: 50%;
  }
  div.wrapper.top-right {
    transform: translate(0, -100%);
    left: 0;
  }

  /* bottoms */
  div.wrapper.bottom-left {
    transform: translate(0, 100%);
    right: 0;
  }
  div.wrapper.bottom-center {
    transform: translate(-50%, 100%);
    left: 50%;
  }
  div.wrapper.bottom-right {
    transform: translate(0, 100%);
    left: 0;
  }

  /* lefts */
  div.wrapper.left-top {
    transform: translate(-100%, 0);
    bottom: 0;
  }
  div.wrapper.left-center {
    transform: translate(-100%, 50%);
    bottom: 50%;
  }
  div.wrapper.left-bottom {
    transform: translate(-100%, 0);
    top: 0;
  }

  /* rights */
  div.wrapper.right-top {
    transform: translate(100%, 0);
    bottom: 0;
  }
  div.wrapper.right-center {
    transform: translate(100%, 50%);
    bottom: 50%;
  }
  div.wrapper.right-bottom {
    transform: translate(100%, 0);
    top: 0;
  }
`;
