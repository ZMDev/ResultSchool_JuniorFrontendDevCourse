// JS DOM Hometask #14.2
/* 
Вы вместе с командой разработки создаете приложение для контроля задач. 
Сейчас команда сделала только макет, чтобы приложение было красивым. 
Вам поручили задачу отрисовать все данные о задачах при помощи JavaScript-кода 
(способ выберите самостоятельно). 
У вас имеется массив tasks и HTML-шаблон, по которому необходимо создать элементы для каждой задачи.
Добавьте все HTML-элементы с задачами в элемент по селектору .tasks-list.
HTML-шаблон для задачи:

<div class="task-item" data-task-id="1">
    <div class="task-item__main-container">
        <div class="task-item__main-content">
            <form class="checkbox-form">
                <input class="checkbox-form__checkbox" type="checkbox" id="task-1">
                <label for="task-1"></label>
            </form>
            <span class="task-item__text">
                Посмотреть новый урок по JavaScript
            </span>
        </div>
        <button class="task-item__delete-button default-button delete-button">
            Удалить
        </button>
    </div>
</div>

Массив задач:

const tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
];
Данные об id должны использоваться в data-task-id, в id у input и в for у label. 
Значение свойства text должно добавляться в тег <span> по селектору .task-item__text.
Примечание: атрибут for в JavaScript-коде пишется как htmlFor.
У вас имеются начальные файлы: ссылка. 
Используйте их для разработки логики приложения.
*/

const tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
];

const tasksListDiv = document.querySelector('.tasks-list');
// Debug print
// console.log(tasksListDiv);

function createTaskElement(taskData) {
    // Create div class="task-item"
    let taskItemDiv = document.createElement('div');
    taskItemDiv.classList.add('task-item');
    taskItemDiv.dataset.taskId = taskData.id;

    // Create div class="task-item__main-container"
    let mainContainerDiv = document.createElement('div');
    mainContainerDiv.classList.add('task-item__main-container');

    // Create div class="task-item__main-content"
    let mainContentDiv = document.createElement('div');
    mainContentDiv.classList.add('task-item__main-content');

    // Create form class="checkbox-form"
    let formElement = document.createElement('form');
    formElement.classList.add('checkbox-form');

    // Create input class="checkbox-form__checkbox"
    let checkboxInput = document.createElement('input');
    checkboxInput.type = 'checkbox';
    checkboxInput.classList.add('checkbox-form__checkbox');
    checkboxInput.id = `task-${taskData.id}`;
    if (taskData.completed) {
        checkboxInput.checked = true;
    }

    // Create label for="task-1"
    let labelElement = document.createElement('label');
    labelElement.htmlFor = `task-${taskData.id}`;

    // Create span class="task-item__text"
    let spanText = document.createElement('span');
    spanText.classList.add('task-item__text');
    spanText.textContent = taskData.text;

    // Create button class="task-item__delete-button"
    let buttonDelete = document.createElement('button');
    buttonDelete.classList.add('task-item__delete-button', 'default-button', 'delete-button');
    buttonDelete.textContent = 'Удалить';

    // Build Task Element
    formElement.append(checkboxInput, labelElement);
    mainContentDiv.append(formElement, spanText);
    mainContainerDiv.append(mainContentDiv, buttonDelete);
    taskItemDiv.appendChild(mainContainerDiv);

    return taskItemDiv;
};

// Create task list from array
tasks.forEach(task => {
    const taskDivElement = createTaskElement(task);
    tasksListDiv.appendChild(taskDivElement);
});

