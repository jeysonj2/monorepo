import { css } from 'lit';

export const style = css`
  input,
  textarea {
    font-family: var(
      --input-font-family,
      var(
        --typography-font-family,
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        Roboto,
        Oxygen,
        Ubuntu,
        Cantarell,
        'Open Sans',
        'Helvetica Neue',
        sans-serif
      )
    );
    font-size: var(--input-font-size, initial);
    color: var(--input-color, black);
    padding: 0.5rem;
    text-indent: 5px;
    border-radius: var(--input-border-radius, 0px);
    border-color: var(--input-border-color, #9a9a9a);
    border-style: solid;
    cursor: text;
    box-sizing: border-box;
    width: 100%;
    height: var(--input-height, 2rem);
    background-color: var(--input-background-color, #fff);
  }

  input:hover,
  textarea:hover {
    border-color: var(--input-hover-border-color, #666);
  }

  input:active,
  textarea:active {
    border-color: var(--input-active-border-color, #000);
  }

  input:focus,
  textarea:focus {
    outline: none;
  }

  /* input:invalid,
  textarea:invalid {
    border-color: var(--colors-semantic-error, red);
  } */
`;
