import React from 'react';
import styled from 'styled-components';

import { ButtonToggle } from 'reactstrap';
const Title = (props) => {
    return (
        <div className="col-12 easyAccessRow__head">
        <p className="easyAccessHead__subtitle">{props.topTitle}</p>
        <h2 className="easyAccessHead__title">  {props.title}</h2>
        <p className="easyAccessHead__description">{props.subtitle}</p>
        
    </div>



        /*<Container>
            <div className="title-fullwidth col-12">
                <div className="title-top col-12">
                        {props.topTitle}
                </div>
                <div className="title col-12 ">
                    {props.title}
                </div>
            </div>
            <div className="sub-title col-12">
                {props.subtitle}
            </div>
            {props.textLink?<div className="col-12 textLink link">
            <a href="#" className="textLink text-decoration-underline">{props.textLink}</a>
            </div>:null}
           
            {props.buttonText?<div className="col-12 button">
            <ButtonToggle type="button" color="primary" className="btn btn-primary">{props.buttonText}</ButtonToggle>
            </div>:null}
        </Container>*/
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
}

.title{
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 38px;
    /* or 106% */
    justify-content:start;
    display: flex;
    align-items: center;
    text-align: center;
    font-feature-settings: 'ss07' on;
    color: #09101D;
    margin: 5px 0px;
}

    .sub-title{
        
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height, or 151% */
    display: flex;
    text-align: start;
    font-feature-settings: 'salt' on;
    justify-content:flex-start;
    /* Neutral / Black */
    margin: 5px;
    color: #09101D;
    }

.button{
    margin: 5px;
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
}
`