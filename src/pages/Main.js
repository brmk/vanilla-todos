import { r } from "../lib/render";
import todosCollection from "../collections/todos";
// import { getRenderableComponent } from "../lib/render";
// import ToDoListViewDescriptor from "../views/ToDoList";
// import ToDoFormViewDescriptor from "../views/ToDoForm";
// import ToDoList from '../components/ToDoList';
import ToDoForm from "../components/ToDoForm";

export default () => {
  const items = todosCollection.items;
  return (
    <div>
      <ToDoForm />
      {/* <ToDoList items={items} /> */}
    </div>
  );
  // const items = todosCollection.items;
  // const todoListElement = getRenderableComponent({
  //   tag: "div",
  //   children: [ToDoFormViewDescriptor(), ToDoListViewDescriptor({ items })]
  // });
  // return todoListElement;
};
