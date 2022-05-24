import { React, useState } from 'react';
import RadioButton from './RadioButton';
import RadioButtonText from './RadioButtonText';



export const RadioButtons = ({ ...props }) => {




  return (
    <>
      {props.radioButton ?
        <RadioButton
          disabled={props.disabled}
          dataButton={props.dataButton}
          name={props.name}
          onChange={props.onChange}
        />
        :
        <RadioButtonText
          disabled={props.disabled}
          dataButtonText={props.dataButtonText}
          name={props.name}
          onChange={props.onChange}
        />


      }






    </>
  );
};