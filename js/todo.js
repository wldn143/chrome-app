const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

function deleteToDo(event){
    const li=event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText=newTodo;
    const btn=document.createElement("button");
    btn.innerText="❌";
    li.appendChild(span);
    li.appendChild(btn);
    span.innerText=newTodo;
    todoList.appendChild(li);
    btn.addEventListener("click",deleteToDo)
}

function handleToDoSumit(event){
    event.preventDefault(); /*새로고침 방지*/
    const newTodo=todoInput.value;
    todoInput.value="";
    paintToDo(newTodo);
}
todoForm.addEventListener("submit",handleToDoSumit);


