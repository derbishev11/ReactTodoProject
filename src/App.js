import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from './components/Header/Header'
import Help from "./components/Help/Help";
import MainMenu from "./components/MainMenu/MainMenu";
import Tasks from './components/Tasks/Tasks'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainMenu></MainMenu>
      <Routes>
        <Route path="/" element={<Tasks></Tasks>}></Route>
        <Route path="/help" element={<Help></Help>}></Route>
      </Routes>
    </div>
  );
}

export default App;
