// JS Classes & OOP Hometask #13.3
/* 
Вам поручили задачу на проекте. Необходимо разработать словарь, 
в который можно добавлять слова с их описанием, удалять слова и получать их.
Для начала создайте класс Dictionary. 
Его конструктор принимает 1 параметр name.

Инициализируйте данное значение при помощи this. 
Также в конструкторе должно объявляться поле words, 
которое по умолчанию должно быть пустым объектом.

Вам необходимо в класс Dictionary добавить 4 метода:
add(). Данный метод добавляет новое слово в словарь. 
Он принимает в себя 2 параметра:
word - слово (тип данных строка).
description - описание слова (тип данных строка).
Присвойте объекту words по ключу word (этот параметр передали в метод add()) значение объекта, 
в котором будут храниться данные о слове и его описание. 
Пример объекта words после добавления слова "js":

// words
{ 	
    js: {
        word: 'js', 
        description: 'язык программирования', 	
    }
}

Если слово уже существует в объекте words, то не нужно перезаписывать слово, 
которое уже было сохранено ранее. 
То есть, если значение по ключу уже существует, то ничего не делаем.

remove() - данный метод удаляет слово из словаря. Он принимает в себя ключ, 
по которому нужно удалить объект слова из объекта words.
get - данный метод получает слово из словаря. Он принимает в себя ключ из объекта words. 
Из метода необходимо возвратить найденный объект слова по переданному параметру ключа.
showAllWords() - данный метод не принимает в себя никаких параметров. 
Его задача состоит в том, чтобы вывести все слова, которые есть в объекте words, 
в консоль в формате “word - description” (word - само слово, description - описание слова).
Для тестирования написанного класса используйте данный код:

const dictionary = new Dictionary('Толковый словарь');
dictionary.add('JavaScript', 'популярный язык программирования');
dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');

dictionary.remove('JavaScript');
dictionary.showAllWords();
// Веб-разработчик - Человек, который создает новые сервисы и сайты или поддерживает // и дополняет существующие
Примечание: в JavaScript для добавления в объект по динамическому ключу мы можем использовать []. Например:

const obj = {};
const dynamicKey = 'name';
obj[dynamicKey] = 'Elena';

console.log(obj); // { name: 'Elena' }
*/

class Dictionary {
    constructor(name) {
        this.name = name;
        this.words = {};
    }

    add(word, description) {
        this.words[word] = {'word': String(word), 'description': String(description)};
    }

    remove(key) {
        delete this.words[key]
        // Debug print
        // if (key in this.words) {
        //     console.log(`Ключ ${key} в объекте существует!`);
        // } else {
        //     console.log(`Ключ ${key} в объекте не существует!`);
        // };
    }

    get(key) {
        console.log(this.words[key]);
    }

    showAllWords() {
        Object.keys(this.words).forEach(key => {
            // console.log(`Ключ = ${key} - Значение = ${this.words[key].description}`);
            console.log(`${key} - ${this.words[key].description}`);
        });

    }
}

const dictionary = new Dictionary('Толковый словарь');
// Debug print
// console.log(dictionary);
dictionary.add('JavaScript', 'популярный язык программирования');
// Debug print
// console.log(dictionary);
dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');
// Debug print
// console.log(dictionary);
dictionary.remove('JavaScript');
// Debug print
// console.log(dictionary);
dictionary.showAllWords();
