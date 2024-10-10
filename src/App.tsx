import React from "react";
import "./App.css";
import SingUp from "./Components/SingUp/SingUp";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Story from "./Components/Story/Story";
import Project from "./Components/Project/Project";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path="/singup" element={<SingUp />} />
        <Route path="login" element={<Login />} />
        <Route path="/story" element={<Story />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
