import { css } from 'lit';

export const style = css`
:host {
  display: block;
  height: 100%;
  position: relative;
}
div {
  display: flex;
  justify-content: center;
  align-items: center;
}

iz-button {
  margin-top: 15rem;
}

iz-confetti {
  position: absolute;
  top: 0;
  left: 0;
}
`;
