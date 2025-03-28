// JS Objects Hometask #10.3
/* 
Вам необходимо создать функцию, которая будет работать с объектами. 
Назовите ее handleObject(). Она принимает в себя 3 параметра:
obj — объект, с которым будет работать функция.
key — ключ объекта.
action — действие, которое мы будем совершать над объектом.
Параметр action может быть 4-мя значениями:
get - если action равен get, то функция handleObject() должна вернуть значение ключа key в объекте obj.
add - если action равен add, то функция handleObject() должна добавить новый ключ key в объект object и присвоить значение пустой строки "". 
Также из функции необходимо возвратить обновленный объект obj.
delete - если action равен delete, то функция handleObject() должна удалить свойство key из объекта obj и возвратить обновленный объект.
Если action равен любому другому значению, то функция handleObject() должна возвратить объект obj.
Протестируйте функцию на этом коде:
const student = {
   name: 'Maxim',
   programmingLanguage: 'JavaScript',
}
const result = handleObject(student, 'programmingLanguage', 'delete');
console.log('result', result); // { name: 'Maxim' }
*/

function handleObject(obj, key, action) {
   switch (action) {
      case 'get':
         return obj[key];
         break;
      case 'add':
         obj[key] = '';
         return obj;
         break;
      case 'delete':
         delete obj[key];
         return obj;
      default:
         return obj;
         break;
   };
}

const student = {
   name: 'Maxim',
   programmingLanguage: 'JavaScript',
}

let result = handleObject(student, 'programmingLanguage', 'get');
console.log('Result with Get = ', result);

result = handleObject(student, 'workplace', 'add');
console.log('Result with Add = ', result);

result = handleObject(student, 'programmingLanguage', 'delete');
console.log('Result with Delete = ', result);

result = handleObject(student, 'workplace', 'any');
console.log('Result with Default = ', result);
