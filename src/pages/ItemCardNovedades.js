import React from 'react';
import styled from 'styled-components';

import latestNewsImg3 from '../assets/img/latestNewsImg3.jpg';
import CardRelated from 'components/andres/MetaTDR/Cards/CardRelated/CardRelated';
import { useNavigate, useLocation } from 'react-router';
const ItemCardNovedades = (props) => {

	let navigate = useNavigate();
	let location = useLocation();
	const handleClick = () => {
		if (props.onClick) {
			props.onClick();
		}
	};

	let datos = {
		titulo: props.Titulo,
		img: (
			<img
				src={props.image ? props.image : latestNewsImg3}
				alt="imagen-descripcion"
				className="img"
			/>
		)
	};

	return (
		<StyledContainer className="">


			<div className="container-content">

				<div className="image">
					<div className="title">{props.Titulo}</div>
					<img src={props.image} alt="novedades" className="img" />

					<div className="container-description">
						<div className="text-description">{props.Descripcion}{props.Descripcion}</div>
						

						<div className="container-cards">
							<div className="cards">
								<p className="tituloCard">Recomendado para vos</p>
								<CardRelated  
								datos={datos}  
								textStart={true}
								onClick={() =>navigate('/puestoAtencionControl')} />
							</div>
							<div className="cards">
								<p className="tituloCard">Más leídos</p>
								<CardRelated 
								 textStart={true}
								 onClick={() =>navigate('/puestoAtencionControl')}
								 datos={datos}/>
                            </div>
							
						</div>

					</div>

				</div>
			</div>


		</StyledContainer>
	);
};

ItemCardNovedades.propTypes = {};

const StyledContainer = styled.div`
   width:100%;
   
    .container-content {
		    background-color: white;
            border-top: 270px solid #124596;
		    
			.title {
		     font-family: 'Nunito';
		     font-style: normal;
		     font-weight: 600;
		     font-size: 30px;
		     color: #ffffff;
			 padding-bottom:20px;
			 text-align:center ;
			 @media (max-width: 430px) {
				text-align:start ;
				padding:0px;
		    }
	}	
		.image{
		    position:relative;
            width:100%;
			bottom:180px;
			text-align:center ;
			@media (max-width: 991px) {
				bottom:250px;
		    }
			
		img {
		    height: 100%;
		    width: 100%;
		    max-width: 900px;
		    max-height: 300px;
		    object-fit:cover;
		}
      }
	}
	.container-description{
		display:flex;
		max-width:900px;
		margin:auto;
		.text-description{
			text-align:start;
			width:80%;
            padding-right:5px;
	   @media (max-width: 600px) {
				width:40%;
		}
		
		}
	.container-cards{
		padding:30px 0px ;
         .tituloCard{
			font-family: 'Nunito';
		    font-style: normal;
		    font-weight: 600;
		    font-size: 18px;
		    padding:10px 0px 10px 0px;
			text-align:start ;
			margin:0px;
		    color: #09101D;
		 }
		 .cards{
			padding-top:50px;
		 }
	 }	
	}


	
`;

export default ItemCardNovedades;

/*  Mostrar item
		{props.Titulo}
		----------------------------------------------------------------
		{props.Descripcion}

		{props.Fecha}
		{props.TextoBoton? <button className="btn btn-outline-primary latestNewsItem__btn" onClick={()=>alert("")} >{props.TextoBoton}</button>:null}  
		{props.image}    
		*/
