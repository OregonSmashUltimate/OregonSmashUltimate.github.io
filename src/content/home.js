import React from 'react';

import SocialMedia from '../class/SocialMedia.js';
import Card from 'react-bootstrap/Card';

export default function Home(){ 
  return(
    <div>
      <Card style={{ width: '25%' }} className="text-center" bg="info">
        <Card.Header as="h4">
          Looking to join the Oregon Smash Ultimate Community?
        </Card.Header>
        <Card.Body>
          <Card.Text>
          <p>
            You've come to the right place!<br />
            Join us on our&nbsp; 
            <u><a href="https://discord.gg/K8nv9pt" target="_blank" rel="noopener noreferrer">Discord</a></u>
            &nbsp;and&nbsp;
            <u><a href="https://www.facebook.com/groups/499672353506994/" target="_blank" rel="noopener noreferrer">Facebook</a></u>
            !</p>
          </Card.Text>
          <a href="https://discord.gg/K8nv9pt"><img src="https://discord.com/assets/f8389ca1a741a115313bede9ac02e2c0.svg" id="discord-link-img"/></a>
          <a href="https://facebookbrand.com/wp-content/uploads/2019/10/flogo_RGB_HEX-BRC-Site-250.png?w=125&h=125"><img src="https://img.icons8.com/fluent/48/000000/facebook-new.png" /></a>
          
        </Card.Body>
      </Card>
      <style>

      </style>
    </div>
  );
}

