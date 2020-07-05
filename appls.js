//const removeButtons = document.querySelectorAll('li button');
const form = document.querySelector('form');
const input = document.querySelector('#task');
const taskList = document.querySelector('#task-list');

const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
for (let i = 0; i < savedTodos.length; i++) {
    let newTask = document.createElement("li");
    newTask.innerText = savedTodos[i].task;
    newTask.isCompleted = savedTodos[i].isCompleted ? true : false;
    if (newTask.isCompleted) {
        newTask.style.textDecoration = "line-through";
    }
    taskList.appendChild(newTask);
}



form.addEventListener('submit', function (e) {
    e.preventDefault();
    let newTask = document.createElement('li');
    newTask.innerText = input.value;
    newTask.isCompleted = false;
    taskList.appendChild(newTask);
    form.reset();

    savedTodos.push({ task: newTask.innerText, isCompleted: false });
    localStorage.setItem("todos", JSON.stringify(savedTodos));
});


taskList.addEventListener("click", function (event) {
    let clickedListItem = event.target;

    if (!clickedListItem.isCompleted) {
        clickedListItem.style.textDecoration = "line-through";
        clickedListItem.isCompleted = true;
    } else {
        clickedListItem.style.textDecoration = "none";
        clickedListItem.isCompleted = false;
    }
});
    /* breaks for duplicates - another option is to have dynamic IDs
for (let i = 0; i < savedTodos.length; i++) {
if (savedTodos[i].task === clickedListItem.innerText) {
    savedTodos[i].isCompleted = clickedListItem.isCompleted;
    localStorage.setItem("todos", JSON.stringify(savedTodos));
}
}
});


todoForm = form
todoList = taskList
removeBtn = removeButtons
newTodo = newTask
*/
