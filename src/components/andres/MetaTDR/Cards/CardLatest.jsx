import React from 'react'
import styled from "styled-components";

const CardComponentLatest = styled.div`
&&{
    background: #FFFFFF;
    box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
    border-radius: 16px;
    display: flex;
    width:100%;
    :hover{
       box-shadow: 0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.1), 0px 6px 12px rgba(14, 31, 53, 0.08);
    }
}
.content{
    padding:10px;
     .text{
    display:flex;
    flex-direction: column;
     .titulo{
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
        font-size: 16px;
        line-height: 150%;
        color: #78716C;
        
    }
}
    .containerButtonIcon{
        display:flex;
        justify-content: space-between;
        align-items: baseline;
          .containerIcon{
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            color: #6D7580;
            >svg{
                font-size: 12px;
            }
        }
    
    }
}
.containerImg{
    >img{
    height: 100%;
    }
}
`


const CardLatest = (props) => {
    return (
        <CardComponentLatest>

            <div className="content">

                <div className="text">

                    {props.datosCardLatest.titulo ?
                        <p className="titulo">{props.datosCardLatest.titulo}</p>
                        : null}

                    {props.datosCardLatest.descripcion ?
                        <p className="descripcion">{props.datosCardLatest.descripcion}</p>
                        : null}

                </div>

                <div className="containerButtonIcon">

                    <div className="containerIcon">
                        {props.datosCardLatest.icon ? props.datosCardLatest.icon : null}
                        {props.datosCardLatest.sub ? props.datosCardLatest.sub : null}
                    </div>

                    {props.datosCardLatest.button ?
                        <div className="containerButton">
                            {props.datosCardLatest.button}
                        </div>
                        : null}

                </div>


            </div>

            {props.datosCardLatest.img ?
                <div className="containerImg">
                    {props.datosCardLatest.img}
                </div>
                : null}

        </CardComponentLatest>
    )
}

export default CardLatest