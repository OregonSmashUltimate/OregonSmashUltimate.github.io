import React from 'react';

import NavBar from './NavBar.js';

//initialize local storage for first time visitors
if(localStorage.getItem('pinnedEventUIDs') === null)
  localStorage.setItem('pinnedEventUIDs', "");
if(localStorage.getItem('theme') === null)
  localStorage.setItem('theme', "light");
if(localStorage.getItem('pinnedEvents') === null)
  localStorage.setItem('pinnedEvents', "include");
if(localStorage.getItem('sortBy') === null)
  localStorage.setItem('sortBy', "none");
if(localStorage.getItem('sortByOrder') === null)
  localStorage.setItem('sortByOrder', "descending");

function Page(props){
	return (
		<div>
			<div>
				<NavBar />
			</div>
		</div>
	);
}

export default Page;
