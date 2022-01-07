import React from 'react';
import styled from 'styled-components'
const CardPagoMobile = (props) => {
    return (
        <Card>
            <Container>
                <ContentLeft>
                    <Logo>
                        {props.logo}
                    </Logo>
                </ContentLeft>
                <ContentRight>
                    <Title>{props.title}</Title>
                    <Subtitle1> {props.subtitle1} </Subtitle1>
                    <Subtitle2>  {props.subtitle2}</Subtitle2>
                </ContentRight>
            </Container>
        </Card>
    );
}

export default CardPagoMobile;

const Card = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 20px;

position: static;
width: 320px;
height: auto;
left: 20.03px;
top: 20px;

/* White */

background: #FFFFFF;
/* Neutral / Neutral 9 */

border: 1px solid #F4F6F9;
box-sizing: border-box;
/* shadow/multi/sm-3 */

box-shadow: 0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.08);
border-radius: 6px;
`

const Container = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;

position: static;
width: auto;
height: auto;
left: calc(50% - 280px/2);
top: calc(50% - 71px/2);


/* Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 1;

`

const ContentLeft = styled.div`
/* content_left */


/* Auto Layout */

display: flex;
flex-direction: row;
align-items: center;
padding: 0px;

position: static;
width: 30.4px;
height: 35px;
left: 0px;
top: calc(50% - 35px/2);


/* Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 0;
padding: 0px 8px;
`
const ContentRight = styled.div`
/* content_center */


/* Auto Layout */

display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 0px;

position: static;
width:233.6px;
height: auto;
left: calc(50% - 233.6px/2 + 23.2px);
top: calc(50% - 71px/2);


/* Inside Auto Layout */

flex: none;
order: 1;
flex-grow: 1;
padding: 0px 8px;
`

const Logo = styled.div`
/* logos */


/* Auto Layout */

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;

position: static;
width: 100%;
height: 35px;
left: 0px;
top: 0px;


/* Inside Auto Layout */

flex: none;
order: 1;
flex-grow: 0;
margin: 0px 0px;
`

const Title = styled.div`
position: static;
width:100%

left: 0px;
top: 0px;

font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 19px;
/* identical to box height, or 136% */

display: flex;
align-items: center;
font-feature-settings: 'ss07' on;

/* Neutral / Black */

color: #09101D;


/* Inside Auto Layout */

flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
margin: 5px 0px;
`
const Subtitle1 = styled.div`
/* ¡Ahorra $32200 extras! */


position: static;
width: 100%

left: 0px;
top: 24px;

font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 14px;
/* identical to box height, or 117% */

display: flex;
align-items: center;
font-feature-settings: 'ss07' on;

/* Status / Success */

color: #287D3C;
`
const Subtitle2 = styled.div`
/* Todas las tarjetas y hasta 6 cuotas sin interés con Cordobesa o Visa Bancor */


position: static;
width: 100%;

left: 0px;
top: 43px;

font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 14px;
/* or 117% */

display: flex;
align-items: center;
font-feature-settings: 'ss07' on;

/* Neutral / Neutral 4 */

color: #6D7580;


/* Inside Auto Layout */

flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;
margin: 5px 0px;
`