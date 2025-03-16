// JS Array Hometask #9.5
/* 
Для начала вам необходимо создать пустой массив clientsEstimations,
в котором будут хранится оценки клиентов кофейни.
Также создайте функцию askClientToGiveEstimation(),
которая должна выводить сообщение: 
«Как вы оцениваете нашу кофейню от 1 до 10?» через prompt().
Конечный результат, который введет пользователь, 
должен быть типом данных number. 
Если было введено число от 1 до 10, то добавьте эту оценку 
в массив clientsEstimations, иначе же никаких действий не совершайте.
Для добавления оценок вызовите функцию askClientToGiveEstimation() 5 раз.
Рекомендуется это сделать через цикл for.
После того, как оценки будут добавлены, вам необходимо посчитать 
положительные и отрицательные оценки. Положительной оценкой является
число больше 5, отрицательной — число, меньшее либо равное 5. 
Выведите через alert() сообщение: 
«Всего положительных оценок: goodEstimations; 
Всего отрицательных оценок: notGoodEstimations»,
где goodEstimations — количество положительных оценок,
а notGoodEstimations — количество отрицательных оценок.
Условия:
В решение должен быть использован метод массивов filter().
*/

function askClientToGiveEstimation(array) {
    const estimation = Number(prompt('Как вы оцениваете нашу кофейню от 1 до 10?').trim());
    if (estimation => 1 && estimation <= 10) { array.push(estimation) };
}

const clientsEstimations = [];

// Start polling
for (let i = 1; i <= 5; i++) {
    askClientToGiveEstimation(clientsEstimations);
};
// Debug print
// console.log('clientsEstimations', clientsEstimations);

// Process polling result
const goodEstimations = clientsEstimations.filter(value => {
    return value > 5;
})

const notGoodEstimations = clientsEstimations.filter(value => {
    return value <= 5;
})

alert(`Всего положительных оценок: ${goodEstimations.length}; 
Всего отрицательных оценок: ${notGoodEstimations.length}`);
