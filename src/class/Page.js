import React from 'react';

import Nav from './NavBar.js';
import Footer from './Footer.js';

//initialize local storage for first time visitors
if(localStorage.getItem('pinnedEventUIDs') === null)
  localStorage.setItem('pinnedEventUIDs', "");
if(localStorage.getItem('theme') === null)
  localStorage.setItem('theme', "0");
if(localStorage.getItem('pinnedEvents') === null)
  localStorage.setItem('pinnedEvents', "include");

function Page(props){
	return (
		<div>
			<div>
				<Nav />
				<Footer />
			</div>
		</div>
	);
}

export default Page;
