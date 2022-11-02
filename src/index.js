import './style.css';
import Methods from './utils.js';

const todoForm = document.getElementById('todo-form');
const edittodoForm = document.getElementById('edit-todo-item');
const todoFormInput = document.getElementById('todo-input');
const editTodoFormInput = document.querySelector('.todo-edit-input');

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  Methods.addTodoTask(todoFormInput.value);
  todoFormInput.value = '';
});

edittodoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = Number(editTodoFormInput.getAttribute('id'));
  Methods.updateTaskInput(editTodoFormInput.value, id);
  editTodoFormInput.value = '';
  document.getElementById('todo-input').style.display = 'block';
  edittodoForm.style.display = 'none';
});

Methods.showTodoItems();
