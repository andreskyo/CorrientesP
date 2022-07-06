import React from 'react';
import CardVencimiento from '../CardVencimiento/CardVencimiento';




export default {
  title: 'MetaTDR/Cards/CardVencimiento',
  component: CardVencimiento,

  argTypes: {

  },
};

const datos = {
    titulo: "22",
    sub: "Febrero",
    descripcion:
        [{
            label: "Cuota:",
            value: "01"
        },
        {
            label: "Terminación de CUIT:",
            value: "Todos",
        },
        {
            label: "Tipo:",
            value: "Pago/Pres"
        }
        ]

}




const Template = (args) => <CardVencimiento {...args} />;

export const vencimientoCard = Template.bind({});


vencimientoCard.args = {
datos:datos


};