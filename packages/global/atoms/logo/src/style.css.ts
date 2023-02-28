import { css } from 'lit';

export const style = css`
  :host {
    --logo-size-width: 176px;
    --logo-size-height: 65px;
    --logo-size-percentage: 1;
  }

  :host-context([size='small']) {
    --logo-size-percentage: 0.6;
  }

  :host-context([size='medium']) {
    --logo-size-percentage: 1;
  }

  :host-context([size='large']) {
    --logo-size-percentage: 1.4;
  }

  .logo {
    width: calc(var(--logo-size-width) * var(--logo-size-percentage));
    height: calc(var(--logo-size-height) * var(--logo-size-percentage));
  }
`;
