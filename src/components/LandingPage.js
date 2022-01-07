import React, { memo, useState , useEffect} from 'react';
import FooterDesktop from "./FooterDesktop"
import { Button as Button2   , Vencimientos  } from 'tdr-fe-library';
import styled from 'styled-components'
import CardStatsIcon from './library-temp/CardStatsIcon';
import CardImage from './library-temp/MetaTDR/Cards/CardImage';
import latestNewsImg1 from "../assets/img/latestNewsImg1.webp"
import latestNewsImg2 from "../assets/img/latestNewsImg2.webp"
import latestNewsImg3 from "../assets/img/latestNewsImg3.webp"
import Carousel2 from "./library-temp/MetaTDR/Slider/Carousel2"
import Navigation from "../components/NavBar/Navigation";
import Title from "./library-temp/Title";
import CardAcceso from "./library-temp/MetaTDR/Cards/CardAcceso";
import TitleFullWidth from "./library-temp/MetaTDR/TitulosHome/TitleFullWidth"
import Swiper2 from "./library-temp/Swiper";
import TopHeader from './library-temp/MetaTDR/Headers/TopHeader'
import FooterMobile from "./library-temp/MetaTDR/Footers/FooterMobile"
import { SwiperSlide,Swiper } from "swiper/react/swiper-react";
import {isMobile} from 'react-device-detect';
import useGet from "../utils/useGet"
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import Swiperarrow from './library-temp/SwiperArrow';



function LandingPage() {
	
	const [datosAccesoRapido, setdatosAccesoRapido] = useState([]);
	
	const [data, setData] = useGet({url:"/tipos-accesos"});
	const [data2, setData2] = useGet({url:"/novedades"});
	const [dataCarousel, setCarousel] = useGet({url:"/carousels"})

	
	useEffect(() => {
		//getDataAccesosRapidos(data);	
		//getAyuda(data)
		//getVencimientos(data)
	},[data])

	useEffect(() => {
		
	},[data2])

	


	

	
	

	

	




	



	 	


	const accesos = (data) =>{
		let resultados = data[0]
		
		
		let result = resultados? resultados.accesos.map((res) =>
				{
					if (!isMobile && window.innerWidth > 992){
						return <CardAcceso
						title={res.titulo}
						icon={<svg dangerouslySetInnerHTML={{ __html: res.icono }} />}
						subtitle={res.descripcion}
						boton={res.textoEnlace}
						/>
					}else{
						return <SwiperSlide>
						<CardAcceso
							title={res.titulo}
							subtitle={res.descripcion}
							icon={<svg dangerouslySetInnerHTML={{ __html: res.icono }} />}
							boton={res.textoEnlace}/>
					
						</SwiperSlide>
					}
				}):null
			
		return (
		<section className="easyAccess">
            <div className="container">
                <div className="row easyAccessRow  splideEasyAccess">
                    <div className="col-12 easyAccessRow__head">
                        <p className="easyAccessHead__subtitle">Consultas</p>
                        <h2 className="easyAccessHead__title">Accesos rápidos</h2>
                        <p className="easyAccessHead__description">En esta sección encontrarás los 3 accesos más buscados por el
                            contribuyente en Rentas Corrientes.</p>
                    </div>

                    <div className="col-12 easyAccessRow__wrapper ">
                        <div className="row easyAccessWrapper ">
						{isMobile || window.innerWidth < 992 ?<Swiper2 listado={result}/> : result}	
                          
                        </div>
                    </div>

                </div>
            </div>
        </section>
		)
	} 


	
	const novedades = (data) => {
		let resultados = data
		let result=[]; 
		resultados.forEach((res,i) =>{	
			if(i<3){
			if (!isMobile && window.innerWidth > 992){
					result.push(
						<CardImage
							Titulo={res.titulo}
							Descripcion={<ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} children={res.descripcion.substring(0,150) + "..."} />}
							Fecha={res.fecha} 
							TextoBoton="Leer Más"
							image={res.imagen? res.imagen.url:latestNewsImg3}   />
					)}else{
						result.push(
							<SwiperSlide>
					
									<CardImage 
										Titulo={res.titulo}
										Descripcion= { <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} children={res.descripcion.substring(0,150) + "..."} />}
										Fecha={res.fecha}
										TextoBoton={"Leer Más"}
										image={res.imagen? res.imagen.url:latestNewsImg1} />		  
									
								</SwiperSlide>
						)
					}
				}
			})
			
			return(
				<section className="latestNews"  >
				<div className="container">
					<div className="row latestNewsRow  splideLatestNews">
						
						<div className="col-12 col-lg-3 latestNewsRow__item--title">
							<p className="latestNewsItem__subtitle">Últimas noticias</p>
							<h2 className="latestNewsItem__title">Novedades</h2>
							<p className="latestNewsItem__description">Enterate de las últimas noticias de Rentas Corrientes y accedé a
								toda la información.</p>
							<button className="btn btn-primary latestNewsItem__btn">Ver todo</button>
						</div>
			
						<div className="col-12 col-lg latestNewsRow__wrapper splide__track">
							<div className="row latestNewsWrapper splide__list">
							{isMobile || window.innerWidth < 992 ?<Swiper2 listado={result} />: result}	
							</div>
						</div>
			
					</div>
				</div>
			</section>
			)
	}

	/*let getNovedades =(datos)=>{
		console.log("DATA NOVEDADES: " ,datos);
		let resultado ;
		
			resultado = datos? datos.map((res)=>{
			let descripcion = res.descripcion.substring(0, 150) + "..."
				return <SwiperSlide>
					
					<CardImage 
						Titulo={res.titulo}
						Descripcion= { <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} children={descripcion} />}
						Fecha={res.fecha}
						TextoBoton={"Leer Más"}
						image={res.imagen? res.imagen.url:latestNewsImg1}/>		  
					
				</SwiperSlide>
				}):null;
				setNovedades(resultado)
	}*/
	

	const ayuda = (data) => {
		let resultados = data[1]
		let result = resultados? resultados.accesos.map((res)=>
			{
				if(!isMobile && window.innerWidth > 992){
					return  <CardStatsIcon title={res.titulo}
					subtitle={res.descripcion}
					textLink={res.textoEnlace}
					icon={<svg dangerouslySetInnerHTML={{ __html: res.icono }} />}/>
			}else{
				return <SwiperSlide>
					<div className="col-12 px-2 d-flex ">
						<CardStatsIcon
						title={res.titulo}
						subtitle={<ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} children={res.descripcion.substring(0,150) + "..."}/>}
						textLink={res.textoEnlace}
						icon={<svg width="100%" height="100%" dangerouslySetInnerHTML={{ __html: res.icono }} />}
						/>
					</div>	
				</SwiperSlide>
			}}
				
			):null
		
		return <section className="needHelp" >
		<div className="container">
			<div className="row needHelpRow  splideNeedHelp">
				<div className="col-12 needHelpRow__head">
					<p className="needHelpHead__subtitle">Atención al ciudadano</p>
					<h2 className="needHelpHead__title">¿Necesitás ayuda?</h2>
					<p className="needHelpHead__description">Despejá tus dudas en nuestro centro de ayuda, encontrarás diversos
						canales de comunicación.</p>
				</div>
				<div className="col-12 needHelpRow__wrapper splide__track">
					<div className="row needHelpRowWrapper splide__list" >
					{isMobile || window.innerWidth < 992 ?<Swiper2 listado={result}  /> :result}
						
						
					</div>
				</div>
			</div>
		</div>
	</section>
	}

	/*let getAyuda =(data)=>{
		console.log("DATOS AYUDA " , data);
		let resultado;
		const datos = data[1]
		
			resultado = datos?datos.accesos.map((res)=>{
			let descripcion = res.descripcion.substring(0, 150) + "..."
				return <SwiperSlide>
				<div className="col-12 px-2 d-flex ">
					<CardStatsIcon
					 title={res.titulo}
					subtitle={<ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} children={descripcion} />}
					textLink={res.textoEnlace}
					icon={<svg width="100%" height="100%" dangerouslySetInnerHTML={{ __html: res.icono }} />}
					clases={" col-12"}
				/>
				</div>	
				</SwiperSlide>
				}):null
		
		setAyuda(resultado)
	}
	*/
	
	const vencimientos=(data) =>{
		
		let resultados = data[1]
		let result = resultados? resultados.accesos.map((res)=>
			{
				if(!isMobile && window.innerWidth > 992 ){
					return (
						<div className="col-12 col-lg nextExpirationWrapper__item splide__slide">
							<div className="nextExpirationItem">
								<div className="col-auto nextExpirationItem__icon">
									<span>
										<i className="fa fa-svg fa-calendar-o fa-fw"></i>
									</span>
								</div>
								<h2 className="nextExpirationItem__date">13 de Octubre</h2>
								<p className="nextExpirationItem__description">Inmobiliario Urbano Edif: Cuota 5</p>
							</div>
						</div>
					)
			}else{
				return <SwiperSlide>
					<div className="col-12 col-lg nextExpirationWrapper__item splide__slide">
							<div className="nextExpirationItem">
								<div className="col-auto nextExpirationItem__icon">
									<span>
										<i className="fa fa-svg fa-calendar-o fa-fw"></i>
									</span>
								</div>
								<h2 className="nextExpirationItem__date">13 de Octubre</h2>
								<p className="nextExpirationItem__description">Inmobiliario Urbano Edif: Cuota 5</p>
							</div>
						</div>
				</SwiperSlide>
			}}):null

	return(

	<section className="nextExpiration">
		<div className="container">
			<div className="row nextExpirationRow  splideNextExpiration" >
				<div className="col-12 col-lg-3 nextExpirationRow__head">
					<p className="nextExpirationHead__subtitle">Vencimientos</p>
					<h2 className="nextExpirationHead__title">Próximos vencimientos</h2>
					<p className="nextExpirationHead__description">Enterate de los últimos vencimientos del mes en curso.</p>
					<button className="btn btn-primary nextExpirationHead__btn">Ver todo</button>
				</div>

				<div className="col-12 col-lg nextExpirationRow__wrapper splide__track">
					
					<div className="row nextExpirationWrapper splide__list">
						{isMobile || window.innerWidth < 992 ?<Swiper2 listado={result}  /> :result}

					</div>
				</div>

			</div>
		</div>
	</section>
	)


	} 
	
/*	let getVencimientos =(data)=>{
		let resultado;
		const datos = data[1]
		
	
			resultado = datos?datos.accesos.map((res)=>{
				return <SwiperSlide>
					<div className="col-12 px-2 d-flex">
					<div className="box-vencimientos">
						
							<Vencimientos  dateText="17 de octubre" info="Inmobiliario Urbano Edificado: Cuota 5" icon={IconCalendar} />
						
					</div>
					</div>
				</SwiperSlide>
				}):null
		setVencimientos(resultado)
	}*/






	return (
		<body className="body_home">
			<TopHeader/>
			<Navigation />
			<Carousel2/>
			<Group/>
			{accesos(data)}
			
			{novedades(data2)}
				
			{ayuda(data)}
			
			{vencimientos(data)}
			
			<FooterDesktop/>
		</body>)
}

export default memo(LandingPage);


const Group = () =>{
	return (
		<section className="bannerEasyAccess">
		<div className="container">
			<div className="row bannerEasyAccessRow">
				<div className="col-auto bannerEasyAccessRow__item">
					<div className="row bannerEasyAccessItem">
						<div className="col-auto bannerEasyAccessItem__icon">
							<i className="fa fa-svg fa-credit fa-fw"></i>
						</div>
						<div className="col-auto bannerEasyAccessItem__text">
							<p>Medios de pago</p>
							<a href="#">Más información</a>
						</div>
					</div>
				</div>
				<div className="col-auto bannerEasyAccessRow__item">
					<div className="row bannerEasyAccessItem">
						<div className="col-auto bannerEasyAccessItem__icon">
							<i className="fa fa-svg fa-lock fa-fw"></i>
						</div>
						<div className="col-auto bannerEasyAccessItem__text">
							<p>Seguridad</p>
							<a href="#">Más información</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	)
	}


	

