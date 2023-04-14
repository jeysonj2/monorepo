import '../dist/src/drag-indicator.js';

window.onload = () => {
  document.querySelectorAll('iz-drag-indicator').forEach(element => {
    element.addEventListener('pressed', () => console.log('pressed'));
    element.addEventListener('released', () => console.log('released'));
  })
};
