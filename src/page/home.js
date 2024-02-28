import React from 'react';
import Aos from "aos";
import { Row, Col } from 'react-bootstrap';
import backgroundImage from '../media/fox_illusion_update_v2.png'


export default function Home(){ 
  Aos.init({
    duration: 500,
  });
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',

  };
  return(
    <>
      <div style={backgroundImageStyle}>
        <div className="container text-white d-flex justify-content-center align-items-center">
          <a href="https://discord.gg/K8nv9pt" rel="noopener noreferrer" target="_blank">
          <button class="button-36 noHover">
            <Row>
              <Col md={10} className='pr-0'>Join Our Discord
              </Col>
              <Col md={2} className='pl-0'><div class="discord discord-style"></div></Col>
            </Row>
            </button>
          </a>
        {/* d-md-block Add this class below when feature is done */}
        <div class="card text-center  d-none" style={{ position: 'fixed', top: '100px', right: '25px', width: "18%"}}> 
          <div class="card-header">
            <h3>Featured Events</h3>
          </div>
          <div class="card-body">
            <h5 class="card-title">Events will probably go here and such</h5>
            <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

