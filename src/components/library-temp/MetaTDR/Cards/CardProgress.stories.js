import React from 'react';
import CardProgress from "./CardProgress"

export default {
  title: 'Componentes/Cards/CardProgress',
  component: CardProgress ,
};


const Template = (args) => <CardProgress {...args} />;

export const Primary = Template.bind({});
const icon =   <div className="fab fa-google-drive"></div>
//export const withAnImage = () => <img src={smile}  />;
Primary.args = {
  icon
  
};