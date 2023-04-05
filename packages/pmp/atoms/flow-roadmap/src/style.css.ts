import { css } from 'lit';

export const style = css`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--flow-roadmap-gap, 0.5rem);
    width: fit-content;
    pointer-events: none;
  }
  iz-button {
    min-width: fit-content;
    pointer-events: auto;
  }
  span {
    position: relative;
  }
  span:not(:first-child)::before {
    content: '';
    position: absolute;
    width: var(--flow-roadmap-line-width, 2px);
    height: var(--flow-roadmap-gap, 0.5rem);
    background-color: var(--flow-roadmap-line-color, gray);
    top: 0;
    left: var(--flow-roadmap-line-left, 3rem);
    transform: translateY(-100%);
  }
  :host(.end) span {
    text-align: center;
  }
  :host(.end) span:not(:first-child)::before {
    left: var(--flow-roadmap-line-left-end, 50%);
  }
`;
