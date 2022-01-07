import React from 'react';
import styled from 'styled-components';
import { ButtonToggle } from 'reactstrap';

const TitleFullWidth = (props) => {
    
    return (
        
        <Container>
            <div className="title-fullwidth">
                <div className="title-top">
                        {props.topTitle}
                </div>
                <div className="title ">
                    {props.title}
                </div>
            </div>
            <div className="sub-title">
                {props.subtitle}
            </div>
            {props.buttonText?<div className="col-12 button">
            <ButtonToggle type="button" color="primary" className="btn btn-primary">{props.buttonText}</ButtonToggle>
            </div>:null}
        </Container>
    );
}

export default TitleFullWidth;

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
width: 100%;
height: auto;

/**styled titulos */
.title-fullwidth{
    display: flex;
    flex-direction: column;
    align-items:center;
    padding: 0px;
    justify-content:center;
    
}

.title-top{
    /* rc-txt-RG-12 */
    justify-content:center;
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #858C94;
    
}

.title{
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 38px;
    /* or 106% */
    justify-content:center;
    display: flex;
    text-align: center;
    font-feature-settings: 'ss07' on;
    color: #09101D;
    
    align-items: center;


    /* Inside Auto Layout */

   
    margin: 5px 0px;
}

.sub-title{
align-items: center;
text-align: center;
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 21px;
text-align: center;
font-feature-settings: 'salt' on;
margin:8px 5px;
color: #09101D;
}

.button{
    align-items: center;
    display: flex;
    justify-content:center;
    margin: 8px 0px;
    color: #124596;
}


`