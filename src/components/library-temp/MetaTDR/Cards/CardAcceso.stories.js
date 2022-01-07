import React from 'react';
import CardAcceso  from './CardAcceso'

export default {
    title: 'Componentes/Cards/CardAcceso',
    component: CardAcceso,
  };
const Template=(args) => <CardAcceso {...args}/>



export const Primary = Template.bind({});
Primary.args = {

 icon:<i className="far fa-file-alt"></i>,
 title:"Liquidacion de tasas",
 subtitle:"Servicios, Ley Convenio, Judiciales",
 buttonText:"Ingresar",
 color:"red"
}