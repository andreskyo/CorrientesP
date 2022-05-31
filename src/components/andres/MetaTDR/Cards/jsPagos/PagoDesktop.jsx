import React from 'react'
import styled from "styled-components";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

const CardComponentPagoDesktop=styled(Card)`
background: #FFFFFF;
border: 1px solid #EBEEF2;
box-shadow: 0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.08);
border-radius: 16px;
text-align: center;

.icon{
   margin-top:3px;
   margin-right:10px ;
   font-size:25px;
   color: #124596;
}
.css-1qvr50w-MuiTypography-root{
    font-family: 'SF UI Text';
    font-style: normal; 
    font-weight: bold;
    font-size: 24px;
    color: #27272A;
    height:20px ;
}
.sub{
   font-family: 'SF UI Text';
   font-style: normal;
   font-weight: bold;
   color: #27272A;
   font-size:24px;
   padding:5px;
   letter-spacing: 3px;
}
.descripcion{
   font-family: 'SF UI Text';
   font-style: normal;
   font-weight: 400;
   padding:5px;
   color: #22C55E;
}
.descripcionB{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 400;
    color: #22C55E;
    
}
.iconB{
    color: #0077E6;
    font-size:25px;
    margin-bottom: -10px;
    margin-top:10px;
    
}
.cardContent{
    margin-bottom:10px;
}
`
const PagoDesktop = (props) => {
  return (
    <CardComponentPagoDesktop>
         <CardHeader
               className="header"
               title={<>{props.datosPagoDesktop.icon ? props.datosPagoDesktop.icon : null }{props.datosPagoDesktop.titulo ? props.datosPagoDesktop.titulo : null}</>}

            />
            {props.datosPagoDesktop.sub || props.datosPagoDesktop.descripcion || props.datosPagoDesktop.descripcionB || props.datosPagoDesktop.iconB ?
            <CardContent className="cardContent">
                <Typography className="sub">{props.datosPagoDesktop.sub}</Typography>
                <Typography className="descripcion">{props.datosPagoDesktop.descripcion}</Typography>
                <Typography className="descripcionB">{props.datosPagoDesktop.descripcionB}</Typography>
                <Typography className="iconB">{props.datosPagoDesktop.iconB}</Typography>
            </CardContent>
        :null}
        </CardComponentPagoDesktop>
  )
}

export default PagoDesktop