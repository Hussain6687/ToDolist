const forms = document.getElementById('form');
const input = document.getElementById('input');
let todos = document.getElementById('todos');

forms.addEventListener('submit', (e) => {
  e.preventDefault();
  addtodo();
});

function addtodo(todo) {
  let todotext = input.value;
  if (todo) {
    todotext = todo.text;
  }
  if (todotext) {
    const todoel = document.createElement('li');
    if (todo && todo.completed) {
      todoel.classList.add('completed');
    }
    todoel.innerText = todotext;
    todoel.addEventListener('click', () => {
      todoel.classList.toggle('completed');
    });
    todoel.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      todoel.remove();
    });
    todos.appendChild(todoel);
    input.value = '';
    updatels();
  }
}

function updatels() {
  todoel = document.querySelectorAll('li');

  todolist = [];
  todoel.forEach((todoEl, i) => {
    todolist.push(i + 1, todoEl.textContent);
  });
  console.log(...todolist);
}
