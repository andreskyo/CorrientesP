import Title from 'components/library-temp/MetaTDR/TitulosHome/Title';
import React from 'react'
import { useLocation,useNavigate } from 'react-router';



export default function CertificadosConstancias() {
    
     let navigate = useNavigate();
    let location = useLocation();

 
 
  const handleNavigate = (e) => {

    e.preventDefault();
    //console.log(location)
    navigate(`${location.pathname + '/' + e.target.id}`)
  
  }
    
    
    
    return (
    <div>
  
      <Title title="Certificados  y constancias"  > </Title> 
        <button id="constanciaInscripcion"  onClick={(e) => {handleNavigate(e)}}> Constancia de inscripcion</button>
        <button  id="constanciaLibreDeuda"  onClick={(e) => {handleNavigate(e)}}> Libre deuda</button>
        <button id="certificadosEmitidos"  onClick={(e) => {handleNavigate(e)}}>Certificados Emitidos</button>
    
    </div>
  


    
  )
}
