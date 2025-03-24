// String-Additional Hometask #5add.1
/* 
Вам дан следующий текст, взятый из Википедии:
«JavaScript — мультипарадигменный язык программирования. 
Поддерживает объектно-ориентированный, императивный и функциональный 
стили. Является реализацией спецификации ECMAScript. 
JavaScript обычно используется как встраиваемый язык для 
программного доступа к объектам приложений.»
Вам требуется сохранить его в переменную javaScriptDescription
и выполнить над этой строкой следующие действия:
Обрежьте строку наполовину с 1-го символа по символ, 
который находится посередине строки. 
Если номер символа, который находится посередине строки, получается не целым, 
то используйте функцию Math.floor(), чтобы округлить его к 
меньшему целому числу. (Например, если индекс получился 5.9, 
то Math.floor(5.9) будет равен 5).
В обрезанной строке необходимо заменить все строчные буквы «а»
на прописные «А» (и латиницу, и кириллицу).
Удалите все пробелы в строке.
Продублируйте итоговую строку 3 раза.
В консоль необходимо вывести:
Символ, который находится посередине конечной строки. Если индекс 
символа получается не целым, то используйте функцию Math.floor(), 
чтобы округлить его к меньшему числу
Саму конечную строку
 */

const javaScriptDescription = `JavaScript — мультипарадигменный язык программирования. 
Поддерживает объектно - ориентированный, императивный и функциональный
стили.Является реализацией спецификации ECMAScript. 
JavaScript обычно используется как встраиваемый язык для 
программного доступа к объектам приложений.`;

let changedString = '';

console.log('Initial string: ', javaScriptDescription);
console.log('Initial string length: ', javaScriptDescription.length);

if (javaScriptDescription.length % 2 === 0) {
    changedString = javaScriptDescription.slice(0, javaScriptDescription.length / 2);
    console.log('Symbol in the middle of the initial string - ',  javaScriptDescription[javaScriptDescription.length / 2], ' and his index', javaScriptDescription.length / 2);
} else {
    changedString = javaScriptDescription.slice(0, Math.floor(javaScriptDescription.length / 2));
    console.log('Symbol in the middle of the initial string - ',  javaScriptDescription[Math.floor(javaScriptDescription.length / 2)], ' and his index', Math.floor(javaScriptDescription.length / 2));
};

console.log('Changed String: ', changedString);

changedString = changedString.replaceAll('a', 'A'); // English
console.log('String with English "a" in upper case', changedString); // English

changedString = changedString.replaceAll('а', 'А'); // Russian
console.log('String with Russian "а" in upper case', changedString); // Russian

changedString = changedString.trim().replaceAll(' ', '');
console.log('String without spaces: ', changedString);

console.log('Final string repeated triple: ', changedString.repeat(3));
