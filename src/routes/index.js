import React, { memo } from 'react';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import history from 'utils/history';
import { Login } from 'components';
import { LandingPage } from 'components';
import { Dashboard } from 'components';

function Rutas() {
	return (
		<BrowserRouter history={history}>
		
			<Routes>
				<Route exact path="/" element={<LandingPage/>} />
				<Route exact path="/login" element={<Login/>} />
				<Route exact path="/app" element={<Dashboard/>} />
			</Routes>
			
		</BrowserRouter>
	)
}

export default memo(Rutas);

