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
   font-size:25px;
   color: #124596;
}
.css-1qvr50w-MuiTypography-root{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 500;
    color: #27272A;
}
.precio{
   font-family: 'SF UI Text';
   font-style: normal;
   font-weight: bold;
   color: #27272A;
   padding:10px;
   letter-spacing: 3px;
}
.descuento{
   font-family: 'SF UI Text';
   font-style: normal;
   font-weight: 400;
   color: #22C55E;
}
.descuentoA{
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
    margin-top:-30px;
}
`
const PagoDesktop = (props) => {
  return (
    <CardComponentPagoDesktop>
         <CardHeader
               className="header"
               title={<>{props.datosPagoDesktop.icon}{props.datosPagoDesktop.titulo}</>}

            />
            
            <CardContent className="cardContent">
                <Typography className="precio">{props.datosPagoDesktop.precio}</Typography>
                <Typography className="descuento">{props.datosPagoDesktop.descuento}</Typography>
                <Typography className="descuentoA">{props.datosPagoDesktop.descuentoA}</Typography>
                <Typography className="iconB">{props.datosPagoDesktop.iconB}</Typography>
            </CardContent>

        </CardComponentPagoDesktop>
  )
}

export default PagoDesktop