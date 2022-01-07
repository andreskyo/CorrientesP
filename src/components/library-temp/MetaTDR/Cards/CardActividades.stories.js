import React from 'react';
import CardActividades from "./CardActividades"

export default {
  title: 'Componentes/Cards/CardActividades',
  component: CardActividades ,
};


const Template = (args) => <CardActividades {...args} />;

export const Primary = Template.bind({});

//export const withAnImage = () => <img src={smile}  />;
Primary.args = {
  
  
};