import React from 'react'
import styled from "styled-components";

const CardContentRelated = styled.div`
  &&{
    background: #FFFFFF;
    display:flex;
    flex-direction: column;
    align-items: center;
    padding:5px;
    border-radius: 16px;
    width:100%;
    box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
    cursor:pointer;
}  
.contentImg{
    display:flex;
    align-self: center;
    width: 100%;
.img{
    margin:auto;
    border-radius: 16px 16px 0px 0px;
    width:100%;
    }
}

.cardContent{
  width: 100%;
  display:flex;
  flex-direction: column;
}

.contentText{
  margin:auto;
 }
    .titulo{
        font-family: 'SF UI Text';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        color: #27272A;
    
    }


`





export const CardRelated = (props) => {

    const handleOnClick = () => {
        if (props.onClick) {
            props.onClick()
        }}



    return (
        <CardContentRelated>



            <div className="cardContent"  onClick={()=>handleOnClick()}>

                {props.datos.img ?

                    <div className="contentImg">

                        {props.datos.img}

                    </div>

                    : null}

                {props.datos.titulo ?

                    <div className="contentText">

                        <p style={props.textStart ? {textAlign:"start"} : {textAlign:"center"}}
                        className="titulo">

                            {props.datos.titulo}

                        </p>
                    </div>

                    : null}
            </div>

        </CardContentRelated>
    )
}

export default CardRelated