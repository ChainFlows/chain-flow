import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button as BButton, Modal, Form, FloatingLabel } from "react-bootstrap";
import { Button, Loader } from "../../../components/utils";
import { getOrderQuotations } from "../../../utils/quatation";

const ViewBids = ({ order, save }) => {
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
  });

  useEffect(() => {
    fetchBids();
  }, []);

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
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Bids for {orderName}</Modal.Title>
            </Modal.Header>
            <Form>
              <Modal.Body>
                {bids.map((bid, index) => {
                  return (
                    <div className="flex flex-col w-[84%]">
                      <div className="flex flex-row justify-between items-center">
                        <Text size="3xl" as="p" className="mb-px ">
                          {bid.quotationTitle}
                        </Text>
                        <Text size="2xl" as="p" className="mb-px ">
                          {bid.supplierName}
                        </Text>
                        <Text size="2xl" as="p" className="mb-px ">
                          {bid.supplierEmail}
                        </Text>
                      </div>
                      <div className="flex flex-row justify-between items-center">
                        <Text size="2xl" as="p" className="mb-px ">
                          {bid.serviceDescription}
                        </Text>
                        <Text size="lg" as="p" className="mt-[10px]">
                          {bid.shippingCost}
                        </Text>
                        <BButton
                          variant="dark"
                          disabled={!isFormFilled()}
                          onClick={() => {
                            save(id, bid.supplierId);
                            handleClose();
                          }}
                        >
                          select Bid
                        </BButton>
                      </div>
                    </div>
                  );
                })}
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
};

ViewBids.propTypes = {
  save: PropTypes.func.isRequired,
};

export default ViewBids;
