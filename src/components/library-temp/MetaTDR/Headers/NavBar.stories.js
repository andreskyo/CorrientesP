import React from 'react';
import NavBar from './NavBar'

export default {
    title: 'Componentes/Headers/NavBar',
    component: NavBar,
  };
const Template=(args) => <NavBar {...args}>

</NavBar>;



export const Complete = Template.bind({});
export const WithSubHeader = Template.bind({});
export const WithTopHeader = Template.bind({});
export const OnlyHeader = Template.bind({});

Complete.args = {
 withTop:true,
 withSub:true, 
}

WithSubHeader.args  = {
  withSub:true, 
}
WithTopHeader.args  = {
  withTop:true, 
}

OnlyHeader.args = {
  withTop:false,
 withSub:false,
}
