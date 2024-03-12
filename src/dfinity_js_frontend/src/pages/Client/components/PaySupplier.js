import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button as BButton, Modal, Form, FloatingLabel } from "react-bootstrap";
import { Button } from "../../../components/utils";

const PaySupplier = ({ order, save, markDelivered }) => {
  const [show, setShow] = useState(false);
  const [review, setReview] = useState("");
  const [condition, seCondition] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        onClick={handleShow}
        color="blue_gray_900_02"
        size="8xl"
        className="min-w-[115px] items-center gap-2 flex rounded-[28px]"
      >
        <i className="bi bi-plus"></i> Pay Supplier
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Pay Supplier for {order.orderName} Order</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <FloatingLabel controlId="review" label="Review" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Review"
                onChange={(e) => {
                  setReview(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="condition"
              label="Condition"
              className="mb-3"
            >
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => {
                  seCondition(e.target.value);
                }}
              >
                <option defaultValue="">Condition</option>
                <option value="perfect">Perfect</option>
                <option value="good">Good</option>
                <option value="average">Average</option>
                <option value="bad">Bad</option>
              </select>
            </FloatingLabel>
          </Modal.Body>
          <Modal.Footer>
            <BButton variant="secondary" onClick={handleClose}>
              Close
            </BButton>
            <BButton
              variant="dark"
              onClick={() => {
                save(order.id);
                markDelivered({
                  orderId: order.id,
                  review,
                  condition,
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

export default PaySupplier;
