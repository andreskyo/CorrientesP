import { React, useState } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';



const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 20,
  height: 20,
  border: "1px solid rgba(11, 95, 255, 0.5)",
  'input:disabled ~ &': {
    border:"1px solid rgba(0, 84, 240, 0.1)"
      
  },

}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#0B5FFF',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 18,
    height: 18,
    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',

    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#0B5FFF',
  },
  'input:disabled ~ &': {
    background: "rgba(0, 84, 240, 0.70)",
    
    
  }
});
 const RadioButton = (props) => {


  const handleClick = (e) => {


    const value = e.target
    if (props.onChange) {
      props.onChange(value)
    }

  };
  const renderButton = () => {
    let resultado = props.dataButton.map((data, i) => {

      return <>
         <Radio 
          key={i}
          disabled={props.disabled} 
          value={data.value} 
          icon={<BpIcon />}
          checkedIcon={<BpCheckedIcon />}
          onClick={handleClick}/>
          </>

    })
    return resultado;
  }

  return (
    <>



      <FormControl>
        <RadioGroup
        name={props.name}>

           {renderButton()} 
          


        </RadioGroup>
      </FormControl>

    </>
  );
};
export default RadioButton