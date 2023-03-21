
import '@interzero/input/wc';
import '@interzero/typography/wc';
import '@interzero-icons/icon-mail/wc';
import '@interzero-icons/icon-lock/wc';

import '../dist/src/field.js';

window.onload = () => {
  window.warning.displayMessage("This is a warning", "warning");
  window.success.displayMessage("This is a success", "success");
  window.error.displayMessage("This is a error", "error");
}
