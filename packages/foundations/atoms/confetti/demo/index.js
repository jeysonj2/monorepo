
import '../dist/src/confetti.js';

window.onload = () => {
  window.confetti.placements = [
    // 'bottom-left', 
    // 'bottom-center', 
    // 'bottom-right', 
    // 'center-right', 
    // 'top-right', 
    // 'top-center', 
    // 'top-left', 
    // 'center-left',
    'center-center'
  ];
  window.shoot.onclick = () => {
    window.confetti.shoot(0, 20, Math.PI*2);
  };
  // window.start.onclick = () => window.confetti.start();
  // window.stop.onclick = () => window.confetti.stop();
};
