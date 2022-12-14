import { CountertopsSharp } from '@mui/icons-material';
import React from 'react';
import { CardPagos } from "./CardPagos";
import MercadoPago from './img/MercadoPago.png';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';


export default {
  title: 'MetaTDR/Cards/CardPagos',
  component: CardPagos,
  argTypes: {

  },
};

const datosPagosMobile = {
  icon: MercadoPago,
  titulo: "Débito automático con CBU",
  descripcion: <>
    <p className="descripcio">¡Ahorra $32200 extras!</p>
    <p className="descripcion">Todas las tarjetas y hasta 6 cuotas sin interés con Cordobesa o Visa Bancor</p>
  </>
}

const datosPagosGateWay = {
  icon: <ArrowBackIosIcon />,
  titulo: "Vas a realizar el pago de",
  sub: "$ 6.200",
  subB: "$ 6.200",
  descripcion: "1 cuotas a vencer",
  descripcionB: "Incluye 30% por estar al día",
  onClick: () => { alert("arrow") }

}

const datosPagoDesktop = {
  icon: <CreditCardIcon className="icon" />,
  titulo: "Online",
  sub: "$ 12.44714",
  descripcion: "Incluye 5% de descuento",
  descripcionB: "Incluye 5% de descuento",
  iconB: <InfoOutlinedIcon className="iconB" />

}

const Template = (args) => <CardPagos {...args} />;
export const CardsPago = Template.bind({});




CardsPago.args = {
  cardPagosMobile: false,
  cardPagosGateWayMobile: false,
  cardPagosDesktop: false,
  datosPagosMobile: datosPagosMobile,
  datosPagosGateWay: datosPagosGateWay,
  datosPagoDesktop: datosPagoDesktop

};