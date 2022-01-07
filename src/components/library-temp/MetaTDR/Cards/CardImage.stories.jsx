import React from 'react';

import  CardImage from './CardImage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Componentes/Cards/CardImage',
  component: CardImage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
   // backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <CardImage {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  Titulo: "Titulo Card",
  Descripcion: 'asdasdasdasdasdasd descripcion adasdasdasdasdas',
  Fecha:"10/10/2021",
  TextoBoton:"Ver"
};



