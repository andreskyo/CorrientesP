import React from 'react';
import CardStatsIcon from "./CardStatsIcon"

export default {
  title: 'Componentes/Cards/CardStatsIcon',
  component: CardStatsIcon ,
};


const Template = (args) => <CardStatsIcon {...args} />;

export const Primary = Template.bind({});

//export const withAnImage = () => <img src={smile}  />;
Primary.args = {
  title:"Centro de contacto",
  subtitle:"Conocé nuestros Centros de Atención al Ciudadano y Mesas de entradas SUAC.Más información",
  textLink:"Mas información",
  icon:<i className="far fa-comment-alt"></i>
  
};