import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { DropDownTextInput } from "./DropDownTextInput";
import Typography from '@mui/material/Typography';


export default {
  title: 'MetaTDR/TextInput/DropDownTextInput',
  component: DropDownTextInput,

  argTypes: {

  },
};


const Template = (args) => <DropDownTextInput{...args} />;

export const DropDownTextInputt = Template.bind({});
const datos = [
    {
      label:"aaaaa",
      
      
    },
    {
      label:"aaaaac",
      
      
    },
    {
      label:"ZZZZZ",
      
      
    },
    {
      label:"XXXXXX",
      
      
    },
  ];




DropDownTextInputt.args = {
disabled:false,
alert:false,
helperDescription:false,
text:'',    
label:'',
regex:/[A-Z]/,
errorMessage: 'This is an ERROR message',
successMessage:'This is a SUCCESS message',
helperTextDescription: <Typography variant="span" style={{marginLeft:"10px"}}>This is the description area</Typography>,
iconCalendario:<CalendarTodayOutlinedIcon></CalendarTodayOutlinedIcon>, 
iconDelete:<ClearIcon className="iconDelete"></ClearIcon>,
datos:datos,

};