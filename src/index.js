import "./styles.css";
import { render, r } from "./lib/render";
import MainPage from "./pages/Main";

const renderApp = () => {
  const root = document.getElementById("app");
  render(root, MainPage());
};

renderApp();

// console.log(
//   <form onSubmit={() => {}}>
//     <input type="text" id="message" name="message" placeholder="..." />
//     <button type="submit">Add +</button>
//   </form>
// );

export default renderApp;
