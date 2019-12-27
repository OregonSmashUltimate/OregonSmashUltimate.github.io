import React from 'react';
import Popup from '../class/Popup.js';
import SocialMedia from '../class/SocialMedia.js';

const twitter = 
<Popup title="Twitter" children={
<div>
<SocialMedia
	profileImg="https://pbs.twimg.com/profile_images/1097814963626770433/rBpVNnxV_400x400.jpg"
  role="Project Manager"
	url="https://twitter.com/niraj_everest"
	username="@niraj_everest"
/>
<SocialMedia
	profileImg="https://pbs.twimg.com/profile_images/1180645054819340289/5ud1R5EV_400x400.jpg"//https://pbs.twimg.com/profile_images/1120052132776796160/nbK9A9G7_400x400.jpg"
  	role="Lead Developer"
	url="https://twitter.com/CeruleanAoi?s=09"
	username="@CeruleanAoi"
/>
</div>
}/>

export default twitter;
