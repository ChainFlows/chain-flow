import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button as BButton, Modal, Form } from "react-bootstrap";
import { Button, Loader } from "../../../components/utils";
import { getAllDrivers } from "../../../utils/driver";

function AssignDrivers({ order, save }) {
  const [show, setShow] = useState(false);
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id, orderName } = order;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // fetch all quotations to drivers
  const fetchDrivers = useCallback(async () => {
    try {
      setLoading(true);
      setDrivers(await getAllDrivers(id));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchDrivers();
  }, [fetchDrivers]);

  console.log(drivers, "drivers");

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Button
            onClick={handleShow}
            color="blue_gray_900_02"
            size="11xl"
            className="min-w-[115px] items-center gap-2 flex rounded-[28px]"
          >
            Drivers
          </Button>
          <Modal
            size="lg"
            className="w-[50%]"
            show={show}
            onHide={handleClose}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Drivers Available for order {orderName}</Modal.Title>
            </Modal.Header>
            <Form>
              <Modal.Body>
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Contact</th>
                      <th scope="col">Experience</th>
                      <th scope="col">Ratings</th>
                      <th scope="col">vehicleModel</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {drivers.map((driver, index) => (
                      <TableRow
                        key={index}
                        driver={driver}
                        id={id}
                        save={save}
                        handleClose={handleClose}
                      />
                    ))}
                  </tbody>
                </table>
              </Modal.Body>
            </Form>
            <Modal.Footer>
              <BButton variant="outline-secondary" onClick={handleClose}>
                Close
              </BButton>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </>
  );
}

AssignDrivers.propTypes = {
  order: PropTypes.object.isRequired,
  save: PropTypes.func.isRequired,
};

function TableRow({ driver, id, save, handleClose }) {
  return (
    <tr>
      <td>{driver.fullName}</td>
      <td>{driver.contactInfo}</td>
      <td>{driver.experience}</td>
      <td>{driver.driverRating}</td>
      <td>{driver.vehicleModel}</td>
      <td>
        <BButton
          variant="dark"
          onClick={() => {
            save(id, driver.id);
            handleClose();
          }}
        >
          Select Driver
        </BButton>
      </td>
    </tr>
  );
}

export default AssignDrivers;
