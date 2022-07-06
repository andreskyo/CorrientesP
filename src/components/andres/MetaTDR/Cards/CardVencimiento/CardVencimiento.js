import React from 'react'
import styled from "styled-components";



const CardComponentVencimiento = styled.div`
&&{
    background: #FFFFFF;
    box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
    border-radius: 16px;
    width:100%;
    padding:20px;
    display:flex;
    flex-direction:column ;
    
}

.texto{
    display:flex;
    flex-direction:column ;
    
        .titulo{
        font-family: 'SF UI Text';
        font-style: normal;
        font-weight: 500;
        font-size: 95px;
        line-height: 150%;
        color: #124596;
        align-self:center ;
        margin:0px;
        }
        .sub{
        font-family: 'SF UI Text';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 150%;
        align-self:center ;
        }

        .descripcion{
         display:flex;
         margin:0px;
          .label{
            font-family: 'SF UI Text';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 150%;
            color: #78716C;
            
          }
          .value{
            font-family: 'SF UI Text';
            font-size: 14px;
            padding-left: 2px;
          }
        }
        .hr{
        width:100% ;
        border: 1px solid #E7E5E4;
        }
}




`


const CardVencimiento = (props) => {

    
    const renderData = () => {
        let resultado = props.datos.descripcion.map((res, index) => {

            return <div
                key={index}
                className="descripcion">

          {res.label ?  <p className="label">{res.label} </p> : null}
          {res.value ?  <p className="value"> {res.value} </p> : null}

            </div>

        })
        return resultado;
    }



    return (
        <CardComponentVencimiento>

            <div className="texto">

                {props.datos.titulo ? 
                <p className="titulo">{props.datos.titulo}</p>
                :null}

                {props.datos.sub ?
                <p className="sub">{props.datos.sub}</p>
                :null}

                <hr className="hr" />


                {renderData() ? renderData() : null}


            </div>




        </CardComponentVencimiento>
    )
}

export default CardVencimiento