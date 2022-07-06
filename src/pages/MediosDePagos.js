import {React,useState,useEffect} from 'react'
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import FullWidth from 'components/andres/MetaTDR/Titles/js/TitulosHome/Desktop/FullWidth';
export default function MediosDePagos() {
  
     const [datos, setDatos] = useState({});
  
  useEffect(() => {
    axios.get('https://api.test.dgrcorrientes.gov.ar/strapibe/api/contenidos/17')
    .then(res => setDatos(res.data.data.attributes.contenido))
    .catch(err => console.log(err));
  }, []);

  console.log("Datos " + JSON.stringify(datos));

  const datosTitulosHome = {
    titulo: "Medios de Pago",
    sub: "Medios de Pago",
    descripcion: "En esta seccion encontraras los medios de pago que necesitas realizar."
  }
  

  return (
    <div className="container"> 
      <FullWidth datosTitulosHome={datosTitulosHome}></FullWidth>
     <div>{ReactHtmlParser(datos) }</div>
      
    </div>
  
  )
}
