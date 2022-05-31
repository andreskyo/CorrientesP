import React from 'react';
import styled from "styled-components";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CardComponentList = styled(Card)`
    
    &&{
    background: #FFFFFF;
    box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
    border-radius: 16px;
}

.titulo{
   font-family: 'SF UI Text';
   font-style: normal;
   font-weight: 500;
   font-size: 13px;
   color: #78716C;
   padding:2px;
}

.descripcion{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #27272A;
    padding:2px;
}

.sub{
    padding:2px;
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    color: #8B5CF6;
}
`

const CardList = (props) => {
    return (
        <CardComponentList >

            <CardContent>
                {props.datosList.titulo ?
                    <Typography className="titulo">
                        {props.datosList.titulo}
                    </Typography>
                    : null}

                {props.datosList.descripcion ?
                    <Typography className="descripcion">
                        {props.datosList.descripcion}
                    </Typography>
                    : null}

                {props.datosList.sub ?
                    <Typography className="sub">
                        {props.datosList.sub}
                    </Typography>
                    : null}
                    
            </CardContent>

        </CardComponentList>
    )
}

export default CardList