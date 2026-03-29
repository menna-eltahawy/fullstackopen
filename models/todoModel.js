let todos = [];

class Todo {
  constructor(title) {
    this.id = Date.now().toString();
    this.title = title;
    this.isCompleted = false;
  }
}

module.exports = { todos, Todo };