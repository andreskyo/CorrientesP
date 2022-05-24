import React from 'react'
import styled from "styled-components";
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';

const CardComponentVencimiento=styled(Card)`
&&{
    background: #FFFFFF;
    box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
    border-radius: 16px;
}

.title{
  font-family: 'SF UI Text';
  font-style: normal;
  font-weight: 500;
  font-size: 95px;
  line-height: 150%;
  color: #124596;
}
.sub{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 150%;
    color: #27272A;
}
.vencimiento{
    margin-top: 50px;
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #78716C;
}

`


const CardVencimiento = (props) => {
    



    return (
        <CardComponentVencimiento className="container-fluid m-0">

           {props.datosVencimiento.fecha}
           <Divider variant="middle" />
           {props.datosVencimiento.vencimientos}


        </CardComponentVencimiento>
    )
}

export default CardVencimiento