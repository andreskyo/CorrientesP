import React from 'react'
import styled from 'styled-components';



export default function TituloConNotificacion(props) {
  return (
    <Styled>
        <div className="container-titulos" onClick={props.onClick}>
            <div className="icon">
                    {
                    props.icon
                    ?props.icon
                    :<div>
                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.70492 10.59L3.12492 6L7.70492 1.41L6.29492 0L0.294922 6L6.29492 12L7.70492 10.59Z" fill="black"/>
                        </svg>
                    </div>
                }
            </div>
            
            <div className="content-titulos">
                <div className="titulo">
                    {props.titulo}
                </div>
                <div className="subtitulo">
                    {props.subtitulo}
                </div>
                
            </div>
        
        </div>

    </Styled>
  )
}


const Styled= styled.div`

    .container-titulos {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        cursor: pointer;    }

    .titulo{
        /* Text/Medium/2xl: 24px */

        font-family: 'SF UI Text';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 150%;
        /* identical to box height, or 36px */

        display: flex;
        align-items: center;

        /* Single Tone/darkText */

        color: #27272A;
    }

    .subtitulo{
        /* Text/Regular/sm: 14px */

        font-family: 'SF UI Text';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        /* identical to box height, or 21px */

        display: flex;
        align-items: center;

        /* WarmGray/warmGray.500 */

        color: #78716C;
    }
    
    .icon{
       display: flex;
         align-items: center;
            justify-content: center;
            width: 35px;
            height:35px;
           
    }

    .content-titulos{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      
       

    }




`