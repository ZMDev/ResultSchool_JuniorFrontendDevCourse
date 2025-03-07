// Task #4.4 Data converting
// 1
console.log(Number(' 1 2 3 4 5')); // Получим набор из 5 чисел от 1 до 5
// А получил Nan, понятно - мы же строку с пробелами поместили в Number()

// 2
console.log(Number('1234 5')); // Получим 2 числа 1234 и 5
// А получил Nan?, понятно - мы другой вариант строки с пробелами поместили в Nimber()

// 3
console.log(Number('12345')); // Получим число 12345
//Верно

// 4
console.log(String(false)); // Получим строку false
//Верно

// 5
console.log(Boolean(0000000)); // Получим Boolean значение True
// А получили false, 0000000 по сути просто 0

// 6
console.log(Boolean(0.0000001)); // Получим Boolean значение True
//Верно

// 7
console.log(String(undefined)); // Получим строку undefined
//Верно

// 8
console.log(Number('100f')); // Получим число 100.00
// А получил Nan, понятно - мы же строку с символом поместили в Number() 
// и f это не про Float, увы.

// 9
console.log(Number('100')); // Получим число 100
//Верно

// 10
console.log(Number('000001'));  // Получим число 1
//Верно