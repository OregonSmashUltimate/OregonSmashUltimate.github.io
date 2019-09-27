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
				<a href="" onClick={handleClick}>&#10006;</a>
			</div>
			{props.children}
		</div>
	);
}

export default Popup;
