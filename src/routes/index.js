import React, { memo } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import history from 'utils/history';
import { Login } from 'pages';
import { LandingPage } from 'pages';
import Contenidos from 'pages/Contenidos';
import Novedades from '../pages/Novedades';
import Navigation from '../components/NavBar/Navigation';

import Vencimientos from '../pages/Vencimientos';
import Consultas from '../components/Gestiones/Consultas/Consultas';
import Cotizacion from '../components/Gestiones/Consultas/Cotizacion';
import CalculoInteres from '../components/Gestiones/Consultas/CalculoInteres';
import ConsultaExpedientes from '../components/Gestiones/Consultas/ConsultaExpedientes';
import Gestiones from '../components/Gestiones/Gestiones';

import Denuncias from '../components/Gestiones/Denuncias';
import Nomenclador from '../components/Gestiones/Nomenclador';
import RegistroContribuyente from 'components/Gestiones/RegistroContribuyente';
import RegistroOrganismos from 'components/Gestiones/RegistroOrganismos';
import GuiaTramites from '../pages/GuiaTramites';

import FooterDesktop from '../components/FooterDesktop';
import ScrollToTop from '../components/common/ScrollToTop';
import ItemTramite from 'pages/ItemTramite';
import PuestoAtencion from '../pages/PuestoAtencion'
import  NotFound  from '../pages/NotFound';
function Rutas() {
	return (
		<BrowserRouter history={history}>
			<Navigation />
			<ScrollToTop>
				<Routes>
					<Route exact path="/" element={<LandingPage />} />
					<Route exact path="/login" element={<Login />} />

					<Route exact path="/novedades/:id" element={<Novedades />} />
					<Route exact path="/novedades" element={<Novedades />} />
					<Route exact path="/vencimientos" element={<Vencimientos />} />
					<Route exact path="/gestiones" element={<Gestiones />} />
					<Route path="gestiones/consultas" element={<Consultas />} />

					<Route
						path="gestiones/consultas/cotizacion"
						element={<Cotizacion />}
					/>
					<Route
						path="gestiones/consultas/calculoInteres"
						element={<CalculoInteres />}
					/>
					<Route
						path="gestiones/consultas/consultaExpedientes"
						element={<ConsultaExpedientes />}
					/>

					<Route path="gestiones/denuncias" element={<Denuncias />} />
					<Route
						path="gestiones/registroContribuyente"
						element={<RegistroContribuyente />}
					/>
					<Route
						path="gestiones/registroOrganismos"
						element={<RegistroOrganismos />}
					/>
					<Route path="gestiones/nomenclador" element={<Nomenclador />} />
					<Route exact path="guiaTramites" element={<GuiaTramites />} />
					
		

					<Route path="guiaTramites/:tramiteId" element={<ItemTramite />} />

					<Route path="puestoAtencionControl" element={<PuestoAtencion/>} />"

					<Route path="contenidos" element={<Contenidos/>}/>
					<Route path="error" element={<NotFound/>}/>
				</Routes>
			</ScrollToTop>
			<FooterDesktop />
		</BrowserRouter>
	);
}

export default memo(Rutas);
