import React from 'react'
import styled from "styled-components";
import Card from '@mui/material/Card';


const CardComponentText = styled(Card)`
&&{
    background: #FFFFFF;
    box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
    border-radius: 16px;
}
.title{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #78716C;

}
.sub{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #124596;
}

`


const CardText = (props) => {

   


    return (
        <CardComponentText className="container-fluid m-0">
            
               
                {props.datosCardText.agente}
            
            
                
                {props.datosCardText.cuit}
           
            
              
                {props.datosCardText.establecimiento}
            
           
        </CardComponentText>
    )
}

export default CardText