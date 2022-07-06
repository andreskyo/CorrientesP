import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useGet from '../utils/useGet';
import CardImage from '../components/library-temp/MetaTDR/Cards/CardImage';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import latestNewsImg1 from '../assets/img/latestNewsImg1.webp';
import latestNewsImg3 from '../assets/img/latestNewsImg3.webp';
import { SwiperSlide } from 'swiper/react/swiper-react';
import { isMobile } from 'react-device-detect';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import InputSearch from '../components/andres/MetaTDR/InputSearch/InputSearch';
import CardImageRow from '../components/common/CardsImage/CardImageRow';
import ItemCardNovedades from './ItemCardNovedades';
import Buttons from 'components/andres/MetaTDR/Buttons/Butttons/Buttons';
import backgroundAnimated from '../assets/images/backgroundAnimate.svg'

import novedadesPrimary from '../assets/img/novedadesPrimary.webp';
import novedadesSecondary from '../assets/img/novedadesSecondary.webp';

import CardImg from 'components/andres/MetaTDR/Cards/jsPrimary/CardImg';
import SearchIcon from '@mui/icons-material/Search';

export default function Novedades(props) {
	const [data2, setData2] = useGet({ url: 'api/novedades' });
	const [idNovedad, setIdNovedad] = useState(0);
	const [datosSeleccionados, setDatosSeleccionados] = useState('');
	const params = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		setIdNovedad(params.id);
	}, [params.id]);

	const handleClickCard = (res) => {
		navigate(`../novedades/${res.id}`,{ replace: true }); //navigate("../success", { replace: true });
		setDatosSeleccionados(res);
	};

	const getAll = (data) => {
		let resultados = data2;
		let result = [];

		if (resultados.data) {
			result = resultados.data.map((res, i) => {
				if (i === 0) {
					return (
						<div className="card-image-row"  key={i}>
							<CardImageRow 
								title={res.attributes.titulo}
								image={
									res.imagen ? res.attributes.imagen.url : novedadesPrimary
								}
								description={
									res.attributes.descripcion.substring(0, 500) + '...'
								}
								date={res.attributes.fecha}
								button={
									<Buttons
										line
										text="Leer más"
										onClick={() => handleClickCard(res)}
									/>
								}
								iconDate={
									<i className="fa fa-calendar pr-2" aria-hidden="true"></i>
								}
							/>
						</div>
					);
				}
				if (idNovedad == 0) {
					if (!isMobile && window.innerWidth > 992) {
						let datosCardImg = {
							titulo: res.attributes.titulo,
							img: (
								<img
									src={res.imagen ? res.attributes.imagen : latestNewsImg3}
									alt="imagen-descripcion"
									className="img"
								/>
							),
							sub: res.attributes.descripcion.substring(0, 100) + '...',

							date: res.attributes.fecha,
							button: (
								<Buttons
									line
									text="Leer más"
									onClick={() => handleClickCard(res)}
								/>
							)
						};

						return (
							<div className="card-info col-lg-3 col-md-6 col-sm-6 p-2 d-flex" key={i}>
								<CardImg datosCardImg={datosCardImg} />
							</div>
						);
					} else {
						return (
							<SwiperSlide>
								<CardImage
									Titulo={res.titulo}
									Descripcion={
										<ReactMarkdown
											remarkPlugins={[remarkMath]}
											rehypePlugins={[rehypeKatex]}
											children={res.descripcion}
										/>
									}
									Fecha={res.fecha}
									TextoBoton={'Leer Más'}
									id={res.id}
									image={res.imagen ? res.imagen.url : latestNewsImg1}
									onClick={() => handleClickCard(res)}
								/>
							</SwiperSlide>
						);
					}
				} else if (idNovedad !== 0) {
					result = resultados.data.filter((dato) => {
						if (dato.id === params.id) {
							setDatosSeleccionados(dato);
						}
					});
				}
				return result;
			});
		}

		const dataInput = [
			{ label: 'Brasil', subLabel: 'Jair Messias Bolsonaro' },
			{ label: 'México', subLabel: 'Andrés Manuel López Obrador' },
			{ label: 'Argentina', subLabel: 'Alberto Ángel Fernández' },
			{ label: 'Colombia', subLabel: 'Iván Duque Márquez' },
			{ label: 'Chile', subLabel: 'Gabriel Boric Font' },
			{ label: 'Perú', subLabel: 'José Pedro Castillo Terrones' },
			{
				label: 'Ecuador',
				subLabel: 'Guillermo Alberto Santiago Lasso Mendoza'
			},
			{
				label: 'República Dominicana',
				subLabel: 'Luis Rodolfo Abinader Corona'
			},
			{ label: 'Guatemala', subLabel: 'Alejandro Eduardo Giammattei Falla' },
			{ label: 'Costa Rica', subLabel: 'Carlos Andrés Alvarado Quesada' }
		];

		let container = (
			<div className="container">
				<div className=" latestNewsRow__item--title mx-5">
					<h2 className="latestNewsItem__title">Novedades</h2>
					<p className="latestNewsItem__description">
						Enterate de las últimas noticias de Rentas Corrientes y accedé a
						toda la información.
					</p>
				</div>
				<div className="input-search my-5 d-flex">
					<div className="col-6 p-1">
						<InputSearch
						dataInput={dataInput}
						placeholder={'Buscar...'}
						buttonSearch={true}
						className="col-2"
						button={
							<Buttons
								primary
								addIcon
								onClick={() => {
									alert('button');
								}}
								icon={<SearchIcon />}
							/>
						}
					/>
					</div>
				</div>

				<div className="container-lg m-0 p-0 row ">{result}</div>
				<div className="card-image-row">
					<CardImageRow
						title="Información sobre Puestos de Atención al Contribuyente"
						image={novedadesSecondary}
						description="En virtud del Decreto Provincial N° 200 – 2022, la Dirección General de Rentas informa que los Contribuyentes que obtengan el certificado de emergencia o desastre agropecuario."
						date="2015-04-23"
						button={
							<Buttons
							
								onClick={() => {
									navigate('/puestoAtencionControl');
								}}
								primary
								text="Leer Mas"
							/>
						}
						iconDate={
							<i className="fa fa-calendar pr-2" aria-hidden="true"></i>
						}
					/>
				</div>
			</div>
		);

		return container;
	};

	const getCard = (res) => {
		let found = data2.data
			? data2.data.find((element) => {
					if (element.id == params.id) {
						return element.attributes;
					}
			  })
			: null;

		return (
			<div className="col-12 m-0 p-0">
				{found ? (
					<ItemCardNovedades
						Titulo={found.attributes.titulo}
						Descripcion={
							<ReactMarkdown
								remarkPlugins={[remarkMath]}
								rehypePlugins={[rehypeKatex]}
								children={found.attributes.descripcion}
							/>
						}
						Fecha={found.attributes.fecha}
						TextoBoton="Leer123123 Más"
						image={latestNewsImg3}
					/>
				) : (
					<div className="spinner-grow text-dark" role="status">
						<span className="sr-only">Loading...</span>
					</div>
				)}
			</div>
		);
	};

	return (
		<Style className="">
			<div className="containerCards">

				<div key={idNovedad} className="  ">
					{params.id == 0 ? getAll(data2) : getCard()}
				</div>
			</div>
		</Style>
	);
}

const Style = styled.div`
	.containerCards {

	background-image: url('${backgroundAnimated}');
	background-repeat: no-repeat;
	background-size: cover;
	}
	.latestNewsRow__item--title {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.input-search {
		justify-content: center;
		display: flex;
		margin: 15px 5px;
	}

	.card-image-row {
		margin: 4% 0%;
		min-height: 243px;
		display: flex;
		justify-content: space-between;
	}
`;
