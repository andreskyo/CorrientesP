import React from 'react';
import Pruebas from './Pruebas'

export default {
    title: 'Componentes/Cards/Pruebas',
    component: Pruebas,
  };

const Template = (args) =><Pruebas {...args} />
export const Primary = Template.bind({});

Primary.args = {}