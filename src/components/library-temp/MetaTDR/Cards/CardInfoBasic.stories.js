import React from 'react';
import CardInfoBasic from './CardInfoBasic'

export default {
  title: 'Componentes/Cards/CardInfoBasic',
  component: CardInfoBasic ,
 
  argTypes: {
   // backgroundColor: { control: 'color' },
   
  },
};


const Template = (args) => <CardInfoBasic {...args} />;

export const Primary = Template.bind({});

const icon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
<path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#09101D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 2V6" stroke="#09101D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 2V6" stroke="#09101D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 10H21" stroke="#09101D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


//export const withAnImage = () => <img src={smile}  />;
Primary.args = {
  text1:"Headline label ",
  text2:"Paste your feeths...",
  image:icon
  
  
  
};