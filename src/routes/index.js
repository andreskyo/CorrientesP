import React, { memo } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import history from 'utils/history';
import { Login } from 'pages';
import { LandingPage } from 'pages';
import PuestoAtencion from 'pages/PuestoAtencion';
import Novedades from '../pages/Novedades';
import Navigation from '../components/NavBar/Navigation';
import Topheader from 'components/library-temp/MetaTDR/Headers/TopHeader';
import Vencimientos from '../pages/Vencimientos';
import Consultas from '../components/Gestiones/Consultas/Consultas';
import Cotizacion from '../components/Gestiones/Consultas/Cotizacion';
import CalculoInteres from '../components/Gestiones/Consultas/CalculoInteres';
import ConsultaExpedientes from '../components/Gestiones/Consultas/ConsultaExpedientes';
import Gestiones from '../components/Gestiones/Gestiones';
import CertificadosConstancias from '../components/Gestiones/CertificadosConstancias';
import CertificadosEmitidos from 'components/Gestiones/Certificados&Constancias.js/CertificadosEmitidos';
import ConstanciaInscripcion from 'components/Gestiones/Certificados&Constancias.js/ConstanciaInscripcion';
import LibreDeuda from 'components/Gestiones/Certificados&Constancias.js/LibreDeuda';
import Denuncias from '../components/Gestiones/Denuncias';
import Nomenclador from '../components/Gestiones/Nomenclador';
import RegistroContribuyente from 'components/Gestiones/RegistroContribuyente';
import RegistroOrganismos from 'components/Gestiones/RegistroOrganismos';
import GuiaTramites from '../pages/GuiaTramites';
import IngresosBrutos from '../pages/Tramites/IngresosBrutos';
import Sellos from '../pages/Tramites/Sellos';
import InmobiliarioRural from '../pages/Tramites/InmobiliarioRural';
import Planesdepago from '../pages/Tramites/Planesdepago';
import OtrosTramites from '../pages/Tramites/OtrosTramites';
import Clavedeaccesovirtual from '../pages/Tramites/Clavedeaccesovirtual';
import Acreditaciondepersoneria from '../pages/Tramites/Acreditaciondepersoneria';
import AltaActividad from 'pages/Tramites/IIBB/AltaActividad';
function Rutas() {
	return (
		<BrowserRouter history={history}>
			<Topheader />
			<Navigation />
			<Routes>
				<Route exact path="/" element={<LandingPage />} />
				<Route exact path="/login" element={<Login />} />

				<Route exact path="/novedades/:id" element={<Novedades />} />
				<Route exact path="/novedades" element={<Novedades />} />
				<Route exact path="/vencimientos" element={<Vencimientos />} />
				<Route exact path="/gestiones" element={<Gestiones />} />
				<Route path="gestiones/consultas" element={<Consultas />} />

				<Route path="gestiones/consultas/cotizacion" element={<Cotizacion />} />
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
				<Route path="guiaTramites" element={<GuiaTramites />} />
				<Route
					path="guiaTramites/IngresosBrutos"
					element={<IngresosBrutos />}
				/>
				<Route path="puestoAtencionControl" element={<PuestoAtencion />} />
				<Route path="guiaTramites/Sellos" element={<Sellos />} />
				<Route
					path="guiaTramites/inmobiliarioRural"
					element={<InmobiliarioRural />}
				/>
				<Route
					path="guiaTramites/Certificadosyconstancias"
					element={<CertificadosConstancias />}
				/>
				<Route
					path="guiaTramites/Certificadosyconstancias/constanciaInscripcion"
					element={<ConstanciaInscripcion />}
				/>
				<Route
					path="guiaTramites/Certificadosyconstancias/certificadosEmitidos"
					element={<CertificadosEmitidos />}
				/>
				<Route
					path="guiaTramites/Certificadosyconstancias/constanciaLibreDeuda"
					element={<LibreDeuda />}
				/>
				<Route path="guiaTramites/Planesdepago" element={<Planesdepago />} />
				<Route path="guiaTramites/Otrostramites" element={<OtrosTramites />} />
				<Route
					path="guiaTramites/Clavedeaccesovirtual"
					element={<Clavedeaccesovirtual />}
				/>
				<Route
					path="guiaTramites/Acreditaciondepersoneria"
					element={<Acreditaciondepersoneria />}
				/>

				<Route 
					path="guiaTramites/IngresosBrutos/altaActividad"
					element={<AltaActividad />}
				
				/>

			</Routes>
		</BrowserRouter>
	);
}

export default memo(Rutas);
