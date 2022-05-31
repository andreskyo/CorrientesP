import React from 'react'
import styled from "styled-components";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
const CardComponentAcceso = styled(Card)`
     &&{
       background: #FFFFFF;
       box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
       border-radius: 16px;
       display:flex;
       height: 100%;
  }

  &&:hover{
      box-shadow: 0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.1), 0px 6px 12px rgba(14, 31, 53, 0.08);
  }
  .avatar{
      width:82px;
      height:82px;
      border: 1.14341px solid #78716C;
      border-radius: 60px;
      background:transparent;
      padding: 18%;
  }
  .icon{
      width:30px;
      height:30px;
      color:#78716C;
    }
  .cardContent{
    width:100%;
}
 .titulo{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    color: #27272A;
  }
  .descripcion{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #78716C;
  }
`
const CardAcceso = (props) => {
    return (
        <CardComponentAcceso>
            {props.datosAcceso.icon ?
                <CardHeader className="cardHeader"
                    avatar={
                        <Avatar
                            className="avatar">
                            {props.datosAcceso.icon ? props.datosAcceso.icon : null}
                        </Avatar>
                    }
                />
                : null}
            {props.datosAcceso.titulo || props.datosAcceso.descripcion || props.datosAcceso.button ?
                <CardContent className="row p-2 cardContent">
                    {props.datosAcceso.titulo ?
                        <Typography
                            className="titulo">
                            {props.datosAcceso.titulo ? props.datosAcceso.titulo : null}
                        </Typography>
                        : null}
                    {props.datosAcceso.descripcion ?
                        <Typography
                            className="descripcion">
                            {props.datosAcceso.descripcion ? props.datosAcceso.descripcion : null}
                        </Typography>
                        : null}
                    {props.datosAcceso.button ?
                            <div className="container-button pt-2">
                                {props.datosAcceso.button ? props.datosAcceso.button : null}
                            </div>
                        : null}
                </CardContent>
                : null}
        </CardComponentAcceso>
    )
}
export default CardAcceso