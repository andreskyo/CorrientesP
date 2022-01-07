import React from 'react';
import smile from "../../stories/assets/emoji-smile.png";
import repo from "../../stories/assets/repo.svg"
import  CardStats from './CardStats';

export default {
  title: 'Componentes/Cards/CardStats',
  component: CardStats,
 
  argTypes: {
   // backgroundColor: { control: 'color' },
   icon: { type:'image/png'}
  },
};


const Template = (args) => <CardStats {...args} />;

export const Primary = Template.bind({});

//export const withAnImage = () => <img src={smile}  />;
Primary.args = {
  headline:"Headline",
  number:"00000000",
  info:"100",
  imagen: smile
  
};


export const Primary2 = Template.bind({});

//export const withAnImage = () => <img src={smile}  />;
Primary2.args = {
  headline:"con otra imagen",
  number:"00000000",
  info:"100",
  imagen: repo,
  disabled:true
  
};