import React from 'react'
import styled from "styled-components";




const ComponentTitle = styled.div`
display:flex;
width: 100%;
align-items: baseline;

.iconUno{
  align-self:flex-start;
  
}

.iconDos{
  align-self:flex-start;
  display:block;
}
 
.text{
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  width:100%;
  .titulo{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: #27272A;
    margin:0px;
    }
   .sub{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #78716C;
    
    margin:0px;
    padding-top:5px;
  }  
}
`



const Title = (props) => {
  return (
    <ComponentTitle>

      {props.datosTitle.iconUno ?
        <div className="iconUno">

          {props.datosTitle.iconUno}

        </div>
        : null}

      {props.datosTitle.titulo || props.datosTitle.sub ?
        <div className="text">

          {props.datosTitle.titulo ?
            <h1 className="titulo">{props.datosTitle.titulo}</h1>
            : null}

          {props.datosTitle.sub ?
            <p className="sub">{props.datosTitle.sub}</p>
            : null}

        </div>
        : null}

      {props.datosTitle.iconDos ?
        <div className="iconDos"
          onClick={props.datosTitle.onClickSetting}
          style={{ cursor: "pointer" }}>

          {props.datosTitle.iconDos}

        </div>
        : null}

    </ComponentTitle>
  )
}

export default Title