import React from 'react'
import {useParams,useLocation,useNavigate} from 'react-router-dom'
import FullWidth from 'components/andres/MetaTDR/Titles/js/TitulosHome/Desktop/FullWidth';
import Buttons from 'components/andres/MetaTDR/Buttons/Butttons/Buttons';
import CardStats from '../components/andres/MetaTDR/Cards/jsPrimary/CardStats';
import InputSearch from '../components/andres/MetaTDR/InputSearch/InputSearch';
import styled from 'styled-components';





export default function ItemTramite() {
    let params = useParams();
    let location = useLocation();
    let navigate = useNavigate();
      let datosActividades = ["Alta de actividad","Adhesión al Régimen Simplicado (Monotributo Unificado)","Premio Tragamonedas","Regimen local"]

    console.log('params ' + params.tramiteId);
    console.log('location ' + location.pathname);
    let title = params.tramiteId

    let datosTitulosHome = {
		sub: params.tramiteId,
		descripcion:
			'Podés seleccionar el trámite del listado o agilizar la búsqueda ingresando las primeras tres o más letras de la palabra que buscás.'
	};

    let dataInput = [
        {
            label: 'IIBB',
            subLabel: 'Ingresos Brutos',
        },
        {
            label: 'CUIT',
            subLabel: 'CUIT',
        },
        {
            label: 'Razón Social',
            subLabel: 'Razón Social',
        }

        
    ]


  return (
    <Style>
        <div className="container">
      <section className="section my-5">
        <FullWidth datosTitulosHome={datosTitulosHome} />
        
        <div className="d-flex justify-content-center">
            <div className="col-6">
                <div className="title-search">Eliga el tramite que desea realizar </div>
                <InputSearch dataInput={dataInput} placeholder={'Buscar...'}/>
            </div>
        </div>
      </section>


      <section className="my-5">
      
        <div className="row  justify-content-center d-flex">
          <div className="subtitle m-3">
            Los mas buscados
          </div>
          {datosActividades.map((item, index) => {
            let datosCardStats={
              titulo:item,

              
              button:<Buttons value={item}  onClick={(e)=>{console.log("NAvigate for " + e)}} primary line text="Mas información"></Buttons>
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
    </Style>
  )
}

const Style = styled.div`
    .title-search{
        margin:8px 0;
        font-family: 'SF UI Text';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 150%;
/* identical to box height, or 27px */

display: flex;
align-items: center;

/* Single Tone/darkText */

color: #27272A;

    }

`