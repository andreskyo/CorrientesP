import React from 'react';
import CardVencimientos from './CardVencimientos'

export default {
    title: 'Componentes/Cards/CardVencimientos',
    component: CardVencimientos,
  };

const Template = (args) =><CardVencimientos {...args} />
export const Primary = Template.bind({});

Primary.args = {}