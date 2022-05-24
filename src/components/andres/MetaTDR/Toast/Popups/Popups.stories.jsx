import React from 'react';
import Button from '@mui/material/Button';
import Close from '../Img/Close.png'
import { Popups } from "./Popups";


export default {
  title: 'MetaTDR/Toast/Popups',
  component: Popups,
   argTypes: {
    
     },
};



const datosPopups={
  title:"Sure you want to accept?",
  label:"Egestas arcu egestas parturient dui vitae. Ornare risus id ullamcorper in ut. Vestibulum neque ullamcorper non orci vel, consectetur mi, pulvinar. Eu lectus quis leo viverra lacus non fames est ut",
  linkA:"No, cancel",
  linkB:"Yes, confirm", 
}


const Template = (args) => <Popups {...args} />;
export const Popupss = Template.bind({});




Popupss.args = {
  input:true,
  datosPopups:datosPopups, 
  iconClose: <img src={Close} style={{marginRight:13}}/> ,
  regexInput:/[A-Z]/,
  labelInput:"Your name",
  onClick:() => {alert("confirm")},
  onChange:(a) => { console.log(a) }
  
};