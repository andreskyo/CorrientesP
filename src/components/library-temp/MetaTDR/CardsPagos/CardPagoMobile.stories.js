import React from 'react';
import CardPagoMobile from './CardPagoMobile'

export default {
    title: 'Componentes/CardsPagos/CardPagoMobile',
    component: CardPagoMobile,
  };
const Template=(args) => <CardPagoMobile {...args}/>

const logo = <i className="fas fa-university"></i>

export const Primary = Template.bind({});
Primary.args = {
  title:"Débito automático con CBU",
  subtitle1:"¡Ahorra $32200 extras!",
  subtitle2:"Todas las tarjetas y hasta 6 cuotas sin interés con Cordobesa o Visa Bancor ",
  logo:logo
}
