import React from 'react';
import Aos from 'aos';
import Card from "react-bootstrap/Card";

export default function GettingStarted(){
    Aos.init({
        duration: 1000,
    });
    return(
        <div id="getting-started-div">
            <div id="getting-started-item" className="text-center center" data-aos="fade-bottom">
                <h2>Welcome!</h2>
            </div>
            
            <div class="getting-started-item" className="text-center center" data-aos="fade-left">
                <Card>
                    <u><h4>Find & Enter Events!</h4></u>
                    <small>
                    <p>If you're new to the scene, it's best to start off with a weekly. Weeklies tend to be smaller tournaments and are cheap in price! You can compete, spectate, or play friendlies with others there!</p>
                    <p>Check out the 'Events' tab to find events near you! If there's not one closeby listed, check our Discord or Facebook to find more events.</p>
                    </small>
                </Card>
            </div>
            
            <div class="getting-started-item" className="text-center center" data-aos="fade-left">
                <Card>
                <u><h4>Rulesets</h4></u>
                <small>
                <p>Most tournaments will use variations of similar rulesets. Examples of major PNW rulesets included below.</p>
                </small>

                - <a href="https://satellitesmash.com/#/news/VnLyiHYbOHf9XiTd7KpFz" target="_blank" rel="noopener noreferrer">Washington Ruleset</a>
                <br></br>
                - <a href="https://twitter.com/battleofbc/status/1110291472035663872?s=21" target="_blank" rel="noopener noreferrer">British Columbia Ruleset</a>
                </Card>
            </div>

            <div class="getting-started-item" className="text-center center" data-aos="fade-left">
                <Card>
                    <u><h4>Improving!</h4></u>
                    <small>
                    <p>Interested in improving at the game competitively? Watch the video below made by one of our community members on positively and effectively figuring out your goals
                        in the smash community!
                    </p>
                    </small>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/PTdG2zClz44" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Card>
            </div>
        </div>
    );
}

