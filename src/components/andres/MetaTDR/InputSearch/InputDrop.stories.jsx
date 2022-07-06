import React from 'react';
import InputDrop from '../Input/InputDrop';
import Buttonn from '../Buttons/Butttons/Buttons';




export default {
  title: 'MetaTDR/Input/InputDrop',
  component: InputDrop,

  argTypes: {

  },
};

const dataInput=[
  { label: "Brasil brasil", value: "Jair Messias Bolsonaro" },
  { label: "México", value: "Andrés Manuel López obrador" },
  { label: "Argentina", value: "Alberto Ángel Fernández" },
  { label: "Colombia", value: "Iván Duque Márquez" }
 
  ]
  




const Template = (args) => <InputDrop {...args} />;

export const InputD = Template.bind({});


InputD.args = {
  dataInput:dataInput,
  placeholder:"¿Qué trámite estás buscando?",
  type:"text",
  className:"inputSearch",
  

  
  onClick:(a,b)=>{console.log(a,b)},
  
  

  onChange:(e)=>{console.log(e)}


};
