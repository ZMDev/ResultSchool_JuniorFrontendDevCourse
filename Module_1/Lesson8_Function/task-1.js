// JS Function Hometask #8.1

/* 
Вам необходимо создать 3 функции через Function declaration, Function expression, Arrow function expression. 
Они должны принимать в себя параметр name и возвращать строку, подставляя туда этот параметр. 
Название у них должны быть следующими: getName1, getName2, getName3.
Функции должны удовлетворять следующим условиям:
В каждую из этих функций должен быть передан 1 параметр name.
Из каждой функции с помощью return должно быть возвращено значение «Имя равно name», 
где name — значение переданного в функцию параметра name.
После вам необходимо вызвать каждую функцию и вывести возвращаемое из нее значение в консоль.
*/

function getName1 (name) {
    return `Имя = ${name}`;
}

const getName2 = function (name) {
    return `Имя = ${name}`;
};

const getName3 = name => {return `Имя = ${name}`};

console.log(getName1('Mick'));
console.log(getName2('Alice'));
console.log(getName3('Jonh'));
