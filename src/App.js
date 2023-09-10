import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./components/HomePage";
import "./main.scss";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="content">
        <HomePage />
      </div>
    </BrowserRouter>
  );
}

export default App;
