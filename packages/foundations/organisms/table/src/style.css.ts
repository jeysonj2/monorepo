import { css } from 'lit';

export const style = css`
  table {
    position: relative;
  }
  table.fixed > thead {
    position: sticky;
    top: 0;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  }

  thead > tr {
    z-index: 2;
    position: relative;
  }

  thead::after {
    background-color: white;
    content: '';
    width: calc(100% + 4px);
    position: absolute;
    top: 0;
    left: -2px;
    height: 100%;
    z-index: 1;
  }
`;
