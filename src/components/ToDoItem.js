import { r } from "../lib/render";
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
  // rerender();
};

const ToDoItem = ({ todo }) => (
  <li>
    <input
      type="checkbox"
      id={todo._id}
      onChange={onChange}
      {...(todo._isOpen ? {} : { checked: "" })}
    />
    <label for={todo._id}>{todo.message}</label>
  </li>
);

export default ToDoItem;
