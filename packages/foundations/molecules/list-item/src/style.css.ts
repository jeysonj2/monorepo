import { css } from 'lit';

export const style = css`
:host, div.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  width: 100%;
  position: relative;
  background-color: var(--list-item-background-color, white);
  z-index: 1;
}

:host([dragged]) {
  transition: transform ease 200ms;
}

:host(.dragged) {
  transition: none;
  /* z-index: 2; */
}

:host([size="small"]) {
  height: var(--button-height-small, 25px);
}
:host([size="medium"]) {
  height: var(--button-height-medium, 30px);
}
:host([size="large"])  {
  height: var(--button-height-large, 40px);
}

iz-icon-list {
  margin-right: var(--list-item-list-margin, 0.5rem);
}
  
div.item {
  /* width: 100%; */
  height: 100%;
}
div.item > div {
  padding: var(--list-item-padding, 0.5rem);
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}

div.item.dragged {
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
}
`;
