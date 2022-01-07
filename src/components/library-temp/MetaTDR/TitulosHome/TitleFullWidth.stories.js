import React from 'react';
import TitleFullWidth  from './TitleFullWidth'

export default {
    title: 'Componentes/TitulosHome/TitleFullWidth',
    component: TitleFullWidth,
  };
const Template=(args) => <TitleFullWidth {...args}/>



export const Primary = Template.bind({});
Primary.args = {
    topTitle:"Ultimas noticias",
    title:"Novedades",
    subtitle:"Enterate de las últimas noticias de Rentas Corrientes y accedé a toda la información.",
    buttonText:"Ingresar",
}

export const Secondary = Template.bind({});
Secondary.args = {
    topTitle:"Ultimas noticias",
    title:"Novedades",
    subtitle:"Enterate de las últimas noticias de Rentas Corrientes y accedé a toda la información.",
    
 
}   