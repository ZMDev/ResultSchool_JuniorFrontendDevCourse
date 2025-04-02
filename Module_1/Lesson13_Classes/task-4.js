// JS Classes & OOP Hometask #13.4
/* 
В прошлом задании вы создали словарь. Заказчик доволен проделанной работой и команда разработки тоже. 
Так как вы уже хорошо разобрались с технологией словаря, то вас попросили реализовать еще один словарь. 
Заказчик хочет создать новую категорию слов “Сложные слова”.

Используйте код, написанный в прошлом задании. 
Вам необходимо создать дочерний класс HardWordsDictionary от класса Dictionary. 
Конструктор у HardWordsDictionary принимает в себя также параметр name 
и вызывает конструктор родительского класса.

Примечание: если конструктор только вызывает родительский конструктор со всеми переданными параметрами, 
то в дочернем классе его можно не реализовывать, автоматически будет вызываться родительский (ссылка на документацию).

Все методы, которые есть в Dictionary, должны остаться без изменений в HardWordsDictionary, кроме одного. 
Вам необходимо переопределить метод add(), который должен работать по той же логике, 
что и add() у Dictionary, только объект слова должен выглядеть следующим образом:

{
   word: 'word',
   description: 'description',
   isDifficult: true,
}
Для теста класса HardWordsDictionary используйте данный код:

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');
    
hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без 
специальной подготовки, обладая только поверхностными знаниями.');
    
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое 
значение старого слова.');
    
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.'); 
    
hardWordsDictionary.remove('неологизм');
    
hardWordsDictionary.showAllWords();
    
дилетант - Тот, кто занимается наукой или искусством без специальной подготовки, 
обладая только поверхностными знаниями.
квант - Неделимая часть какой-либо величины в физике.
*/

class Dictionary {
   constructor(name) {
      this.name = name;
      this.words = {};
   }

   add(word, description) {
      this.words[word] = { 'word': String(word), 'description': String(description) };
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
         console.log(`${key} - ${this.words[key].description}`);
      });

   }
}

class HardWordsDictionary extends Dictionary {

   add(word, description) {
      this.words[word] = { word: String(word), description: String(description), isDifficult: true };
   }

}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');

hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');

hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');

hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');

hardWordsDictionary.remove('неологизм');

hardWordsDictionary.showAllWords();

// Debug print
console.log(hardWordsDictionary);
