import React from 'react';
import { SwiperSlide,Swiper } from "swiper/react/swiper-react";
import SwiperCore, {
    Pagination,Navigation
  } from 'swiper';
  import styled from "styled-components"
  // install Swiper modules
  SwiperCore.use([Pagination,Navigation]);
const Swiperarrow = () => {
    return (
        <Styles className="pepe d-flex container justify-content-center d-flex">
            <Swiper  navigation={true} className="mySwiper">
				<SwiperSlide>
				<div className="col-12 row" >
							<div className=" title justify-content-center" >
							<i className="far fa-credit-card"></i>
							</div> 
							<div className="content flex-column ">
								<div className="title justify-content-center d-flex">
									Metodos de pagos
								</div>
								<div className="link justify-content-center d-flex">
									Más información
								</div>
							</div>	
				</div>
				</SwiperSlide>
				<SwiperSlide>
				<div className="col-12 row" >
							<div className=" title justify-content-center" >
							<i className="far fa-credit-card"></i>
							</div> 
							<div className="content flex-column ">
								<div className="title justify-content-center d-flex">
									Seguridad
								</div>
								<div className="link justify-content-center d-flex">
									Más información
								</div>
							</div>	
				</div>
				</SwiperSlide>
				
				
			</Swiper>
        </Styles>
    );
}

export default Swiperarrow;

const Styles = styled.div`
.title{
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 23px;
/* identical to box height, or 164% */

display: flex;
align-items: center;
text-align: center;
font-feature-settings: 'salt' on;

/* Neutral / Black */

color: #09101D;
}

`