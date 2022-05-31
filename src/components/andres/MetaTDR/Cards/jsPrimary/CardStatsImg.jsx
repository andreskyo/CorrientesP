import React from 'react';
import styled from "styled-components";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { Buttons } from '../../Buttons/Butttons/Buttons';

const CardComponentStatImg = styled(Card)`
&&{
    background: #FFFFFF;
    box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
    border-radius: 16px;
}
.icon{
    margin-top:10px;
    width: 50px;
    height: 50px;
    background: #124596;
    color:white;
    margin-right:10px;
    padding:0px;

}
.css-185gdzj-MuiCardHeader-root{
    height:auto ;
}
.css-1qvr50w-MuiTypography-root{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: #124596;
    
}
.css-nrdprl-MuiTypography-root{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    color: #27272A;
    height:0px ;
}
.cardContent{
    display:flex;
    
    .tag{
        width: auto;
        height: 22px;
        background: #059669;
        border-radius: 4px;
    }
    .subB{
        font-family: 'SF UI Text';
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        color: #0077E6;
        margin-top:3px;
        margin-left:10px;
    }
}

`

const CardStatsImg = (props) => {
    return (
        <CardComponentStatImg >
{props.datosStatsImg.titulo || props.datosStatsImg.sub || props.datosStatsImg.icon ?
            <CardHeader

                action={
                    props.datosStatsImg.icon ?
                        <Avatar
                            className="icon"
                            aria-label="recipe">
                            {props.datosStatsImg.icon}
                        </Avatar>

                        : null
                }
                
                title = {props.datosStatsImg.titulo ? props.datosStatsImg.titulo : null}
                subheader={props.datosStatsImg.sub ? props.datosStatsImg.sub : null}
            
            />
        :null}
        
            <CardContent className="cardContent">

                {props.datosStatsImg.tagLabel ?
                    <Chip
                        className="tag"
                        color="success"
                        label={props.datosStatsImg.tagLabel} />
                    : null}

                {props.datosStatsImg.subB ?
                    <Typography
                        className="subB">
                        {props.datosStatsImg.subB}
                    </Typography>
                    : null}

            </CardContent>

        </CardComponentStatImg >
    )
}

export default CardStatsImg