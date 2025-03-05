// Task #1
// String — строка.

const strText = 'Используем число Эйлера в натуральном логарифме';
console.log('strText=', strText, typeof strText);

// Number — число (целое или с плавающей точкой).

const numberEuler = 2.718;
console.log('numberEuler=', numberEuler, typeof numberEuler);

// BigInt — большое целое число.

const nextBigInt = 41n;
console.log('nextBigInt=', nextBigInt, typeof nextBigInt);

// Boolean — логический тип (true/false).

const itsFalse = false;
console.log('itsFalse=', itsFalse, typeof itsFalse);
const itsTrue = true;
console.log('itsTrue=', itsTrue, typeof itsTrue);

// Null — специальный тип для пустого значения.

const boxNull = null;
console.log('boxNull=', boxNull, typeof boxNull);

// Undefined — неопределенный тип (переменная определена, но значение ей не присвоено).

/*  Wrong way - it's because:
"Также обратите внимание, что при инициализации переменной через const ,
необходимо обязательно указать какое-либо значение."

const boxUndef1;
console.log('boxUndef1=', boxUndef1, typeof boxUndef1);

Error: "Uncaught SyntaxError: Missing initializer in const declaration (at data-types.js:31:7)"
*/

const boxUndef2 = undefined;
console.log('boxUndef2=', boxUndef2, typeof boxUndef2);

// Object — объект, единственный сложный тип данных.

const objExample = {
    nameObj: 'TestObjectName',
    minSizeObj: 10,
    maxSizeObj: 100,
    isActive: false
};

console.log('objExample=', objExample, typeof objExample);

// Symbol — специальный тип для создания уникальных ключей объекта.

const clientID = Symbol("clID");
console.log('clientID=', clientID, typeof clientID);
alert(clientID.toString());

// Test typeof for alert()

console.log('typeof alert() = ', typeof alert)
