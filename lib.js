
export function saveStorage(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}

export function leseStorage() {
    const todosFromStorage = localStorage.getItem("todos");
    if (todosFromStorage !== null) {
        return JSON.parse(todosFromStorage);
    } else {
        return [];
    }

}

export function newTodoUL(id) {
    const newTodoEl = document.querySelector(id);
    return newTodoEl;
}

export function checkBoxCreate(currentTodo) {
    const newTodoLiEl = document.createElement("li");
    const todoCheckboxEl = document.createElement("input");
    todoCheckboxEl.setAttribute("type", "checkbox");
    todoCheckboxEl.checked = currentTodo.done;
    newTodoLiEl.appendChild(todoCheckboxEl);
    const textNode = document.createTextNode(currentTodo.todo);
    newTodoLiEl.append(textNode);

    if (currentTodo.done === true) {
        newTodoLiEl.classList.add("done");
    }

    newTodoLiEl.todo = currentTodo;

    const filterValue = document.querySelector('#todo-filter input[type="radio"]:checked')
        .value;;
    if (filterValue === "done") {
        newTodoLiEl.hidden = true;
    }
    const todoListEl = document.querySelector("#todo-list");
    todoListEl.appendChild(newTodoLiEl);
};

export function getFilterValue() {
    return document.querySelector('#todo-filter input[type="radio"]:checked')
        .value;
}

export function filterValue() {
    return filterValue = document.querySelector('#todo-filter input[type="radio"]:checked')
        .value;
}









