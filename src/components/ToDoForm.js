import { r } from "../lib/render";
import todosCollection from "../collections/todos";
import TodoModel from "../models/TodoModel";
import rerender from "../index";

const onSubmit = e => {
  e.preventDefault();

  const form = e.currentTarget;
  window.form = form;

  // const message = document.getElementById("message").value;
  const message = form.message.value;

  const formData = {
    message
  };

  try {
    const todo = TodoModel.init(formData);
    todosCollection.insert(todo);

    form.message.value = "";
    rerender();
  } catch (error) {
    alert(error.message);
  }
};

const clearToDos = () => {
  todosCollection.reset();
  rerender();
};

export default () => {
  return (
    <div>
      <button type="button" onClick={clearToDos}>
        Reset
      </button>
      <form onSubmit={onSubmit}>
        <input type="text" id="message" name="message" placeholder="..." />
        <button type="submit">Add +</button>
      </form>
    </div>
  );
};
