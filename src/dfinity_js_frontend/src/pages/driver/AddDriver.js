import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";

const AddDriver = ({save}) => {
    const [fullName, setFullName] = useState("");
    const [contactInfo, setContactInfo] = useState("");
    const [experience, setExperience] = useState("");
    const [licenseNo, setLicenseNo] = useState("");
    const [licenseExpiry , setLicenseExpiry] = useState("");
    const [vehicleMake, setVehicleMake] = useState("");
    const [vehicleModel, setVehicleModel] = useState("");
    const [vehicleType, setVehicleType] = useState("");
    const [vehicleRegNo, setVehicleRegNo] = useState("");
    const [company, setCompany] = useState("");
    const [driverRating, setDriverRating] = useState(0);
    const [driverStatus, setDriverStatus] = useState("");

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
          <Modal.Title>New Driver</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <FloatingLabel
              controlId="inputName"
              label="Full Name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
                placeholder="Enter full name"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputContactInfo"
              label="Contact Info"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Contact Info"
                onChange={(e) => {
                  setContactInfo(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputExperience"
              label="Experience"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Experience"
                onChange={(e) => {
                  setExperience(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputLicenseNo"
              label="License No"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="License No"
                onChange={(e) => {
                  setLicenseNo(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputLicenseExpiry"
              label="License Expiry"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="License Expiry"
                onChange={(e) => {
                  setLicenseExpiry(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputVehicleMake"
              label="Vehicle Make"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Vehicle Make"
                onChange={(e) => {
                  setVehicleMake(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputVehicleModel"
              label="Vehicle Model"
              className="mb-3"
            >
                <Form.Control
                    type="text"
                    placeholder="Vehicle Model"
                    onChange={(e) => {
                    setVehicleModel(e.target.value);
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
              controlId="inputVehicleRegNo"
              label="Vehicle Reg No"
              className="mb-3"
            >
                <Form.Control
                    type="text"
                    placeholder="Vehicle Reg No"
                    onChange={(e) => {
                    setVehicleRegNo(e.target.value);
                    }}
                />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputCompany"
              label="Company"
              className="mb-3"
            >
                <Form.Control
                    type="text"
                    placeholder="Company"
                    onChange={(e) => {
                    setCompany(e.target.value);
                    }}
                />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputDriverRating"
              label="Driver Rating"
              className="mb-3"
            >
                <Form.Control
                    type="text"
                    placeholder="Driver Rating"
                    onChange={(e) => {
                    setDriverRating(e.target.value);
                    }}
                />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputDriverStatus"
              label="Driver Status"
              className="mb-3"
            >
                <Form.Control
                    type="text"
                    placeholder="Driver Status"
                    onChange={(e) => {
                    setDriverStatus(e.target.value);
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
                            fullName,
                            contactInfo,
                            experience,
                            licenseNo,
                            licenseExpiry,
                            vehicleMake,
                            vehicleModel,
                            vehicleType,
                            vehicleRegNo,
                            company,
                            driverRating,
                            driverStatus,
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

AddDriver.propTypes = {
    save: PropTypes.func.isRequired,
};

export default AddDriver