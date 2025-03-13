// JS Function Hometask #8.3
/* 
Вам необходимо создать функцию getDivisorsCount(), 
которая будет высчитывать количество делителей для переданного числа. 
Если он не передан или значение было не числом, 
то из функции необходимо вернуть NaN.
Также если number меньше нуля либо является не целым 
(можно проверить при помощи функции Number.isInteger(number)), 
то выводите в модальное окно при помощи alert() 
сообщение «number должен быть целым числом и больше нуля!».
 */

function getDivisorsCount(number) {
    // Условие задачи "Если не передан или значение было не числом, 
    // то из функции необходимо вернуть NaN." решил сделать так, т.е. учесть пустышку вместо числа
    if (isNaN(number) || number === '') {
        // debugger;
        return NaN;
    } else if (Number.isInteger(number) && number > 0) {
        let divCount = 0;
        for (let i = 0; i <= number; i++) {
            if (number % i === 0) { divCount++; };
            // debugger;
        };
        return divCount;
    } else {
        // FYI: При отладке с debugger на NodeJS вместо alert() используй console.log()
        // иначе нарвёшься на exception от NodeJS, кот. не умеет работать с alert()
        alert('number должен быть целым числом и больше нуля!');
        // console.log('number должен быть целым числом и больше нуля!');

        // Хотя по условию задачи для варианта "если number меньше нуля либо является не целым"
        // не было задано возвращать NaN, решил так сделать, иначе получал undefine
        return NaN;
    };
}

console.log(getDivisorsCount(4));
console.log(getDivisorsCount(-12));
console.log(getDivisorsCount(0));
console.log(getDivisorsCount());
console.log(getDivisorsCount(''));
console.log(getDivisorsCount('text'));
console.log(getDivisorsCount(18));
console.log(getDivisorsCount(7));
