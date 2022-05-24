import React from 'react';
import ComponentAlert from './js/ComponentAlert'


export const Alerts = ({ ...props }) => {



  return (
    <ComponentAlert 
    datosAlert={props.datosAlert}
    button={props.button}
    icon={props.icon}
    iconSuccess={props.iconSuccess}
    iconClose={props.iconClose}
    onClick={props.onClick}
    />

  )

};