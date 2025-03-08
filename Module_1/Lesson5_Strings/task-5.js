// String Hometask #5.5

let userString = prompt('Введите текст для обрезки');
let startSliceIndex = prompt('Введите индекс, с которого нужно начать обрезку строки');
let endSliceIndex = prompt('Введите индекс, которым нужно закончить обрезку строки');

userString = userString.trim();
startSliceIndex = Number(startSliceIndex.trim());
endSliceIndex = Number(endSliceIndex.trim());

const alertText = `Результат: ${userString.slice(startSliceIndex, endSliceIndex)}`;

alert(alertText);
