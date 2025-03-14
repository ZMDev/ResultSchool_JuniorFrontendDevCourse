// JS Array Hometask #9.2
/* 
Вам необходимо создать функцию getSumOfSequence(), 
которая будет создавать массив из чисел и высчитывать 
сумму первого и последнего элементов массива.
Функция принимает в себя один параметр number. 
Используя этот параметр, нужно создать массив из чисел от 1 до number.
Для заполнения массива элементами используйте цикл for 
(например, если был передан number равный 5, 
то массив должен выглядеть следующим образом: [1, 2, 3, 4, 5]).
Функция getSumOfSequence() должна возвращать сумму первого
и последнего элементов итогового массива.
 */

function getSumOfSequence (number) {
    const newArray = [];
    for (let i = 1; i <= number; i++) {
        newArray.push(i);
    };
    console.log(newArray);
    return `Сумма крайних элементов масива = ${newArray[0]+newArray[newArray.length - 1]}`;
}

console.log(getSumOfSequence(5));