// String Hometask #6.4

// for (let i = 0; i < 3; i += 1) {
//     let newStudent = prompt('Введите имя нового студента!');
//     if (newStudent) {
//       newStudent = newStudent.trim();
//       alert(`Добро пожаловать, ${newStudent}!`)
//     }
//   }


// While loop

let i = 0;
let newStudent = '';
while (i < 3) {
    console.log('i',i);
    newStudent = prompt('Введите имя нового студента!');
    if (newStudent) {
      newStudent = newStudent.trim();
      alert(`Добро пожаловать, ${newStudent}!`)
    }
    i++;
}

// Do While loop

let j = 0;
newStudent = '';
do {
    console.log('j',j);
    newStudent = prompt('Введите имя нового студента!!!');
    if (newStudent) {
      newStudent = newStudent.trim();
      alert(`Добро пожаловать, ${newStudent}!!!`)
    }
    j++;
} while (j < 3)

console.log('The end');