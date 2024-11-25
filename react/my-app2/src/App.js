import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Request from "./component/request.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Request />}></Route>
      </Routes>
    </div>
  );
}

export default App;
