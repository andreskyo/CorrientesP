import React from 'react';
import styled from 'styled-components';
const Cardpago = (props) => {
    return (
        <Card>
            <Frame>
                <ContainerTitle>
                    <Title>{props.title}</Title>
                </ContainerTitle>
                <Price>
                    <TitlePrice>${props.price}</TitlePrice>
                    <SubtitlePrice1>{props.subtitle1}</SubtitlePrice1>
                    <SubtitlePrice2>{props.subtitle2}</SubtitlePrice2>
                </Price>
                <Icon>
                    {props.icon}
                </Icon>
            </Frame>
        </Card>
    );
}

export default Cardpago;

const Card = styled.div`
/* Property 1=online, Property 2=pago, Property 3=desktop */


position: static;
width: 320px;
height: auto;
left: 363.03px;
top: 20px;

/* White */

background: #FFFFFF;
/* Neutral / Neutral 8 */

border: 1px solid #EBEEF2;
box-sizing: border-box;
/* shadow/multi/sm-3 */

box-shadow: 0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.08);
border-radius: 6px;
`

const Frame = styled.div`
/* Frame 104 */


/* Auto Layout */

display: flex;
flex-direction: column;
align-items: center;
padding: 0px;

position: static;
height: auto;
left: 12px;
right: 12px;
top: 31px;
padding: 31px 12px
`

const ContainerTitle = styled.div`
display: block;
flex-direction: row;
align-items: flex-start;
padding: 0px;
justify-content:center;
position: static;
height: auto;

`

const Price = styled.div`
/* price */
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
justify-content: left;
position: static;
width: 222px;
height: auto;
left: 37px;
top: 40px;


/* Inside Auto Layout */

flex: none;
order: 4;
flex-grow: 0;
margin: 12px 0px;
`

const Icon = styled.div`
/* Icono info */
display: flex;
align-items: center;
justify-content:center;
position: static;
width: 25px;
height: 25px;
font-size:25px !important;
flex: none;
order: 5;


flex-grow: 0;

`

const Title = styled.div`
/* Online */

justify-content:center;
position: static;
width: auto;
height: auto;
left: 40px;
top: 2px;

font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 23px;
/* identical to box height, or 117% */

display: flex;
align-items: center;

/* Neutral / Black */

color: #09101D;


/* Inside Auto Layout */

flex: none;
order: 4;
align-self: center;
flex-grow: 0;
margin: 0px 12px;
`

const TitlePrice = styled.div`
/* $ 12.44714 */
justify-content:center;

position: static;
width: 158px;
height: auto;
left: 32px;
top: 0px;

font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 28px;
/* identical to box height, or 117% */

display: flex;
align-items: center;
text-align: center;

/* Neutral / Black */

color: #09101D;


/* Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 2px 0px;
`
const SubtitlePrice1 = styled.div`
/* Incluye 5% de descuento */

justify-content:center;
position: static;
width: 222px;
height: auto;
left: 0px;
top: 31px;

font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 14px;
/* identical to box height, or 117% */

display: flex;
align-items: center;
text-align: center;
font-feature-settings: 'ss07' on;

/* Status / Success */

color: #287D3C;


/* Inside Auto Layout */

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
margin: 2px 0px;
`
const SubtitlePrice2 = styled.div`/* Incluye 5% de descuento */

justify-content:center;
position: static;
width: 222px;
height: auto;
left: 0px;
top: 47px;

font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 14px;
/* identical to box height, or 117% */

display: flex;
align-items: center;
text-align: center;
font-feature-settings: 'ss07' on;

/* Status / Success */

color: #287D3C;


/* Inside Auto Layout */

flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;
margin: 2px 0px;
`