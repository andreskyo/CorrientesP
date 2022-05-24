import React from 'react';
import { RadioButtons } from "./RadioButtons";
export default {
  title: 'MetaTDR/RadioButtons/RadioButtons',
  component: RadioButtons,

  argTypes: {
  },
};
const Template = (args) => <RadioButtons {...args} />;
export const RadioButton = Template.bind({});


const dataButton = [{
  value: 'fff',
  
  

}, {
  value: 'vvvvvf',
  

},
{
  value: '00990000',
 

},]


const dataButtonText=[{
  value: 'a',
  label: '1 ervicios de orgaasdasdasdasdnsdfsdfsdfizaciones y órganos extraterritoriales.',
  

}, {
  value: 'v',
  label: '1 ervicios de orgaasdasdasdasdnsdfsdfsdfizaciones y órganos extraterritoriales.',

},


]




RadioButton.args = {

  disabled: false,
  radioButton:true,
  dataButton: dataButton,
  dataButtonText:dataButtonText,
  name:"radio",
  onChange: (a) => { console.log(a) },


};


