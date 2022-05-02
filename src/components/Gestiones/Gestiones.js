
import React,{useState} from 'react'
import { useNavigate,useLocation } from 'react-router-dom';

import CardStatsIcon from '../library-temp/CardStatsIcon';
import styled from 'styled-components';
import Title from 'components/library-temp/MetaTDR/TitulosHome/Title';
import TituloConNotificacion from 'components/library-temp/MetaTDR/TitulosHome/TituloConNotificacion';




function Gestiones() {
  const [Monto, setMonto] = useState('')
  const [Comprobante,setComprobante] = useState('')
  const [Datos,setDatos] = useState({});
  const [FormValido,setFormValido] = useState(false);

  let navigate  = useNavigate();
  let location =  useLocation();
  let icon = <div>
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.70492 10.59L3.12492 6L7.70492 1.41L6.29492 0L0.294922 6L6.29492 12L7.70492 10.59Z" fill="black"/>
                </svg>
              </div>


  const handleClick = (ruta) => {
    
    if (ruta !== undefined && ruta !== "/" && ruta !=="") {
      console.log("entra ruta " + ruta)
      navigate(`${location.pathname + '/' + ruta} `)
    }
  }









  return (
    <Styled>
       
        
        <div className="container">
          <div className="d-flex col-12 m-5">
                    <TituloConNotificacion
                    titulo="Home" icon={icon} subtitulo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" 
                    onClick={()=>navigate("/")}
                    />
                  </div>
          <div className=" m-5 ">

            <Title title="Trámites" subtitle="Lorem Ipsum et dolor Lorem Ipsum et dolor"/>
            <div className="row d-flex col-12 justify-content-between">
              <div className=" col-3">
                <CardStatsIcon className="" title={"Calendario de vencimientos"}  onClick={()=>handleClick('')}  />
              </div>
              <div className=" col-3">
                <CardStatsIcon className="" title={"Formularios"}   onClick={()=>handleClick('')}/>
              </div>
              <div className=" col-3">
                <CardStatsIcon className="" title={"Nomenclador de actividades"}   onClick={()=>handleClick('nomenclador')}/>
              </div>
              <div className=" col-3">
                <CardStatsIcon className="" title={"Aplicativos"}   onClick={()=>handleClick('')}/>
              </div>
           
            </div>
       
        
        </div>

          
         <div className=" m-5">

            <Title title="Consultas" subtitle="Lorem Ipsum et dolor Lorem Ipsum et dolor"/>
            <div className="row d-flex col-12 justify-content-between">
              <div className=" col-3">
                <CardStatsIcon className="" title={"Calculo de intereses"}   onClick={()=>handleClick('consultas/calculoInteres')}/>
              </div>
              <div className=" col-3">
                <CardStatsIcon className="" title={"Consulta Expedientes"}  onClick={()=>handleClick('consultas/consultaExpedientes')}/>
              </div>
              <div className=" col-3">
                <CardStatsIcon className="" title={"Cotización Dolar"} onClick={()=>handleClick('consultas/cotizacion')}/>
              </div>
           
            </div>
        
        </div>

        <div className=" m-5">

            <Title title="Certificados y constancias" subtitle="Lorem Ipsum et dolor Lorem Ipsum et dolor"/>
            <div className="row d-flex col-12 justify-content-between">
              <div className=" col-3">
                <CardStatsIcon className="" title={"Constancia de Inscripción"} link="Mas informacion" onClick={()=>handleClick('constancias/constanciaInscripcion')} />
              </div>
              <div className=" col-3">
                <CardStatsIcon className="" title={"Consulta de certificados emitidos"}   onClick={()=>handleClick('constancias/certificadosEmitidos')}/>
              </div>
              <div className=" col-3">
                <CardStatsIcon className="" title={"Certificado de libre deuda"}   onClick={()=>handleClick('constancias/constanciaLibreDeuda')}/>
              </div>
           
            </div>
        
        </div>
      </div>
     
        
        
    </Styled>
  )
}

export default Gestiones;

const Styled = styled.div`


`
