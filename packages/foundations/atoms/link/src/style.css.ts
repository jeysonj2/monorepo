import { css } from 'lit';

export const style = css`
  a {
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
  }
  a.link {
    color: var(--hover-color, #4d5eff);
  }
  a.text {
    color: var(--hover-color, #000);
    text-decoration-line: none;
  }

  a:hover {
    color: var(--hover-color, #001aff);
    text-decoration-line: underline;
  }
  a:active {
    color: var(--hover-color, #000e8e);
    text-decoration-line: underline;
    font-weight: var(--link-font-weight-bold, 600);
  }
`;
