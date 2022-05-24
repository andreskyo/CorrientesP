import React from 'react'
import styled from "styled-components";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { grey } from '@mui/material/colors';
import { Buttons } from '../../Buttons/Butttons/Buttons';

const CardComponentStats = styled(Card)`
&&{
    background: #FFFFFF;
    box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
    border-radius: 16px;
}

.css-zcfty8-MuiAvatar-root{
    margin-top:20px;
}

.css-1qvr50w-MuiTypography-root {
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    color: #27272A;
}

.css-nrdprl-MuiTypography-root {
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    color: #78716C;
}

.fCCzJv.fCCzJv {
    font-family: 'Nunito';
    margin-top:0px;
    margin-left:-7px;
    font-weight: 600;
    color: #0077E6;
}    
.css-sgoict-MuiCardHeader-action{
    margin-top:15px;
    
}

`

const CardStats = (props) => {
    return (
        <CardComponentStats className="container-fluid  m-0">

            <CardHeader

                action={

                    <Avatar sx={{ background: "#E2E8F0", color:"#27272A" }} aria-label="recipe">
                        {props.datosCardStats.avatarImg}
                    </Avatar>

                }
                title={props.datosCardStats.titulo}
                subheader={
                    <>
                    
                            {props.datosCardStats.descripcion}
                            
                        <br/>
                            
                        <Buttons
                            
                            onClick={props.datosCardStats.onClick}
                            className="button"
                            primary
                            line
                            text={props.datosCardStats.button} />
                    </>
                }

/>
   


        </CardComponentStats >
    )
}

export default CardStats