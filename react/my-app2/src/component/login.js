import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

// 스토어 저장-----------------------------------------------

function Login() {
  let [inputText, setInputText] = useState("");
  const navigate = useNavigate();
  let handleInputChange = (e) => {
    setInputText(e.target.value);
  };
  const idCheck = () => {
    if (inputText === "정지현") {
      alert("로그인 되었습니다");
      // localStorage.clear();
      localStorage.setItem("userName", inputText);
      navigate("/document");
      window.location.reload();
    } else if (inputText === "안상률") {
      localStorage.setItem("userName", inputText);
      alert("관리자 권한으로 접속합니다");
      // localStorage.clear();

      navigate("/document");
      window.location.reload();
    } else {
      alert("승인자 이름이 아닙니다.");
    }
  };
  return (
    <div>
      <strong>로그인</strong>(승인자, 관리자)
      <div className="inputBox">
        이름:{" "}
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              idCheck();
            }
          }}
          onChange={handleInputChange}
          placeholder="이름을 입력하세요."
        ></input>
        <button onClick={idCheck} style={{ marginLeft: "10px" }}>
          확인
        </button>
      </div>
    </div>
  );
}

export default Login;
