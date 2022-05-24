import React from 'react';
import styled from "styled-components";
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';


const CardComponentVencimiento = styled(Card)`
&&{
    background: #FFFFFF;
    box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
    border-radius: 16px;
}
.avatar{
    margin:20px auto;
    background: #F1F5F9;
    color:#27272A;
    padding:0px;
}
.css-i4bv87-MuiSvgIcon-root {
    font-size:50px;
}

.fecha{
    margin-top:20px;
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    text-align:center;
    line-height: 150%;
    color: #124596;
}

.job{
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


            <Avatar
                className="avatar"
                alt="Remy Sharp"
                sx={{ width: 80, height: 80, marginLeft: 2.5 }}>
                {props.datosVencimiento.icon}
            </Avatar>


            <Typography
                className="fecha">
                {props.datosVencimiento.fecha}
            </Typography>


            <Divider />


            <Typography 
               className="job">

                {props.datosVencimiento.job}

            </Typography>


        </CardComponentVencimiento>
    )
}

export default CardVencimiento