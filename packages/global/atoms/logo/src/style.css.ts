import { css } from 'lit';

export const style = css`
  :host {
    display: inline-grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 0.5fr;
    grid-template-areas:
      'inter zero'
      'slog slog';
  }
  :host-context([size='small']) {
    --typography-logo-font-size: 24px;
    --typography-logo-line-height: 24px;
    --typography-logob-font-size: 9.3px;
    --typography-logob-letter-spacing: 0.135rem;
  }

  iz-typography {
    --typography-display: inline;
  }

  .inter {
    grid-area: inter;
    --typography-color: var(--logo-color-secondary, #06095a);
  }
  .zero {
    grid-area: zero;
    --typography-color: var(--logo-color-primary, #5a61ff);
  }
  .slogan {
    grid-area: slog;
    --typography-color: var(--logo-color-secondary, #06095a);
  }
`;

// h1.logo {
//   font-size: var(--typography-logo-font-size, 36px);
//   line-height: var(--typography-logo-line-height, 44px);
//   font-weight: var(--default-typography-logo-font-weight, 600);
//   font-family: var(--default-typography-logo-font-family, "Inter");
// }
// h4.logob {
//   font-weight: var(--default-typography-logob-font-weight, 400);
//   font-family: var(--typography-logob-font-family, "Inter");
//   font-size: var(--typography-logob-font-size, 14px);
//   line-height: var(--typography-logob-line-height, 17px);
//   letter-spacing: var(--typography-logob-letter-spacing, 0.2rem);
// }
