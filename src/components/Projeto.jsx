import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

const Projeto = ({ label, category, imgs, text }) => {
  const [scaleImage, setScaleImage] = useState(false);
  const [show, setShow] = useState(false);
  const [showSeeMore, setShowSeeMore] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="col-12 col-xl-3 col-lg-4 col-md-6 col-sm-6 d-flex flex-column align-items-center">
      <div
        onMouseEnter={() => {setScaleImage(true); setShowSeeMore(true)}}
        onMouseLeave={() => {setScaleImage(false); setShowSeeMore(false)}}
        className={`w-100 h-100 overflow-hidden rounded position-relative d-flex align-items-center justify-content-center ${
          scaleImage ? "inner-shadow" : ""
        }`}
        style={{ height: "250px", maxHeight: "250px", minHeight: "250px" }}
      >
        <img
          src={imgs[0]}
          className="img-fluid h-100 w-100"
          style={{
            objectFit: "cover",
            transform: `${scaleImage ? "scale(1.1)" : ""}`,
          }}
        />
        {showSeeMore && <button
          type="button"
          onClick={handleShow}
          className="see-more-btn position-absolute px-2"
        >
          Ver mais
        </button>}
      </div>
      <p className="mt-2">{label}</p>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{label}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MDBCarousel showIndicators showControls className="mb-4">
            <MDBCarouselItem
            className="w-100 d-block"
            itemId={1}
            src={imgs[0]}
            alt="..."
            style={{ height: "340px", objectFit: "contain", backgroundColor: "black" }}
            ></MDBCarouselItem>
            <MDBCarouselItem
                className="w-100 d-block"
                itemId={2}
                src={imgs[1]}
                alt="..."
                style={{ height: "340px", objectFit: "contain", backgroundColor: "black"  }}
                ></MDBCarouselItem>
            <MDBCarouselItem
                className="w-100 d-block"
                itemId={3}
                src={imgs[2]}
                alt="..."
                style={{ height: "340px", objectFit: "contain", backgroundColor: "black"  }}
                ></MDBCarouselItem>
          </MDBCarousel>
          {text}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Projeto;
