import React from 'react';
import PropTypes from 'prop-types';
import  ComponentModal from './js/ComponentModal'










export const Modals = ({ ...props }) => {

  return (
    <>
<ComponentModal
iconSuccess={props.iconSuccess}
datosModal={props.datosModal}
onClick={props.onClick}
buttonCancel={props.buttonCancel}
checkBox={props.checkBox}
icon={props.icon}
iconClose={props.iconClose}
/>
    
    </>
  )


};