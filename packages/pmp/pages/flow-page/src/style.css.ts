import { css } from 'lit';

export const style = css`
  .container {
    display: flex;
    overflow: auto;
    flex: none;
    width: 100%;
    height: 100vh;
    flex-flow: column nowrap;
    scroll-snap-type: y mandatory;
  }

  .question {
    scroll-snap-align: center;
    flex: none;
    width: 100%;
    height: 100%;
  }

  .roadmap {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .roadmap izwc-button {
    min-width: 3rem;
  }
  .roadmap span {
    position: relative;
  }
  .roadmap span:not(:first-child)::before {
    content: '';
    width: 2px;
    height: 0.5rem;
    position: absolute;
    top: 0;
    left: 2rem;

    transform: translate(-50%, -100%);
    background-color: gray;
  }

  .answer {
    display: flex;
    width: 100%;
    gap: 1rem;
  }
`;
