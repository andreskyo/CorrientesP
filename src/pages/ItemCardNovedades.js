import React from 'react';
import styled from 'styled-components';

import latestNewsImg3 from '../assets/img/latestNewsImg3.jpg';
import CardRelated from 'components/andres/MetaTDR/Cards/CardRelated/CardRelated';
import { useNavigate,useLocation} from 'react-router';
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
			<div className="background-title"></div>

			<div className="container-content">
				<div className="image d-flex">
					<div className="title">{props.Titulo}</div>
					<img src={props.image} alt="novedades" />
					<div className="container-description">
						<div className="text-description col-8">{props.Descripcion}</div>

						<div className="info-navigate col-4">
							<div className="p-3 title-article flex-column">
								<p className="px-2">Recomendado para vos</p>
								<CardRelated  datos={datos}  onClick={() =>navigate('/puestoAtencionControl')} />

								
							</div>
							<div className="p-3 title-article flex-column">
								<p className="px-2">Más leídos</p>
								<CardRelated  datos={datos}/>

								
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
	width: 100%;
	height: auto;

	.background-title {
		background: #124596;
		height: 300px;
	}
	.container-content {
		
		display: flex;
		justify-content: center;

		height: 100%;
	}

	.title {
		font-family: 'Nunito';
		font-style: normal;
		font-weight: 600;
		font-size: 36px;
		line-height: 38px;
		/* or 106% */

		display: flex;
		align-items: center;
		text-align: center;
		font-feature-settings: 'ss07' on;

		/* Neutral / White */

		color: #ffffff;
	}

	.title-article>p{
		font-family: 'Nunito';
		font-style: normal;
		font-weight: 600;
		font-size: 18px;
		line-height: 25px;
		/* identical to box height */

		display: flex;
		align-items: center;

		/* Neutral / Black */

color: #09101D;
	}

	.image {
		width: 50%;
		height: 50%;
		position: relative;
		top: -15rem;
		flex-direction: column;
	}
	img {
		margin-top: 20px;
		height: 100%;
		width: 100%;
		max-width: 1064px;
		max-height: 423px;
		object-fit: cover;
	}

	.container-description {
		display: flex;
		flex-direction: row;
	}

	.info-navigate {
		display: flex;
		flex-direction: column;
	}

	.text-description {
		font-family: 'Merriweather';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 28px;
		/* or 175% */
		padding: 2.5rem 0;

		/* Neutral / Black */

		color: #09101d;
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
