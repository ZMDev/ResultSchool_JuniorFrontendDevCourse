// JS Objects Hometask #10.2
/* 
Вам требуется создать функцию giveTalonsInOrder(), 
которая сортирует очередь из пациентов. Она принимает в себя 2 параметра:
patients — массив объектов. Каждый объект хранит информацию 
об имени пациента и его уникальном номере — id.
orders — массив уникальных номеров id, который указывает порядок, 
в котором должны стоять в очереди пациенты.
Функция должна возвращать новый массив, в котором объекты из массива
patients будут отсортированы по id из массива orders.
Посмотрите на возможный результат функции giveTalonsInOrder():
const ordersArr = [4, 2, 1, 3];
const people = [
   { id: 1, name: "Максим" },
   { id: 2, name: "Николай" },
   { id: 3, name: "Ангелина" },
   { id: 4, name: "Виталий" },
];
 
const result = giveTalonsInOrder(people, ordersArr);
console.log('result', result);
/* Возвращает массив
[
   { id: 4, name: 'Виталий' },
   { id: 2, name: 'Николай' },
   { id: 1, name: 'Максим' },
   { id: 3, name: 'Ангелина' }
]
*/

function giveTalonsInOrder(patients, orders) {
   const orderedQueue = [];
   for (let i = 0; i < orders.length; i++) {
      orderedQueue.push(patients.find(person => person.id === orders[i]));
   };
   return orderedQueue;
}

const ordersArr = [4, 2, 1, 3];
const people = [
   { id: 1, name: "Максим" },
   { id: 2, name: "Николай" },
   { id: 3, name: "Ангелина" },
   { id: 4, name: "Виталий" },
];

const result = giveTalonsInOrder(people, ordersArr);
console.log('Queue result', result);
