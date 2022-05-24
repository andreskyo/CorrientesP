import React from 'react'
import styled from "styled-components";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Buttons } from '../../Buttons/Butttons/Buttons';



const CardComponentInfo = styled(Card)`

.css-1l0ckzb-MuiChip-root{
    background: #DC2626;
    border-radius: 4px;
    font-style: normal;
    font-weight: 500;
    width: 70px;
    height: 22px;
    font-size:12px;
    color: #F3F4F6;
}
.css-1qvr50w-MuiTypography-root{
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    font-size: 11px;
    line-height: 16px;
    color: #94A3B8;
}
    background: #FFFFFF;
    box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
    border-radius: 16px;
`


const CardContentInfo = styled(CardContent)`
@font-face {
    font-family:FontsFree-Net-sf-ui-text-regular-58646b56a688c ;
    src: url('../../../../.storybook/Fonts/FontsFree-Net-sf-ui-text-regular-58646b56a688c');
}



.monto{
    margin-top: -20px;
    font-size: 20px;
    line-height: 150%;
    font-family: 'FontsFree-Net-SF-UI-Text-Semibold';
    font-weight: bold;
    color: #27272A;
}
.incumplidas{
   font-family: 'Nunito';
   font-style: normal;
   font-weight: 400;
   line-height: 23px;
   color: #78716C;
   font-family: 'Nunito';
   font-size: 14px;

}
.fCCzJv.fCCzJv{
    margin-left: -7px;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
    font-weight: 600;
    font-size: 12px;
    color: #0077E6;
}
`

const CardInfoFull = (props) => {

    return (
        <CardComponentInfo className="container-fluid m-0">
            <CardHeader className="cardHeader"

                action={

                    <IconButton
                        disableRipple
                        aria-label="settings"
                        >
                        <MoreVertIcon
                            style={{ marginTop: "2px" }}
                            onClick={props.datosCardInfoFull.handleClickSetting}
                            disableRipple/>
                    </IconButton>
                }
                title={<>{props.datosCardInfoFull.descripcion} {props.datosCardInfoFull.tagsMora}</>}



            />
            <CardContentInfo>


                <Typography
                    className="monto"
                    variant="h5"
                    component="div">
                    {props.datosCardInfoFull.monto}
                </Typography>

                <Typography
                    className="incumplidas"
                    color="text.secondary">
                    {props.datosCardInfoFull.incumplidas}
                </Typography>

                <Buttons
                    text={props.datosCardInfoFull.buttonDetalle}
                    onClick={props.datosCardInfoFull.handleClickDetalle}
                    line />
            </CardContentInfo>

        </CardComponentInfo>
    )
}

export default CardInfoFull