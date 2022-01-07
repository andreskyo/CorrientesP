import React from 'react';
import Title  from './Title'

export default {
    title: 'Componentes/TitulosHome/Title',
    component: Title,
  };
const Template=(args) => <Title {...args}/>



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
export const WithTextLink = Template.bind({});
WithTextLink.args = {
    topTitle:"Ultimas noticias",
    title:"Novedades",
    subtitle:"Enterate de las últimas noticias de Rentas Corrientes y accedé a toda la información.",
    textLink:"Ver todo"
    
 
}

