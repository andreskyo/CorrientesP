import React from 'react';

import { MenuInput } from "./MenuInput";
import IconA from './Img/IconA.png'
import IconB from './Img/IconB.png'
import IconC from './Img/IconC.png'
import IconD from './Img/IconD.png'
import IconE from './Img/IconE.png'
import IconF from './Img/IconF.png'
import IconG from './Img/IconG.png'
import IconH from './Img/IconH.png'
import mail from './Img/mail.png'
import NotificacionC from './Img/NotificacionC.png'
import NotificacionCorreo from './Img/NotificacionCorreo.png'
import Button from '@mui/material/Button';



export default {
  title: 'DropDown/MenuInput/MenuInput',
  component:MenuInput,

  argTypes: {

  },
};


let datosCards = [


 
];


const Template = (args) => <MenuInput {...args} />




export const MeenuInput = Template.bind({});


MeenuInput.args = {
  MenuNotificacion:false,
  datosCards: datosCards,
  notificacion:<p className="text-center" style={{ 'font-family': 'Nunito', 'font-weight': '600' }}>No hay notificaciónes</p>,
  subNotificacion:<p className="text-center" style={{ 'font-family': 'Nunito', 'font-weight': '400',textAlign:'center' }}>Regresa más tarde, no hay alertas por el momento</p>,
  buttonCorreo:<a href="#" className="text-center" style={{color:"#124596",fontFamily: 'Nunito',fontWeight: "bold",fontSize: 18}}>Ver todas las notificaciones</a>,
  imagen:<img src={NotificacionC} alt="..." className="rounded mx-auto d-block imagen m-4"/>,
  imagenCorreo:<img src={NotificacionCorreo} alt="..." className="rounded mx-auto d-block imagen m-4"/>,
  verNotificaciones: <a href="#" className="text-center" style={{color:"#124596",fontFamily: 'Nunito',fontWeight: "bold",fontSize: 18}}>Ver todas las notificaciones</a>,
  verNotificacionesFiscal:  <p href="#"  style={{color:"#6D7580;",fontFamily: 'Nunito',fontWeight: "400",fontSize: 18,marginTop:"17px"}}>Domicilio fiscal electronico</p>,
  iconImgMail:<img className="mt-3 " style={{height:"30px" , paddingRight:"5px"}}src={mail}></img>,
  onChange:(a)=>{console.log(a)},

};