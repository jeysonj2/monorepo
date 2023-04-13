import '../dist/src/accordion.js';

window.onload = () => {
  document.querySelectorAll('fieldset').forEach(fieldset => {
    const button = fieldset.querySelector('button');
    const accordion = fieldset.querySelector('iz-accordion');

    button.onclick = () => {
      accordion.setAttribute('open', accordion.getAttribute('open') === 'true' ? 'false' : 'true');
      // accordion.open = !accordion.open;
    }
  }) 
};
