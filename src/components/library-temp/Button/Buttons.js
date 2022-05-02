import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import AddIcon from '@mui/icons-material/Add';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';



const PrimaryButton = styled(Button)`
text-transform: none;

&& {
  background: ${({ outlined }) => outlined ? 'transparent ' : '#124596'};
  border:${({ outlined }) => outlined ? '1px solid #124596 ' : '#004BE8'};
  color:${({ outlined }) => outlined ? '#124596' : 'white'};
  text-transform: none;
  border-radius: ${({ outlined }) => outlined ? 'none' : '8px'};
  font-size:11px;
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
}

 &&:hover {
    background:${({ outlined }) => outlined ? 'none' : '#004BE8'}; 
    color: ${({ outlined }) => outlined ? '#0053F0' : 'white'};
    border:${({ outlined }) => outlined ? '1px solid #0053F0 ' : '#004BE8'};
    cursor:pointer;
    
  }
  &&:active {
    color: ${({ outlined }) => outlined ? 'red' : '#124596'};
    box-shadown:'none';
    color:white;
    }

  
  &&:disabled {
  background: ${({ outlined }) => outlined ? 'none' : 'rgba(11, 95, 255, 0.5)'};
  font-size:11px;
  color:white;
  }

  
  `

const SecondaryButton = styled(Button)`
&& {
  text-transform: none;
  background:${({ outlined }) => outlined? 'transparent' : '#19AB4F'};  
  border:${({ outlined }) => outlined ? '1px solid #19AB4F ' : '#19AB4F'};
  border-radius: ${({ outlined }) => outlined ? 'none' : '8px'};
  font-size:11px;
  font-size:11px;
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;

  color:${({ outlined }) => outlined? '#19AB4F' : 'white'};
  }

&&:hover {
    background: ${({ outlined }) => outlined ? 'none' : '#0C9E42'};
    
    cursor:pointer;
    
  }

  &&:active {
    background:  #009236;
    
  }

&&:disabled {
  font-size:11px;
  background:${({ outlined }) => outlined ? 'none' : ' rgba(25, 171, 79, 0.5)'};
  color:white;
  }
`;


const ButtonLinee = styled(Button)`
text-transform: none;
&& {
    
  border:none;
  color:#124596;
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



export const Buttons = ({ disabled, size, primary, outlined, addIcon, text, line, alarmIcon, ...props }) => {

  const Buttonn = primary ? PrimaryButton : SecondaryButton;

  return (
 <>
     {line ? <ButtonLinee onClick={() => props.onClick()}
        disableRipple
        size={size}
        disabled={disabled}
      >
    {alarmIcon ? <ButtonLinee disableRipple startIcon={<AccessAlarmIcon/>}>
          {text}
        </ButtonLinee > : text  }


      </ButtonLinee>
        :
        <Buttonn onClick={() => props.onClick()}
          
          disableRipple
          primary={primary}
          disabled={disabled}
          size={size}
          outlined={outlined}
        >
          {addIcon ? <AddIcon ></AddIcon> : text}



        </Buttonn>}



    </>


  );

};


