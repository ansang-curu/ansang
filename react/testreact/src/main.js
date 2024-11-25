import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
// import { data } from "./data.js";

function Main() {
  let result = useQuery("작명", () => {
    return axios
      .get("https://codingapple1.github.io/userdata.json")
      .then((a) => {
        return a.data;
      });
  });

  // result.data;
  // result.isLoading;
  // result.error;
  // axios.get("http://codingapple1.githib.io/userdata.json").then((a) => {
  //   a.data;
  // });
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">
            YoCamNak
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{ marginLeft: "20px" }}>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/news" style={{ marginLeft: "20px" }}>
                News
              </Nav.Link>
              <Nav.Link as={Link} to="/cart" style={{ marginLeft: "20px" }}>
                장바구니
              </Nav.Link>
              <Nav.Link as={Link} to="/detail" style={{ marginLeft: "20px" }}>
                Shop
              </Nav.Link>
              <NavDropdown
                title="Dropdown"
                id="basic-nav-dropdown"
                style={{ marginLeft: "20px" }}
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              반갑습니다 {result.isLoading ? "로딩중" : result.data.name}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Main;
