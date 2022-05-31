import React from 'react';
import { CardsPrimary } from "./CardsPrimary";
import { Buttons } from '../../MetaTDR/Buttons/Butttons/Buttons';
import RoundeCardImg from './img/RoundeCardImg.png';
import Google from './img/Google.png';
import Smile from './img/Smile.png';
import TodayIcon from '@mui/icons-material/Today';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Divider from '@mui/material/Divider';


export default {
    title: 'MetaTDR/Cards/CardsPrimary',
    component: CardsPrimary,
    argTypes: {

    },
};


const datosCardInfoFull = {
    titulo: "Percepciones - Monto a pagar",
    sub: "$1.512.739",
    tag: "En mora",
    descripcion: "54 DDJJ incumplidos",
    button: <Buttons line text="Ver detalle" className="boton" onClick={() => alert("detalle")} />,
    iconSetting: <MoreVertIcon disableRipple onClick={() => { alert("setting") }} style={{ color: "black" }} />

}



const datosCardInfoBasic = {
    titulo: "Agentes de Retención de IIBB",
    sub: "Período - Octubre",
    icon: <TodayIcon />,
    iconSetting: <MoreVertIcon disableRipple onClick={() => { alert("setting") }} style={{ color: "black" }} />
}



const datosCardInput = {
    titulo: <p className="titulo">Headline<span className="spanTitulo">Label</span></p>,
    sub: "Paste your text here and use it.",
    icon: <CloudDownloadOutlinedIcon />,
    button: <Buttons outlined primary onClick={() => { alert("subir") }} endIcon={<CloudDownloadOutlinedIcon />} text={"Subir Archivo"} className="boton" />,
    input: "Button"
}




const datosCardImg = {
    img: RoundeCardImg,
    titulo: "Headline",
    iconSub: <TodayIcon className="icont" />,
    sub: "13/10/2021",
    descripcion: "Write an amazing description in this dedicated card section. Each word counts.",
    button: <Buttons
        className="boton"
        medium
        onClick={() => { alert("ver mas") }}
        text={"Ver más"}
        primary
        outlined />,

}

const datosCardStats = {
    titulo: "Headline",
    sub: "Lorem impsum dolor",
    icon: <DirectionsCarIcon />,
    button: <Buttons
        onClick={() => alert("Mas informacion")}
        className="button"
        primary
        line
        text={"Mas informacion"} />,

}

const datosCardText = {
    tituloA: "Agente",
    descripcionA: "Juan Martínez",
    tituloB: "CUIT",
    descripcionB: "20-32456876",
    tituloC: "Establecimiento",
    descripcionC: "000",
}

const datosVencimiento = {
    titulo: "22",
    sub: "Febrero",
    descripcion: "Inmobiliario Urbano Edificado: Cuota 1 y Anual",
    divider: <Divider variant="middle" />
}

const datosProgress = {
    icon: Google,
    iconSetting: <MoreHorizIcon onClick={() => alert("setting")} style={{ color: "black" }} />,
    titulo: "Headline",
    value: "25.5",
    maxValue: "50",
}



const datosSetting = {
    titulo: "Headline",
    sub: "Write text here and switch everything.",

    buttonss: [
        {
            button: <Buttons
                line
                className="button"
                disableRipple
                endIcon={<ArrowForwardIosIcon
                    onClick={() => (alert("hola"))} />}
                text="Action"/>

            
        },
        {
            button: <Buttons
                line
                className="button"
                disableRipple
                endIcon={<ArrowForwardIosIcon
                    onClick={() => (alert("hola"))} />}
                text="Action"/>

            
        },
        {
            button: <Buttons
                line
                className="button"
                disableRipple
                endIcon={<ArrowForwardIosIcon
                    onClick={() => (alert("hola"))} />}
                text="Action" />

            
        },]
}


const datosList = {
    titulo: "00990000",
    descripcion: "Servicios de organizaciones y órganos extraterritoriales",
    sub: "Alic.: 1.5"

}

const datosInfo = {
    icon: Smile,
    titulo: "Headline label",
    iconSetting: <MoreHorizIcon disableRipple onClick={() => { alert("setting") }} style={{ color: "black" }} />
}

const datosStatsImg = {
    icon: <EmojiEmotionsIcon />,
    titulo: "Headline",
    sub: "000.000.000",
    subB: "boost everything",
    tagLabel: "+ 100%",


}
const Template = (args) => <CardsPrimary {...args} />;
export const CardPrimary = Template.bind({});




CardPrimary.args = {
    cardInfoFull: false,
    cardInfoBasic: false,
    cardInput: false,
    cardImg: true,
    cardStats: false,
    cardText: false,
    cardVencimiento: false,
    cardProgress: false,
    cardSetting: false,
    cardList: false,
    cardInfo: false,
    cardStatsImg:false,
    datosCardInfoFull: datosCardInfoFull,
    datosCardInfoBasic: datosCardInfoBasic,
    datosCardInput: datosCardInput,
    datosCardImg: datosCardImg,
    datosCardStats: datosCardStats,
    datosCardText: datosCardText,
    datosVencimiento: datosVencimiento,
    datosProgress: datosProgress,
    datosSetting: datosSetting,
    datosList: datosList,
    datosInfo: datosInfo,
    datosStatsImg: datosStatsImg

};