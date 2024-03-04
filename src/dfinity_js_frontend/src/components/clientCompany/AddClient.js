import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";

const AddClient = ({save}) => {
    const [name, setName] = useState("");
    const [bussinessType , setBussinessType] = useState("");
    const [industry , setIndustry] = useState("");
    const [address , setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [website, setWebsite] = useState("");
    const [ownerName, setOwnerName] = useState("");
    const [regNo, setRegNo] = useState("");
    const [logo, setLogo] = useState("");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <Button
        onClick={handleShow}
        variant="dark"
        className="rounded-pill px-0"
        style={{ width: "38px" }}
      >
        <i class="bi bi-plus"></i>
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>New Client</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <FloatingLabel
              controlId="inputName"
              label="Name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Enter name of client"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputBussinessType"
              label="Bussiness Type"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Bussiness Type"
                onChange={(e) => {
                  setBussinessType(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputIndustry"
              label="Industry"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Industry"
                onChange={(e) => {
                  setIndustry(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputAddress"
              label="Address"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Address"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputEmail"
              label="Email"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputPhone"
              label="Phone"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Phone"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputWebsite"
              label = "Website"
                className="mb-3"
            >
                <Form.Control
                    type="text"
                    placeholder="Website"
                    onChange={(e) => {
                    setWebsite(e.target.value);
                    }}
                />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputOwnerName"
              label="Owner Name"
              className="mb-3"
            >
                <Form.Control
                    type="text"
                    placeholder="Owner Name"
                    onChange={(e) => {
                    setOwnerName(e.target.value);
                    }}
                />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputRegNo"
              label="Reg No"
              className="mb-3"
            >
                <Form.Control
                    type="text"
                    placeholder="Reg No"
                    onChange={(e) => {
                    setRegNo(e.target.value);
                    }}
                />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputLogo"
              label="Logo"
              className="mb-3"
            >
                <Form.Control
                    type="text"
                    placeholder="Logo"
                    onChange={(e) => {
                    setLogo(e.target.value);
                    }}
                />
            </FloatingLabel>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button
                    variant="dark"
                    onClick={() => {
                        save({
                            name,
                            bussinessType,
                            industry,
                            address,
                            email,
                            phone,
                            website,
                            ownerName,
                            regNo,
                            logo
                        });
                        handleClose();
                    }}
                >
                    Save
                </Button>
            </Modal.Footer>
        </Form>
        </Modal>
    </>

    
  )
}

export default AddClient