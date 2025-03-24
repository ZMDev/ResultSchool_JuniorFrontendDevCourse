// JS Date & Time Hometask #11.2
/* 
Сейчас ваша задача состоит в том, чтобы создать функцию getDaysBeforeBirthday(), 
которая будет возвращать количество дней до следующего дня рождения. 
Данная функция должна принимать 1 параметр nextBirthdayDate, который является 
экземпляром класса Date и указывает на дату вашего ближайшего дня рождения. 
Год стоит указывать ближайший к текущей дате, а не год вашего рождения.
Также рекомендуется создать вспомогательную функцию convertMsToDays(), 
которая переводит миллисекунды в дни. 
Для округления итогового числа используйте Math.round().
*/

function getDaysBeforeBirthday(nextBirthdayDate) {
    const date = new Date();
    // Debug print
    // console.log(nextBirthdayDate);
    // console.log(date);
    return `До Вашего ближ.дня рождения осталось ${convertMsToDays(nextBirthdayDate - date)} дней`;
}

function convertMsToDays(ms) {
    return Math.round(ms / 1000 / 60 / 60 / 24);
}

const strDayMonthBirthday = prompt('Укажите дату вашего ближайшего дня рождения в этом или следующем году в формате ДД-ММ').toString().split('-');
const birthday = new Date();
birthday.setDate(strDayMonthBirthday[0]);
birthday.setMonth(strDayMonthBirthday[1] - 1);

// Debug print
// console.log('year:', birthday.getFullYear());
// console.log('month:', birthday.getMonth());
// console.log('day:', birthday.getDate());

alert(getDaysBeforeBirthday(birthday));
