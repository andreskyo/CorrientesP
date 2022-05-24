import { React, useState } from 'react';
import styled from "styled-components";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
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

function BpRadio(props) {
  return (
    <Radio
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}
 const RadioButtonText = (props) => {


  const handleClick = (e) => {


    const value = e.target
    if (props.onChange) {
      props.onChange(value)
    }

  };
  const renderButtonText = () => {
    let resultado = props.dataButtonText.map((data, i) => {

      return <>
        <FormControlLabel 
          key={i}
          disabled={props.disabled} 
          value={data.value} 
          label={data.label}
          control={<BpRadio />} 
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

          {renderButtonText()}
          


        </RadioGroup>
      </FormControl>

    </>
  );
};
export default RadioButtonText