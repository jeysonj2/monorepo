import { css } from 'lit';

export const style = css`
:host {
  display: block;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--tableheader-gap, 3rem);
  background-color: var(--tableheader-background-color, #ffffff);
  padding: var(--tableheader-padding, 1rem);
  box-sizing: border-box;
}
div.columns {
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: var(--tableheader-columns-gap, 1rem);
}

:host([resizable="true"]) header {
  gap: var(--tableheader-gap, 1rem);
}
:host([resizable="true"]) div.columns {
  justify-content: initial;
  gap: 0rem;
}

iz-drag-indicator {
  height: auto;
}

iz-accordion {
  background-color: var(--tableheader-background-color, #ffffff);
}
iz-accordion[open="true"] {
  border-bottom-color: var(--tableheader-seperator-color, #D9D9D9);
  border-bottom-width: var(--tableheader-seperator-width, 2px);
  border-bottom-style: var(--tableheader-seperator-style, solid);
}


iz-button {
  --icon-base-color: var(--tableheader-setting-color, #D9D9D9);
  
  transition-property: var(--tableheader-setting-transition-property, transform);
  transition-duration: var(--tableheader-setting-transition-duration, 300ms);
  transition-timing-function: var(--tableheader-setting-transition-duration, linear);
  transition-delay: var(--tableheader-setting-transition-delay, 10ms);

  transform: rotate(0deg);
}
iz-button.open {
  --icon-base-color: var(--tableheader-open-setting-color, #b2dcea);
  transform: rotate(90deg);
}
iz-button:active {
  --icon-base-color: var(--tableheader-active-setting-color, #ababab);
}
`;
