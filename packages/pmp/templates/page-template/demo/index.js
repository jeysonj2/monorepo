import { html, render } from 'lit';
import '../dist/src/page-template.js';

const header = '@interzero Hello World!';

render(
  html`
    <iz-pmp-page-template .header=${header}>
      some light-dom
    </iz-pmp-page-template>
  `,
  document.querySelector('#demo')
);
