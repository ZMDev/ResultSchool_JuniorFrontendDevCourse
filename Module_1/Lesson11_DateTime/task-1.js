// JS Date & Time Hometask #11.1
/* 
Часто мы записываем даты в следующем формате: 
«день.месяц.год». 
Сейчас вам необходимо создать функцию getDateFormat(), 
которая будет приводить дату к этому формату. 
Она принимает 2 параметра:
date - экземпляр класса Date, который нужно перевести в данный текстовый формат:
“день.месяц.год”
separator - разделитель дня, месяца и года. 
По умолчанию он должен быть равен точке ".". 
Если в качестве разделителя будет передано тире "-", 
то формат уже должен быть таким: “день-месяц-год”.
Также учтите, что номер месяца в JavaScript считается с 0 до 11. 
Кроме этого, если день либо месяц возвращают однозначное число, 
то вам к нему необходимо добавить 0. 
То есть результат должен быть не таким: «5.5.2001», а «05.05.2001».
 */

function getDateFormat(date, separator) {
    // Debug print
    // console.log('date', typeof date);
    // console.log('Date.now()', typeof Date.now()); FYI: type is Number!
    // console.log(separator, typeof separator);

    let strDate = String((date.getDate() > 9 ? date.getDate() : '0' + date.getDate()));
    let strMonth = String((date.getMonth() + 1) > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1));
    let strYear = String(date.getFullYear());
    if (separator === undefined) {
        return `${strDate}.${strMonth}.${strYear}`;
    } else {
        return `${strDate}${separator}${strMonth}${separator}${strYear}`;
    }
}

const checkDate = new Date();
console.log(getDateFormat(checkDate));
console.log(getDateFormat(checkDate, '-'));
console.log(getDateFormat(checkDate, '.'));
console.log(getDateFormat(checkDate, '*'));
