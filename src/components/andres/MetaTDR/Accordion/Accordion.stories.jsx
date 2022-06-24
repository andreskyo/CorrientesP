import React from 'react';
import Accordion  from "./Accordion";
export default {
  title: 'MetaTDR/Accordion/Accordion',
  component:Accordion,

  argTypes: {
  },
};

const datosAccordion=[{
  titulo:"Resoluciones",
  descripcion:"Para inciar expedientes desde un lugar donde este Organismo no cuenta con Puestos de Atención al Contribuyente, puede enviar la documentacion respectiva el trámite por correo postal a la Dirección General de Rentas de la Provincia de Corrientes:25 de mayo 902-Planta Baja-Código Postal 3.400. Para inciar expedientes desde un lugar donde este Organismo no cuenta con Puestos de Atención al Contribuyente, puede enviar la documentacion respectiva el trámite por correo postal a la Dirección General de Rentas de la Provincia de Corrientes:25 de mayo 902-Planta Baja-Código Postal 3.400. Para inciar expedientes desde un lugar donde este Organismo no cuenta con Puestos de Atención al Contribuyente, puede enviar la documentacion respectiva el trámite por correo postal a la Dirección General de Rentas de la Provincia de Corrientes:25 de mayo 902-Planta Baja-Código Postal 3.877980.",

}
,
{
titulo:"Resoluciones",
descripcion:"Para inciar expedientes desde un lugar donde este Organismo no cuenta con Puestos de Atención al Contribuyente, puede enviar la documentacion respectiva el trámite por correo postal a la Dirección General de Rentas de la Provincia de Corrientes:25 de mayo 902-Planta Baja-Código Postal 3.400.",

},
{titulo:"Resoluciones",
descripcion:"Para inciar expedientes desde un lugar donde este Organismo no cuenta con Puestos de Atención al Contribuyente, puede enviar la documentacion respectiva el trámite por correo postal a la Dirección General de Rentas de la Provincia de Corrientes:25 de mayo 902-Planta Baja-Código Postal 3.400.",

},
{titulo:"Resoluciones",
descripcion:"Para inciar expedientes desde un lugar donde este Organismo no cuenta con Puestos de Atención al Contribuyente, puede enviar la documentacion respectiva el trámite por correo postal a la Dirección General de Rentas de la Provincia de Corrientes:25 de mayo 902-Planta Baja-Código Postal 3.400.",

},]

const Template = (args) => <Accordion {...args} />;
export const Accordions = Template.bind({});

Accordions.args = {
datosAccordion:datosAccordion



};
