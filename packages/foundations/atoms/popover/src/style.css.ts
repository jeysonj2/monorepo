import { css } from 'lit';

export const style = css`
  div.wrapper {
    position: absolute;
    display: inline-block;
    z-index: 1;
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
  }
  div.wrapper.bottom {
    padding-top: var(--popover-gap, 1rem);
  }
  div.wrapper.left {
    padding-right: var(--popover-gap, 1rem);
  }
  div.wrapper.right {
    padding-left: var(--popover-gap, 1rem);
  }
`;
