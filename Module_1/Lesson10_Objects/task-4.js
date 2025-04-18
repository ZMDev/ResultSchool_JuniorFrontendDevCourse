// JS Objects Hometask #10.4
/* 
Вам необходимо создать функцию giveJobToStudent(), 
которая будет добавлять новое свойство в объект и выводить информацию в модальном окне. 
Она принимает в себя 2 параметра:
student — объект, содержащий информацию о студенте.
jobName — название новой работы студента.

Функция giveJobToStudent() выводит в модальное окно сообщение 
«Поздравляем! У студента fullName появилась новая работа! 
Теперь он jobName», 
где fullName — это имя студента, а jobName — название новой работы студента.

Функция giveJobToStudent() должна возвращать новый объект студента, 
в котором будут все ключи из объекта student и также появится 
новый ключ job со значением параметра jobName.

Для теста функции giveJobToStudent() используйте следующий код:

const student = {
  fullName: 'Максим',
  experienceInMonths: 12,
  stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}

const updatedStudent = giveJobToStudent(student, 'веб-разработчик');
/*
updatedStudent = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
    job: 'веб-разработчик',
}
*/

function giveJobToStudent(student, jobName) {
  const workStudent = {
    ...student,
    jobName: jobName,
  };
  // Debug print
  // console.log('workStudent', workStudent);
  alert(`«Поздравляем! У студента ${workStudent.fullName} появилась новая работа! 
Теперь он ${workStudent.jobName}»`);
  return workStudent;
}

const student = {
  fullName: 'Максим',
  experienceInMonths: 12,
  stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}

const updatedStudent = giveJobToStudent(student, 'веб-разработчик');

// Debug print
console.log('updatedStudent', updatedStudent);