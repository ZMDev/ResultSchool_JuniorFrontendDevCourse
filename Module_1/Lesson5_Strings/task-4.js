// String Hometask #5.4

let userName = prompt('Как вас зовут?');
let userAge = prompt('Сколько вам лет?');

userName = userName.toUpperCase();
userName = userName.trim();

userAge = userAge.trim();
userAge = Number(userAge);

console.log('userName ', userName);
console.log('userAge ', userAge, typeof userAge);

const alertText = `Вас зовут ${userName} и вам ${userAge} лет`;

alert(alertText);
