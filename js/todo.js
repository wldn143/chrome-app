const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  }

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id=newTodo.id;
    const span = document.createElement("span");
    span.innerText=newTodo.text;
    const btn=document.createElement("button");
    btn.innerText="❌";
    btn.addEventListener("click",deleteToDo)
    li.appendChild(span);
    li.appendChild(btn);
    todoList.appendChild(li);
}

function handleToDoSumit(event) {
  event.preventDefault(); /*새로고침 방지*/
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newToDoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}
todoForm.addEventListener("submit",handleToDoSumit);

const savedToDos = localStorage.getItem(TODOS_KEY); /*얘가배열?!*/
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}


