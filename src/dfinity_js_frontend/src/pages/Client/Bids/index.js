import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button as BButton, Modal, Form } from "react-bootstrap";
import { Button, Loader } from "../../../components/utils";
import { getOrderQuotations } from "../../../utils/quatation";

function ViewBids({ order, save }) {
  const [show, setShow] = useState(false);
  const [bids, setBids] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id, orderName } = order;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // fetch all quotations to bids
  const fetchBids = useCallback(async () => {
    try {
      setLoading(true);
      setBids(await getOrderQuotations(id));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchBids();
  }, [fetchBids]);

  console.log(bids, "bids");

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
            Bids
          </Button>
          <Modal
            size="lg"
            className="w-[50%]"
            show={show}
            onHide={handleClose}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Bids for {orderName}</Modal.Title>
            </Modal.Header>
            <Form>
              <Modal.Body>
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col">Supplier</th>
                      <th scope="col">Email</th>
                      <th scope="col">Description</th>
                      <th scope="col">ShippingCost</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bids.map((bid, index) => (
                      <TableRow
                        key={index}
                        bid={bid}
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

ViewBids.propTypes = {
  order: PropTypes.object.isRequired,
  save: PropTypes.func.isRequired,
};

function TableRow({ bid, id, save, handleClose }) {
  return (
    <tr>
      <td>{bid.quotationTitle}</td>
      <td>{bid.supplierName}</td>
      <td>{bid.supplierEmail}</td>
      <td>{bid.serviceDescription}</td>
      <td>{Number(bid.shippingCost) / 10 ** 8}</td>
      <td>
        <BButton
          variant="dark"
          onClick={() => {
            save(id, bid.supplierId);
            handleClose();
          }}
        >
          Select Bid
        </BButton>
      </td>
    </tr>
  );
}

export default ViewBids;
