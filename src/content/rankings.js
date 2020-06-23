import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import winter20202PR from '../media/WINTER2020PR.jpg';
import fall2020PR from '../media/FALL2019PR.jpg'

export default function Rankings(){
    return(
        <div id="rankings-div" class="text-center">
            <h3>Rankings are kept track of on <a href="https://smash.gg/rankings/super-smash-bros-ultimate/series/oregon" target="_blank" rel="noopener noreferrer"><u>smash.gg</u></a></h3>
            <p>Power Rankings are created every 3 months by a panel made up of members in the community. You can find out more about rankings on our Discord and Facebook pages!</p>
            <br></br>
            <Carousel interval="100000">
                <Carousel.Item>
                    <img
                    id="rankingImg"
                    className="d-block w-100"
                    src={winter20202PR}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    id="rankingImg"
                    className="d-block w-100"
                    src={fall2020PR}
                    alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>

        
    );
}
