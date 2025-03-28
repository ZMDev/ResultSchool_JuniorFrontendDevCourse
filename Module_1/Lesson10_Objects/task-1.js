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

// let onlineUsers = [];

// for (let i = 0; i < users.length; i++) {
//     if (users[i].status === 'online') {
//         onlineUsers.push(users[i]);
//     };
// };
// console.log('End of cycle');
// console.log('onlineUsers = ',onlineUsers);

let onlineUsers = users.filter(user => user.status === 'online');

console.log(`Сейчас в онлайн следующие пользователи: ${onlineUsers.map(user => user.username)}`);
// alert(`Сейчас в онлайн следующие пользователи: ${onlineUsers.map(user => user.username)}`);
