import React from 'react';
import styled from 'styled-components';

import { ButtonToggle } from 'reactstrap';
const Title = (props) => {
    return (
        <Container>
            <div className="title-fullwidth">
                <div className="title-top">
                        {props.topTitle}
                </div>
                <div className="title">
                    {props.title}
                </div>
            </div>
            <div className="sub-title">
                {props.subtitle}
            </div>
            {props.textLink?<div className="textLink link">
            <a href="#" className="textLink text-decoration-underline" alt="text-link">{props.textLink}</a>
            </div>:null}
           
            {props.buttonText?<div className="button">
            <ButtonToggle type="button" color="primary" className="btn btn-primary">{props.buttonText}</ButtonToggle>
            </div>:null}
        </Container>
    );
}

export default Title;

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 100%;
height: auto;




.title-fullwidth{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    justify-content:flex-start;
    width:100%;
    height: auto;
    @media (max-width: 992px){
    justify-content: center;
}
    
}

.title-top{
    /* rc-txt-RG-12 */
    justify-content:flex-start;
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #858C94;
    margin: 5px 0px;
    width:100%;

    @media (max-width: 992px){
    justify-content: center;
}
}

.title{
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 38px;
    justify-content:start;
    display: flex;
    
    font-feature-settings: 'ss07' on;
    color: #09101D;
    margin: 5px 0px;
    width:100%;

    @media (max-width: 992px){
    justify-content: center;
}

}

.sub-title{        
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    display: flex;
    text-align: start;
    font-feature-settings: 'salt' on;
    justify-content:flex-start;
   width: 100%;
    margin: 5px;
    color: #09101D;
    @media (max-width: 992px){
    justify-content: center;
    }
}

.button{
    margin: 5px;
    width:100%;
    display: flex;
    @media (max-width: 992px){
    justify-content: center;
}
}

.textLink{
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #124596;
    margin: 5px;
    @media (max-width: 992px){
    justify-content: center;
}
}
`