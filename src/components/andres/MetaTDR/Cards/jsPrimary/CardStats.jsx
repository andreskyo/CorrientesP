import React from 'react'
import styled from "styled-components";
import Avatar from '@mui/material/Avatar';


const CardComponentStats = styled.div`
&&{
    background: #FFFFFF;
    box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
    border-radius: 16px;
    padding:20px;
    height: 100%;
    display: flex;
    justify-content:space-between ;
    align-items:space-between;
    :hover{
       box-shadow: 0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.1), 0px 6px 12px rgba(14, 31, 53, 0.08);
    }
}

.cardContent{
        display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0% 2%;
    
}

.button>.MuiButtonBase-root{
    padding: 0px;
}

.text{
    .titulo{
        font-family: 'SF UI Text';
        font-size: 16px;
        color: #27272A;
        margin:0;
        
      }


    .sub{
        font-family: 'SF UI Text';
        font-size: 14px;
        color: #78716C;
        margin:0px ;
       }
}

.cardIcon{
    align-self:center ;
     .avatar{
         color:#27272A;
         background: #E2E8F0;
         border-radius: 50%;
        width: 46px;
        height: 46px;
        padding: 1%;
        }
    }

`

const CardStats = (props) => {
    return (
        <CardComponentStats>

            

                <div className="cardContent">

                    <div className="text">

                        {props.datosCardStats.titulo ?

                            <p className="titulo">
                                {props.datosCardStats.titulo}
                            </p>

                            : null}

                        {props.datosCardStats.sub ?

                            <p className="sub">
                                {props.datosCardStats.sub}
                            </p>

                            : null}
                    </div>

                    {props.datosCardStats.button ?

                        <div className="button">

                            {props.datosCardStats.button}

                        </div>

                        : null}
                </div>
               

            {props.datosCardStats.icon ?

                <div className="cardIcon">

                    <Avatar className="avatar">
                        {props.datosCardStats.icon}
                    </Avatar>

                </div>

                : null}
        </CardComponentStats >
    )
}

export default CardStats