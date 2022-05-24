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
  avatar: Usuario,
  name: "Neel Deshmukh",
  job: "Fullstack Developer @Sky",
  labelTags: "PRO",
  onClickMessage:()=>{alert("message")},
  onClickConnect:()=>{alert("connect")},
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
  fecha: "17 de octubre",
  job: "Fullstack Developer @Sky",
  icon: <TodayIcon />
}


const datosPerfiles = [{
  icon: Usuario,
  name: "Neel Deshmukhaa",
  job: "Frontend Dev @Stripe",
  button: "Message",
  onClick:()=>{alert("Message")}
},
{
  icon: Usuario,
  name: "Neel Deshmukh ",
  job: "Frontend Dev @Stripe",
  button: "Message",
  onClick:()=>{alert("Message")}
},
{
  icon: Usuario,
  name: "Neel Deshmukh ",
  job: "Frontend Dev @Stripe",
  button: "Message",
  onClick:()=>{alert("Message")}
},
{
  icon: Usuario,
  name: "Neel Deshmukh",
  job: "Frontend Dev @Stripe",
  button: "Message",
  onClick:()=>{alert("Message")}
}
]

const datosAcceso = {
  avatar: <NotificationsNoneIcon fontSize="large" />,
  name: "Drishti Ratan",
  job: "Fashion Designer @Clover ",
  button: "PRIMARY",

}

const datosCalendar = {
 onChange:(a)=>{console.log(a)}

}

const datosDailyStack = [
  {
    iconTags:<p><LayersIcon className="icon"/>Design Team Standup</p>,
    horaTags:"08:00 - 11:00",
    tagColor:"primary",
    hora: "9:00",


  },
  {
    iconTags:<p><CodeIcon className="icon"/>Design Team Standup</p>,
    horaTags:"08:00 - 11:00",
    tagColor:"warning",
    hora: "9:00",


  },
  {
    iconTags:<p><LightIcon className="icon"/>Design Team Standup</p>,
    horaTags:"08:00 - 11:00",
    tagColor:"error",
    hora: "9:00",
   }
]

const Template = (args) => <OtherCards {...args} />;
export const OtherCard = Template.bind({});




OtherCard.args = {
  cardPerfil: false,
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