import React from 'react';
import CardText from "./CardText"

export default {
  title: 'Componentes/Cards/CardText',
  component: CardText ,
};


const Template = (args) => <CardText {...args} />;

export const Primary = Template.bind({});

//export const withAnImage = () => <img src={smile}  />;
Primary.args = {
  title1:"Agente",
  title2:"CUIT",
  title3:"Establecimiento",
  subtitle1:"Juan Perez",
  subtitle2:"20-25564654-8",
  subtitle3:"000",
  textLink1:"PresentarDDJJ",
  textLink2:"Cambiar",
  
};