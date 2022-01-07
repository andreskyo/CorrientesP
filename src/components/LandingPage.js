import React, { memo } from 'react';

import { Button as Button2 , NavBar , InputText, FooterMobile, FooterDesktop,  CardVencimientos,CardStats  } from 'tdr-fe-library';

const navOptions = [
	{title: 'Login', path: '/login'},
	{title: 'Register', path: '/register'}
];

function LandingPage() {
	return (
		<div className="bgimg w3-display-container w3-animate-opacity w3-text-white">

			<NavBar/>
			<div className="w3-display-middle">
				<Button2
					id="ingresar"
					value="Ingresar"

					>Ingresar</Button2>

				<CardVencimientos/>
				<CardStats/>
				<h1 className="w3-jumbo w3-animate-top">LANDING PAGE</h1>
				<hr className="w3-border-grey" style={{margin: 'auto', width: '40%'}} />
					<p className="w3-large w3-center">Most web applications have flow like this.</p>
			</div>

			<div className="w3-display-bottomleft w3-padding-large">
				Developed by <a href="https://github.com/umair-khanzada" target="_blank">umair-khanzada</a>
			</div>

		</div>
	)
}

export default LandingPage;
