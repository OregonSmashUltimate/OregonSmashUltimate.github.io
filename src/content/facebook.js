import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import NavDropdown from 'react-bootstrap/NavDropdown';

import SocialMedia from '../class/SocialMedia.js';

function Facebook(){ 
  const [show, setShow] = useState(false);

  const handleShow  = () => setShow(true);
  const handleClose = () => setShow(false);

  return(
  <>
    <NavDropdown.Item onClick={handleShow}>
      <li className="icon facebook" /> Facebook
    </NavDropdown.Item>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Facebook</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SocialMedia
          profileImg="https://en.facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png"
          role="Community"
          url="https://www.facebook.com/groups/499672353506994/"
          username="Oregon Ultimate Facebook Group"/>
      </Modal.Body>
    </Modal>
  </>
  );
}

export default Facebook;
