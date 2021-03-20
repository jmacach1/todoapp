// todosDisplay
const todosDisplay = document.getElementById('todo_list');
const input_text = "todo_input";

function escapeHtml(unsafe) {
  return unsafe
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;")
  .replace(/'/g, "&#039;");
}

// function - adds a todo
function addTodo(event) {
  event.preventDefault();
  
  const todo_input = event.target[input_text];
  const todo = todo_input.value;
  if (todo === "") return;

  const li = document.createElement('li');
  const text = document.createTextNode(`${escapeHtml(todo)} `);
  li.appendChild(text);

  const removeBtn = document.createElement('span');
  const x = document.createTextNode('❌');
  removeBtn.appendChild(x);
  removeBtn.className = "removeX";
  removeBtn.addEventListener('click', removeTodo);
  li.appendChild(removeBtn);
  

  todosDisplay.appendChild(li);
  todo_input.value = "";
}

const todosForm = document.getElementById('todo_form');
todosForm.addEventListener('submit', addTodo);

// deletes a todo
function removeTodo(event) {
  const todo = event.target.parentElement;
  console.log(todo);
  todo.remove();
  
}