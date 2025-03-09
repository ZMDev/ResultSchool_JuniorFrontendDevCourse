// String Hometask #6.1

const existingUserLogin = 'the_best_user';
const existingUserPassword = '12345678';

let userLogin = prompt('Введите логин:');
let userPassword = prompt('Введите пароль:');

userLogin = userLogin.trim();
userPassword = userPassword.trim();

// Simple IF

if (userLogin === existingUserLogin) {
    if (userPassword === existingUserPassword) {
        alert(`Добро пожаловать, ${userLogin}!`);
    } else {
        alert('Пароль не верен!');
    }
} else {
    alert('Логин введен неверно!');
};

// IF with logical operations

if ((userLogin === existingUserLogin) && (userPassword === existingUserPassword)) {
    alert(`Добро пожаловать, ${userLogin}!`);
} else {
    alert('Логин и (или) Пароль введены неверно!');
};
