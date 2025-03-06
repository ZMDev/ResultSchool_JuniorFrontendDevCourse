// Task #4.1 Data converting

// 1) String — строка.

let strText = '4.1';
console.log('strText=', strText, typeof strText);
console.log('Convert string to number', Number(strText), typeof Number(strText));
strText = 'Текст2текст' + '4.1';
console.log('Convert string to another string', String(strText), typeof String(strText), typeof strText);
console.log('Convert string to boolean', Boolean(strText), typeof Boolean(strText));

// 2) Number — число (целое или с плавающей точкой).

let numberPi = 3.14;
console.log('numberPi=', numberPi, typeof numberPi);
console.log('Convert number to string', String(numberPi), typeof String(numberPi));
console.log('Convert number to boolean', Boolean(numberPi), typeof Boolean(numberPi));
numberPi = 3 + 1 + 4;
console.log('Convert number to another number', Number(numberPi), typeof Number(numberPi));
numberPi = 0;
console.log('Convert another number to boolean', Boolean(numberPi), typeof Boolean(numberPi));

// 3) BigInt — большое целое число.

let nextBigInt = 39n;
console.log('nextBigInt=', nextBigInt, typeof nextBigInt);
console.log('Convert BigInt to string', String(nextBigInt), typeof String(nextBigInt));
console.log('Convert BigInt to number', Number(nextBigInt), typeof Number(nextBigInt));
console.log('Convert BigInt to boolean', Boolean(nextBigInt), typeof Boolean(nextBigInt));

// 4) Boolean — логический тип (true/false).

let itsFalse = false;
console.log('itsFalse=', itsFalse, typeof itsFalse);
console.log('Convert Boolean to string', String(itsFalse), typeof String(itsFalse));
console.log('Convert Boolean to number', Number(itsFalse), typeof Number(itsFalse));
itsFalse = 1;
console.log('Convert Boolean to another boolean', Boolean(nextBigInt), typeof Boolean(nextBigInt));


// 5) Null — специальный тип для пустого значения.

let boxNull = null;
console.log('boxNull=', boxNull, typeof boxNull);
console.log('Convert Null to string', String(boxNull), typeof String(boxNull));
console.log('Convert Null to number', Number(boxNull), typeof Number(boxNull));
console.log('Convert Null to boolean', Boolean(boxNull), typeof Boolean(boxNull));

// 6) Undefined — неопределенный тип (переменная определена, но значение ей не присвоено).

let boxUndef1 = undefined;
console.log('boxUndef1=', boxUndef1, typeof boxUndef1);
console.log('Convert Undefined to string', String(boxUndef1), typeof String(boxUndef1));
console.log('Convert Undefined to number', Number(boxUndef1), typeof Number(boxUndef1));
console.log('Convert Undefined to boolean', Boolean(boxUndef1), typeof Boolean(boxUndef1));

// 7) Object — объект, единственный сложный тип данных.

let objExample = {
    nameObj: 'TestObjectName',
    minSizeObj: 10,
    maxSizeObj: 100,
    checkNumber: '113',
    isActive: false
};

console.log('objExample=', objExample, typeof objExample);
console.log('Convert Object to string', String(objExample), typeof String(objExample));
console.log('Convert Object to string', String(objExample.maxSizeObj), typeof String(objExample.maxSizeObj));
console.log('Convert Object to number', Number(objExample), typeof Number(objExample));
console.log('Convert Object to number', Number(objExample.checkNumber), typeof Number(objExample.checkNumber));
console.log('Convert Object to boolean', Boolean(objExample), typeof Boolean(objExample));
console.log('Convert Object to boolean', Boolean(objExample.isActive), typeof Boolean(objExample.isActive));

// 8) Symbol — специальный тип для создания уникальных ключей объекта.

let testID = Symbol("testID");
console.log('testID=', testID, typeof testID);
console.log('Convert Symbol to string', String(testID), typeof String(testID));
/* console.log('Convert Symbol to number', Number(testID), typeof Number(testID));
I've got the error:
index.js:73  Uncaught TypeError: Cannot convert a Symbol value to a number
*/
console.log('There are no any ways to convert Symbol to number! It\'s is impossible into JS!');
console.log('Convert Symbol to boolean', Boolean(testID), typeof Boolean(testID));
