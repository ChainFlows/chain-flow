import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button as BButton, Modal, Form, FloatingLabel } from "react-bootstrap";
import { Button } from "../../components/utils";

const AddOrder = ({ save }) => {
  const [orderName, setOrderName] = useState("");
  const [expectedDelivery, setExpectedDelivery] = useState("");
  const [pickupAddress, setPickupAddress] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [orderType, setOrderType] = useState("");
  const [orderWeight, setOrderWeight] = useState("");
  const [priority, setPriority] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [category, setCategory] = useState("");

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
        <i className="bi bi-plus"></i> Add Order
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>New Order</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <FloatingLabel
              controlId="inputOrderName"
              label="Order Name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Order Name"
                onChange={(e) => {
                  setOrderName(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputExpectedDelivery"
              label="Expected Delivery"
              className="mb-3"
            >
              <Form.Control
                type="date"
                placeholder="Expected Delivery"
                onChange={(e) => {
                  setExpectedDelivery(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputPickupAddress"
              label="Pickup Address"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Pickup Address"
                onChange={(e) => {
                  setPickupAddress(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputDeliveryAddress"
              label="Delivery Address"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Delivery Address"
                onChange={(e) => {
                  setDeliveryAddress(e.target.value);
                }}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="inputOrderType"
              label="Order Type"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Order Type"
                onChange={(e) => {
                  setOrderType(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputOrderWeight"
              label="Order Weight"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Order Weight"
                onChange={(e) => {
                  setOrderWeight(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputPriority"
              label="Priority"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Priority"
                onChange={(e) => {
                  setPriority(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputVehicleType"
              label="Vehicle Type"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Vehicle Type"
                onChange={(e) => {
                  setVehicleType(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputCategory"
              label="Category"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Category"
                onChange={(e) => {
                  setCategory(e.target.value);
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
                  orderName,
                  expectedDelivery,
                  pickupAddress,
                  deliveryAddress,
                  orderType,
                  orderWeight,
                  priority,
                  vehicleType,
                  category,
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

export default AddOrder;
