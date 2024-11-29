import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Request from "./component/request.js";
import Login from "./component/login.js";
import Approval from "./component/approval.js";

function App() {
  let [userName, setUserName] = useState(localStorage.getItem("userName"));
  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    setUserName(storedUserName);
    console.log(storedUserName);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route
          path="/document"
          element={
            <>
              <div>{userName}님 환영합니다.</div>
              <Request />
            </>
          }
        ></Route>

        <Route path="/yes" element={<Approval></Approval>}></Route>
      </Routes>
    </div>
  );
}

export default App;
