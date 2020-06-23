import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Aos from "aos";
import Alert from 'react-bootstrap/Alert';

export default function Home(){ 
  Aos.init({
    duration: 500,
  });
  return(
    <div>
      <Alert variant="danger" className="text-center">
        <h2>ATTENTION: Due to COVID-19 all events have been suspended and we recommend
          individuals do not host events until it is safe. Please feel free to join 
          the online community!
        </h2>
      </Alert>
      <Jumbotron className="text-center bg-dark text-light" id="jumbotron-home" data-aos="fade-up">
        <h1>Looking to join the Oregon Smash Ultimate Community?</h1>
        <hr></hr>
        <p>
            You've come to the right place!<br />
            Join us on our&nbsp; 
            <u><b><a href="https://discord.gg/K8nv9pt" target="_blank" rel="noopener noreferrer">Discord</a></b></u>
            &nbsp;and&nbsp;
            <u><b><a href="https://www.facebook.com/groups/499672353506994/" target="_blank" rel="noopener noreferrer">Facebook</a></b></u>
            !</p>
          <a href="https://discord.gg/K8nv9pt"><img alt="Not found" src="https://discord.com/assets/f8389ca1a741a115313bede9ac02e2c0.svg" id="discord-link-img"/></a>
          <a href="https://facebookbrand.com/wp-content/uploads/2019/10/flogo_RGB_HEX-BRC-Site-250.png?w=125&h=125"><img alt="Not found" src="https://img.icons8.com/fluent/48/000000/facebook-new.png" id="facebook-link-img"/></a>
          
      </Jumbotron>
    </div>
  );
}

