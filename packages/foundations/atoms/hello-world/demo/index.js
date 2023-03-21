import { html, render } from 'lit';
import '../dist/src/hello-world.js';

const header = '@interzero Hello World!';

render(
  html`
    <iz-hello-world .header=${header}>
      some light-dom
    </iz-hello-world>
  `,
  document.querySelector('#demo')
);
