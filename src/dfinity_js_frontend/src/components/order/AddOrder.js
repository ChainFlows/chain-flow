import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";

const AddOrder = ({save}) => {


    const [companyId, setCompanyId] = useState("");
    const [orderName, setOrderName] = useState("");
    const [expectedDelivery, setExpectedDelivery] = useState("");
    const [pickupAddress, setPickupAddress] = useState("");
    const [deliveryAddress, setDeliveryAddress] = useState("");
    const [orderStatus, setOrderStatus] = useState("");
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
            variant="dark"
            className="rounded-pill px-0"
            style={{ width: "38px" }}
        >
            <i class="bi bi-plus"></i>
        </Button>
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>New Order</Modal.Title>
            </Modal.Header>
            <Form>
                <Modal.Body>
                    <FloatingLabel
                        controlId="inputCompanyId"
                        label="Company ID"
                        className="mb-3"
                    >
                        <Form.Control
                            type="text"
                            onChange={(e) => {
                                setCompanyId(e.target.value);
                            }}
                            placeholder="Enter company ID"
                        />
                    </FloatingLabel>
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
                            type="text"
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
                        controlId="inputOrderStatus"
                        label="Order Status"
                        className="mb-3"
                    >
                        <Form.Control
                            type="text"
                            placeholder="Order Status"
                            onChange={(e) => {
                                setOrderStatus(e.target.value);
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
                            }
                            }
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
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="dark"
                        onClick={() => {
                            save({
                                companyId,
                                orderName,
                                expectedDelivery,
                                pickupAddress,
                                deliveryAddress,
                                orderStatus,
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
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    </>
  )
}

export default AddOrder