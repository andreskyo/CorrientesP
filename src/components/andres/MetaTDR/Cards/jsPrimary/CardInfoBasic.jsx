import React from 'react'
import styled from "styled-components";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const CardComponentInfoBasic = styled(Card)`
&&
{
   background: #FFFFFF;
   box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
   border-radius: 16px;
}

.icon{
    background: #124596;
    margin-top:-5px;
    width: 45px;
    height: 45px;
}
.css-et1ao3-MuiTypography-root,.css-1qvr50w-MuiTypography-root {
  font-family: 'SF UI Text';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 150%;
  color: #27272A;
}
.css-83ijpv-MuiTypography-root,.css-nrdprl-MuiTypography-root {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #78716C;
}

`


const CardInfoBasic = (props) => {
  return (
    <CardComponentInfoBasic >
      
      <CardHeader
        avatar={
          props.datosCardInfoBasic.icon ? 
          <Avatar
          className="icon"
          aria-label="recipe">
            {props.datosCardInfoBasic.icon}
          </Avatar> : null
        }
     
        action={
          props.datosCardInfoBasic.iconSetting ?
          <IconButton
            disableRipple
            aria-label="settings">
           
            {props.datosCardInfoBasic.iconSetting}
              
              
          </IconButton>
          :null
        }
        
        title={props.datosCardInfoBasic.titulo ? props.datosCardInfoBasic.titulo : null}
      
        subheader={props.datosCardInfoBasic.sub ? props.datosCardInfoBasic.sub  : null}
      />


    </CardComponentInfoBasic>
  )
}

export default CardInfoBasic