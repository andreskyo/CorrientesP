import CardBorderCut from 'components/common/CardBorderCut';
import CustomMap from 'components/Map/CustomMap';
import {React,useState,useEffect} from 'react';

import { useNavigate,useLocation } from 'react-router-dom';
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
import  Breadcrumbs  from '../components/andres/MetaTDR/BreadCrumbs/BreadCrumbs';




const StyledContainerMap = styled.div`

background: #ffff;
height: 600px;
box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.12);
border-radius: 16px;
flex: none;
order: 1;
flex-grow: 0;
&.scale-in-center {
	-webkit-animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
&.scale-out-center {
	-webkit-animation: scale-out-center 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
	        animation: scale-out-center 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}
&.pepe{
  border: 1px solid green!important;


@-webkit-keyframes scale-out-center {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 1;
  }
}
@keyframes scale-out-center {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 1;
  }
}




  @-webkit-keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
}
@keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
}
}
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

&.scale-out-center {
	-webkit-animation: scale-out-center 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
	        animation: scale-out-center 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}
&.pepe{
  //border: 1px solid green!important;


@-webkit-keyframes scale-out-center {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 1;
  }
}
@keyframes scale-out-center {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 1;
  }
}}

	
`;

const StyledCabecera = styled.div`



&.scale-out-center {
	-webkit-animation: scale-out-center 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
	        animation: scale-out-center 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}

&.slide-out-bottom {
	-webkit-animation: slide-out-bottom 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
	        animation: slide-out-bottom 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}

&.fade-out {
	-webkit-animation: fade-out 1s ease-out both;
	        animation: fade-out 1s ease-out both;
}

 @-webkit-keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

 @-webkit-keyframes slide-out-bottom {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(1000px);
            transform: translateY(1000px);
    opacity: 0;
  }
}
@keyframes slide-out-bottom {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(450px);
            transform: translateY(450px);
    opacity: 0;
  }
}


  //border: 1px solid green!important;


@-webkit-keyframes scale-out-center {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 1;
  }
}
@keyframes scale-out-center {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 1;
  }
}

	
`;

const StyledTtleHorarios = styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 150%;
color: #8B5CF6;
`;

const StyledLink = styled.a`
font-family: 'Roboto';
//font-weight: bold;
font-size: 16px;
line-height: 150%;
color: #0077E6;
text-decoration: none;
padding: 0;
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
#email {
  color: #2972e5!important;
}


`;

const StyledfakeCards = styled.div`
box-sizing: border-box;

//height: 100%;
min-height: 100%;
//background: #FFFFFF;
//border: 1px solid #E9E9E9;

`;



const StyledContainerScreen = styled.div`




height: 85%!important;

&.scale-out-center {
	-webkit-animation: scale-out-center 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
	        animation: scale-out-center 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}

  //border: 1px solid green!important;


@-webkit-keyframes scale-out-center {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 1;
  }
}
@keyframes scale-out-center {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 1;
  }
}

`
const StyledAnimatedBg = styled.div`


background-image: url('${backgroundAnimated}');
	background-repeat: no-repeat;
	background-size: cover;
  animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);
  height: 85%!important;
  background-color: #e5e5e517;



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
  const [ClosingMap, setClosingMap] = useState(false);
  
	const [DatosPresenciales, setDatosPresenciales] = useState();
  
	const [DatosNoPresenciales, setDatosNoPresenciales] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  
  //const baseURL = window.config.baseURL;
	

	useEffect(() => {

//@TODO hacer custom hooks de todo esto.

		axios({
			method: 'get',
			url:
				'https://api.test.dgrcorrientes.gov.ar/strapibe/api/puestos-atencion/?populate=*',
			responseType: 'stream'
		}).then(function(response) {
			setDelegaciones(response.data.data);
            //console.log("pepe: " +JSON.stringify(response));
			
		});


    axios({
			method: 'get',
			url:
				'https://api.test.dgrcorrientes.gov.ar/strapibe/api/tipos-presencial/?populate=*',
			responseType: 'stream'
		}).then(function(response) {
			setDatosPresenciales(response.data.data[0].attributes.presencials);//array de 3 precenciales
            //console.log("pepe: " +JSON.stringify(response));
			
		});


    axios({
			method: 'get',
			url:
				'https://api.test.dgrcorrientes.gov.ar/strapibe/api/no-presencials/?populate=*',
			responseType: 'stream'
		}).then(function(response) {
			setDatosNoPresenciales(response.data.data);
            //console.log("pepe: " +JSON.stringify(response));
			
		});
    
	}, []);


    useEffect(() => {
        
        if(Delegaciones !== null || Delegaciones!== ""){
            formatData();
        }
    
    }, [Delegaciones])
    


let  datosTitulosHome = {
    titulo: "NOVEDADES",
    sub:"Puestos de Atención y Control",
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

const cerrarMapa = () =>{
setClosingMap(true)
  setTimeout(() => {
    setClosingMap(false)
    setDelegSeleccionada();
  }, 1000);
  
}

const RenderCabeceraMap = (deleg)=>{

    //aca armar logica de abierto cerrado etc
    let nombre;
    let estado;
    let cerrar;

    let result = <StyledCabecera className={ClosingMap?"fade-out row col-12 pl-0 mb-4":'row col-12 pl-0 mb-4'}>
        <StyledTitleMap className="text-center col-6 recep ">{DelegSeleccionada[0].datos && DelegSeleccionada[0].datos.nombre} - </StyledTitleMap>
        <StyledTitleMap className={DelegSeleccionada && DelegSeleccionada[0].Cerrado?" cerrado text-center col-4 ":"abierto text-center col-4 "}>{DelegSeleccionada && DelegSeleccionada[0].Cerrado?"Cerrado":"Abierto"}</StyledTitleMap>
        <StyledClose onClick={()=> cerrarMapa()} className={ClosingMap?"fade-out text-center col-2":"text-center col-2 "}>Cerrar <img src={VectorClose} alt="img" style={{"filter": "invert(46%) sepia(57%) saturate(5221%) hue-rotate(337deg) brightness(94%) contrast(99%)"}} /> </StyledClose>
    </StyledCabecera>

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


const renderAtencionPresencial = () =>{
  let result = "pepe";
if(DatosPresenciales && DatosPresenciales.data.length >=1 ){
  result = DatosPresenciales.data.map((card, i)=>{
    let {titulo, detalle, link} = card.attributes; 
    let filterValue;
    let colorCard;
    switch (i) {
      case 0:
        filterValue="invert(50%) sepia(93%) saturate(4544%) hue-rotate(238deg) brightness(100%) contrast(94%)";
        colorCard="#EDE9FE";
        break;
      case 1:
        filterValue="invert(47%) sepia(99%) saturate(1625%) hue-rotate(352deg) brightness(100%) contrast(96%)";
        colorCard="#FFEDD5";
      break;
      case 2:
        filterValue="invert(66%) sepia(38%) saturate(7486%) hue-rotate(152deg) brightness(100%) contrast(95%)";
        colorCard="#CFFAFE";
      break
    
      default:
        filterValue="invert(50%) sepia(93%) saturate(4544%) hue-rotate(238deg) brightness(100%) contrast(94%)";
        colorCard="#EDE9FE";
        break;
    }
    
    return (<StyledfakeCards className='col'> 
    <CardNovedades
      color={colorCard}
      className="card"
      onClick={(a)=>alert('hola')}
      img= {<img src={link} alt="img" style={{"filter": filterValue}}/>}
      body={<Body datos={{"titulo":titulo,
        "sub": detalle,
            }}/>
    }
    /> 
  </StyledfakeCards>)
  });
}



  return result;
}  

const RenderBodyCard = (titulo, detalle, link, redes_sociales) =>{

  let array_redes;
  let detalleaux = detalle.replaceAll('(o)', '&#0149');
  var text_replaced = detalleaux.replace(/_(.*?)_/g, '<div id="email">$1</div>');

  let DatosSub = <div style={{whiteSpace:"pre-wrap", fontSize:16}}>{HtmlParser(text_replaced)}</div>;

  if(redes_sociales && redes_sociales.data.length>=1){
    //console.log("armo redes")
    array_redes = redes_sociales.data.map(({attributes})=>{
      let{titulo,link , linksvg}=attributes;
      console.log("titulo: " + titulo);
      return <div className='row d-block pl-0 pr-0 mb-1'><img src={linksvg} alt={titulo} style={{width:40, height:20, paddingLeft:0, paddingRight:0}} /> <StyledLink href={link}> DGR Corrientes </StyledLink> </div>


    });
    //nuevos datos sub para redes sociales.
    DatosSub = <div style={{whiteSpace:"pre-wrap", fontSize:16}}>
        <div className='row pl-2 pr-2 mb-3'> {HtmlParser(detalle.replaceAll('(o)', '&#0149'))} </div>
        {array_redes}
      </div>

  }

  return <Body datos={{
    "titulo":titulo,
    "sub": DatosSub,
    }}
    />


}

const renderAtencionNoPresencial = () =>{
  let result = "pepe";
if(DatosNoPresenciales && DatosNoPresenciales.length >=1 ){
  result = DatosNoPresenciales.map((card, i)=>{
    let {titulo, detalle, link, redes_sociales} = card.attributes; 
    let filterValue;
    let colorCard;
    switch (i) {
      case 0:
        filterValue="invert(50%) sepia(93%) saturate(4544%) hue-rotate(238deg) brightness(100%) contrast(94%)";
        colorCard="#EDE9FE";
        break;
      case 1:
        filterValue="invert(47%) sepia(99%) saturate(1625%) hue-rotate(352deg) brightness(100%) contrast(96%)";
        colorCard="#FFEDD5";
      break;
      case 2:
        filterValue="invert(66%) sepia(38%) saturate(7486%) hue-rotate(152deg) brightness(100%) contrast(95%)";
        colorCard="#CFFAFE";
      break
    
      default:
        filterValue="invert(50%) sepia(93%) saturate(4544%) hue-rotate(238deg) brightness(100%) contrast(94%)";
        colorCard="#EDE9FE";
        break;
    }
   
    return (<StyledfakeCards className='col'> 
    <CardNovedades
      color={colorCard}
      className="card"
      onClick={(a)=>alert('hola')}
      img= {<img src={link} alt="img" style={{"filter": filterValue}}/>}
      body={RenderBodyCard(titulo, detalle, link, redes_sociales)}
    /> 
  </StyledfakeCards>)
  });
}



  return result;
}

const Navegar = (e,ruta) =>{
  e.preventDefault();
  //alert("navego");
  //alert("entra ruta " , `${location.pathname + '/' + ruta} `)
  if(ruta!=="NO"){
    navigate(ruta)
  }
 
  //navigate(`${ruta} `)
 //useNavigate("contenidos");
}

const datos= [{
  link: <a href="/" onClick={(e)=>Navegar(e,"/")}  >Home</a>
},
{
  link: <a href="/" onClick={(e)=>Navegar(e,"/novedades/0")} >Novedades</a>
},
{
  link: <a href="/" onClick={(e)=>Navegar(e,"NO")} >Puestos de Atencion y control</a>
},
]

 return(<StyledAnimatedBg><StyledContainerScreen className="container" >
  
 <Breadcrumbs datos={datos}  classes="pt-4"> </Breadcrumbs>
    <FullWidth   datosTitulosHome={datosTitulosHome} />
    {renderHeaderBuscar()}
    {DelegSeleccionada && DelegSeleccionada.length >=1?<div className={ClosingMap?'scale-out-center row col-12':'row col-12 '}>   
        
    
        <div className={ClosingMap?'scale-out-center col-10 offset-1':'col-10 offset-1 '}>
            {RenderCabeceraMap(DelegSeleccionada)}
            <StyledContainerMap className={ClosingMap?'scale-out-center row  text-center col-12 pl-0':'row  text-center col-12 pl-0 scale-in-center'} >
                <div className='col-7 pl-0'>
                    {renderMap(DelegSeleccionada)}
                </div>
                <StyledContainerInfo className='col-5 pr-4 pl-4 pt-5 pb-1 ml-0'>
                    {DatosDelegaciones && DatosDelegaciones.length>=1? <CardDetalles datos={DelegSeleccionada} />:"asd"/*renderDatosDelegacion()*/}
                      
                </StyledContainerInfo>  
            </StyledContainerMap>
        </div>  

    </div>
    :""
    }
    <div className='row col-12 text-center' style={{marginTop: "10%"}}>
        <StyledTtleHorarios className='col-12 text-center'> HORARIOS DE ATENCION</StyledTtleHorarios>
        <StyledTAtencion className='col-12 text-center mb-5'> Atencion Presencial</StyledTAtencion>

    </div>
    <StyledContainerBox className='row col-12 mt-5 '>
     {DatosPresenciales && DatosPresenciales.data.length>=1?renderAtencionPresencial():"nada"}

     
        
       {/*
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
       
       */} 
    </StyledContainerBox>

    <div className='row col-12 text-center mt-5 mb-5'>
        <StyledTAtencion className='col-12 text-center' style={{marginTop:"5%", marginBottom:"5%"}}> Atencion No Presencial</StyledTAtencion>

    </div>
    <StyledContainerBox className='row col-12  '>
    {DatosNoPresenciales && DatosNoPresenciales.length>=1?renderAtencionNoPresencial():"nada"}
     { /*  <StyledfakeCards className='col'>
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
        </StyledfakeCards>*/}
    </StyledContainerBox>
 </StyledContainerScreen></StyledAnimatedBg>)
}
