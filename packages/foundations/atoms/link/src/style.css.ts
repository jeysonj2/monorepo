import { css } from 'lit';

export const style = css`
  :host {
    font-size: var(--link-font-size, var(--typography-body-font-size, 12px));
    line-height: var(
      --link-line-height,
      var(--typography-body-line-height, 15px)
    );
    font-weight: var(
      --link-font-weight,
      var(--default-typography-body-font-weight, 400)
    );
    font-family: var(
      --link-font-family,
      var(--default-typography-body-font-family, 'Inter')
    );
    color: var(--link-color, #4d5eff);
  }
  :host([variant='text']) {
    color: var(--link-color-text, #000);
    text-decoration-line: none;
  }
  :host(:hover) {
    color: var(--link-hover-color, #001aff);
    text-decoration-line: underline;
  }
  :host(:active) {
    color: var(--link-pressed-color, #000e8e);
    text-decoration-line: underline;
    font-weight: var(--link-font-weight-bold, 600);
  }

  a {
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    font-family: inherit;
    color: inherit;
    text-decoration: inherit;
  }
`;
