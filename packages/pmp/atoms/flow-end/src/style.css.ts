import { css } from 'lit';

export const style = css`
:host {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
}
div {
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
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
