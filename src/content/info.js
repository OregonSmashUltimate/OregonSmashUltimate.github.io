import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import NavLink from 'react-bootstrap/NavLink';

function Info(){ 
  const [show, setShow] = useState(false);

  const handleShow  = () => setShow(true);
  const handleClose = () => setShow(false);

  return(
  <>
    <NavLink onClick={handleShow}>
      <li class="icon info" />
    </NavLink>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>More Info</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <p>
        The website logo [<li class="icon logo" style={{cursor: "default"}}/>] was created in-house by&nbsp;
        <a href="https://discordapp.com"
          rel="noopener noreferrer"
          target="_blank">
          goilup#3147
        </a>.
        </p>

        <p>
          No externally-made icons have been modified; they are only used as masks. Click on an asset to see its source.
        </p>

        <p>
        <h1>Logos</h1>
        These logo icons do not imply endorsement, and are only used to symbolize links to the domains themselves.
        <br/>
        <a href="https://en.facebookbrand.com/facebookapp/"
          rel="noopener noreferrer"
          target="_blank"><li class="icon facebook" /></a>
        <a href="https://discord.com/new/branding"
          rel="noopener noreferrer"
          target="_blank"><li class="icon discord" /></a>
        <a href="https://about.twitter.com/en_us/company/brand-resources.html"
          rel="noopener noreferrer"
          target="_blank"><li class="icon twitter" /></a>
        <a href="https://github.com/logos"
          rel="noopener noreferrer"
          target="_blank"><li class="icon github" /></a>
        <a href="https://brand.twitch.tv/"
          rel="noopener noreferrer"
          target="_blank"><li class="icon twitch" /></a>
        </p>

        <p>
        <h1>Icons</h1>
        <a href="https://fontawesome.com/license"
          rel="noopener noreferrer">Font Awesome License</a> used under <i>Font Awesome Free</i>.
        <br/>
        <a href="https://fontawesome.com/icons/thumbtack?style=solid"
          rel="noopener noreferrer"
          target="_blank"><li class="icon pin" /></a>
        <a href="https://fontawesome.com/icons/bars?style=solid"
          rel="noopener noreferrer"
          target="_blank"><li class="icon bars" /></a>
        <a href="https://fontawesome.com/icons/globe?style=solid"
          rel="noopener noreferrer"
          target="_blank"><li class="icon generic" /></a>
        <a href="https://fontawesome.com/icons/info-circle?style=solid"
          rel="noopener noreferrer"
          target="_blank"><li class="icon info" /></a>
        <a href="https://fontawesome.com/icons/plus-circle?style=solid"
          rel="noopener noreferrer"
          target="_blank"><li class="icon plus" /></a>
        <a href="https://fontawesome.com/icons/minus-circle?style=solid"
          rel="noopener noreferrer"
          target="_blank"><li class="icon minus" /></a>
        </p>

        <p>
        <h1>Frameworks</h1>
        <a href="https://reactjs.org/"
          rel="noopener noreferrer"
          target="_blank">React</a> |&nbsp;
        <a href="https://react-bootstrap.netlify.app/"
          rel="noopener noreferrer"
          target="_blank">React-Bootstrap</a> |&nbsp;
        <a href="https://www.netlifycms.org/"
          rel="noopener noreferrer"
          target="_blank">Netlify CMF</a> |&nbsp;
        <a href="https://pages.github.com/"
          rel="noopener noreferrer"
          target="_blank">GitHub Pages</a>
        </p>

        <p>
        <h1>References/Guides</h1>
        <a href="https://reactjs.org/docs/getting-started.html"
          rel="noopener noreferrer"
          target="_blank">React Getting Started</a> |&nbsp;
        <a href="https://react-bootstrap.netlify.app/components/alerts/"
          rel="noopener noreferrer"
          target="_blank">React-Bootstrap Components</a> |&nbsp;
        <a href="https://www.florin-pop.com/blog/2019/07/sort-table-data-with-react/"
          rel="noopener noreferrer"
          target="_blank">Florin Pop</a>
        </p>

      </Modal.Body>
    </Modal>
  </>
  );
}

export default Info;
