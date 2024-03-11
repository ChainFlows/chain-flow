import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button as BButton, Modal, Form, FloatingLabel } from "react-bootstrap";
import { Button } from "../../components/utils";

const MaintainanceRecord = ({ save }) => {
  const [vehicleRegNo, setVehicleRegNo] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [cost, setCost] = useState("");
  const [mechanic, setMechanic] = useState("");
  const [mechanicContact, setMechanicContact] = useState("");
  const [mechanicAddress, setMechanicAddress] = useState("");
  const [mechanicEmail, setMechanicEmail] = useState("");
  const [mechanicPhone, setMechanicPhone] = useState("");

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
        Add MaintainanceRecord
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>New Maintainance Record</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <FloatingLabel
              controlId="inputVehicleRegNo"
              label="Vehicle Reg No"
              className="mb-3"
            >
              <Form.Control
                type="text"
                onChange={(e) => {
                  setVehicleRegNo(e.target.value);
                }}
                placeholder="Enter vehicle reg no"
              />
            </FloatingLabel>
            <FloatingLabel controlId="inputDate" label="Date" className="mb-3">
              <Form.Control
                type="date"
                placeholder="Date"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputDescription"
              label="Description"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Description"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel controlId="inputCost" label="Cost" className="mb-3">
              <Form.Control
                type="number"
                placeholder="Cost"
                onChange={(e) => {
                  setCost(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputMechanic"
              label="Mechanic"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Mechanic"
                onChange={(e) => {
                  setMechanic(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputMechanicContact"
              label="Mechanic Contact"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Mechanic Contact"
                onChange={(e) => {
                  setMechanicContact(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputMechanicAddress"
              label="Mechanic Address"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Mechanic Address"
                onChange={(e) => {
                  setMechanicAddress(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputMechanicEmail"
              label="Mechanic Email"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder="Mechanic Email"
                onChange={(e) => {
                  setMechanicEmail(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputMechanicPhone"
              label="Mechanic Phone"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Mechanic Phone"
                onChange={(e) => {
                  setMechanicPhone(e.target.value);
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
                  vehicleRegNo,
                  date,
                  description,
                  cost,
                  mechanic,
                  mechanicContact,
                  mechanicAddress,
                  mechanicEmail,
                  mechanicPhone,
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

MaintainanceRecord.propTypes = {
  save: PropTypes.func.isRequired,
};

export default MaintainanceRecord;
