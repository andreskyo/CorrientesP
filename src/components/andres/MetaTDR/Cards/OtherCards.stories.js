import React from 'react';
import { OtherCards } from "./OtherCards";
import Usuario from './img/Usuario.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import TodayIcon from '@mui/icons-material/Today';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CodeIcon from '@mui/icons-material/Code';
import LayersIcon from '@mui/icons-material/Layers';
import LightIcon from '@mui/icons-material/Light';
import { Buttons } from '../Buttons/Butttons/Buttons'



export default {
  title: 'MetaTDR/Cards/OtherCards',
  component: OtherCards,
  argTypes: {

  },
};

const datosPerfil = {
  icon: Usuario,
  title: "Neel Deshmukh",
  descripcion: "Fullstack Developer @Sky",
  labelTags: "PRO",
  buttonMessage : <Buttons
  className="buttonMessage"
  onClick={() => (alert("message"))}
  primary
  outlined
  text="Message" />,
  buttonConnect:<Buttons
  className="buttonConnect"
  onClick={() => (alert("message"))}
  primary
  text="Connect" />,

icons: [
    { icon: <GitHubIcon />,
      onClick:()=>{alert("icon")} },
    { icon: <LinkedInIcon />,
    onClick:()=>{alert("icon")} },
    { icon: <InstagramIcon />,
    onClick:()=>{alert("icon")} },
    { icon: <FacebookIcon />,
    onClick:()=>{alert("icon")} },
    { icon: <LinkedInIcon />,
    onClick:()=>{alert("icon")} },
    { icon: <SportsBasketballIcon />,
    onClick:()=>{alert("icon")} } ,]
}

const datosVencimiento = {
  titulo: "17 de octubre",
  descripcion: "Fullstack Developer @Sky",
  icon: <TodayIcon />
}


const datosPerfiles = [{
  icon: Usuario,
  titulo: "Neel Deshmukhaa",
  descripcion: "Frontend Dev @Stripe",
  button: <Buttons
  className="button"
  primary
  outlined
  onClick={() => (alert("message"))}
  text="Message" />
  
},
{
  icon: Usuario,
  titulo: "Neel Deshmukh ",
  descripcion: "Frontend Dev @Stripe",
  button: <Buttons
  className="button"
  primary
  outlined
  onClick={() => (alert("message"))}
  text="Message" />
},
{
  icon: Usuario,
  titulo: "Neel Deshmukh ",
  descripcion: "Frontend Dev @Stripe",
  button: <Buttons
  className="button"
  primary
  outlined
  onClick={() => (alert("message"))}
  text="Message" />
},
{
  icon: Usuario,
  titulo: "Neel Deshmukh",
  descripcion: "Frontend Dev @Stripe",
  button: <Buttons
  className="button"
  primary
  outlined
  onClick={() => (alert("message"))}
  text="Message" />
}
]

const datosAcceso = {
  icon: <NotificationsNoneIcon/>, 
  titulo: "Drishti Ratan",
  descripcion: "Fashion Designer @Clover ",
  button: <Buttons
  className="button"
  primary
  outlined
  onClick={() => (alert("Primary"))}
  text="Primary" />

}

const datosCalendar = {
 onChange:(a)=>{console.log(a)}

}

const datosDailyStack = [
  {
    icon:<p><LayersIcon className="icon"/>Design Team Standup</p>,
    descripcion:"08:00 - 11:00",
    tagColor:"primary",
    titulo: "9:00",


  },
  {
    icon:<p><CodeIcon className="icon"/>Design Team Standup</p>,
    descripcion:"08:00 - 11:00",
    tagColor:"warning",
    titulo: "9:00",


  },
  {
    icon:<p><LightIcon className="icon"/>Design Team Standup</p>,
    descripcion:"08:00 - 11:00",
    tagColor:"error",
    titulo: "9:00",
   }
]

const Template = (args) => <OtherCards {...args} />;
export const OtherCard = Template.bind({});




OtherCard.args = {
  cardPerfil: true,
  cardVencimiento: false,
  cardCalendar: false,
  cardPerfiles: false,
  cardAcceso:false,
  cardDailyStacks:false,
  datosPerfil: datosPerfil,
  datosVencimiento: datosVencimiento,
  datosPerfiles: datosPerfiles,
  datosAcceso: datosAcceso,
  datosDailyStack: datosDailyStack,
  datosCalendar:datosCalendar
  
};