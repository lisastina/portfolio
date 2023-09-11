import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./main.scss";
import Nav from "./components/Nav";
import HomePage from "./components/HomePage";
import ProjectPage from "./components/ProjectPage";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project" element={<ProjectPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
