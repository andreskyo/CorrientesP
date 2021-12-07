import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login, Register, ForgotPassword, LandingPage } from 'components';
import LoginSso from '../components/Loginsso';

function PublicRoutes() {
	return (
		<Fragment>
			<Switch>
				<Route path="/forgot-password">
					<ForgotPassword />
				</Route>
				<Route path="/register">
					<Register />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/loginsso/:tokenParam">
					<LoginSso />
				</Route>
				<Route path="">
					<LandingPage />
				</Route>
			</Switch>
		</Fragment>
	)
}

export default PublicRoutes;
