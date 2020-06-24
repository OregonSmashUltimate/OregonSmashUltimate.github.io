import React from 'react';
import Aos from 'aos';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import btb2Crowd from '../media/btb2CrowdShot.jpg';
import CardGroup from 'react-bootstrap/CardGroup';
import btbCom from '../media/btbCommentary.jpg';
import doubles from '../media/doublesMatch.jpg';
import friends from '../media/friends.jpg';

export default function GettingStarted(){
    Aos.init({
        duration: 1000,
    });
    return(
        <div id="getting-started-div">
            <div id="getting-started-item" className="text-center center">
                <Jumbotron className="bg-dark text-light"
                    data-aos="fade-up"
                >
                    <h1>Welcome!</h1>
                    <p>
                        The Oregon Smash Community is open to everyone! To find out how to get involved, keep scrolling down 
                    </p>
                    <img id="btb-crowd" alt="N/A" src={btb2Crowd}></img>
                    <hr></hr>
                    <p>Photo Credit: Twitter: @jaa_noble35</p>
                </Jumbotron>
            </div>
            
            <div id="getting-started-item1" className="text-center center">
                <Jumbotron className="bg-dark text-light"
                    data-aos="fade-down"
                    data-aos-mirror="true"
                    data-aos-delay="400"
                >
                    <u><h1>Find & Enter Events!</h1></u>
                    <hr></hr>
                    <p>If you're new to the scene, it's best to start off with a weekly. Weeklies tend to be smaller tournaments and are cheap in price! You can compete, spectate, or play friendlies with others there!</p>
                    <p>Check out the 'Events' tab to find events near you! If there's not one closeby listed, check our Discord or Facebook to find more events.</p>
                </Jumbotron>
                <CardGroup>
                    <Card 
                        data-aos="fade-up"
                        data-aos-delay="1100"
                    >
                        <Card.Img variant="top" src={friends} />
                        <Card.Body>
                        <Card.Title>Community</Card.Title>
                        <Card.Text>
                            Meet new people! Oregon has been known to have one of the most
                            positive communities. At our events, no matter who you are you are
                            welcome and will quickly find new friends to enjoy Smash and more!
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Photo: @TridentSkrt</small>
                        </Card.Footer>
                    </Card>
                    <Card 
                        data-aos="fade-down"
                        data-aos-delay="1100"
                        className="bg-dark text-light"
                        style={{marginLeft: "5%", marginRight: "5%"}}
                    >
                        <Card.Img variant="top" src={btbCom} />
                        <Card.Body>
                        <Card.Title>Events</Card.Title>
                        <Card.Text>
                            Wherever you're from, Oregon most likely has an event near you. Check
                            out the Events section for more information!

                            Don't see something nearby? Try going to our Discord and Facebook to see
                            if there's anything not listed. You'll also find updates are Regionals, 
                            which are larger events and tend to be worth the drive!
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Photo Credit: @jaa_noble35</small>
                        </Card.Footer>
                    </Card>
                    <Card 
                        data-aos="fade-up"
                        data-aos-delay="1100"
                        >
                        <Card.Img variant="top" src={doubles} />
                        <Card.Body>
                        <Card.Title>Competition</Card.Title>
                        <Card.Text>
                            Want to see how you stack up against others? We've got you!

                            Some of the best players reside in Oregon; you just gotta know where to go!
                            Test your skills and train with others. The community is all about improving 
                            so if you're here for competition, we've got you covered! Check out the
                            Rankings tab for info on some of the best players in Oregon.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Photo: @TridentSkrt</small>
                        </Card.Footer>
                    </Card>
                    </CardGroup>
                
            </div>
            
            <div id="getting-started-item2" className="text-center center" data-aos="fade-right">
                <Card>
                <u><h4>Rulesets</h4></u>
                <small>
                <p>Most tournaments will use variations of similar rulesets. Examples of major PNW rulesets included below.</p>
                </small>

                <a href="https://satellitesmash.com/#/news/VnLyiHYbOHf9XiTd7KpFz" target="_blank" rel="noopener noreferrer">Washington Ruleset</a>
                <br></br>
                <a href="https://twitter.com/battleofbc/status/1110291472035663872?s=21" target="_blank" rel="noopener noreferrer">British Columbia Ruleset</a>
                </Card>
            </div>

            <div id="getting-started-item3" className="text-center center" data-aos="slide-up">
                <Card>
                    <u><h4>Improving!</h4></u>
                    <small>
                    <p>Interested in improving at the game competitively? Watch the video below made by one of our community members on positively and effectively figuring out your goals
                        in the smash community!
                    </p>
                    </small>
                    <iframe title="Improving" width="560" height="315" src="https://www.youtube.com/embed/PTdG2zClz44" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Card>
            </div>
        </div>
    );
}
