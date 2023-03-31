import '../dist/src/flow-roadmap.js';

window.onload = () => {
  document.querySelectorAll('iz-pmp-flow-roadmap').forEach(roadmap => {
    roadmap.selected = [
      { question: 'Question 1', option: 'option 2', questionId: "1" },
      { question: 'Question 2', option: 'option 1', questionId: "2" },
      { question: 'Question 3', option: 'option 5', questionId: "3" },
      { question: 'Question 4', option: 'option 8', questionId: "4" },
      { question: 'Question 5', option: 'option 4', questionId: "5" },
    ];

    if (roadmap.id === "final")
    {
      roadmap.selected.push({ questionId: "final-screen" })
    }
  })
};
