//when I copied them all the user profile links ended in ?size=128

import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import NavDropdown from 'react-bootstrap/NavDropdown';

import SocialMedia from '../class/SocialMedia.js';

function Discord(){ 
  const [show, setShow] = useState(false);

  const handleShow  = () => setShow(true);
  const handleClose = () => setShow(false);

  return(
  <>
    <NavDropdown.Item onClick={handleShow}>
      <li class="brand discord" /> Discord
    </NavDropdown.Item>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Discord</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SocialMedia
          profileImg="https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/discord-512.png"
          role="Community"
          url="https://discord.gg/K8nv9pt"
          username="Oregon Discord"/>
        <SocialMedia
          profileImg="https://cdn.discordapp.com/avatars/194312605941104640/817e8a5e5a0139076775833c44e16a9b.png"
            role="Project Manager"
          url="https://discordapp.com/"
          username="UNITY | Everest#1614" />
        <SocialMedia
          profileImg="https://cdn.discordapp.com/avatars/77311178010796032/f72bf2cee59e6b8fc22703fa01708d7b.png"
          role="Developer Lead"
          url="https://discordapp.com/"
          username="Cyril#9605" />
        <SocialMedia
          profileImg="https://cdn.discordapp.com/avatars/485620789643575307/651d326acb6c47e651548a4d53826a01.png"
          role="Lead Developer"
          url="https://discordapp.com/"
          username="honeydew#8300" />
        <SocialMedia
          profileImg="https://cdn.discordapp.com/avatars/210957217485029376/c76b6f904e8db259822e7696efa10213.png"
          role="Human Database"
          url="https://discordapp.com/"
          username="giantrobotbee#0001" />
        <SocialMedia
          profileImg="https://cdn.discordapp.com/avatars/96396806367227904/eca3bc8a3eeea3873c7e4be4f0b00210.png"
          role="Logo Design"
          url="https://discordapp.com/"
          username="goilup#3147" />
      </Modal.Body>
    </Modal>
  </>
  );
}

export default Discord;
