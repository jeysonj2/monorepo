import '../dist/src/flow-view.js';

window.onload = () => {
  document.querySelectorAll('iz-pmp-flow-view').forEach(elm => {
    elm.data = {
      question: "Im a question",
      description: "Im a description",
      id: "0",
      options: [
        { id: "1", value: "option 1", checked: false },
        { id: "2", value: "option 2", checked: false },
        { id: "3", value: "option 3", checked: true },
        { id: "4", value: "option 4", checked: false },
        { id: "5", value: "option 5", checked: false },
      ]
    }
  })
};
