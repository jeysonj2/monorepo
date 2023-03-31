import { css } from 'lit';

export const style = css`
:host {
  display: block;
  height: var(--flow-button-height, 6rem);
}

:host([variant='edit']) {
  display: grid;
  grid-template-rows: 3fr 1fr;
  grid-row-gap: var(--flow-button-edit-gap, 0.2rem);
}
:host([variant='add']) iz-button {
  border: 1px dashed black;
}
iz-button {
  height: 100%;
  width: 100%;
  position: relative;
}
iz-button:active {
  border-color: var(--button-pressed-color, white) !important;
  
  /* FIXME this doesnt work for some reason.. */
  --icon-base-color: var(--button-pressed-color, white);
}
iz-checkbox {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
`;
