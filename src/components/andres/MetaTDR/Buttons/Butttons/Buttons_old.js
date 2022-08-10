import React from 'react';
import styled from "styled-components";
import Button from '@material-ui/core/Button';





const PrimaryButton = styled(Button)`
&& {
  background: ${({ outlined }) => outlined ? 'transparent ' : ' #124596'};
  border:${({ outlined }) => outlined ? '1px solid #124596 ' : ' 1px solid #124596;'};
  color:${({ outlined }) => outlined ? '#124596' : 'white'};
  text-transform: none;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 600;
}
  &&:hover {
    background:${({ outlined }) => outlined ? 'none' : '#004BE8'}; 
    border:${({ outlined }) => outlined ? '1px solid #0053F0 ' : '1px solid #004BE8'};
    color: ${({ outlined }) => outlined ? '#0053F0' : 'white'};
    cursor:pointer;
  }

  &&:disabled {
  background: ${({ outlined }) => outlined ? 'none' : 'rgba(11, 95, 255, 0.5)'};
  color: ${({ outlined }) => outlined ? 'rgba(11, 95, 255, 0.5)' : 'white'};
  
  
  }
  
  `

const SecondaryButton = styled(Button)`
&& {
  text-transform: none;
  background:${({ outlined }) => outlined ? 'transparent' : '#19AB4F'};  
  border:${({ outlined }) => outlined ? '1px solid #19AB4F ' : '1px solid #19AB4F'};
  color:${({ outlined }) => outlined ? '#19AB4F' : 'white'};
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 600;
}
 &&:hover {
  background: ${({ outlined }) => outlined ? 'none' : '#0C9E42'};
  cursor:pointer;
  }

  &&:disabled {
  background:${({ outlined }) => outlined ? 'none' : ' rgba(25, 171, 79, 0.5)'};
  
  color:white;
  }
`;


const ButtonLinee = styled(Button)`
&& {
  font-family: 'Nunito';
  text-transform: none;
  border:none;
  color:#124596;
  font-weight: bold;
}
  &&:hover {
    text-decoration:underline;
    border:none;
    background:transparent;
    
    cursor:pointer;
  }
  &&:active {
      text-decoration:underline;
      border:none;
      background:transparent;
      
      cursor:pointer;
  }
  &&:disabled {
  background: none;
  color:rgba(11, 95, 255, 0.5);
}
  
  `



export const Buttons = ({ outlined, ...props }) => {

  const Buttonn = props.primary ? PrimaryButton : SecondaryButton;

  return (
    <>
      {props.line
        ?
        <ButtonLinee
          className={props.className}
          onClick={() => props.onClick()}
          disableRipple
          size={props.size}
          disabled={props.disabled}
          startIcon={props.icons ? props.icon : null}
          endIcon={props.endIcon}
        >

          {props.text}
        </ButtonLinee>
        :
        <Buttonn
          className={props.className}
          onClick={() => props.onClick()}
          startIcon={props.startIcon}
          endIcon={props.endIcon}
          disableRipple
          primary={props.primary}
          disabled={props.disabled}
          size={props.size}
          outlined={outlined}
        >
          {props.addIcon
            ?
            props.icon
            : props.text}
        </Buttonn>}



    </>


  );

};

export default Buttons 