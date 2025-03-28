// JS Objects Hometask #10.5
/* 
Напишите функцию sum(), которая будет принимать 
неограниченное количество аргументов и возвращать их сумму:
function sum() {
  // Ваша реализация
}
console.log(sum(1, 2, 3)) // 6
console.log(sum(2, 2)) // 4
console.log(sum(10, 15, 249, 653, 846)) // 1773
*/

function sum(...rest) {
  // Debug print
  // console.log(rest.length);
  let sum = 0;
  for (number of rest) { sum += number };
  return sum;
}

console.log('Result of sum = ', sum(1, 2, 3));
console.log('Result of sum = ', sum(2, 2));
console.log('Result of sum = ', sum(10, 15, 249, 653, 846));
