import React from 'react';
import ReactDOM from 'react-dom';

import Page from './Page.js';

var root = document.getElementById('root');

function Popup(props){
	function handleClick(e){
		ReactDOM.render(<Page />, root);
	}
	return (
		<div id="popup">
			<div id="header">
				{props.title}
				<p onClick={handleClick}>&#10006;</p>
				{/* Originall <a> tags, but wanted to take care of warning
				need to fix later */}
			</div>
			{props.children}
		</div>
	);
}

export default Popup;
