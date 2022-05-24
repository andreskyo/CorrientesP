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
.css-2s90m6-MuiAvatar-root{
    background:#124596;
}
.css-et1ao3-MuiTypography-root {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #27272A;
}
.css-83ijpv-MuiTypography-root {
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
          <Avatar aria-label="recipe">
            {props.datosCardInfoBasic.icon}
          </Avatar>
        }
        action={
          <IconButton
            disableRipple
            aria-label="settings">
            <MoreVertIcon
              onClick={props.datosCardInfoBasic.handleClickSetting}
              disableRipple
              style={{ marginTop: "-5px" }}
              />
          </IconButton>
        }
        title={props.datosCardInfoBasic.descripcion}
        subheader={props.datosCardInfoBasic.incumplidas}
      />


    </CardComponentInfoBasic>
  )
}

export default CardInfoBasic