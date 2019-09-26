import React from 'react';

import Nav from './Nav.js';
import Footer from './Footer.js';

function Page(props){
	return (
		<div>
			<Nav />
			{props.children}
			<Footer />
      <div id="logo"></div>
		</div>
	);
}

export default Page;
