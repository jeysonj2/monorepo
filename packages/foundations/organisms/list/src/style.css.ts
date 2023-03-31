import { css } from 'lit';

export const style = css`
:host {
  display: block;
  width: 100%;
  outline: 2px solid cornflowerblue;
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
