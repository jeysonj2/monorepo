import { html, render } from 'lit';
import '../dist/src/flow-question.js';

const options = [
  "item 1", "item 2",
  "item 3", "item 4",
  "item 5", "item 6",
  "item 7", "item 8",
  "item 9", "item 10",
  "item 11",
]

render(
  html`
    <iz-pmp-flow-question question="Select brand" @continue=${event => console.log(event.detail)} .options=${options}></iz-pmp-flow-question>
  `,
  document.querySelector('#demo')
);
