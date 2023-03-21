import '../dist/src/checkbox.js';

function submit(event) {
  event.preventDefault();

  const formdata = new FormData(event.target);
  console.log(formdata.get("foo"));
}

window.onload = () => {
  document.querySelector("form").onsubmit = submit;
}
