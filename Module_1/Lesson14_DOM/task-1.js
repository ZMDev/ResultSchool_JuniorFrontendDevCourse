// JS DOM Hometask #14.1
/* 
Вам дан HTML-код:

<form class="create-user-form">
    <label>
        Имя
        <input type="text" name="userName" placeholder="Введите ваше имя">
    </label>
    <label>
        Пароль
        <input type="password" name="password" placeholder="Придумайте Пароль">
    </label>
    <button type="submit">
        Подтвердить
    </button>
</form>
Необходимо создать такую же структуру HTML-элемента через JavaScript и добавить итоговые элементы внутрь тега <body>.

Решите задачу 2-мя способами:
Через innerHTML
Через document.createElement()
*/



// createElement way
const bodyElementWay = document.querySelector('body');

const newCreateUserForm = document.createElement('form');
newCreateUserForm.className = 'create-user-form';

const newUserLabel = document.createElement('label');
newUserLabel.textContent = 'Имя';

const newUserInput = document.createElement('input');
newUserInput.type = 'text';
newUserInput.name = 'user';
newUserInput.placeholder = 'Введите ваше имя';

const newPasswordLabel = document.createElement('label');
newPasswordLabel.textContent = 'Пароль';

const newPasswordInput = document.createElement('input');
newPasswordInput.type = 'password';
newPasswordInput.name = 'password';
newPasswordInput.placeholder = 'Придумайте Пароль';

const newSubmitButton = document.createElement('button');
newSubmitButton.type = 'submit';
newSubmitButton.textContent = 'Подтвердить';

bodyElementWay.append(newCreateUserForm);
newCreateUserForm.append(newUserLabel);
newUserLabel.append(newUserInput);
newCreateUserForm.append(newPasswordLabel);
newPasswordLabel.append(newPasswordInput);
newCreateUserForm.append(newSubmitButton);


// innerHTML way
const bodyInnerHTMLway = document.querySelector('body');
bodyInnerHTMLway.innerHTML += ` <h3> innerHTML way </h3>
<form class="create-user-form">
    <label>
        Имя
        <input type="text" name="userName" placeholder="Введите ваше имя">
    </label>
    <label>
        Пароль
        <input type="password" name="password" placeholder="Придумайте Пароль">
    </label>
    <button type="submit">
        Подтвердить
    </button>
</form> `;
// Debug print
console.log(bodyInnerHTMLway);
