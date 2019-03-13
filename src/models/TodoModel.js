class TodoModel {
  init(todo) {
    const { message } = todo;

    if (message.length < 3) {
      throw { message: "Message should have at least 3 characters" };
    }

    return {
      ...todo,
      _isOpen: true,
      _createdAt: new Date()
    };
  }

  complete(todo) {
    todo._isOpen = false;
    return todo;
  }

  reopen(todo) {
    todo._isOpen = true;
    return todo;
  }

  isOpen(todo) {
    return todo._isOpen;
  }
}

export default new TodoModel();
