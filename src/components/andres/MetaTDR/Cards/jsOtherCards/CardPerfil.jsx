import React from 'react'
import styled from "styled-components";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { Buttons } from '../../Buttons/Butttons/Buttons'



const CardComponentPerfil = styled(Card)`
  &&{
    background: #FFFFFF;
    box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
    border-radius: 16px;
  } 
  .yzFfc.yzFfc {
    border: 1px solid #67E8F9;
    border-radius: 8px;
    color: #06B6D4;
  }  
  .kCWNvr.kCWNvr {
    border: 1px solid #06B6D4;
    border-radius: 8px;
    background:#06B6D4;
    color: #FFFFFF;
  }
  .icons{
    color: #A9A9A9;
    padding:6px;
  }
  .name{
   font-family: 'SF UI Text';
   font-style: normal;
   font-weight: 600;
   line-height: 150%;
   text-align: center;
   color: #272727;
   margin-top: 20px;
  }
  .job{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    text-align: center;
    color: #272727;
  }
  .tag{
    border: 1px solid #272727;
    border-radius: 8px;
    color: #272727;
    font-family: 'Nunito';
    font-weight:bold;
  }

`

const CardPerfil = (props) => {

  const renderIcons = () => {
    
    let resultado = props.datosPerfil.icons.map((res, i) => {
      
      return <>
        <IconButton 
        className="icons" 
        key={i}
        onClick={res.onClick}
        >
          {res.icon}
        </IconButton>
      </>

    })

    return resultado
  }
  return (
    <CardComponentPerfil className="container-fluid text-center" >

      <CardHeader
        style={{ display: "inline-block", textAlign: "center" }}
        avatar={
          <Avatar
            className="text-center"
            alt="Remy Sharp"
            src={props.datosPerfil.avatar}
            sx={{ width: 90, height: 90 }}
          />
        }
      />

       <CardContent>
        
        <Chip
        className="tag"
        variant="outlined" 
        label={props.datosPerfil.labelTags}
        color="primary" 
         />

        <Typography 
        className="name"
        >

        {props.datosPerfil.name}

        </Typography>

        <Typography 
        className="job"
        >

        {props.datosPerfil.job}

        </Typography>

        <CardActions 
        disableSpacing 
        style={{ display: "block", textAlign: "center" }}>

        {renderIcons()}

        </CardActions>

        <CardActions 
        className="m-auto" 
        style={{ display: "inline-block", textAlign: "center" }}>

          <Buttons
            onClick={props.datosPerfil.onClickMessage}
            primary
            outlined
            text="Message" />
          <Buttons
          onClick={props.datosPerfil.onClickConnect}
            primary
            text="Connect" />
        </CardActions>

      </CardContent>


    </CardComponentPerfil>


  )
}

export default CardPerfil