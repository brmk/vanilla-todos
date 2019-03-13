import todosCollection from "../collections/todos";
import TodoModel from "../models/TodoModel";
import rerender from "../index";

const onChange = e => {
  // e.preventDefault();
  const todoid = e.currentTarget.id;
  let todo = todosCollection.find(x => x._id === todoid);
  if (TodoModel.isOpen(todo)) {
    todo = TodoModel.complete(todo);
  } else {
    todo = TodoModel.reopen(todo);
  }
  todosCollection.update(todoid, todo);
  rerender();
};

const ToDoItemViewDescriptor = ({ todo }) => ({
  tag: "li",
  children: [
    {
      tag: "input",
      attributes: {
        type: "checkbox",
        id: todo._id,
        ...(todo._isOpen ? {} : { checked: "" })
      },
      eventListeners: {
        change: onChange
      }
    },
    {
      tag: "label",
      attributes: {
        for: todo._id
      },

      textContent: todo.message
    }
  ]
});

export default ToDoItemViewDescriptor;
