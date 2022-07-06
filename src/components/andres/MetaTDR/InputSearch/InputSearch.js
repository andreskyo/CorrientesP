
import React, { useState } from "react";
import styled from "styled-components";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';

import Buttons from '../Buttons/Butttons/Buttons';

const ComponentInputSearch = styled.div`
&&{
display:flex;
width:100%;

}

.containerInput{
  position: relative;
  width:100%;
  .input{
    width:100%;
    font-family: 'Nunito';
    font-weight: 600;
    background: #EBEEF2;
    border: 1px solid #DADEE3;
    border-radius: 10px;
    padding:10px;
    font-size: 13px;
  &:focus{
    outline: 2px solid #0083FF;
    border-radius: 10px;
   }
  
  }
}
.containerResult{
  padding:5px;
  
  width:100%;
  
  z-index:1 ;
  overflow-x: hidden;
  overflow-y: auto;
  cursor:pointer;
    .dataResult{
     padding:10px;
     font-family: 'Nunito';
     font-style: normal;
     font-weight: 600;
     font-size: 13px;
     line-height: 13px;
     display: flex;
     align-items: center;
     color: #A5ABB3;
     margin:0px;
  &:hover{
    background:#0083FF;
  }
 }
}


`
const Span = styled.span`
 position:absolute;
  top:.2rem;
  right:.3rem;

 cursor:pointer; 
 
 `


export const InputSearch = (props) => {

  const [data, setData] = useState(props.dataInput)
  const [texto, setText] = useState();
   const [dataSeleccionada, setDataSeleccionada] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const onSuggestHandler = (label, subLabel) => {
    console.log(label, subLabel)
    setDataSeleccionada(label);

    setText([`${label} ${subLabel}`])

    setSuggestions([]);
  }


  const onChangeHandler = (texto) => {
    if (props.onChange) {
      props.onChange(texto)
    }

    let matches = []

    matches = data.filter((res) => {
      return res.label.toLowerCase().includes(texto.toLocaleLowerCase()) || res.subLabel.toLowerCase().includes(texto.toLocaleLowerCase())
    })

    if (texto.length > 0) {
      setSuggestions(matches)
    } else {
      setSuggestions('')
    }
    setText(texto);
    setDataSeleccionada(texto);
  }


  const handleClick = () => {
      alert("click")
     if (props.onClick) {
        props.onClick(dataSeleccionada, dataSeleccionada)
    }
    setSuggestions(data)
  }

  const isDisabled = () => {
    if (dataSeleccionada.length > 0) {
      return false
    } else {
      return true
    }
  }

  return (
    <ComponentInputSearch>
      <div className="containerInput">

        <input
          type={props.type}
          className="input"
          placeholder={props.placeholder}
          onChange={e => onChangeHandler(e.target.value)}
          value={texto} />

        {props.buttonSearch ?
           <Span>
           <Buttons
								primary
								addIcon
								onClick={handleClick}//icono boton buscar sin datos para enviar 
								icon={<SearchIcon />}
                disabled={isDisabled()}
							/>
           </Span>
           
         

          :

          <Span
            className="span"
            onClick={()=>onChangeHandler()}>
            <KeyboardArrowDownIcon/>
          </Span>
        }

        <div className="containerResult" >
          {suggestions && suggestions.map((suggestions, i) =>

            <p
              className="dataResult"
              key={i}
              onClick={() => onSuggestHandler(suggestions.label, suggestions.subLabel)}>
              {`${suggestions.label} ${suggestions.subLabel}`}
            </p>
          )}

        </div>

      </div>




    </ComponentInputSearch>
  )
}

export default InputSearch