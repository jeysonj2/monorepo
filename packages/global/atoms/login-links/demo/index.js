import { html, render } from 'lit';
import '../dist/src/login-links.js';

const header = '@interzero Hello World!';

render(
  html`
    <iz-global-login-links>
      some light-dom
    </iz-global-login-links>
  `,
  document.querySelector('#demo')
);
