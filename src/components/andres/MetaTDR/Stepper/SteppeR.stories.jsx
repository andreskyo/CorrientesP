import React from 'react';

import {SteppeR} from "./SteppeR";


export default {
  title: 'MetaTDR/Stepper/SteppeR',
  component: SteppeR,
 
  argTypes: {
    
     },
};


const Template = (args) => <SteppeR {...args} />;

export const Step = Template.bind({});

const labelArray=[

  {label:'Step 1',description:'Step 1 Description '},
  {label:'Step 2',description:'Step 2 Description '}, 
  {label:'Step 3',description:'Step 3 Description '},
  {label:'Step 4',description:'Step 4 Description '},
  {label:'Step 5',description:'Step 5 Description '},
]




Step.args = {
 horizontal:false, 
 labelArray:labelArray,
 activeStep:0,
 
 onChange:(a)=>{console.log(a)},
 };