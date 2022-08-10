import React from 'react'
import styled from "styled-components";


export default function CardImageRow(props) {
  return (
    <Styled>
        <div className="container m-0 p-0">
            <div className="text col-6">
                <div className="title">
                    {props.title}
                   
                </div>
                <div className="description">
                    {props.description}
            
                   
                </div>
                <div className="info">
                    <div className="date row m-0 p-0">
                        {props.iconDate}
                        {props.date}
                    </div>
                    
                    <div className="button">
                        {props.button}
                    </div>
                </div>
               
            </div>
            
            <div className="image col-6 pr-0 mr-0">
                <img  alt="cargando" src={props.image}/>
            
            </div>
        
        </div>
    </Styled>
  )
}

const Styled = styled.div`
height: 300px;
.container {
    background: #FFFFFF;
    box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
    border-radius: 16px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    height:100%;
    width:100%;
    

}
.image{
    height:100%;
   // min-width: 600px;
    flex: wrap;
   // max-height: 400px;
    display:flex;
    border-radius:16px;

}
img{
    border-radius: 0px 16px 16px 0px;
     max-width: 100%;
        width: 100%;
        height: auto;
        object-fit: cover;


}

.text{
    width:100%;
    display: flex;
    align-items:start;
    flex-direction:column;
    justify-content:space-around;
    padding: 24px 64px 44px 24px;
    text-align: center;

    @media (max-width: 600px) {
    padding: 0;
    overflow: auto;
}
}

.info{
    display:flex;
    flex-direction:row;
    margin-top:2%;
}

.title{
font-family: 'Nunito';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 44px;
@media (max-width: 600px) {
    
padding: 10px 10px 10px 10px;
    font-size: 16px;
    font-weight: bold;
    line-height: 20px;
}

}

.description{
    font-family: 'Merriweather';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 164%;
font-feature-settings: 'salt' on;
color: #6D7580;
margin-top:2%;
}

.button{
font-family: 'Nunito';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 16px;

color: #0B5FFF;
}

.date{
font-family: 'Nunito';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;
display: flex;
align-items: center;
}

.info{
    display: flex;
    justify-content:space-between;
    width:100%;
}

`
