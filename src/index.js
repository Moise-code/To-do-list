import './style.css';

const todoDiv = document.querySelector('.todo_lists');

const todoTasks = [
  {
    description: 'Learn and study About Webpack',
    completed: false,
    index: 0,
  },
  {
    description: 'Try our Hackerank webpack challenge',
    completed: false,
    index: 1,
  },
  {
    description: 'Take a nap during the launch break',
    completed: false,
    index: 2,
  },
  {
    description: 'Attend stand-up meeting',
    completed: false,
    index: 3,
  },
];

const getTodoTasks = ({ description, index }) => {
  const div = document.createElement('div');
  div.className = 'todo-item';
  div.innerHTML = `
    <div class="todo_detail">
    <input type="checkbox" id="" name="" value=""> 
    <h3 class="item">${description}</h3> <i></i>
    </div>
    <i class="fa-solid fa-trash-can" id"${index}"></i>
    `;

  return div;
};

todoTasks.forEach((item) => {
  todoDiv.append(getTodoTasks(item));
});
