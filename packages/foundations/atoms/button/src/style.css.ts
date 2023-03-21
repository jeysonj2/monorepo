import { css } from 'lit';

export const style = css`
  :host {
    height: var(--button-height, 40px);
    min-width: var(--button-width, 160px);
    background-color: var(--button-background-color, buttonface);
    display: inline-block;
  }

  :host([variant='icon']) {
    height: var(--button-icon-diameter, 40px);
    width: var(--button-icon-diameter, 40px);
    min-width: var(--button-icon-diameter, 40px);
    border-radius: 50%;
    --icon-base-color: var(--button-disabled-color, #2830be);
  }

  button {
    width: 100%;
    height: 100%;
    padding: var(--button-padding, 0);
    font-weight: var(--button-font-weight, 400);
    font-size: var(--button-font-size, 12px);
    line-height: var(--button-line-height, 15px);
    font-family: var(--button-font-family, 'Inter');
    color: var(--button-color, #000);
    background-color: inherit;
    cursor: var(--button-cursor, pointer);

    border: none;
  }

  button.icon {
    height: var(--button-icon-diameter, 40px);
    width: var(--button-icon-diameter, 40px);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }

  button:not([disabled]):hover {
    background-color: var(--button-hover-background-color, #c7c7c7);
  }

  button:not([disabled]):active {
    background-color: var(--button-pressed-background-color, #555555);
    color: var(--button-pressed-color, #fff);
  }

  button.icon:not([disabled]),
  button.text:not([disabled]) {
    background-color: var(--button-text-background-color, transparant);
  }
  button.icon:not([disabled]):hover,
  button.text:not([disabled]):hover {
    background-color: var(
      --button-text-hover-background-color,
      rgba(232, 232, 232, 0.2)
    );
  }
  button.icon:not([disabled]):active,
  button.text:not([disabled]):active {
    background-color: var(
      --button-text-pressed-background-color,
      rgba(205, 205, 205, 0.4)
    );
    color: var(--button-color, #000);
  }

  button[disabled] {
    cursor: var(--button-disabled-cursor, not-allowed);
    color: var(--button-disabled-color, #333);
  }
  button[disabled]:not(.icon) {
    background-color: var(--button-disabled-background-color, #d2d2d2);
  }
`;
