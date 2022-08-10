import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import styled from 'styled-components';

const ContainerDatosDeg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
 // gap: 1.625rem;
  
  #TextReceptoria{
  text-align: left;
  vertical-align: top;
  font-size: 18px;
  font-family: 'Roboto';
  line-height: 150%;
  color: #78716c
}

#containerNombre{
  display: flex;
    /* gap: 63px; */
    gap: 0.2rem;
    justify-content: flex-start;
    flex-direction: column;
}

  #BloqueWhatsapp { 
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5625rem;}

  #BloqueAlert{
    margin-top: 10%;
    margin-bottom: 10%;
    width: 100%;
  }

  #TextTelefono{
  text-align: left;
  vertical-align: top;
  font-size: 16px;
  font-family: 'Roboto';
  line-height: 150%;
  color: #0077e6;
}
#TextHorario{
  text-align: left;
  vertical-align: top;
  font-size: 18px;
  font-family: 'Roboto';
  line-height: 150%;
  color: #78716c;
}

#AlertMensaje{ 
  border-radius: 0.25rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0.75rem;
  gap: 0.5rem;
  background-color: #0284c7;
  
}

#LeftIcon{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0.25rem;
  gap: 0.625rem;
}

#img5{ 
  height: 16px;
  width: 16px;
  background-color: #ffffff;
}

#TextWrapper{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: 'Roboto';
  gap: 0.25rem;}

  #Title{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;}

#Text6{
  text-align: left;
  vertical-align: top;
  font-size: 16px;
  font-family: 'Roboto';
  line-height: 150%;
  color: #fafaf9;
}
#Supportingtext{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;}

#Text7 { 
  text-align: left;
  vertical-align: top;
  font-size: 14px;
  font-family: 'Roboto';
  line-height: 150%;
  color: #fafaf9;}

#Buttons{
  border-radius: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  gap: 0.625rem;
  background-color: #124596;}

#text8{
  text-align: left;
  vertical-align: top;
  font-size: 16px;
  font-family: 'Roboto';
  line-height: 150%;
  color: #ffffff;}



`



const Img2 = styled.i`
  height: 24px;
  width: 24px;
  color: white;
  
`

const Img3 = styled.i`
  height: 30px;
  width: 30px;
  color: #0284c7;
  font-size: 20px;
  
`

export default function CardDetalles(props) {
    const [Receptoria, setReceptoria] = useState("");
    const [Direccion, setDireccion] = useState("");
    const [cp, setCp] = useState("");
    const [Telefonos, setTelefonos] = useState([]);
    const [Horarios, setHorarios] = useState([]);
    const [Observaciones, setObservaciones] = useState("");
    const [DatosDeleg , setDatosDeleg] = useState(props.datos);
    

    useEffect(() => {
     renderDatos(props.datos);
     
    }, [props.datos]);

let renderTelefonos = (telefonos) =>{
  let result;
  if(telefonos && telefonos.length >1){
    let auxTels;
    auxTels = telefonos.map((tel)=>{
      return <div className='row' > 
              <span><Img3 className="fa fa-svg fa-info-circle fa-fw"></Img3></span>
              <div id="TextTelefono">{ tel.attributes.Telefono}</div>
            </div>
    });
    result = <Fragment >{auxTels} </Fragment>
  }else{
    //alert(JSON.stringify(telefonos))
      result =
        <Fragment > 
           <span><Img3 className="fa fa-svg fa-info-circle fa-fw"></Img3></span>
           <div id="TextTelefono" >{ telefonos.length===1 && telefonos[0].attributes? telefonos[0].attributes.Telefono:"-"}</div>
        </Fragment>
  }
  return result;

}    

let renderDatos = (datos)=>{
 console.log("datos::::"+ JSON.stringify(datos));
 let delegaciones = [];
 let receptorias = [];
 let puestosControl = [];
 let datosAVer = datos && datos[0];

let nombreCompleto=datosAVer.tipo+": "+datosAVer.datos.nombre;
 setReceptoria(datosAVer.tipo);
 setDireccion(datosAVer.datos.direccion);
 setCp(datosAVer.datos.codigoPostal);
 setTelefonos(datosAVer.telefonos);
 setHorarios(datosAVer.horarios);
 setObservaciones(datosAVer.datos.observacion);



/*datos && datos.map((datos)=>{
 //console.log("cada linea:  " + JSON.stringify(datos.attributes));
 let {tipos_atencion} = datos.attributes;
 if(tipos_atencion.data.id === 2){
   receptorias.push(datos);  
 }else if (tipos_atencion.data.id === 1){
    delegaciones.push(datos);
 }else if(tipos_atencion.data.id === 3){
    puestosControl.push(datos); 

 }

 


 return true

})*/

console.log(" Receptorias en card detaññe : "+JSON.stringify(datos && datos[0]));

}

const renderHorarios = (horarios)=>{

let result;

if(horarios && horarios.length >1){
  console.log("asdasd : "+ JSON.stringify(horarios));
  let auxTels;
  auxTels = horarios.map((horario)=>{
    return <div id="TextHorario col-12">{`* ${horario.attributes.nombre}` } </div>
          
  });
  result = <Fragment ><div className='row col-12'> Horarios de Atención:  {auxTels} </div> </Fragment>


}else if(horarios && horarios.length ===1){
  let auxhor = horarios[0].attributes.nombre;
  result =
  <Fragment > 
     <div id="TextHorario">{`Horario de atención: ${auxhor}` } </div>
  </Fragment>

}else{
  result = <div>cargando..</div>

}
return result;
  /*let result;
  if(horarios && horarios.length >1){
    let auxTels;
    auxTels = horarios.map((horario)=>{
      return <div className='row' > 
              <span><Img3 className="fa fa-svg fa-info-circle fa-fw"></Img3></span>
              <div id="TextTelefono">{ horario}</div>
            </div>
    });
    result = <Fragment >{auxTels} </Fragment>
  }else{
    //alert(JSON.stringify(telefonos))
    let auxhor = "-";
    if(horarios && horarios!=="" && horarios[0].length ===1 ){
      auxhor = horarios[0].attributes.nombre
    }
      result =
        <Fragment > 
           <div id="TextHorario">{`Horario de atención: ${auxhor}` }
              </div>
        </Fragment>
  }
  return result;*/

}

const renderAlert = () =>{
  let result;
  if(Observaciones && Observaciones!== null && Observaciones!==""){
    result =  <div id="AlertMensaje" className='col-12'>
    <div id="LeftIcon">
     
      <span>
          <Img2 className="fa fa-svg fa-info-circle fa-fw"></Img2>
      </span>
    </div>
    <div id="TextWrapper ">
      <div id="Title">
        <div id="Text6">Atención</div>
      </div>
      <div id="Supportingtext">
        <div id="Text7">{Observaciones}</div>
      </div>
    </div>
  </div>
  }else{
    result=<div> </div>
  }
  return result 
}

const renderDatosDelegacion = ()=>{
  let result =  <ContainerDatosDeg>
    <div id="containerNombre" className='mb-5'>
      <div id="TextReceptoria">{Receptoria}</div>
      <div id="TextReceptoria">{Direccion}</div>
      <div id="TextReceptoria">CP: {cp}</div>
    </div>
    <div id='BloqueWhatsapp'>
      {renderTelefonos(Telefonos)}
    </div>
    <div id="bloqueHorario">
      {renderHorarios(Horarios)}
    </div>
    <div id="BloqueAlert">
      {renderAlert()}
    </div>
  
 
  {/*<div id="Buttons">
    <div id="text8 ">Solicitar turno</div>
</div>*/}
 </ContainerDatosDeg>

 return result;
}

const renderDatosDelegacion1 = () => {
    return (
      <ContainerDatosDeg>
        <div id="TextReceptoria">Receptoría
        25 de Mayo N° 436
        CP: 3450
  </div>
        <div id='BloqueWhatsapp'>
        <span>
             <Img3 className="fa fa-svg fa-info-circle fa-fw"></Img3>
		</span>
          <div id="TextTelefono">3795-575150</div>
        </div>
        <div id="TextHorario">Horario de atención
  7:00 a 13:00hs. </div>
        <div id="AlertMensaje">
          <div id="LeftIcon">
           
            <span>
                <Img2 className="fa fa-svg fa-info-circle fa-fw"></Img2>
			</span>
          </div>
          <div id="TextWrapper">
            <div id="Title">
              <div id="Text6">Atención</div>
            </div>
            <div id="Supportingtext">
              <div id="Text7">Este centro atenderá con turno previo, podrás reservar uino haciendo clic en el botón “Solicitar Turno”.</div>
            </div>
          </div>
        </div>
        <div id="Buttons">
          <div id="text8 ">Solicitar turno</div>
        </div>
      </ContainerDatosDeg>
    )
  }


  












  return (
    <div>CardDetalles
        {renderDatosDelegacion()}
    </div>

  )




  

}
