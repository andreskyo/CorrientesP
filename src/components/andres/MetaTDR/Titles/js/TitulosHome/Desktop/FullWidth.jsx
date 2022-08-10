import React from 'react'

import styled from "styled-components";
import { Buttons } from '../../../../Buttons/Butttons/Buttons';



const ComponentTituloHome = styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center ;




.text{
display:flex;
flex-direction:column;
align-items:center ;
text-align:center;

   .titulo{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: #A8A29E;
    
    
   }
   .sub{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 150%;
    color: #27272A;
    
    
  }
   .descripcion{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #27272A;
    
   }
}

.button{
    align-self:center ;
}

`

const FullWidth = (props) => {
    return (
        <ComponentTituloHome>
            {props.datosTitulosHome.titulo || props.datosTitulosHome.sub || props.datosTitulosHome.descripcion ?
                <div className="text">

                    {props.datosTitulosHome.titulo ? <p className="titulo mb-0 mt-5">{props.datosTitulosHome.titulo}</p> : null}
                    {props.datosTitulosHome.sub ? <p className="sub mb-0">{props.datosTitulosHome.sub}</p> : null}
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

export default FullWidth