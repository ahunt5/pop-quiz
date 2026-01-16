let score = 0;
const incorrect = `Wrong answer or invalid input.`;

const q1 = `Is eating at 12:00 pm considered:
  [1] Lunch
  [2] Breakfast`;
let answer1 = prompt(q1);

if (Number(answer1) !== 1) {
  alert(incorrect);
} else {
  ++score;
  alert(`Correct, your current score is: ${score}/3`);
}
const q2 = `Which is healther:
[1] Soda
[2] Water`;
const answer2 = prompt(q2);
if (Number(answer2) !== 2) {
  alert(incorrect);
} else {
  score++;
  alert(`Correct, your current score is: ${score}/3`);
}
const q3 = `Is this course from FullStack or Harvard:
[1] Fullstack
[2] Harvard`;
const answer3 = prompt(q3);
if (Number(answer3) !== 1) {
  alert(incorrect);
} else {
  score++;
  alert(`Correct, your current score is: ${score}/3`);
}
if (score <= 0) {
  alert(`Your final score is ${score}/3.
  Were you even trying?`);
} else if (score <= 2) {
  alert(`Your final score is ${score}/3.
  Nice try!`);
} else {
  alert(`Your final score is ${score}/3.
  Great job, you got everything correct!`);
}
