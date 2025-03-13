// JS Function Hometask #8.2

/* 
Необходимо создать функцию getSumOfNumbers(). 
Она будет считать сумму от 0 до переданного числа. 
Выберите любой из 3 типов при создании функции.
getSumOfNumbers() принимает в себя 2 параметра: number и type.
Параметр number — это число, до которого будет считаться сумма. 
То есть, если было передано число 10, то функция должна 
посчитать сумму от 0 до 10 (0 + 1 + 2 + ... + 10). 
Если параметр не передан или значение было не числом, 
то из функции необходимо вернуть NaN.
Параметр type отвечает за выбор чисел для подсчета суммы. 
Он может быть одним из 3-х значений: "odd", "even" и "". 
Если type равняется "odd", то в сумму должны входить только нечетные числа, 
"even" - четные числа, пустая строка "" - все числа. 
По умолчанию параметр type должен быть равен "odd".
Функция getSumOfNumbers() должна возвращать итоговую сумму с помощью return.
 */

function getSumOfNumbers(number, type) {
    // Условие задачи "Если параметр не передан или значение было не числом, 
    // то из функции необходимо вернуть NaN." решил сделать так, т.е. учесть пустышку вместо числа
    if (isNaN(number) || number === '') {
        // debugger;
        return NaN;
    } else {
        // Решил поставить защиту от отриц.чисел
        if (number < 0) { number = Math.abs(number) };
        // debugger;
        let sum = 0;
        switch (type) {
            case "even":
                for (let i = 0; i <= number; i = i + 2) {
                    sum += i;
                };
                // debugger;
                break;
            case "":
                for (let i = 0; i <= number; i++) {
                    sum += i;
                };
                // debugger;
                break;
            default: // По условию задачи: По умолчанию параметр type должен быть равен "odd".
                for (let i = 1; i <= number; i = i + 2) {
                    sum += i;
                };
                // debugger;
        };
        // debugger;
        return sum;
    };
}

console.log(getSumOfNumbers(0, ""));
console.log(getSumOfNumbers(10, ""));
console.log(getSumOfNumbers(-10, ""));
console.log(getSumOfNumbers(10, "even"));
console.log(getSumOfNumbers(10, "odd"));
console.log(getSumOfNumbers());
console.log(getSumOfNumbers(''));
console.log(getSumOfNumbers(NaN, ''));
console.log(getSumOfNumbers('', ''));
console.log(getSumOfNumbers('5'));
console.log(getSumOfNumbers('text'));
