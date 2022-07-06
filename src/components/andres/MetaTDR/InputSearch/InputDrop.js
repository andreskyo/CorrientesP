import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';




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
  height:auto;
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
 right: 3px;
 top: 8px;
 cursor:pointer; 
 
 `


export const InputDrop = (props) => {
  const span = useRef(null);
  const container = useRef(null);

  spanContainer(span,container);

  const [data, setData] = useState(props.dataInput)
  const [texto, setText] = useState();
  const [suggestions, setSuggestions] = useState([]);


  function spanContainer(span, container) {
    useEffect(() => {
      
      function handleClickOutside(event) {
        if (!span.current.contains(event.target)&& !container.current.contains(event.target)) {
          setSuggestions([])
        }

      }

      document.addEventListener("mousedown", handleClickOutside);

    }, []);
  }

  
 

  const onSuggestHandler = (label, value) => {
    if (props.onClick) {
      props.onClick(label, value)
    }

    setText([`${label}`])

    setSuggestions([]);
  }


  const onChangeHandler = (texto) => {
    if (props.onChange) {
      props.onChange(texto)
    }

    if (data.length > 0) {
      let matches = []

      matches = data.filter((res) => {
        return res.label.toLowerCase().includes(texto.toLocaleLowerCase())
      })

      if (texto.length > 0) {
        setSuggestions(matches)
      } else {
        setSuggestions([])
      }
    }
    setText(texto)
  }



  const handleClick = () => {

    if (suggestions.length == 0) {
      if (props.onClick) {
        data.map((res) => {
          { props.onClick(res.label, res.value) }
        })
      }
      setSuggestions(data)
    } else {
      setSuggestions([])
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


        <Span
          className="span"
          onClick={handleClick}
          ref={span}>
          <KeyboardArrowDownIcon />
        </Span>


        <div className="containerResult" ref={container}>
          {suggestions && suggestions.map((suggestions, i) =>

            <p

              className="dataResult"
              key={i}
              onClick={() => onSuggestHandler(suggestions.label, suggestions.value)}>
              {`${suggestions.label}`}
            </p>
          )}

        </div>

      </div>
    </ComponentInputSearch>
  )
}


export default InputDrop