// Button.stories.js | Button.stories.jsx

import React from 'react';
import CardInfoFull from './CardInfoFull'


export default {
  component: CardInfoFull,
  title: 'Componentes/Cards/CardInfoFull',

 
}

const Template = (args) =><CardInfoFull {...args}/>
export const Primary = Template.bind({});

Primary.args = {
    text1:"Headline label ",
    text2:"Paste your feeths...",
    
  };

