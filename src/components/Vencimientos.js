import React from 'react'
import TitleFullWidth from './library-temp/MetaTDR/TitulosHome/TitleFullWidth';
import styled from 'styled-components';
import CardStatsIcon from './library-temp/CardStatsIcon';

import useGet from "../utils/useGet"
import CardVencimientos from './common/CardsVencimientos/CardVencimientos';
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// Import Swiper styles




// import required modules
import { Pagination, Navigation } from "swiper";


export default function Vencimientos(props) {
    
    const [dataVencimientos] = useGet({url:`https://api.test.dgrcorrientes.gov.ar/public-be/vencimientos/getUltimosVencimientos?cantidad=${10}`});
    
    const servicios = ["Inmboliario rural","Sellos","MArcas y Señales","Premios Tragamonedas","Regimen Local","Agemtes de Recaudacion ","Convenio Multilateral"]
    
    

    
    
   
    const listadoVencimientos = () => {
        let result = dataVencimientos? dataVencimientos.map((res,i) =>{
               
                return(
                      <SwiperSlide>
                       <div className="card-content">
                        <CardVencimientos dateNumber={res.fechaVencimiento}  detalle={res.detalle} />
                
                    </div>
                      </SwiperSlide>
                   
                )   


        }) : null
        return result
    }
   
   

 

   
   
   
   
   
    console.log("data vencimientos list " , dataVencimientos)
    return (
        <Styles>
                
            
             <div className="container-fluid">
                <TitleFullWidth topTitle="Vencimientos" title="Vencimientos" subtitle="Vencimientos" textLink="Ver todos"  />
                
                <div className="servicios container">
                    
                    <div className="titulo-servicios"> 
                        Servicios
                    </div>
                     
                    <div className="container-servicios  ">
                        {servicios.map((servicio)=>{
                            return(
                                <div className="card-servicios">
                                    <CardStatsIcon className="" title={servicio} textLink="Mas informacion"/>
                                </div>
                            )

                        })}
                    </div>

                </div>
               
                <div className="container-vencimientos my-5">
                <div className="container p-5">
                    <div className="titulo-vencimientos">
                            Vencimientos
                        </div>
                    
                        <div className="d-flex row ">
                        {dataVencimientos?<>
                      <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        slidesPerGroup={3}
                        loop={false}
                        loopFillGroupWithBlank={true}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                      
                         {listadoVencimientos() }
                    </Swiper>
                   </>: null} 
                            
                    
                        </div>
                </div>
                   
                  

                </div>

             </div>
        </Styles>
    )
}

const Styles  = styled.div`

.titulo-servicios{

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 38px;
    display: flex;
    align-items: center;
    font-feature-settings: 'ss07' on;
    color: #09101D;

}

.card-servicios{
    background: #FFFFFF;
    padding: 15px;
    flex-direction:row;
    box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
    border-radius: 16px;
    margin:8px;

    
}

.container-servicios{
    display: flex;
    flex-wrap: wrap;
    flex-direction:row;


}

.titulo-vencimientos{
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 38px;
    display: flex;
    align-items: center;
    font-feature-settings: 'ss07' on;
    color: #09101D;

}

.container-vencimientos{
    background: #F4F6F9;
    width:100%;
}

.card-content{
    width:100%;
}


.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
 
  

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}



.swiper-button-next {
    
    background-image: url("https://cdns.iconmonstr.com/wp-content/assets/preview/2018/240/iconmonstr-arrow-right-thin.png");
    background-repeat: no-repeat;
    position: absolute;
    background-color:transparent;
    top: 50%;
    width: calc(var(--swiper-navigation-size)/ 44 * 27);
    height: var(--swiper-navigation-size);
    margin-top: calc(0px - (var(--swiper-navigation-size)/ 2));
    z-index: 10;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: contain;
    background-position: center;
    
}

.swiper-button-next:after{

    content: "";
}
.swiper-button-prev:after{

    content: "";
}


.swiper-button-prev {
    background-image: url("https://cdns.iconmonstr.com/wp-content/assets/preview/2018/240/iconmonstr-arrow-left-thin.png");
    background-repeat: no-repeat;
    position: absolute;
    background-color:transparent;
    top: 50%;
    width: calc(var(--swiper-navigation-size)/ 44 * 27);
    height: var(--swiper-navigation-size);
    margin-top: calc(0px - (var(--swiper-navigation-size)/ 2));
    z-index: 100;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: contain;
    background-position: center;
}



`
