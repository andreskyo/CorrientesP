import React from 'react';
import Vencimientos  from './Vencimientos'

export default {
    title: 'Componentes/Cards/Vencimientos',
    component: Vencimientos,
  };
const Template=(args) => <Vencimientos {...args}/>



export const Primary = Template.bind({});
Primary.args = {
    dateText:"17 de octubre",
    info:"Inmobiliario Urbano Edificado: Cuota 5",
    icon:<i className="far fa-calendar"></i>
 
}