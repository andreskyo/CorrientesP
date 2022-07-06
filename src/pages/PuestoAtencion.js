import CardBorderCut from 'components/common/CardBorderCut';
import {React,useState,useEffect} from 'react'

import FullWidth from '../components/andres/MetaTDR/Titles/js/TitulosHome/Desktop/FullWidth';

export default function PuestoAtencion() {

let  datosTitulosHome = {
    titulo: "Novedades",
    sub:"Puesto de atención",
    descripcion: "Enterate de las últimas noticias de los puestos de atención Presencial y No Presencial de la Provincia de Corrientes."
}

 return(<section className="container" >
 
    <FullWidth   datosTitulosHome={datosTitulosHome} />
    
    <CardBorderCut/>
 </section>)
}
