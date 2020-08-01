import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Aos from "aos";
import Alert from 'react-bootstrap/Alert';

export default function Home(){ 
  Aos.init({
    duration: 500,
  });
  return(
    <div class="outerDiv">
      <Alert variant="danger" className="text-center">
        <h2>ATTENTION: Due to COVID-19 all events have been suspended and we recommend
          individuals do not host events until it is safe. Please feel free to join 
          the online community!
        </h2>
      </Alert>
      <Jumbotron className="text-center" id="jumbotron-home" data-aos="fade-up">
        <h1>Looking to join the Oregon Smash Ultimate Community?</h1>
        <hr></hr>
        <p>
            You've come to the right place!<br />
            Join us on our
            <br/>
            <div style={{textAlign: "center"}}>
              <a href="https://discord.gg/K8nv9pt" target="_blank" rel="noopener noreferrer"><li class="icon discord"/> Discord</a>
              &nbsp;|&nbsp;
              <a href="https://www.facebook.com/groups/499672353506994/" target="_blank" rel="noopener noreferrer"><li class="icon facebook"/> Facebook</a>
            </div>
            </p>
      </Jumbotron>
    </div>
  );
}

