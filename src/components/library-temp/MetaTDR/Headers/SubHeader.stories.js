import React from 'react';
import SubHeader from './SubHeader'

export default {
    title: 'Componentes/Headers/SubHeader',
    component: SubHeader,
  };
const Template=(args) => <SubHeader {...args}/>



export const Primary = Template.bind({});
Primary.args = {
 iconMenu:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M3 12H21" stroke="#09101D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
 <path d="M3 6H16" stroke="#09101D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
 <path d="M3 18H12" stroke="#09101D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
 </svg>,
 text:"Menú"
 
}