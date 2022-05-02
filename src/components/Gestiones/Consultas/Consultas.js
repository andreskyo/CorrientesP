import React from 'react'
import { useNavigate ,useLocation} from 'react-router-dom';
import {Buttons} from '../../library-temp/Button/Buttons';
import TituloConNotificacion from 'components/library-temp/MetaTDR/TitulosHome/TituloConNotificacion';


function Consultas() {

    let navigate = useNavigate();
    let location = useLocation();

 
 
  const handleNavigate = (ruta) => {

    //console.log(location)
    navigate(`${location.pathname + '/' + ruta}`)
  
  }


 

  return (
    <>
        <div className="m-5">
        <TituloConNotificacion titulo="Gestiones" />
        <Buttons  text="Cotizacion del dolar"  onClick={(e) => {handleNavigate('cotizacion')}}></Buttons>
        <Buttons text="Calculo de intereses"  onClick={(e) => {handleNavigate('calculoInteres')}}></Buttons>
        <Buttons text="Consulta de expedientes" onClick={(e) => {handleNavigate('consultaExpedientes')}} ></Buttons>
        </div> 
       
    </>
  )
}

export default Consultas;
