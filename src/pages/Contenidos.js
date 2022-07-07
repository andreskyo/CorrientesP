import {React,useState,useEffect} from 'react'
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import FullWidth from 'components/andres/MetaTDR/Titles/js/TitulosHome/Desktop/FullWidth';
import { useNavigate,useLocation,useParams } from 'react-router';


export default function Contenidos(props) {
  const navigate = useNavigate();
  const location = useLocation();

  const baseURL = window.config.baseURL;
  
  console.log("navigate",navigate);
  console.log("location",location.state);
  console.log("params",useParams);
     const [datos, setDatos] = useState({});
  
  useEffect(() => {
    axios.get(`${baseURL}${location.state.api}`)
    .then(res =>setDatos(res.data.data.attributes))
    .catch(err => console.log(err));
  }, []);

  //console.log("Datos " + JSON.stringify(datos));
  console.log("titulos " , datos)
  const datosTitulosHome = {
 
    sub: datos.titulo,

  }
  

  return (
    <div className="container"> 
      <FullWidth datosTitulosHome={datosTitulosHome}></FullWidth>
     <div>{ReactHtmlParser(datos.contenido) }</div>
      
    </div>
  
  )
}
