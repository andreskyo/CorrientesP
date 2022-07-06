import React from 'react';
import InputSearch from '../Input/InputSearch';
import Buttonn from '../Buttons/Butttons/Buttons';
import SearchIcon from '@mui/icons-material/Search';




export default {
  title: 'Input/InputSearch',
  component: InputSearch,

  argTypes: {

  },
};

const dataInput = [
  { pais: "Brasil", presidente: "Jair Messias Bolsonaro" },
  { pais: "México", presidente: "Andrés Manuel López Obrador" },
  { pais: "Argentina", presidente: "Alberto Ángel Fernández" },
  { pais: "Colombia", presidente: "Iván Duque Márquez" },
  { pais: "Chile", presidente: "Gabriel Boric Font" },
  { pais: "Perú", presidente: "José Pedro Castillo Terrones" },
  { pais: "Ecuador", presidente: "Guillermo Alberto Santiago Lasso Mendoza" },
  { pais: "República Dominicana", presidente: "Luis Rodolfo Abinader Corona" },
  { pais: "Guatemala", presidente: "Alejandro Eduardo Giammattei Falla" },
  { pais: "Costa Rica", presidente: "Carlos Andrés Alvarado Quesada" },
];



const Template = (args) => <InputSearch {...args} />;

export const InputS = Template.bind({});


InputS.args = {
 dataInput:dataInput,

 button:<Buttonn 
 primary
 addIcon
 onClick={()=>{alert("button")}}
 icon={<SearchIcon />}/>


};
