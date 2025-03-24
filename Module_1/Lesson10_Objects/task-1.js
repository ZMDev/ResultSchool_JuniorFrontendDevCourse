// JS Objects Hometask #10.1
/* 
Вам дан массив пользователей users. 
У каждого из них есть свойство status, 
которое может равняться или "online", или "offline":
Вам необходимо создать новый массив onlineUsers, 
который будет содержать объекты только тех пользователей,
у которых status равен "online".
После выведите через alert() сообщение: 
«Сейчас в онлайн следующие пользователи: usersOnlineNames», 
где usersOnlineNames — строка, в которой имена пользователей отображаются через запятую.
Для кода выше результат должен быть следующим: 
«Сейчас в онлайн следующие пользователи: David, Bob».
 */

const users = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 10
    },
    {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
    },
    {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
    }
];

let onlineUsers = [];

console.log('users.length', users.length);
console.log('users', users);
console.log('onlineUsers', onlineUsers);
console.log('onlineUsers.length', onlineUsers.length);

let indexOfNewObject = 0;
for (let i = 0; i < users.length; i++) {
    console.log('users[i]', users[i]);
    if (users[i].status === 'online') {
        onlineUsers[indexOfNewObject] = {username: users[i].username, status: users[i].status, lastActivity: users[i].lastActivity};
        console.log('indexOfNewObject', indexOfNewObject);
        console.log('onlineUsers[indexOfNewObject]', onlineUsers[indexOfNewObject]);
        console.log('onlineUsers.lenght',onlineUsers.length);
        indexOfNewObject++;
    };
};
console.log('End of cycle');

console.log('indexOfNewObject', indexOfNewObject);
console.log('users', users);
console.log('onlineUsers.length', onlineUsers.length,'onlineUsers', onlineUsers);

let usersOnlineNames = onlineUsers.filter(item => {return item[0]});

alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`);
