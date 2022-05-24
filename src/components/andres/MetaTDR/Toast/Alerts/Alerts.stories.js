import React from 'react';
import { Alerts } from "./Alerts";
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import Close from './Img/Close.png'


export default {
  title: 'MetaTDR/Toast/Alerts',
  component: Alerts,
   argTypes: {
    
     },
};


const datosAlert={
    
    title:` Successfully applied!`,
    label:"Malesuada tellus tincidunt fringilla enim, id mauris. Id etiam nibh suscipit aliquam dolor. Nunc sit nunc aliquet justo, facilisi leo. Nulla a eget tincidunt integer orci.",
    button:"Learn More"    
  }


const Template = (args) => <Alerts {...args} />;
export const Alert = Template.bind({});



Alert.args = {
    datosAlert:datosAlert,
    button:true,
    icon:true,
    iconSuccess:<CheckCircleOutlineRoundedIcon fontSize="large" className="icon mt-3 "/>,
    iconClose:<img src={Close}/>,
    onClick: () => { alert("Button") }
    
    
    
};