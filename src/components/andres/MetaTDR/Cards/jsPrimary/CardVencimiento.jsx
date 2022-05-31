import React from 'react'
import styled from "styled-components";
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';

const CardComponentVencimiento = styled(Card)`
&&{
    background: #FFFFFF;
    box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
    border-radius: 16px;
}

.titulo{
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
    margin-bottom:20px ;
    color: #27272A;
}
.descripcion{
    margin-top: 30px;
    margin-bottom:40px ;
    margin-left:14px;
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: #78716C;
}

`


const CardVencimiento = (props) => {




    return (
        <CardComponentVencimiento>
            {props.datosVencimiento.titulo ?
                <Typography className="text-center titulo">

                    {props.datosVencimiento.titulo}

                </Typography>

                : null}

            {props.datosVencimiento.sub ?
                <Typography className="text-center sub">

                    {props.datosVencimiento.sub}

                </Typography>

                : null}

            {props.datosVencimiento.divider ? props.datosVencimiento.divider : null}

            {props.datosVencimiento.descripcion ?

                <Typography className="text-start descripcion">

                    {props.datosVencimiento.descripcion}

                </Typography>

                : null}


        </CardComponentVencimiento>
    )
}

export default CardVencimiento