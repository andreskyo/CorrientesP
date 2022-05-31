import React from 'react';
import styled from "styled-components";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';


const CardComponentMobile = styled(Card)`
&&
{
   background: #FFFFFF;
   box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
   border-radius: 16px;
}
.css-2s90m6-MuiAvatar-root{
    background:#124596;
}

.css-1qvr50w-MuiTypography-root{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #27272A;
}
.descripcio {
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 400;
    color: #22C55E;
    font-size: 12px;
}
.descripcion{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 400;
    color: #78716C;
    font-size: 12px;
}
.css-et1ao3-MuiTypography-root {
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 400;
    color: #27272A;
}

`

const PagoMobile = (props) => {
    return (
        <CardComponentMobile>


            {props.datosPagosMobile.titulo || props.datosPagosMobile.icon || props.datosPagosMobile.descripcion ?
                <CardHeader
                    avatar={
                        props.datosPagosMobile.icon ?

                            <IconButton>

                                <img src={props.datosPagosMobile.icon} alt="" />

                            </IconButton>

                            : null
                    }

                    title={props.datosPagosMobile.titulo}
                    subheader={props.datosPagosMobile.descripcion}
                />

                : null}
        </CardComponentMobile>
    )
}

export default PagoMobile