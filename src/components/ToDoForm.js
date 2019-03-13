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

  if (message.length < 3) {
    alert("Message should have at least 3 characters");
    return;
  }

  const formData = {
    message
  };

  const todo = TodoModel.init(formData);
  todosCollection.insert(todo);

  console.log(todosCollection.items);

  form.message.value = "";
  rerender();
};

export default () => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" id="message" name="message" placeholder="..." />
      <button type="submit">Add +</button>
    </form>
  );
};
