import { css } from 'lit';

export const style = css`
  :host {
    --default-typography-font-family: var(
      --typography-font-family,
      'Inter',
      sans-serif
    );
    display: var(--typography-display, block);
    color: var(--typography-color, black);
  }

  p,
  h1,
  h4 {
    color: inherit;
    text-decoration: inherit;
  }

  p.body {
    font-size: var(--typography-body-font-size, 12px);
    line-height: var(--typography-body-line-height, 15px);
    font-weight: var(--typography-body-font-weight, 400);
    font-family: var(
      --typography-body-font-family,
      var(--default-typography-font-family)
    );
  }
  p.label {
    font-size: var(--typography-label-font-size, 13px);
    line-height: var(--typography-label-line-height, 16px);
    font-weight: var(--typography-label-font-weight, 400);
    font-family: var(
      --typography-label-font-family,
      var(--default-typography-font-family)
    );
  }
  p.help {
    font-size: var(--typography-help-font-size, 9px);
    line-height: var(--typography-help-line-height, 10px);
    font-weight: var(--typography-help-font-weight, 400);
    font-family: var(
      --typography-help-font-family,
      var(--default-typography-font-family)
    );
  }

  h1.heading {
    font-size: var(--typography-heading-font-size, 20px);
    line-height: var(--typography-heading-line-height, 24px);
    font-weight: var(--typography-heading-font-weight, 400);
    font-family: var(
      --typography-heading-font-family,
      var(--default-typography-font-family)
    );
  }

  /** FIXME LEGACY */
  h1.logo {
    font-size: var(--typography-logo-font-size, 36px);
    line-height: var(--typography-logo-line-height, 44px);
    font-weight: var(--default-typography-logo-font-weight, 600);
    font-family: var(--default-typography-logo-font-family, 'Inter');
  }
  h4.logob {
    font-size: var(--typography-logob-font-size, 14px);
    line-height: var(--typography-logob-line-height, 17px);
    font-weight: var(--default-typography-logob-font-weight, 400);
    font-family: var(--typography-logob-font-family, 'Inter');
    letter-spacing: var(--typography-logob-letter-spacing, 0.2rem);
  }
`;
