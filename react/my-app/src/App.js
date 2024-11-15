import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import React from "react";

function App() {
  let post = "강남 우동 맛집";
  let pra = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let [a, b] = useState(["강남우동추천", "파이썬강의", "남자코트추천3"]);
  let aCopy = [...a];
  let [내용, set내용] = useState("");
  let [good, goodSet] = useState([0, 0, 0]);

  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  // ---------------------------------------------------------
  ["하이", "바이", "몰라"].map(function (z) {
    return "1234";
  });
  let [logo, setLogo] = useState("ReactBlog");
  let [zero, one, two] = [0, 1, 2];
  function goodbtn(i) {
    let goodcopy = [...good];
    goodcopy[i] = goodcopy[i] + 1;
    goodSet(goodcopy);
  }
  function girlCoat() {
    // a[2]="여자코트추천";
    let copy = [...a];
    copy[2] = "여자코트추천";
    b(copy);
  }
  function 가나다() {
    let copy2 = [...a];
    copy2.sort();
    b(copy2);
  }
  // 시작합니다--------------------------------------------------
  return (
    <div className="App">
      <div className="black-nav">
        <h4 id={post}>{logo}</h4>
        <h4 style={{ color: "red", fontSize: "16px" }}>블로그임</h4>
      </div>
      <h4>{post}</h4>
      <br></br>
      <button onClick={가나다}>가나다순정렬</button>
      {/* --------------------헤더------------------------------- */}
      <div className="list">
        <h4
          onClick={() => {
            setTitle(0);
          }}
        >
          {a[0]}
          <span onClick={goodbtn}> 👍</span>
          {good}
        </h4>
        <button onClick={girlCoat}>여자코트로변경</button>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            setTitle(1);
          }}
        >
          {a[1]}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            setTitle(2);
          }}
        >
          {a[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      {/* 수동 리스트작성--------------------------------------------- */}
      {/* /* 자바스크립트 {} 이거 씀 * */}
      {
        // 조건식? 참일때 실행할 코드: 거짓일때 실행할 코드

        modal == true ? (
          <Modal1 title={title} color={"skyblue"} a={a} b={b} />
        ) : null
      }
      <button
        onClick={() => {
          setModal(!modal);
        }}
      >
        모달오픈
      </button>
      <p>----------------------------------------------------------</p>
      {a.map(function (f, i) {
        return (
          <div className="list">
            <h4>
              {a[i]} <span onClick={() => goodbtn(i)}> 👍</span>
              {good[i]}
            </h4>
            <p>2월 17일 발행</p>
            <button
              onClick={() => {
                let aCopy = [...a];
                aCopy.splice(i, 1);
                b(aCopy);
                let goodCopy = [...good];
                goodCopy.splice(i, 1);
                goodSet(goodCopy);
              }}
            >
              삭제!
            </button>
          </div>
        );
      })}
      <input
        onChange={(e) => {
          set내용(e.target.value);

          // a 어레이에다가 내용 추가하기
        }}
      ></input>
      <button
        onClick={() => {
          if (내용.trim() !== "") {
            aCopy.push(내용);

            b(aCopy);
            let goodCopy = [...good];
            goodCopy.push(0);
            goodSet(goodCopy);
          }
        }}
      >
        반영하기
      </button>
      <Modal2 logo={logo}></Modal2>
    </div>
  );
}

function 함수() {}

function Modal1(props) {
  return (
    <>
      <div className="modal" style={{ background: props.color }}>
        <h4>{props.a[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button
          onClick={() => {
            let aCopy = [...props.a];
            aCopy[0] = "여자코트추천";
            props.b(aCopy);
          }}
        >
          글수정
        </button>
      </div>
    </>
  );
}

class Modal2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "kim",
      age: 20,
    };
  }
  render() {
    return (
      <div>
        <div>
          안녕{this.state.name}
          {this.props.logo}
        </div>
        <button
          onClick={() => {
            this.setState({ name: "안" });
          }}
        >
          버튼 스테이트변경
        </button>
      </div>
    );
  }
}

export default App;
