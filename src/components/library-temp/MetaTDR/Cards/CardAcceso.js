import React from 'react';
import styled from 'styled-components'
import {
    Link,
  } from "react-router-dom";

const Cardacceso = (props) => {
    
    return (
            <div className="col-12 col-lg easyAccessRow__card splide__slide">
                
                <div className="row easyAccessCard">
                    <div className="col-auto easyAccessCard__icon">
                        <span>
                           <svg>{props.icon}</svg>
                        </span>
                    </div>
                    <div className="col easyAccessCard__text">
                        <p className="easyAccessCardText__title"><strong>{props.title}</strong></p>
                        <p className="easyAccessCardText__description"> {props.subtitle} </p>
                        <Link to={`/login`}><button className="btn btn-primary easyAccessCardText__btn"> {props.boton}  </button></Link>
                    </div>
                </div>
            </div>
            
         


       /* <Container className="col-12">
                
                <div className="col-md-4 col-sm-4 icon">
                
                    <StyleElipse>
                        <div className="icon">
                      {props.icon}
                        
                        </div>
                    </StyleElipse>
                </div>

                <div className="col-md-8 col-sm-8 text">
                    <div className="title">
                    {props.title}
                    </div>
                    <div className="subtitle">
                    {props.subtitle}
                    </div>
                    {props.buttonText?<div className=" button">
                    <ButtonToggle type="button" color="primary" className="btn btn-primary">{props.buttonText}</ButtonToggle>
                    </div>:null}
                    {props.boton?props.boton:null}
                    
                </div>
                
                
            
        </Container>*/
    );
}

export default Cardacceso;

const Container = styled.div`
display: flex;
align-items: center;
padding: 12px 12px 12px 12px;
width:100%;
height: auto;
background: #FFFFFF;
box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
border-radius: 16px;



    .title{
        font-family: Nunito;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 21px;
        color: #272727;
    }

    .subtitle{
        font-family: Nunito;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 22px;
        color: #272727;
        padding-top:2%;
        text-align: start;

    }

    .button{
        font-family: Nunito;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        padding:16px 0px;
    }

    .icon{
        padding:4px;
        justify-content: center;
        display: flex;
    }

    .text{
        justify-content: center;
        display: flex;
        flex-direction: column;
        padding:2%
    }

`


const StyleElipse = styled.div`
    width: 81px;
    height: 81px;
    left: 0px;
    top: 0px;
    
    background:none;
    border-radius: 50%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    
    border: 1px solid #858C94;


    .icon{
        color: #124596;
        font-size:34px
    }

`