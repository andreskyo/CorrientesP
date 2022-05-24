import React from 'react';
import { CardsPrimary } from "./CardsPrimary";
import { Buttons } from '../Buttons/Butttons/Buttons';
import { Typography } from '@mui/material';
import RoundeCardImg from './img/RoundeCardImg.png';
import Google from './img/Google.png';
import TodayIcon from '@mui/icons-material/Today';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';



export default {
    title: 'MetaTDR/Cards/CardsPrimary',
    component: CardsPrimary,
    argTypes: {

    },
};


const datosCardInfoFull = {
    descripcion: "Percepciones - Monto a pagar",
    tagsMora: <Chip className="chipCard" label="En mora" color="error" />,
    monto: "$1.512.739",
    incumplidas: "54 DDJJ incumplidos",
    buttonDetalle: "Ver detalle",
    handleClickDetalle: () => { alert("detalle") },
    handleClickSetting: () => { alert("setting") }
}

const datosCardInfoBasic = {
    descripcion: "Agentes de Retención de IIBB",
    incumplidas: "Período - Octubre",
    icon: <TodayIcon />,
    handleClickSetting: () => { alert("setting") }
}

const datosCardInput = {
    descripcion: "Headline",
    incumplidas: "Paste your text here and use it.",

    buttonUpload:
        <Button
            className="ButonSubirArchivo"
            disableRipple
            primary
            endIcon={<CloudDownloadOutlinedIcon />}
            variant="outlined"
            onClick={() => alert("Subir archivo")}
        >Subir Archivo
        </Button>,

    ButtonInput:
        <Buttons
            primary
            size="large"
            text="Button"
            variant="contained"
            component="span" />

}

const datosCardImg = {
    img: <img src={RoundeCardImg} className="img-fluid" />,
    titulo: "Percepciones - Monto a pagar",
    iconText: <TodayIcon className="icont" />,
    subtitulo: "13/10/2021",
    descripcion: "Write an amazing description in this dedicated card section. Each word counts.",
    buttonVerMas: "Ver más",
    onClick: () => { alert("ver mas") },
}

const datosCardStats = {
    titulo: "Headline",
    avatarImg: <TodayIcon />,
    descripcion: "Lorem impsum dolor",
    button: "Mas informacion",
    onClick: () => alert("Mas informacion"),
}

const datosCardText = {
    agente: <Typography><p className="title">Agente:</p> <p className="sub">Juan Martínez</p></Typography>,
    cuit: <Typography><p className="title">Cuit:</p> <p className="sub">20-32456876</p></Typography>,
    establecimiento: <Typography><p className="title">Establecimiento:</p> <p className="sub">000</p></Typography>

}

const datosVencimiento = {
    fecha: <Typography className="text-center"><p className="title m-0">22</p> <p className="sub">Febrero</p></Typography>,
    vencimientos: <Typography className="text-center"><p className="vencimiento">Inmobiliario Urbano Edificado: Cuota 1 y Anual Inmobiliario Urbano Edificado: Cuota 1 y Anual</p></Typography>
}

const datosProgress = {
    icon: <img src={Google} />,
    onClick: () => { alert("setting") },
    title: "Headline",
    value: "25",
    maxValue: "50",
}

{
    button: <Button
     className="button"
     disableRipple
     endIcon={<ArrowForwardIosIcon
         onClick={() => (alert("hola"))} />}>
     Action
 </Button>}

const datosSetting = {
  titulo:"Headline",
  sub:"Write text here and switch everything.",
    
    buttons: [
        { button: <Button
            className="button"
            disableRipple
            endIcon={<ArrowForwardIosIcon
                onClick={() => (alert("hola"))} />}>
            Action
        </Button> },
        { button: <Button
            className="button"
            disableRipple
            endIcon={<ArrowForwardIosIcon
                onClick={() => (alert("hola"))} />}>
            Action
        </Button> },
        { button: <Button
            className="button"
            disableRipple
            endIcon={<ArrowForwardIosIcon
                onClick={() => (alert("hola"))} />}>
            Action
        </Button> },]
  }
  




const Template = (args) => <CardsPrimary {...args} />;
export const CardPrimary = Template.bind({});




CardPrimary.args = {
    cardInfoFull: false,
    cardInfoBasic: false,
    cardInput: false,
    cardImg: false,
    cardStats: false,
    cardText: false,
    cardVencimiento: false,
    cardProgress: false,
    cardSetting:false,
    datosCardInfoFull: datosCardInfoFull,
    datosCardInfoBasic: datosCardInfoBasic,
    datosCardInput: datosCardInput,
    datosCardImg: datosCardImg,
    datosCardStats: datosCardStats,
    datosCardText: datosCardText,
    datosVencimiento: datosVencimiento,
    datosProgress: datosProgress,
    datosSetting: datosSetting

};