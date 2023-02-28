import { html, render } from 'lit';
import '../dist/src/user-profile.js';

const header = '@interzero Hello World!';

render(
  html`
    <iz-pmp-user-profile .header=${header}>
      some light-dom
    </iz-pmp-user-profile>
  `,
  document.querySelector('#demo')
);
