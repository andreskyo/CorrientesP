import React, { useState, useEffect } from 'react';
import styled from "styled-components";
//import Button from '../../Buttons/Butttons/Buttons'
import Button from '../Buttons/Butttons/Buttons';
import SearchIcon from '@mui/icons-material/Search';
import Modal from '../InputModal/js/modal';

const ComponentInputModal = styled.div`
&&{
    display:flex;
    width:100%;
}
.containerInput{
    position:relative;
    width:100%;
        .input{
        width:100%;
        background: #FFFFFF;
        border-radius: 16px;
        border:none;
        padding:16px;
        font-family: 'Nunito';
        color: #A8A29E;
        padding-left:30px;
        &:focus{
          outline: 2px solid #0083FF;
          border-radius: 10px;
        }
  
     }
     .icon{
        position:absolute;
        left: 3px;
        top:15px;
        color:#A8A29E;
    }
     .button{
        position:absolute;
        right: 3px;
        top:10px;
        cursor:pointer; 
     }
     .containerResult{
     height:auto;
     overflow-x: hidden;
     overflow-y: auto;
     z-index: 9999;
    position: absolute;
    background-color: white;
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
}
`

const InputModal = (props) => {
    const [data, setData] = useState(props.data)
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [texto, setText] = useState();
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        setData(props.data)
    }, [props.data])
    

    const onSuggestHandler = (label, value) => {
        if (props.onClick) {
            props.onClick(label, value)
        }
        setText([`${label}`])
        setSuggestions([]);
        setIsOpenModal(false)

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


    const openModal = () => {
        setIsOpenModal(true)

        if (props.onClick) {
            props.onClick(data)
        }

    }

    const closeModal = () => {
        setIsOpenModal(false)

    }


    return (
        <ComponentInputModal>
            <div className="containerInput">

                <input
                    type={props.type}
                    className="input"
                    placeholder={props.placeholder}
                    onChange={e => onChangeHandler(e.target.value)}
                    value={texto}
                />
                <div>
                    <span
                        className="icon"

                    >
                        <SearchIcon />
                    </span>
                </div>

                <div>
                    <span
                        className="button">
                        <Button
                            line
                            text={"ver todas"}
                            onClick={openModal} />
                    </span>




                    <Modal isOpen={isOpenModal}
                        closeModal={closeModal}
                        data={props.data}
                        onSuggestHandler={onSuggestHandler} />

                </div>
                <div className="containerResult" >
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
        </ComponentInputModal>
    )
}

export default InputModal