// JS Array Hometask #9.6
/* 
Вам дан массив чисел:
const numbers = [10, 4, 100, -5, 54, 2];
Необходимо посчитать сумму кубов всех чисел в массиве. 
Например, для массива [1, 5, 9] должен быть следующий
результат: 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
Решите данную задачу 4-мя способами:
Через цикл for
Через цикл for...of
Через метод forEach()
Через метод reduce()
Для данного массива numbers сумма кубов должна равняться 1158411.
*/

const numbers = [10, 4, 100, -5, 54, 2];
let sumOfCubes = 0;

for (let i = 0; i <= numbers.length - 1; i++) {
    // debugger;
    sumOfCubes += numbers[i] ** 3;
};
// debugger;
console.log('sumOfCubes with For = ', sumOfCubes);

sumOfCubes = 0;
for (let item of numbers) {
    sumOfCubes += item ** 3;
};
console.log('sumOfCubes with ForOf = ', sumOfCubes);

sumOfCubes = 0;
numbers.forEach((item) => {
    // debugger;
    sumOfCubes += item ** 3;
});
// debugger;
console.log('sumOfCubes with ForEach = ', sumOfCubes);

sumOfCubes = numbers.reduce((acc,number,index,array) => {
    acc += number ** 3;
    return acc;
}, 0);
console.log('sumOfCubes with Reduce = ', sumOfCubes);

console.log('Correct sum = 1158411');