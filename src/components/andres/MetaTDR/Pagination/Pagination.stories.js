import React from 'react';

import { Pagination } from "./Pagination";


export default {
    title: 'MetaTDR/Pagination/Pagination',
    component: Pagination,

    argTypes: {

    },
};

const datos = [
    {
        nombre: "kyo",
        apellido: "brashich"
    },
    {
        nombre: "kyo",
        apellido: "brashich"
    },
    {
        nombre: "kyo",
        apellido: "brashich"
    },
    {
        nombre: "kyo",
        apellido: "brashich"
    },
    {
        nombre: "kyo",
        apellido: "brashich"
    }
]

const Template = (args) => <Pagination{...args} />;

export const Paginacion = Template.bind({});




Paginacion.args = {
    color: "primary",
    size: "large",
    page: 1,
    onChange:(a)=>{console.log(a)},
    datos:datos



};