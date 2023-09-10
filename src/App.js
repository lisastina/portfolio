import { BrowserRouter } from "react-router-dom";
import "./main.scss";
import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="content"></div>
    </BrowserRouter>
  );
}

export default App;
