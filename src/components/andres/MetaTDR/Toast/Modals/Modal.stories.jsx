import React from 'react';
import Button from '@mui/material/Button';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { Modals } from "./Modals";
import Close from '../Img/Close.png'

export default {
  title: 'MetaTDR/Toast/Modals',
  component: Modals,
   argTypes: {
    
     },
};



const datosModal={
  title:"Sure you want to accept?",
  label:"Egestas arcu egestas parturient dui vitae. Ornare risus id ullamcorper in ut. Vestibulum neque ullamcorper non orci vel, consectetur mi, pulvinar. Eu lectus quis leo viverra lacus non fames est ut",
  textCheckBox:"Don’t show this again",
  linkA:"No, cancel",
  linkB:"Yes, confirm", 
}


const Template = (args) => <Modals {...args} />;
export const Modalss = Template.bind({});




Modalss.args = {
  icon:true,
  buttonCancel:true,
  checkBox:true,
  datosModal:datosModal,
  iconSuccess:<CheckCircleOutlineRoundedIcon className="icon" fontSize="large" />,
  iconClose: <img src={Close} style={{marginRight:13,cursor:"pointer"}}/> ,
  onClick:() => { alert("confirm") }
  
};