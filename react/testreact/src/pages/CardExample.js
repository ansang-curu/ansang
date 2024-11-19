import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function CardExample(props) {
  let { id } = useParams();
  let idt = id - 1;
  let navigate = useNavigate();
  let [tab, setTab] = useState(0);
  let [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="d-flex justify-content-around">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.이미지[Number(idt)]} />
          <Card.Body>
            <Card.Title>
              {props.data.filter((item) => item.id === idt)[0].title}
            </Card.Title>
            <Card.Text>
              {props.data.filter((item) => item.id === idt)[0].content}
            </Card.Text>
            <Button
              variant="primary"
              onClick={() => {
                navigate("/");
              }}
            >
              홈으로
            </Button>
          </Card.Body>
        </Card>

        {/* UI만들기 버튼012  */}

        {/* <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
              <Placeholder xs={8} />
            </Placeholder>
            <Placeholder.Button variant="primary" xs={6} />
          </Card.Body>
        </Card> */}
      </div>
      <Button
        variant="outline-primary"
        onClick={() => {
          setTab(0);
        }}
      >
        버튼0
      </Button>
      <Button
        variant="outline-primary"
        onClick={
          // setIsActive((isActive) => !isActive);

          () => {
            setTab(1);
          }
        }
        active={isActive}
      >
        버튼1
      </Button>
      <Button
        variant="outline-primary "
        onClick={() => {
          setTab(2);
        }}
      >
        버튼2
      </Button>
      <TabContent tab={tab} data={props.data} />
    </>
  );
  function TabContent({ tab, data }) {
    let [fade, setFade] = useState("");

    useEffect(() => {
      setFade("end");
    }, [tab]);

    return (
      <div className={`start ${fade}`}>
        {[<div>{data[0].title}</div>, <div>내용1</div>, <div>내용2</div>][tab]}
      </div>
    );
    // <>
    //   {tab == 0 && <div>내용0</div>}
    //   {tab == 1 && <div>내용1</div>}
    //   {tab == 2 && <div>내용2</div>}
    // </>;
  }
}

export default CardExample;
