import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function Approval() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  return (
    <div>
      <div>승인처리 되었습니다.</div>
      <br></br>
      <Button variant="primary" onClick={handleShow}>
        광고 열기
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          광고를 열어서 본다니!? 정말 바보같네요.
          <br></br> 아무도 클릭하지 않을것 같아요.
        </Modal.Body>
        <Button variant="secondary" onClick={handleClose}>
          닫기
        </Button>
      </Modal>
    </div>
  );
}

export default Approval;
