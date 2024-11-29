import Stack from "react-bootstrap/Stack";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import data from "../data/data.js";
import people from "../data/people.js";
import { Link } from "react-router-dom";

function Request() {
  return (
    <Stack gap={3}>
      <div className="p-2 bold h2">기안서</div>
      <div className="p-2 ">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="">정보</Accordion.Header>
            <Accordion.Body>
              <p style={{ textAlign: "left" }}>기안자 이름: {people[0].name}</p>
              <p style={{ textAlign: "left" }}>기안자 나이: {people[0].age}</p>
              <p style={{ textAlign: "left" }}>신청목록: {data[0].name}</p>
              <p style={{ textAlign: "left" }}>금액: {data[0].price}</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>계획</Accordion.Header>
            <Accordion.Body>
              <p>{data[0].plan}</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="p-2">
        <div className="d-flex gap-2 mb-2">
          <Link to={"/yes"}>
            <Button variant="primary" size="lg">
              승인
            </Button>
          </Link>

          <Button
            variant="secondary"
            size="lg"
            onClick={() => {
              alert("반려되었습니다. 슬퍼요.");
            }}
          >
            반려
          </Button>
        </div>
      </div>
    </Stack>
  );
}

export default Request;
