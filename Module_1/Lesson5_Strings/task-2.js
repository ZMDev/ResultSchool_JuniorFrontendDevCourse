// String Hometask #5.2

const myName = 'Михаил';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Владилен Минин';
const reasonText = 'мне интересно заниматься разработкой сервисов,\nполезных для других людей';
const numberOfMonth = 0;

let myInfoText = `Всем привет! Меня зовут ${myName}.
Сейчас я изучаю язык программирования ${programmingLanguage} на курсе 
по ${programmingLanguage} у ${courseCreatorName}. 
Я хочу стать веб-разработчиком, потому что ${reasonText}. 
До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев(а). 
Я уверен, что пройду данный курс до конца!`;

// console.log(myInfoText);

myInfoText = myInfoText.replaceAll(programmingLanguage, programmingLanguage.toLowerCase());
myInfoText = myInfoText.replaceAll('курс', 'КУРС');

console.log(myInfoText);
console.log('Длина строки myInfoText ', myInfoText.length);
console.log('1й символ строки myInfoText ', myInfoText[0]);
console.log('Последний символ строки myInfoText ', myInfoText[myInfoText.length-1]);
