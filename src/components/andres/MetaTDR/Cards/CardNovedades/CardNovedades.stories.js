import React from 'react';
import CardNovedades from '../CardNovedades/CardNovedades';
import img from '../img/imgCardP.png'
import Button from '../../Buttons/Butttons/Buttons';
import Body from '../CardNovedades/jsx/body'



export default {
  title: 'MetaTDR/Cards/CardNovedades',
  component: CardNovedades,

  argTypes: {

  },
};

const datos = {
    titulo: "Receptorías del Interior de la Provincia",
    sub: "Atiende al público en la Av. Juan Pujol N° 2330 - Provincia de Corrientes de Lunes a Viernes de 07:00 a 14:00 Hs.",
}

const Template = (args) => <CardNovedades {...args} />;

export const NovedadesCard= Template.bind({});


NovedadesCard.args = {
className:"card",
onClick:(a)=>alert('hola'),
img: <img src={img} alt="img"/>,
body:<Body datos={datos} button={<Button line text="ver mas" onClick={(a)=>alert('ver mas')}/> }/>
};