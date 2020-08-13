import React from 'react';
import Aos from 'aos';

import NavBar from './NavBar.js';

function Page(props){
	Aos.init();
	return (
		<div>
			<div>
				<NavBar />
			</div>
		</div>
	);
}

export default Page;
