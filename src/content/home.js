import React from 'react';
import ReactDOM from 'react-dom';
import SocialMedia from '../class/SocialMedia.js';

import Carousel from 'react-bootstrap/Carousel';
import OregonWinter2019PR from '../pictures/OregonWinter2019PR.jpg';
import BTBSample from '../pictures/BTBSample.jpg';

var img = new Image();
img.onload = function() { alert("Height: " + this.height); }
img.src = '../pictures/OregonWinter2019PR';

var baseImg = new Image();
baseImg.src = '../pictures/BTBSample';

var useHeight = img.height;
console.log(img.height);

const home = 

<div id="home" width="200%">
    <h1>Looking to compete in Oregon's Smash Ultimate scene?</h1>
    <p>
      You've come to the right place!<br />
      Join us on&nbsp;
      <u><a href="https://discord.gg/K8nv9pt" target="_blank" rel="noopener noreferrer">Discord</a></u>
      &nbsp;and&nbsp;
      <u><a href="https://www.facebook.com/groups/499672353506994/" target="_blank" rel="noopener noreferrer">Facebook</a></u>
    !</p>
    {/* Commented out so it  doesn't show on master. Going to work on another branch */}
    {/* <div>
      <Carousel id="carouselHome" wrap='true' interval='4000' touch='true' slide='true'>
        <Carousel.Item>
          <img id="rank" className='img-fluid' src={OregonWinter2019PR} alt="Oregon Winter 2019 PR" vspace={460 - img.height} />
          <Carousel.Caption>
          Hello
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img className='img-fluid' src={BTBSample } alt="Oregon Winter 2019 PR" vspace='38.5'/>
        </Carousel.Item>
      </Carousel>
    </div> */}
</div>

export default home;


