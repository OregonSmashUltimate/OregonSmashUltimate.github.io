import React from 'react';

function SocialMedia(props){
	return (
		<div className="SocialMedia">
			<img id="profileImg" src={props.profileImg} alt="Unable to load profile pic." />
      <p>
        {props.role}
        &nbsp;|&nbsp;
			  <a href={props.url} target="_blank" rel="noopener noreferrer">{props.username}</a>
      </p>
		</div>
	);
}

export default SocialMedia;
