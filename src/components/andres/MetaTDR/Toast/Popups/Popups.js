import React from 'react';
import PropTypes from 'prop-types';
import Popup from './js/Popup'










export const Popups = ({ ...props }) => {

  return (
    <>

    <Popup
    datosPopups={props.datosPopups}
    onClick={props.onClick}
    onChange={props.onChange}
    labelInput={props.labelInput}
    input={props.input}
    iconClose={props.iconClose}
    regexInput={props.regexInput}

    />
    
    </>
  )


};