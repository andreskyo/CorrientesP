import React from 'react';
import BreadCrumbs from './BreadCrumbs';
import Buttons from '../Butttons/Buttons';





export default {
  title: 'MetaTDR/BreadCrumbs/BreadCrumbs',
  component: BreadCrumbs,

  argTypes: {

  },
};



const datos= [{
  link: <a href="https://www.google.com/">Home</a>
},
{
  link: <a href="https://www.google.com/">Carrito</a>
},
]


const Template = (args) => <BreadCrumbs {...args} />;

export const BreadCrumb = Template.bind({});


BreadCrumb.args = {
 datos:datos,
 className:"breadCrumb",
};
