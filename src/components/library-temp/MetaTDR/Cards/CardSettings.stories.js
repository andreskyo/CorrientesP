
import React from 'react';
import CardSettings from './CardSettings'

export default {
  title: 'Componentes/Cards/CardSettings',
  component: CardSettings ,
 
  argTypes: {
   // backgroundColor: { control: 'color' },
   
  },
};


const Template = (args) => <CardSettings {...args} />;

export const Primary = Template.bind({});

//export const withAnImage = () => <img src={smile}  />;
Primary.args = {
  text1:"Headline label ",
  text2:"Paste your feeths...",
  action1:"Act",
  action2:"Act",
  action3:"Act",
  
  
  
};