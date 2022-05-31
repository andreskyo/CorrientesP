import React from 'react';
import styled from "styled-components";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Buttons } from '../../Buttons/Butttons/Buttons';
import Avatar from '@mui/material/Avatar';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
const CardComponentProgress = styled(Card)`
&&{
    background: #FFFFFF;
    box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
    border-radius: 16px;
 }
 .icon{
    background: #F4F6F9;
    border-radius: 10px;
 }

 .titulo{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: bold;
    color: #27272A;
    margin-top:-20px;
    padding-bottom:20px;
 }

 .css-eglki6-MuiLinearProgress-root{
    
    background: #E2E8F0;
    height: 8px;
    border-radius: 20px;
}
 .css-5xe99f-MuiLinearProgress-bar1{
    background: #124596;

 }
 .gb{
    font-family: 'SF UI Text';
    margin-bottom:10px;
    font-style: normal;
    font-weight: 400;
    color: #78716C;
    
 }
`


const CardProgress = (props) => {





    return (
        <CardComponentProgress>

            <CardHeader
                avatar={
                    props.datosProgress.icon ?
                        <Avatar

                            className="icon"
                            variant="square">
                            <img src={props.datosProgress.icon} />

                        </Avatar>
                        : null
                }
                action={
                    props.datosProgress.iconSetting ?
                        <IconButton
                            disableRipple
                            aria-label="settings"
                            onClick={props.datosProgress.onClick}
                        >
                            {props.datosProgress.iconSetting}
                        </IconButton>
                        : null
                }
            />
            <CardContent>
                {props.datosProgress.titulo ?
                    <Typography className="titulo">
                        {props.datosProgress.titulo}
                    </Typography>
                    : null}
                <>

                    {props.datosProgress.value ?
                        <Typography
                            variant="body2"
                            className="gb"
                            style={{ float: "left" }}
                            color="text.secondary">
                            {props.datosProgress.value}<span className="p-1">GB</span>
                        </Typography>
                        : null}
                    {props.datosProgress.maxValue ?
                        <Typography
                            variant="body2"
                            className="gb"
                            style={{ float: "right" }}
                            color="text.secondary">{props.datosProgress.maxValue}<span className="p-1">GB</span>
                        </Typography>
                        : null}
                </>

                <LinearProgress

                    className="w-100"
                    variant="determinate"
                    value={props.datosProgress.value}
                    disableShrink />

            </CardContent>

        </CardComponentProgress>
    )
}

export default CardProgress