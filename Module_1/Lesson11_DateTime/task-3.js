// JS Date & Time Hometask #11.3
/* 
В JavaScript объект даты может принимать в себя timestamp, 
т.е. количество миллисекунд с 1 января 1970 года 00:00:00 по UTC. 
По данному количеству миллисекунд генерируется объект даты. 
Благодаря этому, чтобы добавить определенное число миллисекунд, 
можно использовать следующую запись: new Date(Date.now() + 5000), 
где 5000 - это миллисекунды. 
В итоге мы получим дату, которая на 5000 миллисекунд больше текущей.
Используя эти знания, вам необходимо создать функцию addDays(), 
которая будет добавлять переданное количество дней к переданной дате. 
Она принимает в себя 2 параметра:
date - экземпляр класса Date
days - количество дней, тип данных number
Вам необходимо к параметру date прибавить определенное количество дней, которое передается в параметр days. Функция addDays() должна возвращать обновленную дату.
Подсказка: не забывайте, что timestamp, который передается в Date(), должен измеряться в миллисекундах.
*/

function addDays(date, days) {
    const saveDate = new Date (date);
    date.setDate(date.getDate() + days);
    // Debug print
    // console.log('newDate', date);
    // console.log('oldDate', saveDate);
    return `Через ${days} дн. от ${saveDate} будет ${date}`
}

const date = new Date();
const strDayMonth = prompt('Арифметика дат. Введите дату в формате ДД-ММ').toString().split('-');
date.setDate(strDayMonth[0]);
date.setMonth(strDayMonth[1]-1);
const days = Number(prompt('Теперь введите число, обозначающее кол-во дней, кот. нужно добавить к дате').trim());

// Debug print
// console.log('year:', date.getFullYear());
// console.log('month:', date.getMonth());
// console.log('day:', date.getDate());
// console.log('add days',days);

alert(addDays(date, days));
