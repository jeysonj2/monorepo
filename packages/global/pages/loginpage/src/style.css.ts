import { css } from 'lit';

export const style = css`
  :host {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100vw;
    height: 100vh;
  }

  div:not(.box) {
    height: 100%;
  }

  .left {
    background: var(--loginpage-left-background, #c4c4c4);
  }

  .right {
    position: relative;
    background: var(--loginpage-right-background, #e4e4e4);
  }

  .right > div {
    /*width: 20rem;*/
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;

    background-color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 2rem;
  }

  iz-global-login-links {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    width: 100%;

    transform: translateX(-50%);
  }

  .centered {
    display: flex;
    justify-content: center;
  }
`;
