import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";

const CreateQuotation = ({ save }) => {
  const [quotationTitle, setQuotationTitle] = useState("");
  const [supplierId, setSupplierId] = useState("");
  const [orderId, setOrderId] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [shippingCost, setShippingCost] = useState("");
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
        <i
          className="bi bi-plus
            "className=
        ></i>
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>New Quotation</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <FloatingLabel
              controlId="inputQuotationTitle"
              label="Quotation Title"
              className="mb-3"
            >
              <Form.Control
                type="text"
                onChange={(e) => {
                  setQuotationTitle(e.target.value);
                }}
                placeholder="Enter title of quotation"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputSupplierId"
              label="Supplier ID"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Supplier ID"
                onChange={(e) => {
                  setSupplierId(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputOrderId"
              label="Order ID"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Order ID"
                onChange={(e) => {
                  setOrderId(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputServiceDescription"
              label="Service Description"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Service Description"
                onChange={(e) => {
                  setServiceDescription(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputShippingCost"
              label="Shipping Cost"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Shipping Cost"
                onChange={(e) => {
                  setShippingCost(e.target.value);
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
                  quotationTitle,
                  supplierId,
                  orderId,
                  serviceDescription,
                  shippingCost,
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
  );
};

export default CreateQuotation;
