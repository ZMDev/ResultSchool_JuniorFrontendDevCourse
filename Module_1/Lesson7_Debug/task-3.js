// Debug Hometask #7.3

// 1) Используется вариант отладки c console.log и debugger

// 2) Раз по условиям задачи пользователь должен ввести число, 
// то лучше сразу выполнить явное преобразование с защитой от лишних пробелов
// 3) Использую стиль с ; в конце строк JS

const salaryOfJuniorDeveloper = 500;
const numberOfJuniorDevelopers = 3;
let taxPercentage = 13;
// 4) Сразу задаю начальное значение и тип переменной для вычисления суммы
let totalJuniorDevelopersSalary = 0;
debugger;

for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
  const salaryWithTax = salaryOfJuniorDeveloper - (salaryOfJuniorDeveloper * taxPercentage / 100);
  totalJuniorDevelopersSalary += salaryWithTax;
  debugger;
};
console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);
