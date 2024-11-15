import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, useNavigate, useParams } from "react-router-dom";

function CardExample(props) {
  let { id } = useParams();
  let idt = id - 1;
  let navigate = useNavigate();

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

        <Card style={{ width: "18rem" }}>
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
        </Card>
      </div>
    </>
  );
}

export default CardExample;
