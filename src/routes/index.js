import React, { memo } from 'react';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import history from 'utils/history';
import { Login } from 'components';
import { LandingPage } from 'components';
import { Dashboard } from 'components';
import Novedades from "../components/Novedades"
import Navigation from '../components/NavBar/Navigation'
import Topheader from 'components/library-temp/MetaTDR/Headers/TopHeader';
import Vencimientos from "../components/Vencimientos"
import Consultas from "../components/Gestiones/Consultas/Consultas"
import Cotizacion from "../components/Gestiones/Consultas/Cotizacion"
import CalculoInteres from "../components/Gestiones/Consultas/CalculoInteres";
import ConsultaExpedientes from "../components/Gestiones/Consultas/ConsultaExpedientes";
import Gestiones from "../components/Gestiones/Gestiones";
import CertificadosConstancias from "../components/Gestiones/CertificadosConstancias";
import CertificadosEmitidos from 'components/Gestiones/Certificados&Constancias.js/CertificadosEmitidos';
import ConstanciaInscripcion from 'components/Gestiones/Certificados&Constancias.js/ConstanciaInscripcion';
import LibreDeuda from 'components/Gestiones/Certificados&Constancias.js/LibreDeuda';
import Denuncias from '../components/Gestiones/Denuncias';
import Nomenclador from '../components/Gestiones/Nomenclador';
import RegistroContribuyente  from 'components/Gestiones/RegistroContribuyente';
import RegistroOrganismos from 'components/Gestiones/RegistroOrganismos';


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
				<Route exact path="/vencimientos" element={<Vencimientos/>} />
				<Route exact path="/gestiones" element={<Gestiones />} />
				<Route  path="gestiones/consultas" element={<Consultas />} />
				<Route  path="gestiones/constancias" element={<CertificadosConstancias />} />
				<Route  path="gestiones/consultas/cotizacion" element={<Cotizacion />} />
				<Route  path="gestiones/consultas/calculoInteres" element={<CalculoInteres />} />
				<Route  path="gestiones/consultas/consultaExpedientes" element={<ConsultaExpedientes/>}  />
				<Route  path="gestiones/constancias/constanciaInscripcion" element={<ConstanciaInscripcion />} />
				<Route  path="gestiones/constancias/certificadosEmitidos" element={<CertificadosEmitidos />} />
				<Route  path="gestiones/constancias/constanciaLibreDeuda" element={<LibreDeuda />}  />
				<Route  path="gestiones/denuncias" element={<Denuncias />}  />
				<Route  path="gestiones/registroContribuyente" element={<RegistroContribuyente />}  />
				<Route  path="gestiones/registroOrganismos" element={<RegistroOrganismos />}  />
				<Route  path="gestiones/nomenclador" element={<Nomenclador />}  />
				
				
			</Routes>
			
		</BrowserRouter>
	)
}

export default memo(Rutas);

