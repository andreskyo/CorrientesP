import React from 'react'
import styled from "styled-components";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';




const CardComponentInfo = styled(Card)`
&&{
    background: #FFFFFF;
    box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
    border-radius: 16px;
}


.tag{
    background: #DC2626;
    border-radius: 4px;
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    color: #F3F4F6;
    margin-left:5px;
    
}

.css-1qvr50w-MuiTypography-root{
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: #94A3B8;
    margin-bottom:0px;
    margin-top:-15px;
    height:0px;
    
}
    
`


const CardContentInfo = styled(CardContent)`
&&{
    margin-top:-20px;
}

.sub{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 150%;
    color: #27272A;
    
    
}

.descripcion{
   font-family: 'Nunito';
   font-style: normal;
   font-weight: 500;
   font-size: 14px;
   line-height: 23px;
   font-feature-settings: 'salt' on;
   color: #78716C;
}

.boton{
    margin-left:-7px;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #0077E6;
    &&:hover{
       text-decoration:underline; 
    }
}
`

const CardInfoFull = (props) => {

    return (
        <CardComponentInfo>
            <CardHeader className="cardHeader"

                action={
                    props.datosCardInfoFull ?
                        <IconButton
                            disableRipple
                            aria-label="settings"
                        >

                            {props.datosCardInfoFull.iconSetting}

                        </IconButton>
                        : null
                }
                title={

                    <>
                        {props.datosCardInfoFull.titulo ? props.datosCardInfoFull.titulo : null}

                        {props.datosCardInfoFull.tag ?
                            <Chip
                                className="tag"
                                label={props.datosCardInfoFull.tag}
                                color="error" />
                            : null}
                    </>

                }



            />
            <CardContentInfo>

                {props.datosCardInfoFull.sub ?
                    <Typography
                        className="sub"
                        variant="h5"
                        component="div">
                        {props.datosCardInfoFull.sub}
                    </Typography>
                    :
                    null}

                {props.datosCardInfoFull.sub ?
                    <Typography
                        className="descripcion"
                        color="text.secondary">
                        {props.datosCardInfoFull.descripcion}
                    </Typography>
                    :
                    null}

                <div className="container-button">
                    {props.datosCardInfoFull.button ? props.datosCardInfoFull.button:null}
                </div>
            </CardContentInfo>

        </CardComponentInfo>
    )
}

export default CardInfoFull