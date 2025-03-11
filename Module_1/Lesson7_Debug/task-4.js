// Debug Hometask #7.4


// 1) Раз условие задачи, что массив numbers изменять и дублировать нельзя
// то сразу использую const вместо исходного let
const numbers = [10, 4, 100, -5, 54, 2];
let sum = 0;
debugger;

// Через цикл for
for (let i = 0; i < numbers.length; i += 1) {
  // 2) Убираю изменение элемента массива
  // numbers[i] = numbers[i] ** 3;
  // 3) Проверил, что элемент массива, действительно число
  console.log('numbers[i]', numbers[i], typeof numbers[i]);
  // 4) Точнее переношу для п.2 возведение в степень элемента массива в вычисление суммы
  sum += numbers[i] ** 3;
  debugger;
};
console.log(sum); // 1158411

// Через цикл for of
sum = 0;
for (let num of numbers) {
  num = num ** 3;
  sum += num;
};
console.log(sum); // 1003904306910622800

// 5) Теперь суммы циклов совпадают