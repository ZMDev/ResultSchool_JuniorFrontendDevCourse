// Task #4.3 Data converting

// console.log
console.log(String(console.log));
// Получаем function log() { [native code] }
console.log(Number(console.log)); //Будет NaN
console.log(Boolean(console.log)); //Будет True

// { name: 'Maxim' }
console.log(String({ name: 'Maxim' }), typeof String({ name: 'Maxim' })); // Будет Object
//Получил [object Object] string
console.log(Number({ name: 'Maxim' })); // Будет NaN
console.log(Boolean({ name: 'Maxim' })); // Будет True

// Symbol('key')
console.log(String(Symbol('key')), typeof String(Symbol('key'))); //Будет Object
//Получил Symbol(key) string
//console.log(Number(Symbol('key'))); //Будет NaN
// Упс, Uncaught TypeError: Cannot convert a Symbol value to a number at Number (<anonymous>)
// Symbol не можем преобразовать в Number 

// Number
console.log(String(Number), typeof String(Number)); //Будет строка Number
//Получил function Number() { [native code] }
console.log(Number(Number)); // Будет NaN
console.log(Boolean(Number)); // Будет True

// ''
console.log(String(''), typeof String('')); //Будет строка-пустышка
console.log(Number('')); // Будет NaN
console.log(Boolean('')); // Будет False

// 0
console.log(String(0), typeof String(0)); //Будет строка с '0'
console.log(Number(0)); // Будет число 0
console.log(Boolean(0)); // Будет False

// -10
console.log(String(-10), typeof String(-10)); //Будет строка с '-10'
console.log(Number(-10)); // Будет число -10
console.log(Boolean(-10)); // Будет True

// '-105'
console.log(String('-105'), typeof String('-105')); //Будет строка с '-105'
console.log(Number('-105')); // Будет число -105
console.log(Boolean('-105')); // Будет True
