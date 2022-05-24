import React from 'react';
import styled from "styled-components";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

const CardComponentSetting = styled(Card)`

&&{
    background: #FFFFFF;
    box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
    border-radius: 16px;
}
.css-1qvr50w-MuiTypography-root {
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 500;
    color: #27272A;
}
.css-nrdprl-MuiTypography-root{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 400;
    color: #78716C;
}
.button{
    width:100%;
    display:flex;
    justify-content: space-between;
    text-transform: none;
    color: #0077E6;
    :hover{
        background:none;
    }
}



`

const CardSetting = (props) => {
    const render = () => {
        let resultado = props.datosSetting.buttons.map((res, i) => {
            return <>
                {res.button}
            </>


        })
        return resultado;

    };

    return (
        <CardComponentSetting >
            <CardHeader


                title={props.datosSetting.titulo}
                subheader={props.datosSetting.sub}



            />
            <CardContent>

                {render()}

            </CardContent>

        </CardComponentSetting>
    )
}

export default CardSetting