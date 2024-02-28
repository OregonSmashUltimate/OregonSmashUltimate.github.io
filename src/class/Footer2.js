import React from 'react';

function Footer2(props){
	return (
		<>
            <div class="container">
                <div class="py-3 my-4">
                    <ul class="justify-content-center border-bottom pb-3 mb-3 ">
                        <li class="nav-item"><a href="/" class="nav-link px-2">Home</a></li>
                        <li class="nav-item"><a href="/getting-started" class="nav-link px-2">Getting started</a></li>
                        <li class="nav-item"><a href="/events" class="nav-link px-2">Events</a></li>
                        <li class="nav-item"><a href="/rankings" class="nav-link px-2">Ranking</a></li>
                        <li class="nav-item"><a href="/credits" class="nav-link px-2">Credits</a></li>
                    </ul>
                    <p class="text-center text nav-item">© 2024 Oregon Smash</p>
                    <p class="text-center text nav-item">Gengur was here</p>
                </div>
            </div>
		</>
	);
}

export default Footer2;
