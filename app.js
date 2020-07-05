
const form = document.querySelector('form');
const input = document.querySelector('#task');
const taskList = document.querySelector('#task-list');

taskList.addEventListener("click", function (event) {
    if (event.target.tagName === 'LI') {
        event.target.style.textDecoration = "line-through";
    } else if (event.target.tagName === 'BUTTON') {
        event.target.parentNode.remove();
    }
})

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const newTask = document.createElement('li');
    const removeBtn = document.createElement('button');
    newTask.innerText = input.value;
    removeBtn.innerText = 'Remove';
    taskList.appendChild(newTask);
    newTask.appendChild(removeBtn);
    input.value = '';  // or just form.reset();
})

/*
todoForm = form
todoList = taskList
removeBtn = removeButtons
newTodo = newTask
*/
