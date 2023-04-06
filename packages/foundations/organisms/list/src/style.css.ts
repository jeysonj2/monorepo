import { css } from 'lit';

export const style = css`
  :host {
    display: block;
    width: 100%;
    position: relative;
  }

  ::slotted(iz-list-item.hidden) {
    visibility: hidden;
  }

  ::slotted(iz-list-item.dragged) {
    position: absolute;
    z-index: 2;
  }
`;
