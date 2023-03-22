import { css } from 'lit';

export const style = css`
  :host {
    height: 5rem;
    width: 100%;
    display: inline-block;
  }
  iz-button {
    height: 5rem;
    width: 100%;
    position: relative;
  }

  iz-button:active iz-checkbox {
    --icon-base-color: white;
  }

  iz-checkbox {
    position: absolute;
    top: 0.5rem;
    right: 0.3rem;
  }
`;
