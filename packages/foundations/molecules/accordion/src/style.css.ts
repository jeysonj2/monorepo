import { css } from 'lit';

export const style = css`
  :host {
    display: block;
    overflow: hidden;
  }
  :host([open='true']) {
    height: fit-content;
  }
  :host([expandmode="full"]) {
    transition-property: var(--accordion-animate-property, max-height);
    transition-duration: var(--accordion-animate-duration, 200ms);
    transition-timing-function: var(--accordion-animate-duration, ease-in);
    transition-delay: var(--accordion-animate-delay, 0s);
    
    max-height: var(--accordion-max-height, 0px);
  }
  :host([open='false'][expandmode='full']) {
    max-height: 0;
  }

  header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    box-sizing: border-box;
    padding: var(--accordion-header-padding, 0);
  }

  main {
    overflow: hidden;
    box-sizing: border-box;
    padding: var(--accordion-main-padding, 0 1rem);
  }
  :host([expandmode="partial"]) main {
    max-height: var(--accordion-max-height, 0px);
  }
  :host([expandmode="partial"][open="true"]) main {
    transition-property: var(--accordion-animate-property, max-height);
    transition-duration: var(--accordion-animate-duration, 200ms);
    transition-timing-function: var(--accordion-animate-duration, ease-in);
    transition-delay: var(--accordion-animate-delay, 0s);
  }
  :host([expandmode="partial"][open='false']) main {
    transition-property: var(--accordion-main-animate-property, max-height, padding);
    transition-duration: var(--accordion-main-animate-duration, 200ms, 1ms);
    transition-timing-function: var(--accordion-main-animate-duration, ease-in, linear);
    transition-delay: var(--accordion-main-animate-delay, 0s, 200ms);

    padding: 0;
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
`;
