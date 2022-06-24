import {React} from 'react'
import FullWidth from 'components/andres/MetaTDR/Titles/js/TitulosHome/Desktop/FullWidth'
import CardStats from 'components/andres/MetaTDR/Cards/jsPrimary/CardStats'
import Buttons from 'components/andres/MetaTDR/Buttons/Butttons/Buttons';
import {useNavigate,useLocation} from 'react-router-dom'
import styled from 'styled-components'
export default function IngresosBrutos() {
    let datosTitulosHome ={
      sub:"Ingresos Brutos",
      descripcion:"Podés seleccionar el trámite del listado o agilizar la búsqueda ingresando las primeras tres o más letras de la palabra que buscás."
    }  

    let datosActividades = ["Alta de actividad","Adhesión al Régimen Simplicado (Monotributo Unificado)","Premio Tragamonedas","Regimen local"]
  

    let navigate = useNavigate();
    let location = useLocation();

    const handleNavigate = (ruta) => {
      navigate(`${location.pathname + '/' + ruta} `);
    }
  return (
    <Styled>
    
    
    <div className="container">
      <section className="section">
        <FullWidth datosTitulosHome={datosTitulosHome} />
      </section>
      <section className="">
      
        <div className="row  justify-content-center d-flex">
          <div className="subtitle">
            Los mas buscados
          </div>
          {datosActividades.map((item, index) => {
            let datosCardStats={
              titulo:item,

              
              button:<Buttons valur={item}  onClick={(e)=>{console.log("NAvigate for " + e.target.value)}} primary line text="Mas información"></Buttons>
            }
            return (
              <div className="col-3">
                <CardStats
                 datosCardStats={datosCardStats}
                ></CardStats>

              </div>
            )
          }
          )}
        </div>
      </section>
    </div>
    </Styled>
  )
}

const Styled = styled.div`
  .subtitle{
    font-family: 'SF UI Text';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 150%;
/* identical to box height, or 24px */

margin:15px;
align-items: center;

/* Single Tone/darkText */

color: #27272A;
  }

`