import "./App.css";

import { useState } from "react";
import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import 이미지1 from "./images/IMG_3667.JPG";
import 이미지2 from "./images/IMG_4381.JPG";
import 이미지3 from "./images/IMG_4382.JPG";
import ModalInpo from "./ModalInpo.js";
import Main from "./main.js";
import Cart from "./pages/Cart.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import CardExample from "./pages/CardExample.js";
import "bootstrap/dist/css/bootstrap.min.css";
import News from "./pages/News.js";
import axios from "axios";

// -----------------------import---data---------------------
// import { a, b } from "./data.js";
import data from "./data.js";

function App() {
  let [imginpo, setInpo] = useState(data);
  let 이미지 = [이미지1, 이미지2, 이미지3];
  // 함수입력 연습란-------------------------------
  // let [shoes,setShoes]=useState('data')
  let navigate = useNavigate();
  return (
    <div className="App">
      <Main />
      {/* ----------------라우트----------------- */}
      <Routes>
        {/* 메인페이지 대문 */}
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <div className="conBox" style={{ width: "auto", height: "auto" }}>
                <div style={{}}>
                  <Container fluid="sm">
                    <Row>
                      {data.map(function (item, i) {
                        return (
                          <ModalInpo image={이미지[i]} i={i} data={data} />
                        );
                      })}
                    </Row>
                  </Container>
                </div>

                <button
                  onClick={() => {
                    axios
                      .get("https://codingapple1.github.io/shop/data2.json")
                      .then((결과) => {
                        console.log(결과.data);
                        let copy = [...imginpo, ...결과.data];
                        console.log(copy);
                        setInpo(copy);
                      })
                      .catch(() => {
                        alert("실패");
                      });
                  }}
                  style={{ marginTop: "180px" }}
                >
                  더보기 버튼
                </button>
              </div>
            </>
          }
        />
        {/* 뉴스페이지------------------------ */}
        <Route
          path="/news"
          element={
            <div>
              <News></News>
              <Outlet></Outlet>
            </div>
          }
        >
          <Route path="con1" element={<div>뉴스내용1</div>} />
          <Route path="con2" element={<div>뉴스내용2</div>} />
        </Route>
        {/* 디테일페이지---------------------------------------- */}
        <Route
          path="/detail"
          element={
            <div>
              상세페이지
              <div
                style={{
                  display: "block",
                  alignContent: "center",
                  clear: "both",
                }}
              >
                <Link to={"/detail/1"}>
                  <button>1번</button>
                </Link>
                <Link to={"/detail/2"}>
                  <button>2번</button>
                </Link>
                <Link to={"/detail/3"}>
                  <button>3번</button>
                </Link>
                <Outlet></Outlet>
              </div>
            </div>
          }
        >
          <Route
            path="/detail/:id"
            element={<CardExample 이미지={이미지} data={data}></CardExample>}
          />
          <Route
            path="con1"
            element={
              <div>
                <ModalInpo image={이미지[0]} i={0} data={data} />
              </div>
            }
          />
          <Route path="con2" element={<div>내용2</div>} />
        </Route>
        {/* 어바웃페이지-----------------------------------------*/}
        <Route path="/about:id" element={<div>어바웃페이지</div>} />
        {/* -------------------------장바구니-------------------- */}
        <Route path="/cart" element={<Cart></Cart>} />
        <Route path="*" element={<div>없는페이지에요</div>} />
      </Routes>
    </div>
  );
}

export default App;
// i로 돌려서 제목 설명부분 컴포넌트 설정해서 붙여넣기
