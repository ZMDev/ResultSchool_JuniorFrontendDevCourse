// String Hometask #5.6

// Запросите у пользователя два значения:
// Любой текст. В prompt() передавайте сообщение: «Введите текст». 
// Сохраните это значение в переменную userText.
// Слово или его часть, которые нужно найти в тексте userText. 
// Сообщение в prompt: «Введите слово из текста». 
// Сохраните в переменную fragmentOfText.
// Учтите, что в строках не должно быть лишних пробелов в начале и 
// в конце (используйте trim()).
// Найдите индекс фрагмента строки fragmentOfText в строке userText и 
// сохранить этот индекс в переменную indexOfFragment. После обрежьте
//  строку userText, начиная с нулевого индекса и заканчивая индексом, 
//  хранящимся в переменной indexOfFragment.
// С помощью alert() отобразите сообщение «Результат: string», 
// где string — итоговая обрезанная строка.

let userText = prompt('Введите текст');
let fragmentOfText = prompt('Введите слово из текста');
let resulText = '';
let indexOfFragment = 0;
// Wrong way to define text template at the begining!
// const textAlert = `Результат: ${resulText}`;
// Because Alert() at the end of script print textAlert with initial empty value!

userText = userText.trim();
fragmentOfText = fragmentOfText.trim();

console.log('userText', userText);
console.log('fragmentOfText', fragmentOfText);

indexOfFragment = userText.indexOf(fragmentOfText);
console.log('indexOfFragment', indexOfFragment);
console.log('userText.length is ', userText.length);
console.log(userText.slice(0, indexOfFragment));

resulText = userText.slice(0, indexOfFragment);

alert(`Результат: ${resulText}`);
