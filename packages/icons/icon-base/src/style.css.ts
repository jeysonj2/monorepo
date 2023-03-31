import { css } from 'lit';

export const style = css`
  :host {
    color: var(--icon-base-color, #3c3c3c);
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  :host([size='medium']) {
    width: var(--icon-medium-size, 16px);
    height: var(--icon-medium-size, 16px);
  }
  :host([size='large']) {
    width: var(--icon-medium-size, 24px);
    height: var(--icon-medium-size, 24px);
  }
  :host([size='small']) {
    width: var(--icon-medium-size, 12px);
    height: var(--icon-medium-size, 12px);
  }
`;
