console.log("Hello Todo App!");
import { checkBoxCreate, leseStorage, newTodoUL, saveStorage } from "./lib.js"
let todos = [];
const deleteTodosButton = document.querySelector("#delete-todos");
const addTodoBtn = document.querySelector("#add-todo");
const todoListEl = document.querySelector("#todo-list");





function addNewTodo() {
  const newTodoEl = newTodoUL("#new-todo");
  const newTodoText = newTodoEl.value.trim();

  // length check
  if (newTodoText.length === 0) {
    return;
  }

  // duplicate check
  if (isDuplicate(newTodoText)) {
    return;
  }

  const newTodo = {
    todo: newTodoText,
    done: false,
  };
  todos.push(newTodo);

  renderTodos();
  saveStorage(todos);

  newTodoEl.value = "";
}
addTodoBtn.addEventListener("click", addNewTodo);

function renderTodos() {
  newTodoUL("#todo-list");
  todoListEl.innerHTML = "";

  todos.forEach(function (currentTodo) {
    checkBoxCreate(currentTodo);





    filterTodos();
  })
}
function isDuplicate(todo) {
  todo = todo.toLowerCase();

  for (let i = 0; i < todos.length; i++) {
    const currentTodo = todos[i];
    if (currentTodo.todo.toLowerCase() === todo) {
      return true;
    }
  }
  return false;
}

todoListEl.addEventListener("change", toggleTodoState);
function toggleTodoState(event) {
  const checkbox = event.target;
  if (checkbox.checked === true) {
    checkbox.parentElement.classList.add("done");
    checkbox.parentElement.todo.done = true;
  } else {
    checkbox.parentElement.classList.remove("done");
    checkbox.parentElement.todo.done = false;
  }

  saveStorage(todos);
}

const todoFilterEl = document.querySelector("#todo-filter");
todoFilterEl.addEventListener("change", filterTodos);
function filterTodos() {
  const filterValue = document.querySelector('#todo-filter input[type="radio"]:checked')
    .value;

  const todoListEl = document.querySelector("#todo-list");
  for (let i = 0; i < todoListEl.children.length; i++) {
    const currentTodo = todoListEl.children[i];
    if (filterValue === "all") {
      currentTodo.hidden = false;
    } else if (filterValue === "open") {
      currentTodo.hidden = currentTodo.todo.done;
    } else if (filterValue === "done") {
      currentTodo.hidden = !currentTodo.todo.done;
    }
  }
}



function deleteDoneTodos() {
  todos = todos.filter((todo) => todo.done === false);
  saveStorage(todos);
  renderTodos();
}
deleteTodosButton.addEventListener("click", deleteDoneTodos);

function initTodoApp() {
  todos = leseStorage();
  renderTodos();
}
initTodoApp();
