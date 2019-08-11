const correctAnswwers = ["B", "B", "B", "B"];
const form = document.querySelector(".quize-form");

form.addEventListener("submit", event => {
  event.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value
  ];

  // check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswwers[index]) {
      score += 25;
    }
  });
  console.log(score);
});
