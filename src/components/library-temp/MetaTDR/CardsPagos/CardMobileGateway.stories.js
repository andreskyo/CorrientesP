import React from 'react';
import CardMobileGateway from './CardMobileGateway'

export default {
    title: 'Componentes/CardsPagos/CardMobileGateway',
    component: CardMobileGateway,
  };

const Template = (args) =><CardMobileGateway {...args} />
export const Primary = Template.bind({});

Primary.args = {
    title:"Vas a realizar el pago de ",
    subtitle:"Ingresa la patente que deseas consultar",
    oldPrice:"6200",
    text:"1 cuotas a vencer",
    price:"800",
    discount:"Incluye el 30% por estar al dia"
    

}