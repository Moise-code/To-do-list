import Methods from './utils.js';

export default class Interactive {
static toggleCompleted = (id, curStatus) => {
  const todoList = Methods.getLocalStorageData();
  todoList[id].completed = curStatus;
  Methods.setLocalStorageData(todoList);
  Methods.showTodoItems();
}

static addCheckEvent = () => {
  document.querySelectorAll('.checkbox').forEach((box) => box.addEventListener('change', () => {
    let id;
    let curStatus;
    if (box.id > 0) {
      id = box.id - 1;
    } else {
      id = 0;
    }

    if (box.checked === true) {
      curStatus = true;
    } else if (box.checked !== true) {
      curStatus = false;
    }

    this.toggleCompleted(id, curStatus);
  }));
};

static deleteAllCompleted = () => {
  let todoList = Methods.getLocalStorageData();

  todoList = todoList.filter((item) => item.completed !== true);
  Methods.reassignIndex(todoList);
  Methods.setLocalStorageData(todoList);
  Methods.showTodoItems();
}
}