import Col from "react-bootstrap/Col";

function ModalInpo(props) {
  return (
    <Col>
      <img src={props.image} className="images"></img>
      <h4 style={{ textAlign: "left" }}>제목 : {props.data[props.i].title}</h4>
      <p style={{ textAlign: "left" }}>설명 : {props.data[props.i].content}</p>
    </Col>
  );
}

export default ModalInpo;
