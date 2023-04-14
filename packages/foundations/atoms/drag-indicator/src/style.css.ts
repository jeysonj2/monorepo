import { css } from 'lit';

export const style = css`
  :host {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
  }

  :host([alignment='horizontal']) {
    height: var(--drag-indicator-container-size, 1rem);
    cursor: var(--drag-indicator-horizontal-cursor, row-resize);
  }

  :host([alignment='vertical']) {
    width: var(--drag-indicator-container-size, 1rem);
    cursor: var(--drag-indicator-vertical-cursor, col-resize);
  }

  /** span related */
  span {
    content: '';
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: var(--drag-indicator-color, #9a9a9a);
  }
  :host(:hover) span {
    background-color: var(--drag-indicator-hover-color, #9abcff);
  }
  :host([alignment='horizontal']) span {
    height: var(--drag-indicator-size, 1px);
    top: 50%;
    transform: translateY(-50%);
  }
  :host([alignment='horizontal']:hover) span {
    height: var(--drag-indicator-hover-size, 4px);
  }

  :host([alignment='vertical']) span {
    width: var(--drag-indicator-size, 1px);
    left: 50%;
    transform: translateX(-50%);
  }
  :host([alignment='vertical']:hover) span {
    width: var(--drag-indicator-hover-size, 4px);
  }
`;
