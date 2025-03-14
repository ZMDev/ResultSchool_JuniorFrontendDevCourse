// JS Array Hometask #9.3
/* 
Изначально у вас есть массив coffees, в котором хранятся все виды кофе,
которые есть в кофейне у Алексея. Напитки распределены в порядке популярности среди клиентов, т.е. кофе «Latte» — самый популярный.
const coffees = ['Latte', 'Cappuccino', 'Americano'];
С помощью функции prompt() вам необходимо запрашивать название кофе. 
Передайте в prompt() сообщение: «Поиск кофе по названию:». 
Сохраните значение, которое ввел пользователь в переменную coffeeName.
Если введенное пользователем название кофе существует, 
то отобразите сообщение с помощью alert(): 
«Держите ваш любимый кофе coffee. 
Он number-й по популярности в нашей кофейне.», 
где coffee — название найденного кофе, 
number — номер найденного кофе в массиве coffees. 
Если же кофе не был найден, то отобразите сообщение: 
«К сожалению, такого вида кофе нет в наличии».
Условия:
Название кофе должно быть регистронезависимым, 
т.е. если пользователь напечатает «lATte», 
то должен показаться результат с кофе «Latte».
Необходимо использовать findIndex().
 */

const coffees = ['Latte', 'Cappuccino', 'Americano'];

const coffeeName = prompt('Поиск кофе по названию');

const findedCoffeeIndex = coffees.findIndex((item) => {
    return item.toLowerCase() === coffeeName.toLocaleLowerCase();
});
// console.log('findedCoffeeIndex', findedCoffeeIndex);

if (findedCoffeeIndex !== -1) {
    alert(`Держите ваш любимый кофе ${coffees[findedCoffeeIndex]}.
Он ${findedCoffeeIndex + 1}-й по популярности в нашей кофейне.`);
} else {
    alert(`К сожалению, такого вида кофе ${coffeeName} нет в наличии`);
};
