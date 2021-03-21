// escape malicious html code
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
  
  // get todo text
  const todo_input = event.target[input_text];
  const todo_text = todo_input.value;
  if (todo_text === "") return;

  // create todo element
  const todo_div = document.createElement('div');
  todo_div.className = 'todo_div';
  const todo_text_span = document.createElement('span');
  todo_text_span.className = 'todo-item';
  const todo_text_node = document.createTextNode(`${escapeHtml(todo_text)} `);
  todo_text_span.appendChild(todo_text_node);
  todo_div.appendChild(todo_text_span);

  // add remove button
  const removeBtn = document.createElement('span');
  const x = document.createTextNode('❌');
  removeBtn.appendChild(x);
  removeBtn.className = "remove-x";
  removeBtn.addEventListener('click', removeTodo);
  todo_div.appendChild(removeBtn);
  
  // display
  todosDisplay.appendChild(todo_div);
  todo_input.value = "";
}

// deletes a todo
function removeTodo(event) {
  const todo = event.target.parentElement;
  todo.classList.add('toRemove');
  setTimeout(function (){
    todo.remove();
  }, 500);
  
}

const todosDisplay = document.getElementById('todo_list');
const input_text = "todo_input";
const todosForm = document.getElementById('todo_form');

document.addEventListener('DOMContentLoaded', function(event) {
  todosForm.addEventListener('submit', addTodo);
})