import React from 'react'
import styled from "styled-components";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

const CardComponentGateWay = styled(Card)`
&&
{
   background: #F1F5F9;
   box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
   
   
}
.css-et1ao3-MuiTypography-root {
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 400;
    margin-left:-10px;
    font-size: 24px;
    color: #27272A;
}
.sub {
    text-decoration:line-through;
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 400;
    color: #78716C;
}
.subB{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    color: #27272A;
}
.descripcion{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 400;
    color: #78716C;  
}
.descripcionB{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 400;
    color: #22C55E;
}


`



const PagoGateWay = (props) => {
    return (
        <CardComponentGateWay>
            <CardHeader
                avatar={
                    props.datosPagosGateWay.icon ?
                        <IconButton
                            onClick={props.datosPagosGateWay.onClick}
                            className="p-0"
                            disableRipple>


                            {props.datosPagosGateWay.icon}

                        </IconButton>
                        : null
                }

                title={props.datosPagosGateWay.titulo}

            />
            {props.datosPagosGateWay.sub || props.datosPagosGateWay.subB || props.datosPagosGateWay.descripcion || props.datosPagosGateWay.descripcionB ?
                <CardContent>
                    {props.datosPagosGateWay.sub ? <Typography className="sub">{props.datosPagosGateWay.sub}</Typography> : null}
                    {props.datosPagosGateWay.subB ? <Typography className="subB">{props.datosPagosGateWay.subB}</Typography> : null}
                    {props.datosPagosGateWay.subB ? <Typography className="descripcion">{props.datosPagosGateWay.descripcion}</Typography> : null}
                    {props.datosPagosGateWay.descripcionB ? <Typography className="descripcionB">{props.datosPagosGateWay.descripcionB}</Typography> : null}
                </CardContent>
                : null}
        </CardComponentGateWay>
    )
}

export default PagoGateWay