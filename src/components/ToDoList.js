import { r } from "../lib/render";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ items }) => (
  <ul>
    {items.map(todo => (
      <ToDoItem todo={todo} />
    ))}
  </ul>
);

export default ToDoList;
