import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button as BButton, Modal, Form, FloatingLabel } from "react-bootstrap";
import { Button } from "../../components/utils";

const CreateQuotation = ({ supplierId, order, save }) => {
  const [quotationTitle, setQuotationTitle] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [shippingCost, setShippingCost] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        onClick={handleShow}
        color="blue_gray_900_02"
        size="11xl"
        className="min-w-[115px] items-center gap-2 flex rounded-[28px]"
      >
        <i className="bi bi-plus"></i> Add Quotation
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>New Quotation for {order.orderName}</Modal.Title>
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
                type="number"
                placeholder="Shipping Cost"
                onChange={(e) => {
                  setShippingCost(e.target.value);
                }}
              />
            </FloatingLabel>
          </Modal.Body>
          <Modal.Footer>
            <BButton variant="secondary" onClick={handleClose}>
              Close
            </BButton>
            <BButton
              variant="dark"
              onClick={() => {
                save({
                  quotationTitle,
                  supplierId,
                  orderId: order.id,
                  serviceDescription,
                  shippingCost,
                });
                handleClose();
              }}
            >
              Save
            </BButton>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default CreateQuotation;
