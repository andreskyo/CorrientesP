import { TurnSlightLeftSharp } from '@mui/icons-material';
import React from 'react';
import { Titles } from "./Titles";
import { Buttons } from '../../MetaTDR/Buttons/Butttons/Buttons';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SettingsIcon from '@mui/icons-material/Settings';





export default {
  title: 'Titles/Titles',
  component: Titles,

  argTypes: {

  },
};



const datosTitle = {
  titulo: "Detalle de Mis impuestos ",
  sub: "Descargá el comprobante. Encontrá más información",
  onClickSetting: () => { alert("setting") },
  iconUno: <ArrowBackIosNewIcon className="icon" />,
  iconDos: <SettingsIcon />
}

const datosSubTitle = {
  titulo: "Datos de contacto",
  sub: "Los campos con (*) asterísco son obligatorios ",
  button: <Buttons size="large"
    line
    text="Añadir"
    className="boton"
    onClick={() => alert("Añadir")} />,
}

const datosTitulosHome = {
  titulo: "ÚLTIMAS NOTICIAS",
  sub: "Novedades",
  descripcion: "Enterate de las últimas noticias de Rentas Corrientes y accedé a toda la información.",
  button: <Buttons size="large"
    contained
    primary
    text="Ver todo"
    className="boton"
    onClick={() => alert("Ver todo")} />,

}


const Template = (args) => <Titles {...args} />;

export const Title = Template.bind({});


Title.args = {
  title: false,
  subTitle: false,
  titulosHome: false,
  datosTitle: datosTitle,
  datosSubTitle: datosSubTitle,
  datosTitulosHome: datosTitulosHome
};

