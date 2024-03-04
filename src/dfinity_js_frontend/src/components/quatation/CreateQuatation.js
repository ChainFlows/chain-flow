import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";

const CreateQuatation = ({save}) => {

    const [quatationTitle, setQuatationTitle] = useState("");
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
            <i class="bi bi-plus
            "></i>
        </Button>
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>New Quatation</Modal.Title>
            </Modal.Header>
            <Form>
                <Modal.Body>
                    <FloatingLabel
                        controlId="inputQuatationTitle"
                        label="Quatation Title"
                        className="mb-3"
                    >
                        <Form.Control
                            type="text"
                            onChange={(e) => {
                                setQuatationTitle(e.target.value);
                            }}
                            placeholder="Enter title of quatation"
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
                                quatationTitle,
                                supplierId,
                                orderId,
                                serviceDescription,
                                shippingCost
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

export default CreateQuatation