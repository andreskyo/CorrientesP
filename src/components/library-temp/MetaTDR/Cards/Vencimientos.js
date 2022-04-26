import React from 'react';
import styled from 'styled-components';




const Vencimientos = (props) => {
    return (
        <Card>
            <div className="icon">
                <Ellipse427>
                    {props.icon}
                </Ellipse427>
            </div>
            <div className="container-text">
                <div className="date-text">
                    {props.dateText}
                </div>
                <Line/>
                <div className="info">
                    {props.info}
                </div>
            </div>
        </Card>
    );
}

export default Vencimientos;

const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 20px 16px;

position: static;
width: 308px;
height: auto;
min-height:150px;
left: 0px;
top: 525px;
background: #FFFFFF;
box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
border-radius: 16px;

/**styled text */
.container-text {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    margin:20px 16px

}
.date-text{
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 38px;
    display: flex;
    align-items: center;
    text-align: center;
    font-feature-settings: 'ss07' on;
    color: #124596;
}

.info{
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 23px;
    display: flex;
    align-items: center;
    font-feature-settings: 'salt' on;
    color: #858C94;
}
`

const Ellipse427 = styled.div`
    width: 81px;
    height: 81px;
    left: 0px;
    top: 0px;
    border-radius: 50%;
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: 38px;
    background: #F4F6F9;
    `

const Line = styled.div`
    border: 1px solid #EBEEF2;
    margin: 5px 0px;
    height: 0px;
    width: 100%;
`