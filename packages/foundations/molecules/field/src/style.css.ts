import { css } from 'lit';

export const style = css`
  ::slotted(*) {
    width: 100%;
    height: 100%;
  }

  :host {
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-areas: 'left content right';
  }

  .left {
    grid-area: left;
    margin: auto;
    padding-right: var(--field-gap, 0.4rem);
  }
  .right {
    grid-area: right;
    margin: auto;
    padding-left: var(--field-gap, 0.4rem);
  }
  .field {
    grid-area: content;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: 2rem var(--input-height, 2rem) 2rem;
    grid-template-areas:
      'label label'
      'target target'
      'message counter';
  }
  label {
    grid-area: label;
  }
  #target {
    grid-area: target;
  }
  .message {
    grid-area: message;
    display: flex;
    align-items: center;
    gap: var(--field-gap, 0.4rem);
  }
  .counter {
    grid-area: counter;
    display: flex;
    align-items: center;
  }

  /* styling messages */
  .message.error iz-typography {
    --typography-color: var(--error-color, red);
  }
  .message.warning iz-typography {
    --typography-color: var(--warning-color, orange);
  }
  .message.success iz-typography {
    --typography-color: var(--success-color, green);
  }

  /* helper classes */
  .hide {
    display: none;
  }
`;
