import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Dealers({shareDealer}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Dealers Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Dealers</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>{shareDealer.name}</div>
            <div>{shareDealer.address}</div>
            <div>{shareDealer.contact}</div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Dealers;
