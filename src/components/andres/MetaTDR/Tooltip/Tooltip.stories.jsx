import React from 'react';
import CircleIcon from "@mui/icons-material/Circle";
import { Tooltip } from "./Tooltip";


export default {
  title: 'MetaTDR/Tooltip/Tooltip',
  component: Tooltip,

  argTypes: {
    
  
  },
};




const datos = [
  {label:"Impuesto inicial",value:"$ 38700",tipo:"titulo"},


  {
    label: "Descuentos",
    value: [{ value: "$ 11400", label: "30% por estar al dia" },
    { value: "$ 3400", label: "15% por cuota unica" }],
    tipo: "lista"
  }


  ,
  { label: "Total a pagar", value: "21093", tipo: "totalizador" },

  { label: "Sin el 5% de descuento extra de las buenas prácticas agropecuarias.", value: "", tipo: "info" },

  {
    label: "planes",
    value: [
      { value: "A vencer", label:"Planes",estado:"Estado", color:<CircleIcon style={{color:"green"}} fontSize="small"/> },
      { value: "no apta para plan", label: "Vencida", estado:"Estado",color: <CircleIcon style={{color:"red"}} fontSize="small"/> }],
    tipo: "listaPlanes"
  }


]


const Template = (args) => <Tooltip {...args} />;

export const Tooltipp = Template.bind({});




Tooltipp.args = {
  datos: datos,
  vencido:false,
  
  
};