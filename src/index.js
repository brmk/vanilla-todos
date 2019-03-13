import "./styles.css";
import { render, r } from "./lib/render";
import MainPage from "./pages/Main";

const renderApp = () => {
  const root = document.getElementById("app");
  render(root, <MainPage />);
};

renderApp();

export default renderApp;
