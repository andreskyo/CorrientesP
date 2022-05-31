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
  .buttonMessage {
    border: 1px solid #67E8F9;
    border-radius: 8px;
    color: #06B6D4;
    margin-right:10px;
    width: 101px;
    height: 40px;
    :hover{
      color: #06B6D4;
      border: 1px solid #67E8F9;
    }
    :active{
      color: #06B6D4;
      border: 1px solid #67E8F9;
    }
   
  }  
  .buttonConnect {
    border: 1px solid #06B6D4;
    border-radius: 8px;
    background:#06B6D4;
    color: #FFFFFF;
    width: 101px;
    height: 40px;
    :hover{
      background:#06B6D4;
      border: 1px solid #06B6D4;
      color: #FFFFFF;
    }
    :active{
      background:#06B6D4;
      border: 1px solid #06B6D4;
      color: #FFFFFF;
    }
  }
  .icons{
    color: #A9A9A9;
    padding:6px;
  }
  .titulo{
   font-family: 'SF UI Text';
   font-style: normal;
   font-weight: 600;
   line-height: 150%;
   text-align: center;
   color: #272727;
   margin-top: 20px;
  }
  .descripcion{
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
        {res.icon ?
          <IconButton
            className="icons"
            disableRipple
            key={i}
            onClick={res.onClick}
          >
            {res.icon}
          </IconButton>
          : null}
      </>

    })

    return resultado
  }
  return (
    <CardComponentPerfil className="text-center" >

      <CardHeader
        style={{ display: "inline-block", textAlign: "center" }}
        avatar={

          props.datosPerfil.icon ?
            <Avatar
              className="text-center"
              alt="Remy Sharp"
              src={props.datosPerfil.icon}
              sx={{ width: 90, height: 90, marginLeft: "15px" }}
            />
            : null
        }
      />
      {props.datosPerfil.labelTags || props.datosPerfil.title || props.datosPerfil.descripcion || props.datosPerfil.buttonMessage || props.datosPerfil.buttonConnect ?
        <CardContent>

          {props.datosPerfil.labelTags ?
            <Chip
              className="tag"
              variant="outlined"
              label={props.datosPerfil.labelTags ? props.datosPerfil.labelTags : null}
              color="primary"
            />
            : null}

          {props.datosPerfil.title ?
            <Typography
              className="titulo"
            >

              {props.datosPerfil.title}

            </Typography>
            : null}

          {props.datosPerfil.descripcion ?
            <Typography
              className="descripcion"
            >

              {props.datosPerfil.descripcion}

            </Typography>
            : null}

          <CardActions
            disableSpacing
            style={{ display: "block", textAlign: "center" }}>

            {renderIcons()}

          </CardActions>

          {props.datosPerfil.buttonMessage || props.datosPerfil.buttonConnect ?

            <CardActions
              className="d-flex"
              style={{ justifyContent: "space-around" }}>

              < div className="container-button ">
                {props.datosPerfil.buttonMessage ? props.datosPerfil.buttonMessage : null}


                {props.datosPerfil.buttonConnect ? props.datosPerfil.buttonConnect : null}
              </div>
            </CardActions>

            : null}

        </CardContent>
        : null}

    </CardComponentPerfil>


  )
}

export default CardPerfil