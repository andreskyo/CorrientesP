import CardBorderCut from 'components/common/CardBorderCut';
import CustomMap from 'components/Map/CustomMap';
import {React,useState,useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser'; 

import FullWidth from '../components/andres/MetaTDR/Titles/js/TitulosHome/Desktop/FullWidth';
import CardDetalles from 'components/Map/CardDetalles';
import { forEach } from 'lodash';
import CardNovedades from 'components/andres/MetaTDR/Cards/CardNovedades/CardNovedades';
import Button from '../../src/components/andres/MetaTDR/Buttons/Butttons/Buttons';
import Body from '../../src/components/andres/MetaTDR/Cards/CardNovedades/jsx/body';
import InputModal from '../../src/components/andres/MetaTDR/InputModal/InputModal';
import img from '../../src/assets/images/i.svg';
import Vectoriconshop from '../../src/assets/images/icon1.png';
import Vectoriconshop2 from '../../src/assets/images/icon3.svg';
import Vectoriconshop3 from '../../src/assets/images/icon4.svg';
import Vectoriconshop4 from '../../src/assets/images/icon5.svg';
import Vectoriconshop5 from '../../src/assets/images/icon6.svg';
import Vectoriconshop6 from '../../src/assets/images/icon7.svg';
import VectorClose from '../../src/assets/images/Vectorclose.svg';
import backgroundAnimated from '../../src/assets/images/backgroundAnimate.svg';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import HtmlParser from 'react-html-parser';


const StyledCabeceraMap = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
width: 1062px;
height: 38px;

/* Inside auto layout */

flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
`;

const StyledContainerMap = styled.div`

background: #ffff;
height: 600px;
box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.12);
border-radius: 16px;
flex: none;
order: 1;
flex-grow: 0;
`;

const StyledContainerInfo = styled.div`

background: #fff;
padding: 40px 40px 40px 40px;
`;

const StyledTitleMap = styled.div`

&.abierto{
 color:#22C55E;
}
&.cerrado{
  
 color:#EF4444;
  
}
&.recep{
  justify-content: end;
}
	font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 125%;
    /* identical to box height, or 38px */
    display: flex;
    align-items: center;
    color: #124596;
    flex: none;
    order: 0;
    flex-grow: 1;
	
`;

const StyledClose = styled.div`
align-self: center;
:hover{
cursor: pointer;
}

display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
padding: 0px;
gap: 10px;
color:#EF4444;
width: 78px;
height: 24px;
font-weight: bold;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;

	
`;

const StyledTtleHorarios = styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 150%;
color: #8B5CF6;
`;

const StyledTAtencion = styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 125%;
text-align: center;
color: #27272A;
`;

const StyledContainerBox = styled.div`

display: flex;
justify-content: space-evenly;
font-family: "Roboto"!important;


`;

const StyledfakeCards = styled.div`
box-sizing: border-box;

height: 264px;
//background: #FFFFFF;
//border: 1px solid #E9E9E9;

`;




  
  const ContainerDatosDeg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1.625rem;
  `
  const TextReceptoria = styled.div`
    text-align: left;
    vertical-align: top;
    font-size: 18px;
    font-family: 'Roboto';
    line-height: 150%;
    color: #78716c;
  `
  const BloqueWhatsapp = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.5625rem;
  `
  const Img2 = styled.i`
    height: 24px;
    width: 24px;
    color: white;
    
  `
  const TextTelefono = styled.div`
    text-align: left;
    vertical-align: top;
    font-size: 16px;
    font-family: 'Roboto';
    line-height: 150%;
    color: #0077e6;
  `
  const TextHorario = styled.div`
    text-align: left;
    vertical-align: top;
    font-size: 18px;
    font-family: 'Roboto';
    line-height: 150%;
    color: #78716c;
  `
  const AlertMensaje = styled.div`
    border-radius: 0.25rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0.75rem;
    gap: 0.5rem;
    background-color: #0284c7;
  `
  const LeftIcon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0.25rem;
    gap: 0.625rem;
  `
  const img5 = styled.div`
    height: 16px;
    width: 16px;
    background-color: #ffffff;
  `
  const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-family: 'Roboto';
    gap: 0.25rem;
  `
  const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  `
  const Text6 = styled.div`
    text-align: left;
    vertical-align: top;
    font-size: 16px;
    font-family: 'Roboto';
    line-height: 150%;
    color: #fafaf9;
  `
  const Supportingtext = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  `
  const Text7 = styled.div`
    text-align: left;
    vertical-align: top;
    font-size: 14px;
    font-family: 'Roboto';
    line-height: 150%;
    color: #fafaf9;
  `
  const Buttons = styled.div`
    border-radius: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    gap: 0.625rem;
    background-color: #124596;
  `
  const Text8 = styled.div`
    text-align: left;
    vertical-align: top;
    font-size: 16px;
    font-family: 'Roboto';
    line-height: 150%;
    color: #ffffff;
  `



const StyledContainerScreen = styled.div`




height: 85%;

`
const StyledAnimatedBg = styled.div`


background-image: url('${backgroundAnimated}');
	background-repeat: no-repeat;
	background-size: cover;
  animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);



`


const StyledHeaderCard = styled.div`
font-family: 'Roboto';
margin-top: 7%;
    .above-fold {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 2.1875rem;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem;
}
.text-1 {
  text-align: left;
  vertical-align: top;
  font-size: 28px;
  font-family: 'Roboto';
  line-height: 100%;
  font-weight: bold;
  color: #27272a;
}
.text-2 {
  text-align: left;
  vertical-align: top;
  font-size: 18px;
  font-family: 'Roboto';
  line-height: 150%;
  color: #78716c;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.375rem;
}
.text-3 {
  text-align: left;
  vertical-align: middle;
  font-size: 24px;
  font-family: 'Roboto';
  line-height: 150%;
  color: #06b6d4;
}
.search {
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;
  background-color: #ffffff;
}
.icon-+-text {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.25rem;
}
.img-4 {
  height: 24px;
  width: 24px;
  background-color: #ffffff;
}
.text-5 {
  text-align: left;
  vertical-align: middle;
  font-size: 14px;
  font-family: Nunito;
  line-height: 24%;
  color: #a8a29e;
}
.text-6 {
  text-align: left;
  vertical-align: middle;
  font-size: 12px;
  font-family: 'Roboto';
  line-height: 150%;
  color: #0077e6;
}
`
  

export default function PuestoAtencion() {

	const [Delegaciones, setDelegaciones] = useState();
  const [DatosDelegaciones, setDatosDelegaciones] = useState();
  const [DelegSeleccionada, setDelegSeleccionada] = useState();
	

	useEffect(() => {
		axios({
			method: 'get',
			url:
				'https://api.test.dgrcorrientes.gov.ar/strapibe/api/puestos-atencion/?populate=*',
			responseType: 'stream'
		}).then(function(response) {
			setDelegaciones(response.data.data);
            //console.log("pepe: " +JSON.stringify(response));
			
		});
	}, []);


    useEffect(() => {
        
        if(Delegaciones !== null || Delegaciones!== ""){
            formatData();
        }
    
    }, [Delegaciones])
    


let  datosTitulosHome = {
    titulo: "Novedades",
    sub:"Puesto de atención y Control",
    descripcion: "Enterate de las últimas noticias de los puestos de atención Presencial y No Presencial de la Provincia de Corrientes."
}

const comprobarCerrado = (cerradoDesde, cerradoHasta, horarios)=>{

 let hoy = new Date();
 let desde = new Date(cerradoDesde);
 let hasta = new Date(cerradoHasta);
 let cerrado = false;

 //@TODO aca habria q recorrer primero hago con el 0.

 if(horarios.length >=1){
     console.log("tamaño horarios: " + horarios.length )
     //console.log("horarios desde : "+horarios[0].attributes.desde);
     //console.log("horarios desde hasta: "+horarios[0].attributes.hasta);
     cerrado= ComprobarFechas(horarios[0].attributes.desde, horarios[0].attributes.hasta );
     if(horarios.length >=2){
     horarios.forEach((horario, index) => {
         console.log("horario "+ index + " / " +horario);
     });
    }
 }



 if(hoy <= hasta && hoy >= desde){
        cerrado = true
 }
    //logica de horarios

    return cerrado; 
}

const formatData = () =>{
    //console.log("tengo datos: " + Delegaciones  )
    let delegacionesaux = [];
 let receptorias = [];
 let puestosControl = [];

 let resumen = Delegaciones && Delegaciones.map((datos)=>{
 //console.log("cada linea:  " + JSON.stringify(datos.attributes));
 let resumenDeleg;
 let {tipos_atencion, horarios, cerradoDesde, cerradoHasta, telefonos} = datos.attributes;
 if(tipos_atencion.data.id === 2){
   receptorias.push(datos);  
 }else if (tipos_atencion.data.id === 1){
  delegacionesaux.push(datos);
 }else if(tipos_atencion.data.id === 3){
    puestosControl.push(datos); 

 }

 let tipoAtencion = "Receptoria1";
if(tipos_atencion && tipos_atencion.data ){
    tipoAtencion = tipos_atencion.data.attributes.descripcion
}

 resumenDeleg = {
     "id":datos.id,
     "tipo":tipoAtencion,
     "datos":datos.attributes,
     "horarios":horarios.data,
     "telefonos":telefonos.data,
     "Cerrado":comprobarCerrado(cerradoDesde, cerradoHasta, horarios.data),
     "cerradoDesde": cerradoDesde,
     "cerradoHasta": cerradoHasta,
 }


 //console.log("deg: " + JSON.stringify(resumenDeleg));

//@TODO hacer un setatos para la card.
 return resumenDeleg

})



//console.log(" puestosControl : "+JSON.stringify(puestosControl));


setDatosDelegaciones(resumen);

}

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

const FormatFecha=(date)=>{
    let fechita = new Date(date);
    return (
      [
        fechita.getFullYear(),
        padTo2Digits(fechita.getMonth() + 1),
        padTo2Digits(fechita.getDate()),
      ].join('-') +
      ' ' +
      [
        padTo2Digits(fechita.getHours()),
        padTo2Digits(fechita.getMinutes()),
        padTo2Digits(fechita.getSeconds()),
      ].join(':')
    );
};

const ComprobarFechas = (hdesde, hhasta) =>{ 
    //comprueba si la receptoria esta cerrada segun parametro de horas

   /* @TODO  contemplar horas con minutos*/
    let d = new Date();
    d.setHours(0,0,0,0);//hoy hora 0
    let cerrado = true;
    
    let horaDesde = hdesde;
    let horaHasta = hhasta;
    
    let desde = parseInt(horaDesde);
    let hasta= parseInt(horaHasta);
    
    //d es hoy a las 00
    let FechahoraDesde = d.setHours( d.getHours() + desde );
    d.setHours(0,0,0,0);
    let FechahoraHasta =  d.setHours( d.getHours() + hasta );
    let ahora = new Date();
    //moment('26/05/1986 00:00', 'DD/MM/YYYY HH:mm').format("MM/DD/YYYY HH:mm");
    if(ahora >= FechahoraDesde && ahora <= FechahoraHasta){
        //esta abierto
        cerrado = false;
    }
    
    //console.log("fecha hora desde : " + FormatFecha(FechahoraDesde));
    //console.log("fecha hora hasta : " +FormatFecha(FechahoraHasta));
    //console.log("fecha hora ya : " +FormatFecha(new Date()));

    return cerrado;
    

}


const renderMap=(deg)=>{
 // alert(JSON.stringify(DelegSeleccionada));
  if(DelegSeleccionada){
   // alert("voy");
  let lotes = [{latitud:DelegSeleccionada[0].datos.latitud , longitud:DelegSeleccionada[0].datos.longitud,zona:"",nombre:""}];
    return <CustomMap lotes={lotes}/>
  }
}

const RenderCabeceraMap = (deleg)=>{

    //aca armar logica de abierto cerrado etc
    let nombre;
    let estado;
    let cerrar;

    let result = <div className='row col-12 pl-0 mb-4'>
        <StyledTitleMap className="text-center col-6 recep ">{DelegSeleccionada[0].datos && DelegSeleccionada[0].datos.nombre} - </StyledTitleMap>
        <StyledTitleMap className={DelegSeleccionada && DelegSeleccionada[0].Cerrado?" cerrado text-center col-4 ":"abierto text-center col-4 "}>{DelegSeleccionada && DelegSeleccionada[0].Cerrado?"Cerrado":"Abierto"}</StyledTitleMap>
        <StyledClose onClick={()=>{setDelegSeleccionada()}} className="text-center col-2 ">Cerrar <img src={VectorClose} alt="img" style={{"filter": "invert(46%) sepia(57%) saturate(5221%) hue-rotate(337deg) brightness(94%) contrast(99%)"}} /> </StyledClose>
    </div>

return result
}

const renderHeaderBuscar = () =>{

let DatosCombo= [];
if(DatosDelegaciones && DatosDelegaciones.length>=1){ 
DatosCombo = DatosDelegaciones.map((delegacion)=>{
      return { label: `${delegacion.datos.nombre}` ,value : `${delegacion.id}`}
  });
  
  }


        return (
            <StyledHeaderCard>
          <div className="above-fold col-12">
            <div className="content col-6">
              <p className="text-1">Buscá tu centro más cercano</p>
              <p className="text-2">La Atención al Público es integral, es decir, podrá dirigirse a cualquier box para consultas, presentaciones de Declaraciones Juradas, Impresión de cupones de sellados y Tasas Administrativas, etc.</p>
            </div>
            <div className="form col-6">
              <p className="text-3 mb-0">Seleccioná una localidad1</p>
              <div className="search col-12 pb-0 pt-0 pl-0">
                <div className="icon-+-text col-12 pl-0">
                  <InputModal
                  data={DatosCombo}
                  placeholder="Escribí el nombre de tu localidad"
                  type="text"
                  className= "input"
                  onClick={(a,b)=>{setDelegSeleccionada(DatosDelegaciones.filter((dato)=>{return dato.id==b }))}}
                  onChange={ (e) => { console.log(e) }}
                  />
               
                </div>
              </div>
            </div>
          </div>
          </StyledHeaderCard>
        )
      
 }

const renderDatosDelegacion = () => {
    return (
      <ContainerDatosDeg>
        <TextReceptoria>Receptoría
        25 de Mayo N° 436
        CP: 3450
  </TextReceptoria>
        <BloqueWhatsapp>
          <Img2 src="" />
          <TextTelefono>3795-575150</TextTelefono>
        </BloqueWhatsapp>
        <TextHorario>Horario de atención
  7:00 a 13:00hs. </TextHorario>
        <AlertMensaje>
          <LeftIcon>
           
            <span>
                <Img2 className="fa fa-svg fa-info-circle fa-fw"></Img2>
			</span>
          </LeftIcon>
          <TextWrapper>
            <Title>
              <Text6>Atención</Text6>
            </Title>
            <Supportingtext>
              <Text7>Este centro atenderá con turno previo, podrás reservar uino haciendo clic en el botón “Solicitar Turno”.</Text7>
            </Supportingtext>
          </TextWrapper>
        </AlertMensaje>
        <Buttons>
          <Text8>Solicitar turno</Text8>
        </Buttons>
      </ContainerDatosDeg>
    )
  }

 return(<StyledAnimatedBg><StyledContainerScreen className="container" >
 
    <FullWidth   datosTitulosHome={datosTitulosHome} />
    {renderHeaderBuscar()}
    {DelegSeleccionada && DelegSeleccionada.length >=1?<div className='row col-12'>   
        
    
        <div className='col-10 offset-1'>
            {RenderCabeceraMap(DelegSeleccionada)}
            <StyledContainerMap className='row  text-center col-12 pl-0 '>
                <div className='col-7 pl-0'>
                    {renderMap(DelegSeleccionada)}
                </div>
                <StyledContainerInfo className='col-5 pr-4 pl-4 pt-5 pb-1 ml-0'>
                    {DatosDelegaciones && DatosDelegaciones.length>=1? <CardDetalles datos={DelegSeleccionada} />:"asd"/*renderDatosDelegacion()*/}
                      
                </StyledContainerInfo>  
            </StyledContainerMap>
        </div>  

    </div>:""}
    <div className='row col-12 text-center' style={{marginTop: "10%"}}>
        <StyledTtleHorarios className='col-12 text-center'> HORARIOS DE ATENCION</StyledTtleHorarios>
        <StyledTAtencion className='col-12 text-center mb-5'> Atencion Presencial</StyledTAtencion>

    </div>
    <StyledContainerBox className='row col-12 mt-5 '>
     
        <StyledfakeCards className='col'> 
        <CardNovedades
          color="#EDE9FE"
          className="card"
          onClick={(a)=>alert('hola')}
          img= {<img src={Vectoriconshop} alt="img" style={{"filter": "invert(50%) sepia(93%) saturate(4544%) hue-rotate(238deg) brightness(100%) contrast(94%)"}}/>}
          body={<Body datos={{"titulo":"CentroIntegral de Atención al Contribuyente (CIAC)",
            "sub": "Atiende al público en la Av. Juan Pujol N° 2330 - Provincia de Corrientes de Lunes a Viernes de 07:00 a 14:00 Hs.",
                }}/>
        }
        /> 
      </StyledfakeCards>
        <StyledfakeCards className='col' >
          <CardNovedades
          color="#FFEDD5"
          className="card"
          img= {<img src={Vectoriconshop2} alt="img" style={{"filter": "invert(47%) sepia(99%) saturate(1625%) hue-rotate(352deg) brightness(100%) contrast(96%)"}} />}
          body={<Body datos={{"titulo":"Receptorías del Interior de la Provincia",
                "sub": "Atiende al público en la Av. Juan Pujol N° 2330 - Provincia de Corrientes de Lunes a Viernes de 07:00 a 14:00 Hs."                        }} 
          button={<Button line text="ver mas" onClick={(a)=>alert('ver mas')}/> }/>}
          />
        </StyledfakeCards>
        <StyledfakeCards className='col' >
        <CardNovedades
      className="card"
      color="#CFFAFE"
      onClick={(a)=>alert('hola')}
      img= {<img src={Vectoriconshop3} alt="img" style={{"filter": "invert(66%) sepia(38%) saturate(7486%) hue-rotate(152deg) brightness(100%) contrast(95%)"}}/>}
      body={<Body datos={{"titulo":"Delegación de Capital Federal",
        "sub": "El horario es de 10:00 a 15:00 Hs.",
            }}/>}
      ></CardNovedades>
        </StyledfakeCards>
    </StyledContainerBox>

    <div className='row col-12 text-center mt-5 mb-5'>
        <StyledTAtencion className='col-12 text-center' style={{marginTop:"5%", marginBottom:"5%"}}> Atencion No Presencial</StyledTAtencion>

    </div>
    <StyledContainerBox className='row col-12  '>
        <StyledfakeCards className='col'>
        <CardNovedades
        color="#EDE9FE"
      className="card"
      onClick={(a)=>alert('hola')}
      img= {<img src={Vectoriconshop4} alt="img" style={{"filter": "invert(50%) sepia(93%) saturate(4544%) hue-rotate(238deg) brightness(100%) contrast(94%)"}} />}
      body={<Body datos={{"titulo":"CentroIntegral de Atrnción al Contribuyente (CIAC)",
        "sub": "Atiende al público en la Av. Juan Pujol N° 2330 - Provincia de Corrientes de Lunes a Viernes de 07:00 a 14:00 Hs.",
                        }} 
    button={<Button line text="ver mas" onClick={(a)=>alert('ver mas')}/> }/>}
      ></CardNovedades>
        </StyledfakeCards>
        <StyledfakeCards className='col' ><CardNovedades
        color="#FFEDD5"
      className="card"
      onClick={(a)=>alert('hola')}
      img= {<img src={Vectoriconshop5} alt="img" style={{"filter": "invert(47%) sepia(99%) saturate(1625%) hue-rotate(352deg) brightness(100%) contrast(96%)"}}/>}
      body={<Body datos={{"titulo":"Receptorías del Interior de la Provincia",
        "sub": "Atiende al público en la Av. Juan Pujol N° 2330 - Provincia de Corrientes de Lunes a Viernes de 07:00 a 14:00 Hs.",
                        }} 
    button={<Button line text="ver mas" onClick={(a)=>alert('ver mas')}/> }/>}
      ></CardNovedades></StyledfakeCards>
        <StyledfakeCards className='col' >
        <CardNovedades
        color="#CFFAFE"
      className="card"
      onClick={(a)=>alert('hola')}
      img= {<img src={Vectoriconshop6} alt="img" style={{"filter": "invert(66%) sepia(38%) saturate(7486%) hue-rotate(152deg) brightness(100%) contrast(95%)"}} />}
      body={<ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
        children={"o\tPara consulta de trámites: Mesa de Ayuda: de Lunes a Viernes en horario corrido de 7:30 a 18:00 Hs.\no     Teléfonos:\t \n      o\tProvincia de Corrientes: 0800-555-7376\n      o\tResto del País: 0810-555-7376\no     Correo electrónico: \n        mesadeayuda@dgrcorrientes.gov.ar"
        }
      />}
      ></CardNovedades>
        </StyledfakeCards>
        <StyledfakeCards className='col' >
        <CardNovedades
        color="#CFFAFE"
      className="card"
      onClick={(a)=>alert('hola')}
      img= {<img src={Vectoriconshop6} alt="img" style={{"filter": "invert(66%) sepia(38%) saturate(7486%) hue-rotate(152deg) brightness(100%) contrast(95%)"}} />}
      body={<div style={{whiteSpace:"pre-line"}}>{HtmlParser(`o\tPara consulta de trámites: Mesa de Ayuda: de Lunes a Viernes en horario corrido de 7:30 a 18:00 Hs. <br> o     Teléfonos:\t <br>      o\tProvincia de Corrientes: 0800-555-7376<br> o\tResto del País: 0810-555-7376<br>o     Correo electrónico: <br>        mesadeayuda@dgrcorrientes.gov.ar`)}</div>}
      
      ></CardNovedades>
      <div style={{whiteSpace:"pre-wrap"}}>{"* \tPara consulta de trámites: Mesa de Ayuda: de Lunes a Viernes en horario corrido de 7:30 a 18:00 Hs.\no     Teléfonos:\t \n      o\tProvincia de Corrientes: 0800-555-7376\n      o\tResto del País: 0810-555-7376\no     Correo electrónico: \n        mesadeayuda@dgrcorrientes.gov.ar"} </div>
        </StyledfakeCards>
    </StyledContainerBox>
 </StyledContainerScreen></StyledAnimatedBg>)
}
