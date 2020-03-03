import React from 'react';
import ReactDOM from 'react-dom';
import SocialMedia from '../class/SocialMedia.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import Carousel from 'react-bootstrap/Carousel';
import OregonWinter2019PR from '../pictures/OregonWinter2019PR.jpg';
import BTBSample from '../pictures/BTBSample.jpg';

const home = 

<div id="home">
    <h1>Looking to compete in Oregon's Smash Ultimate scene?</h1>
    <p>
      You've come to the right place!<br />
      Join us on&nbsp;
      <u><a href="https://discord.gg/K8nv9pt" target="_blank" rel="noopener noreferrer">Discord</a></u>
      &nbsp;and&nbsp;
      <u><a href="https://www.facebook.com/groups/499672353506994/" target="_blank" rel="noopener noreferrer">Facebook</a></u>
    !</p>
    <Carousel wrap='true' interval='4000'>
      <Carousel.Item>
        <img className="img-fluid" src={OregonWinter2019PR} alt="Oregon Winter 2019 PR" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="img-fluid" src={BTBSample} alt="Buff the bluff"/>
      </Carousel.Item>
    </Carousel>
</div>

export default home;


