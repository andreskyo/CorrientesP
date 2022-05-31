import React from 'react'
import styled from "styled-components";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Buttons } from '../../Buttons/Butttons/Buttons';
import Typography from '@mui/material/Typography';
const CardContentImg = styled(Card)`
  &&{
    background: #FFFFFF;
    box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
    border-radius: 16px;
    width:100%;
    height: 100%;
  }
.cardMedia{
    display:flex;
    justify-content: center;
.img{
    width:95%;
    padding-top:8px;
    border-radius: 16px 16px 0px 0px;
   }
}
.cardContent{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    .titulo{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    }
}
   .icont{
    color:#78716C;
    font-size:18px;
    padding-right:2px ;
}
   .sub{
    color: #78716C;
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 150%;
}
.descripcion{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    font-size: 14px;
    color:black;
}
`
const CardImg = (props) => {
    return (
        <CardContentImg>
            {props.datosCardImg.img ?
                <CardMedia
                    className="cardMedia">
                    {props.datosCardImg.img}
                </CardMedia>
                : null}
            {props.datosCardImg.titulo || props.datosCardImg.sub || props.datosCardImg.iconSub || props.datosCardImg.descripcion || props.datosCardImg.button ?
                <CardContent className="cardContent">
                    {props.datosCardImg.titulo ?
                        <Typography
                            className="titulo"
                            gutterBottom
                            variant="h5"
                            component="div">
                            {props.datosCardImg.titulo}
                        </Typography>
                        : null}
                    {props.datosCardImg.sub || props.datosCardImg.iconSub ?
                        <Typography
                            variant="body2 sub"
                            color="text.secondary">
                            {props.datosCardImg.iconSub ? props.datosCardImg.iconSub : null}
                            {props.datosCardImg.sub ? props.datosCardImg.sub : null}
                        </Typography>
                        : null}
                    {props.datosCardImg.descripcion ?
                        <Typography
                            className="pt-2 descripcion"
                            variant="body2">
                            {props.datosCardImg.descripcion}
                        </Typography>
                        : null}
                    {props.datosCardImg.button ?
                        <div className="container-button pt-4">
                            {props.datosCardImg.button}
                        </div>
                        : null}
                </CardContent>
                : null}
        </CardContentImg>
    )
}
export default CardImg