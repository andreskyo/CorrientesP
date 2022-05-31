import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { Buttons } from "./Buttons";





export default {
  title: 'Buttons/Butttons/Buttons',
  component: Buttons,
 
  argTypes: {
    size: {
      options:['large','medium','small'],
      control:{type:'radio'}
    }
 
  
    
  },
};


const Template = (args) => <Buttons {...args} />;

export const Buttonss = Template.bind({});




const alertt=()=>{
return alert('hola mundo')
}



Buttonss.args = {
  className:"button",
  text:"Large Button",
  size:'large',
  startIcon:'',
  endIcon:'',
  icon:<AccessAlarmIcon/>,
  primary:true,
  disabled:false,
  outlined:false,
  addIcon:false,
  icons:false,
  line:false,
  onClick:alertt,
};











