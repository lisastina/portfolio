import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./main.scss";
import Nav from "./components/Nav";
import HomePage from "./components/HomePage";
import ProjectPage from "./components/ProjectPage";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projekt" element={<ProjectPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
