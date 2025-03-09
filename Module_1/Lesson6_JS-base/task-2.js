// String Hometask #6.2

let correctAnswers = 0;
let incorrectAnswers = 0;

const question1 = 'Сколько будет 2 + 2?';
const question2 = 'Сколько будет 2 * 2?';
const question3 = 'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?';
const question4 = 'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?';
const question5 = 'Сколько будет 2 + 2 * 2?';

const correctAnswer1 = 4;
const correctAnswer2 = 4;
const correctAnswer3 = 1;
const correctAnswer4 = 12;
const correctAnswer5 = 6;


let userAnswer1 = prompt(question1);
userAnswer1 = Number(userAnswer1.trim());
if (userAnswer1 === correctAnswer1) {
    alert('Ответ Верный');
    correctAnswers++;
} else {
    alert('Ответ Неверный');
    incorrectAnswers++;
};

let userAnswer2 = prompt(question2);
userAnswer2 = Number(userAnswer2.trim());
if (userAnswer2 === correctAnswer2) {
    alert('Ответ Верный');
    correctAnswers++;
} else {
    alert('Ответ Неверный');
    incorrectAnswers++;
};

let userAnswer3 = prompt(question3);
userAnswer3 = Number(userAnswer3.trim());
if (userAnswer3 === correctAnswer3) {
    alert('Ответ Верный');
    correctAnswers++;
} else {
    alert('Ответ Неверный');
    incorrectAnswers++;
};

let userAnswer4 = prompt(question4);
userAnswer4 = Number(userAnswer4.trim());
if (userAnswer4 === correctAnswer4) {
    alert('Ответ Верный');
    correctAnswers++;
} else {
    alert('Ответ Неверный');
    incorrectAnswers++;
};

let userAnswer5 = prompt(question5);
userAnswer5 = Number(userAnswer5.trim());
if (userAnswer5 === correctAnswer5) {
    alert('Ответ Верный');
    correctAnswers++;
} else {
    alert('Ответ Неверный');
    incorrectAnswers++;
};

alert(`Конец теста! Правильные ответы — ${correctAnswers}; Неправильные ответы — ${incorrectAnswers}.`);
