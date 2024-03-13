import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button as BButton, Modal, Form, FloatingLabel } from "react-bootstrap";
import { Button } from "../../../components/utils";

const PayDriver = ({ order, save }) => {
  const [amount, setAmount] = useState("");
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
        <i className="bi bi-wallet2"></i> Pay Driver
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Pay Driver for {order.orderName} Order</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <FloatingLabel
              controlId="inputAmount"
              label="Amount"
              className="mb-3"
            >
              <Form.Control
                type="number"
                placeholder="Amount"
                onChange={(e) => {
                  setAmount(e.target.value);
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
                  orderId: order.id,
                  amount,
                });
                handleClose();
              }}
            >
              Complete
            </BButton>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default PayDriver;
