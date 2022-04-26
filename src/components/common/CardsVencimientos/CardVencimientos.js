import React from 'react'
import styled from "styled-components"
export default function CardVencimientos(props) {

console.log("props detalle " , props.detalle);

  return (
    <Styled>
        <div className="container-vencimiento">
            <div className="date">
                <div className="date-number">
                        {props.dateNumber}
                </div>

                <div className="date-text">
                    {props.dateText}
                </div>
            </div>
           
            <div className="divisor">

            </div>
            <div className="description">
               {props.detalle?props.detalle.map((res)=>{
                   return <div className="nextExpirationItem__description col">
									<div>{res.tipoObligacion}</div>
									<div>{res.impuesteDesc} </div>
									<div>{res.conceptoDesc}</div>  
									<div> Cuota: {res.cuota}</div>
									
									{res.terminacion==null?null:<div> Terminacion {res.terminacion}</div>}
									
									</div>
               }):null}
            </div>
        </div>
    </Styled>
  )
}


const Styled = styled.div`
.container-vencimiento{
    background: #FFFFFF;
    box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
    border-radius: 16px;
    flex: none;
    order: 14;
    flex-grow: 0;
    margin: 12px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 24px 24px;
}

.date-number{
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 136px;
    display: flex;
    align-items: center;
    text-align: center;
    font-feature-settings: 'ss07' on;
    color: #124596;
  
    align-self: stretch;
  
    margin: 0px 0px;
    justify-content:center;
}

.date{

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 20px 0px;
}

.date-text{
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 44px;
    /* identical to box height */
    justify-content:center;
    display: flex;
    align-items: center;
    text-align: center;
    color: #09101D;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    margin: 0px 0px;
}

.divisor{
    border: 1px solid #EBEEF2;
    flex: none;
    align-self: stretch;
    flex-grow: 0;
    margin: 20px 0px;
}

.detalles-impuestos{
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 23px;
    display: flex;
    align-items: center;
    font-feature-settings: 'salt' on;
    color: #6D7580;
    align-self: stretch;
    flex-grow: 0;
    margin: 5px 0px;
}


`