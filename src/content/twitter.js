import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import NavDropdown from 'react-bootstrap/NavDropdown';

import SocialMedia from '../class/SocialMedia.js';

function Twitter(){ 
  const [show, setShow] = useState(false);

  const handleShow  = () => setShow(true);
  const handleClose = () => setShow(false);

  return(
  <>
    <NavDropdown.Item onClick={handleShow}>
      <li class="brand twitter" /> Twitter
    </NavDropdown.Item>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Twitter</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SocialMedia
          profileImg="https://pbs.twimg.com/profile_images/1097814963626770433/rBpVNnxV_400x400.jpg"
          role="Project Manager"
          url="https://twitter.com/niraj_everest"
          username="@niraj_everest"/>
      </Modal.Body>
    </Modal>
  </>
  );
}

export default Twitter;
