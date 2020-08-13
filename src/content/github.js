import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import NavDropdown from 'react-bootstrap/NavDropdown';

import SocialMedia from '../class/SocialMedia.js';

function GitHub(){ 
  const [show, setShow] = useState(false);

  const handleShow  = () => setShow(true);
  const handleClose = () => setShow(false);

  return(
  <>
    <NavDropdown.Item onClick={handleShow}>
      <li className="icon github" /> GitHub
    </NavDropdown.Item>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>GitHub</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SocialMedia
          profileImg="https://avatars1.githubusercontent.com/u/54699262?s=200&v=4"
          role="Repo"
          url="https://github.com/OregonSmashUltimate/OregonSmashUltimate.github.io"
          username="OregonSmashUltimate.github.io"/>
        <hr />
        <SocialMedia
          profileImg="https://avatars0.githubusercontent.com/u/10984092?s=460&v=4"
          role="Project Manager"
          url="https://github.com/malin383"
          username="malin383"/>
        <hr />
        <SocialMedia
          profileImg="https://avatars1.githubusercontent.com/u/1504375?s=460&v=4"
          role="Developer Lead"
          url="https://github.com/cyril-vandyke"
          username="cyril-vandyke"/>
        <hr />
        <SocialMedia
          profileImg="https://avatars3.githubusercontent.com/u/21343049?s=460&v=4"
          role="Lead Developer"
          url="https://github.com/jCallon"
          username="jCallon"/>
        <hr />
        <SocialMedia
          profileImg="https://avatars3.githubusercontent.com/u/253703?s=460&v=4"
          role="Human Database"
          url="https://github.com/giantrobotbee"
          username="giantrobotbee"/>
        <hr />
        <SocialMedia
          profileImg="https://avatars2.githubusercontent.com/u/29513096?s=460&v=4"
          role="Logo Design"
          url="https://github.com/bananyog"
          username="bananyog"/>
            </Modal.Body>
          </Modal>
  </>
  );
}

export default GitHub;
