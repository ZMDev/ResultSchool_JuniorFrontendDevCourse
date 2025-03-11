// Debug Hometask #7.2

// 1) Использую оба варианта отладки c console.log и debugger

// 2) Раз по условиям задачи пользователь должен ввести число, 
// то лучше сразу выполнить явное преобразование с защитой от лишних пробелов
// 3) Использую стиль с ; в конце строк JS
const temperatureInCelsius = Number(prompt('Введите температуру в градусах Цельсия').trim());
// 4) Отладочный контроль ввода данных
console.log('temperatureInCelsius', temperatureInCelsius, typeof temperatureInCelsius);

// 5) В итоге debugger поставил перед alert'ами в каждой ветке условия
// так нагляднее отслеживать значения переменных

if (temperatureInCelsius === 0) {
  debugger;
  alert('0 градусов по Цельсию - это температура замерзания воды');
} else if (temperatureInCelsius > 0) {
  debugger;
  alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
};

// 6) VSCode, с установленным ESLint расширением, сам подсказывает,
//  что возможно ошиблись в имени переменной, указав Цельсий с малой буквы
// 7) Немного поправил формулу пересчёта, переставив скобки, хотя можно и без них совсем
const temperatureInFahrenheit = temperatureInCelsius * (9 / 5) + 32;
debugger;
// 8) Вижу и сразу исправляю неправильный синтаксис шаблонной строки - вместо $ указали %
alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по Фаренгейту.`);
