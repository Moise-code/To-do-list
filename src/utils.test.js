import Utility from './utils.js';

describe('Add new task', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
    localStorage.setItem.mockClear();
    document.body.innerHTML = `
        <div class="todo_lists newClass">
        <li></li>
        </div>`;
  });

  test('Adding a new object to local storage', () => {
    const obj = {
      description: 'Practice Javascript',
      index: 1,
      completed: false,
    };

    Utility.addTodoTask(obj.description);

    const result = Utility.getLocalStorageData();

    expect(result.length).toBe(1);
    // eslint-disable-next-line no-underscore-dangle
    expect(localStorage.__STORE__.todoList).toBe(JSON.stringify([obj]));
  });

  test('Adding a second object to local storage', () => {
    const obj = { description: 'Practice Testing', index: 1, completed: false };
    Utility.addTodoTask(obj.description);

    const result = Utility.getLocalStorageData();

    expect(result.length).toBe(1);
    expect(localStorage.setItem).toHaveBeenLastCalledWith(
      'todoList',
      JSON.stringify([obj]),
    );
  });

  test('Add new todo task to the UI', () => {
    const div = document.querySelectorAll('.todo_lists');
    Utility.addTodoTask('Test the code');
    expect(div).toHaveLength(1);
  });
});

describe('delete list item', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
    localStorage.setItem.mockClear();
    document.body.innerHTML = '<div class="todo_lists">'
        + '<li></li>'
        + '</div>';
    const obj = { description: 'Test task', completed: false, index: 1 };
    Utility.setLocalStorageData([obj]);
  });

  test('Delete task from local storage', () => {
    const id = 0;

    Utility.deleteTask(id);
    const result = Utility.getLocalStorageData();
    expect(result.length).toBe(0);
    // eslint-disable-next-line no-underscore-dangle
    expect(localStorage.__STORE__.todoList).toBe(JSON.stringify([]));
  });
});
