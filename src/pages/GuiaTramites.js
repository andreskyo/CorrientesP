import { React, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import FullWidth from '../components/andres/MetaTDR/Titles/js/TitulosHome/Desktop/FullWidth';
import CardStats from '../components/andres/MetaTDR/Cards/jsPrimary/CardStats';
import Buttons from '../components/andres/MetaTDR/Buttons/Butttons/Buttons';
import Accordion from '../components/andres/MetaTDR/Accordion/Accordion';
import BusquedaGenerica from 'components/library-temp/BusquedaGenerica/BusquedaGenerica';
import CreatableSelect from 'react-select';


export default function GuiaTramites() {
	let navigate = useNavigate();
	let params = useParams();
	let location = useLocation();

	const [datos, setDatos] = useState({});


	

	let datosTitulosHome = {
		sub: 'Guía de Trámites',
		descripcion:
			'En esta seccion encontraras el tramite que necesitas realizar '
	};

	let datosCards = [
		'Ingresos Brutos',
		'Sellos',
		'Marcas y señales',
		'Inmobiliario rural',
		'Certificados y constancias ',
		'Planes de pago',
		'Otros tramites',
		'Clave de acceso virtual',
		'Acreditacion de Personeria'
	];

	const datosAccordion = [
		{
			titulo: 'Ingresos Brutos',
			descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		{
			titulo: 'Sellos',
			descripcion: 'Sellos'
		},
		{
			titulo: 'Marcas y señales',
			descripcion: 'Marcas y señales'
		}
	];

	const handleNavigate = (ruta) => {
		console.log('location  ' + location.pathname);
		navigate(`${location.pathname + '/' + ruta} `);
	};

	const seccionAyuda = (datosAccordion) => {
		return <Accordion datosAccordion={datosAccordion} />;
	};


	const handleSearch = (datos) => {
		console.log('datos: ' + JSON.stringify(datos));
		setDatos(prevState => ({...datos}));

	}
	  let combo = [
    {value:"Seleccionar",label:"Seleccionar..."},
      {value:"NAES",label:"NAES"},
      {value:"CUACM",label:"CUACM"},
      {value:"LOCAL ",label:"LOCAL"},
      
  ]

	

	let campos = [
             
                 {tipo:"comboNew",label:"Nomenclador",regex:"", size:6   , opciones:combo,requerido:"S",ejecutar:false },
              /*  {tipo:"cuit",label:"Cuit",regex:/^(20|23|24|27|30|33|34)(\D)?[0-9]{8}(\D)?[0-9]$/, opciones:this.state.comboTramites2?this.state.comboTramites2:comboEstado,requerido:"N",ejecutar:false },*/
    ];

	const handleInputChange = (inputValue, actionMeta) => {
    console.group('Input Changed');
    console.log(inputValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };

	return (
		<>
			<section className="container">
				<FullWidth datosTitulosHome={datosTitulosHome}></FullWidth>

				<div className="input-search" >
					<BusquedaGenerica   estilo="metatdr" campos={campos} onSearch={handleSearch}/>
					
					
				</div>

				<div className="row d-flex">
					{datosCards.map((item, index) => {
						let ruta = item.split(' ').join('');

						let datosCardStats = {
							titulo: item,
							icon: iconoGenerico,
							button: (
								<Buttons
									onClick={() => handleNavigate(ruta)}
									primary
									line
									text="Mas información"
								></Buttons>
							)
						};

						return (
							<div className="col-12 col-md-4 col-lg-3 col-xxl-2 shortcutRowWrapper__card p-2">
								<CardStats datosCardStats={datosCardStats} />
							</div>
						);
					})}
				</div>
				<div className="row collapseFaqRow my-5">
					<div className="col-12 col-md-6 col-lg-5 collapseFaqRow__head">
						<h2 className="collapseFaqHead__title">
							¿Alguna pregunta? Nosotros te ayudamos.
						</h2>
						<p className="collapseFaqHead__description">
							Yet bed any for assistance indulgence unpleasing. Not thoughts
							all: ; exercise blessing. Indulgence way everything joy alteration
							boisterous the attachment.
						</p>
						<a href="/guiaTramites">{`Mas FAQS ->`} </a>
					</div>
					<div className="col-12 col-md">
						<div className="container-fluid listCollapsables listCollapsables--faq">
							<div className="row listCollapsables__item">
								<div className="col listCollapsablesItem">
									
									{seccionAyuda(datosAccordion)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

const iconoGenerico = (
	<svg
		width="48"
		height="48"
		viewBox="0 0 48 48"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect width="48" height="48" rx="24" fill="#E2E8F0" />
		<path
			d="M30.92 17.51C30.72 16.92 30.16 16.5 29.5 16.5H18.5C17.84 16.5 17.29 16.92 17.08 17.51L15.11 23.18C15.04 23.39 15 23.61 15 23.84V31C15 31.83 15.67 32.5 16.5 32.5C17.33 32.5 18 31.83 18 31V30.5H30V31C30 31.82 30.67 32.5 31.5 32.5C32.32 32.5 33 31.83 33 31V23.84C33 23.62 32.96 23.39 32.89 23.18L30.92 17.51ZM18.5 27.5C17.67 27.5 17 26.83 17 26C17 25.17 17.67 24.5 18.5 24.5C19.33 24.5 20 25.17 20 26C20 26.83 19.33 27.5 18.5 27.5ZM29.5 27.5C28.67 27.5 28 26.83 28 26C28 25.17 28.67 24.5 29.5 24.5C30.33 24.5 31 25.17 31 26C31 26.83 30.33 27.5 29.5 27.5ZM17 22.5L18.27 18.68C18.41 18.28 18.79 18 19.22 18H28.78C29.21 18 29.59 18.28 29.73 18.68L31 22.5H17Z"
			fill="#27272A"
		/>
	</svg>
);
