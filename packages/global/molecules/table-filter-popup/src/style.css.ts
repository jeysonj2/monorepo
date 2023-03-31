import { css } from 'lit';

export const style = css`
  :host {
    --card-width: var(--tablefilterpopup-card-width, 512px);
  }
  iz-list {
    display: flex;
    flex-direction: column;
    gap: var(--tablefilterpopup-list-gap, 0.6rem);
    margin-bottom: var(--tablefilterpopup-list-gap, 0.6rem);
  }
`;
