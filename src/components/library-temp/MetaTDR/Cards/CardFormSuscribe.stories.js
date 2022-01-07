import React from 'react';
import CardFormSuscribe from "./CardFormSuscribe"

export default {
  title: 'Componentes/Cards/CardFormSuscribe',
  component: CardFormSuscribe ,
 
  argTypes: {
   // backgroundColor: { control: 'color' },
   
  },
};


const Template = (args) => <CardFormSuscribe {...args} />;

export const Primary = Template.bind({});

//export const withAnImage = () => <img src={smile}  />;
Primary.args = {
  text1:"Headline label ",
  text2:"Paste your feeths...",
  input:"input"
  
};