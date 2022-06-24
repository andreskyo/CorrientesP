import React from 'react'
import styled from "styled-components";



const ComponentTituloHome = styled.div`
width:100%;
flex-direction:column;




.text{


   .titulo{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: #A8A29E;
   }
   .sub{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 150%;
    color: #27272A;
    
  }
   .descripcion{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #27272A;
    
   }
}

`

const TituloStart = (props) => {
  return (

    <ComponentTituloHome>

      {props.datosTitulosHome.titulo || props.datosTitulosHome.sub || props.datosTitulosHome.descripcion ?
        <div className="text">

          {props.datosTitulosHome.titulo ? <p className="titulo">{props.datosTitulosHome.titulo}</p> : null}
          {props.datosTitulosHome.sub ? <p className="sub">{props.datosTitulosHome.sub}</p> : null}
          {props.datosTitulosHome.descripcion ? <p className="descripcion">{props.datosTitulosHome.descripcion}</p> : null}

        </div>
        : null}
      {props.datosTitulosHome.button ?
        <div className="button">
          {props.datosTitulosHome.button}
        </div>
        : null}
    </ComponentTituloHome>

  )
}

export default TituloStart