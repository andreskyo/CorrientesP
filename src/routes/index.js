import React, { memo } from 'react';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import history from 'utils/history';
import { Login } from 'components';
import { LandingPage } from 'components';
import { Dashboard } from 'components';
import Novedades from "../components/Novedades"
import Navigation from '../components/NavBar/Navigation'
import Topheader from 'components/library-temp/MetaTDR/Headers/TopHeader';
function Rutas() {
	return (
		<BrowserRouter history={history}>
			<Topheader/>
			<Navigation />
			<Routes>
				<Route exact path="/" element={<LandingPage/>} />
				<Route exact path="/login" element={<Login/>} />
				<Route exact path="/app" element={<Dashboard/>} />
				<Route exact path="/novedades/:id" element={<Novedades/>}/>
				<Route exact path="/novedades" element={<Novedades/>}/>
				
			</Routes>
			
		</BrowserRouter>
	)
}

export default memo(Rutas);

