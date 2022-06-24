import React from 'react'
import styled from "styled-components";





const ComponentSubtitle = styled.div`
  display:flex;
  width:100%;
  align-items:baseline;
  justify-content: space-between;

  
  /*-----------------------*/
  .text{
       
      .titulo{ 
        font-family: 'SF UI Text';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 150%;
        color: #27272A;
        
      }
      .sub{
        font-family: 'SF UI Text';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 150%;
        color: #78716C;
      }

    
  }
/*---------------------------*/
  .button{
    .MuiButton-label{
      justify-content: flex-end;
    }
  }
 
/*-----------------------------*/
 
      
`


const SubTitles = (props) => {
  return (
    <>
      {props.datosSubTitle.titulo || props.datosSubTitle.sub || props.datosSubTitle.button ?
        <ComponentSubtitle>

          {props.datosSubTitle.titulo || props.datosSubTitle.sub ?
            <div className="text">

              {props.datosSubTitle.titulo ?
                <p className="titulo">{props.datosSubTitle.titulo}</p>
                : null}

              {props.datosSubTitle.sub ?
                <p className="sub">{props.datosSubTitle.sub}</p>
                : null}

            </div>
            : null}

          {props.datosSubTitle.button ?
            <div className="button">

              {props.datosSubTitle.button}

            </div>
            : null}


        </ComponentSubtitle>

        : null}

      <div className="hr">
        <hr style={{margin:"0px"}} />
      </div>

    </>
  )
}

export default SubTitles