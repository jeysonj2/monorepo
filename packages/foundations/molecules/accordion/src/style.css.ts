import { css } from 'lit';

export const style = css`
  :host {
    display: block;
    overflow: hidden;
  }

  header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    box-sizing: border-box;
    padding: var(--accordion-padding-header, 0);
  }

  main {
    overflow: hidden;
    box-sizing: border-box;
    padding: var(--accordion-padding-main, 0 1rem);
  }

  :host([direction='down']) iz-button {
    transform: rotate(180deg);
  }
  :host([open='true']) iz-button {
    transform: rotate(180deg);
  }
  :host([open='true'][direction='down']) iz-button {
    transform: rotate(0);
  }

  :host([open='true']) {
    height: fit-content;
  }
  :host([open='false']) main {
    height: 0;
    padding: 0;
  }
  :host([open='false'][expandmode='full']) {
    height: 0;
  }
`;
