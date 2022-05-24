import React from 'react';

import {Slideer} from "./Slideer";


export default {
  title: 'MetaTDR/Slideer/Slideer',
  component: Slideer,
 
  argTypes: {
    
     },
};


const Template = (args) => <Slideer{...args} />;

export const Slideeer = Template.bind({});

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 100,
    label: '100',
  }
 
];


Slideeer.args = {
  slider:false,
  disabled:false,
  markss:false,
  typograPhy:true,
  labelDisplay:'on',
  value:0,
  onChange:(a)=>{console.log(a)},
  marks:marks,
  valueRange:[0,10]

  
 

 };