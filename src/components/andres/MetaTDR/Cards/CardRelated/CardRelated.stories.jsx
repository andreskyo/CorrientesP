import React from 'react';
import CardRelated from '../CardRelated/CardRelated';
import Img from '../img/ImgLatest.png'



export default {
  title: 'MetaTDR/Cards/CardRelated',
  component: CardRelated,

  argTypes: {

  },
};
const datos = {
    img: <img src={Img} alt="img"/>,
    titulo: "Información sobre Puestos de Atención al Contribuyente",
 
}




const Template = (args) => <CardRelated {...args} />;

export const relatedCard = Template.bind({});


relatedCard.args = {
datos:datos,
textStart:true

};
