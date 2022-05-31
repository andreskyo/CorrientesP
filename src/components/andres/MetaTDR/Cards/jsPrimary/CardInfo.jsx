import React from 'react';
import styled from "styled-components";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


const CardComponentInfo = styled(Card)`
&&
{
   background: #FFFFFF;
   box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
   border-radius: 16px;
}
.css-et1ao3-MuiTypography-root,.css-1qvr50w-MuiTypography-root{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: #27272A;
}


`

const CardInfo = (props) => {
  return (
    <CardComponentInfo >

      {props.datosInfo.icon || props.datosInfo.iconSetting || props.datosInfo.titulo ?
        <CardHeader
          avatar={

            props.datosInfo.icon ?
              <img src={props.datosInfo.icon} alt="" />
              : null
          }

          action={
            <IconButton
              disableRipple
              aria-label="settings">
              {props.datosInfo.iconSetting ? props.datosInfo.iconSetting : null}
            </IconButton>
          }
          title={props.datosInfo.titulo ? props.datosInfo.titulo : null}

        />
        
        : null}

    </CardComponentInfo>
  )
}

export default CardInfo