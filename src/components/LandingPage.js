import React, { memo, useState, useEffect } from 'react';
import axios from 'axios';
import FooterDesktop from './FooterDesktop';
import CardStatsIcon from './library-temp/CardStatsIcon';
import CardImage from './library-temp/MetaTDR/Cards/CardImage';
import latestNewsImg1 from '../assets/img/latestNewsImg1.webp';
import latestNewsImg3 from '../assets/img/latestNewsImg3.webp';
import Carousel2 from './library-temp/MetaTDR/Slider/Carousel2';
import CardAcceso from './library-temp/MetaTDR/Cards/CardAcceso';
import Swiper2 from './library-temp/Swiper';
import 'moment/locale/es';
import { SwiperSlide } from 'swiper/react/swiper-react';
import { isMobile } from 'react-device-detect';
import useGet from '../utils/useGet';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import OtherCards from './andres/MetaTDR/Cards/OtherCards';

function LandingPage() {
	let navigate = useNavigate();
	const [datosAccesoRapido, setdatosAccesoRapido] = useGet({
		url: '/api/tipos-acceso?filters[codigo][$eq]=CAROUSEL&populate=%2A'
	});
	const [cantVencimientos] = useState(3);
	const [data2] = useGet({ url: '/api/novedades' });
	const [dataVencimientos] = useGet({
		url: `https://api.test.dgrcorrientes.gov.ar/public-be/vencimientos/getUltimosVencimientos?cantidad=${cantVencimientos}`
	});

	//estados de accesos
	const [acceso, setAcceso] = useState();
	const [datosNovedaes, setDatosNovedades] = useState();
	const [datosAyuda, setDatosAyuda] = useState();

	useEffect(() => {
		axios({
			method: 'get',
			url:
				'https://api.test.dgrcorrientes.gov.ar/strapibe/api/tipos-acceso?populate=*',
			responseType: 'stream'
		}).then(function(response) {
			setAcceso(response.data.data[0].attributes);
			setDatosAyuda(response.data.data[1].attributes);
			setDatosNovedades(response.data.data[2].attributes);
		});
	}, []);

	const accesos = () => {
		let resultados = acceso;
		let result = resultados
			? acceso.accesos.data.map((res) => {
					if (!isMobile && window.innerWidth > 992) {
						let datosAcceso = {
							//avatar:<svg dangerouslySetInnerHTML={{ __html: res.attributes.icono }} />,
							name: res.attributes.titulo,
							job: res.attributes.descripcion,
							button: 'Ingresar',

							onClick: () => navigate('/gestiones')
						};

						return (
							<div className="col-4">
								<OtherCards cardAcceso datosAcceso={datosAcceso} />
							</div>
						);

						/*<CardAcceso
									title={res.attributes.titulo}
									icon={<svg dangerouslySetInnerHTML={{ __html: res.attributes.icono }} />}
									subtitle={res.attributes.descripcion}
									boton={"Ingresar"}>
								</CardAcceso>*/
					} else {
						return (
							<SwiperSlide>
								<CardAcceso
									title={res.attributes.titulo}
									subtitle={res.attributes.descripcion}
									icon={
										<svg
											dangerouslySetInnerHTML={{ __html: res.attributes.icono }}
										/>
									}
									boton={'Ingresar'}
								/>
							</SwiperSlide>
						);
					}
			  })
			: null;

		return (
			<section className="easyAccess">
				<div className="container">
					<div className="row easyAccessRow  splideEasyAccess">
						<div className="col-12 easyAccessRow__head">
							<p className="easyAccessHead__subtitle">Consultas</p>
							<h2 className="easyAccessHead__title">Accesos rápidos</h2>
							<p className="easyAccessHead__description">
								En esta sección encontrarás los 3 accesos más buscados por el
								contribuyente en Rentas Corrientes.
							</p>
						</div>

						<div className="col-12 easyAccessRow__wrapper ">
							<div className="row easyAccessWrapper ">
								{isMobile || window.innerWidth < 992 ? (
									<Swiper2 listado={result} />
								) : (
									result
								)}
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	};

	const novedades = () => {
		let resultados = data2;
		let result = [];

		if (resultados.data) {
			result = data2.data.map((res, i) => {
				if (i < 3) {
					if (!isMobile && window.innerWidth > 992) {
						let fecha = moment(res.attributes.fecha).format('ll');
						return (
							<CardImage
								Titulo={res.attributes.titulo}
								Descripcion={
									<ReactMarkdown
										remarkPlugins={[remarkMath]}
										rehypePlugins={[rehypeKatex]}
										children={
											res.attributes.descripcion.substring(0, 150) + '...'
										}
									/>
								}
								Fecha={fecha}
								TextoBoton="Leer Más"
								image={
									res.attributes.imagen
										? res.attributes.imagen.url
										: latestNewsImg3
								}
								id={res.attributes.id}
								onClick={() => handleClick(res)}
							/>
						);
					} else {
						return (
							<SwiperSlide>
								<CardImage
									Titulo={res.attributes.titulo}
									Descripcion={
										<ReactMarkdown
											remarkPlugins={[remarkMath]}
											rehypePlugins={[rehypeKatex]}
											children={
												res.attributes.descripcion.substring(0, 150) + '...'
											}
										/>
									}
									Fecha={res.fecha}
									TextoBoton={'Leer Más'}
									id={res.id}
									image={
										res.attributes.imagen
											? res.attributes.imagen.url
											: latestNewsImg1
									}
									onClick={() => handleClick(res)}
								/>
							</SwiperSlide>
						);
					}
				}
			});
		}

		return (
			<section className="latestNews">
				<div className="container">
					<div className="row latestNewsRow  splideLatestNews">
						<div className="col-12 col-lg-3 latestNewsRow__item--title">
							<p className="latestNewsItem__subtitle ">Últimas noticias</p>
							<h2 className="latestNewsItem__title">Novedades</h2>
							<p className="latestNewsItem__description">
								Enterate de las últimas noticias de Rentas Corrientes y accedé a
								toda la información.
							</p>

							<button
								onClick={() => handleClick(0)}
								className="btn btn-primary latestNewsItem__btn"
							>
								Ver todo
							</button>
						</div>

						<div className="col-12 col-lg latestNewsRow__wrapper splide__track">
							<div className="row latestNewsWrapper splide__list">
								{isMobile || window.innerWidth < 992 ? (
									<Swiper2 listado={result} />
								) : (
									result
								)}
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	};

	const handleClick = (dato) => {
		let res = {
			id: dato
		};
		if (res.id === 0) {
			return navigate(`/novedades/${0}`, { stateRes: res });
		} else {
			return navigate(`/novedades/${dato.id}`);
		}
	};
	const ayuda = () => {
		let resultados = datosAyuda;
		let result = resultados
			? datosAyuda.accesos.data.map((res) => {
					if (!isMobile && window.innerWidth > 992) {
						return (
							<CardStatsIcon
								title={res.attributes.titulo}
								subtitle={res.attributes.descripcion}
								textLink={res.attributes.textoEnlace}
								icon={
									<svg
										dangerouslySetInnerHTML={{ __html: res.attributes.icono }}
									/>
								}
							/>
						);
					} else {
						return (
							<SwiperSlide>
								<div className="col-12 px-2 d-flex ">
									<CardStatsIcon
										title={res.attributes.titulo}
										subtitle={
											<ReactMarkdown
												remarkPlugins={[remarkMath]}
												rehypePlugins={[rehypeKatex]}
												children={
													res.attributes.descripcion.substring(0, 150) + '...'
												}
											/>
										}
										textLink={res.attributes.textoEnlace}
										icon={
											<svg
												width="100%"
												height="100%"
												dangerouslySetInnerHTML={{
													__html: res.attributes.icono
												}}
											/>
										}
									/>
								</div>
							</SwiperSlide>
						);
					}
			  })
			: null;

		return (
			<section className="needHelp">
				<div className="container">
					<div className="row needHelpRow  splideNeedHelp">
						<div className="col-12 needHelpRow__head">
							<p className="needHelpHead__subtitle">Atención al ciudadano</p>
							<h2 className="needHelpHead__title">¿Necesitás ayuda?</h2>
							<p className="needHelpHead__description">
								Despejá tus dudas en nuestro centro de ayuda, encontrarás
								diversos canales de comunicación.
							</p>
						</div>
						<div className="col-12 needHelpRow__wrapper splide__track">
							<div className="row needHelpRowWrapper splide__list">
								{isMobile || window.innerWidth < 992 ? (
									<Swiper2 listado={result} />
								) : (
									result
								)}
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	};

	const vencimientos = (data) => {
		let resultados = dataVencimientos;
		let result = resultados
			? resultados.map((res) => {
					if (!isMobile && window.innerWidth > 992) {
						return (
							<div className="col-12 col-lg nextExpirationWrapper__item splide__slide">
								<div className="nextExpirationItem">
									<div className="col-auto nextExpirationItem__icon">
										<span>
											<i className="fa fa-svg fa-calendar-o fa-fw"></i>
										</span>
									</div>
									<h2 className="nextExpirationItem__date">
										{res.fechaVencimiento}
									</h2>
									{res.detalle.map((result) => {
										return (
											<div className="nextExpirationItem__description col">
												<div>{result.tipoObligacion}</div>
												<div>{result.impuesteDesc} </div>
												<div>{result.conceptoDesc}</div>
												<div> Cuota: {result.cuota}</div>

												{result.terminacion == null ? null : (
													<div> Terminacion {result.terminacion}</div>
												)}
											</div>
										);
									})}
								</div>
							</div>
						);
					} else {
						return (
							<SwiperSlide>
								<div className="col-12 col-lg nextExpirationWrapper__item splide__slide">
									<div className="nextExpirationItem">
										<div className="col-auto nextExpirationItem__icon">
											<span>
												<i className="fa fa-svg fa-calendar-o fa-fw"></i>
											</span>
										</div>

										<h2 className="nextExpirationItem__date">
											{res.fechaVencimiento}
										</h2>
										{res.detalle.map((result) => {
											return (
												<div className="nextExpirationItem__description col">
													<div>{result.tipoObligacion}</div>
													<div>{result.impuesteDesc} </div>
													<div>{result.conceptoDesc}</div>
													<div> Cuota: {result.cuota}</div>

													{result.terminacion == null ? null : (
														<div> Terminacion {result.terminacion}</div>
													)}
												</div>
											);
										})}
									</div>
								</div>
							</SwiperSlide>
						);
					}
			  })
			: null;

		return (
			<section className="nextExpiration">
				<div className="container">
					<div className="row nextExpirationRow  splideNextExpiration">
						<div className="col-12 col-lg-3 nextExpirationRow__head">
							<p className="nextExpirationHead__subtitle">Vencimientos</p>
							<h2 className="nextExpirationHead__title">
								Próximos vencimientos
							</h2>
							<p className="nextExpirationHead__description">
								Enterate de los últimos vencimientos del mes en curso.
							</p>

							<button
								className="btn btn-primary nextExpirationHead__btn"
								onClick={() => handleVencimientos()}
							>
								Ver todo
							</button>
						</div>

						<div className="col-12 col-lg nextExpirationRow__wrapper splide__track">
							<div className="row nextExpirationWrapper splide__list">
								{isMobile || window.innerWidth < 992 ? (
									<Swiper2 listado={result} />
								) : (
									result
								)}
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	};

	const handleVencimientos = () => {
		navigate('/vencimientos', { state: { dataVencimientos } });
	};

	const Group = () => {
		return (
			<section className="bannerEasyAccess">
				<div className="container">
					<div className="row bannerEasyAccessRow">
						{datosAccesoRapido.data
							? datosAccesoRapido.data[0].attributes.accesos.data.map(
									(result) => {
										return (
											<div className="col-auto bannerEasyAccessRow__item">
												<div className="row bannerEasyAccessItem">
													<div className="col-auto bannerEasyAccessItem__icon fa-bold">
														<i className="fa fa-svg fa-credit fa-fw "></i>
													</div>
													<div className="col-auto bannerEasyAccessItem__text">
														<p>{result.attributes.titulo}</p>
														<a href="#">{result.attributes.textoEnlace}</a>
													</div>
												</div>
											</div>
										);
									}
							  )
							: null}
					</div>
				</div>
			</section>
		);
	};

	return (
		<body className="body_home">
			<Carousel2/>
			<Group />
			{accesos()}

			{novedades(data2)}

			{ayuda()}

			{vencimientos()}

			<FooterDesktop />
		</body>
	);
}

export default memo(LandingPage);
