import React from 'react';
import CardPago from './CardPago'

export default {
    title: 'Componentes/CardsPagos/CardPago',
    component: CardPago,
  };
const Template=(args) => <CardPago {...args}/>

const icon = <i className="fas fa-info-circle" style={icon}></i>

export const Primary = Template.bind({});
Primary.args = {
  title:"OnlineOnlineOnlineOnlineOnlineOnlineOnlineOnlineOnlineOnlineOnlineOnlineOnlineOnlineOnlineOnlineOnlineOnlineOnlineOnlineOnline",
  price:"$12.55566.6",
  subtitle1:"Incluye 5% de descuento",
  subtitle2:"Incluye 5% de descuento",
  icon
}

