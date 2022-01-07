import React,{useEffect} from 'react';
import styled from 'styled-components';
import WebFont from 'webfontloader'



const Cardactividades = () => {
  useEffect(() => {
    WebFont.load({
        google: {
             families: ['Nunito']
        }
           
        
})
}, []);
  return (
        <Container>
            <Row>
                <Description>
                    <Text1>
                        00990000
                    </Text1>
                    <Text2>
                        Servicios de organizaciones y órganos extraterritoriales
                    </Text2>
                    <Text3>
                        Alic.: 1.5
                    </Text3>
                </Description>
            </Row>
            <Line/>
        </Container>
    );
}

export default Cardactividades;


const Container = styled.div`
/* card-list-actividades */


/* Auto Layout */

display: flex;
flex-direction: column;
align-items: center;
padding: 16px 0px 0px;

position: static;
width: 349px;
height: 97px;
left: 80px;
top: 1449px;

/* White */

background: #FFFFFF;

/* Inside Auto Layout */

flex: none;
order: 5;
flex-grow: 0;
margin: 24px 0px;


`

const Line = styled.div`
/* Line 53 */
position: static;
width: 349px;
height: 0px;
left: calc(50% - 349px/2);
bottom: 0px;
/* Neutral / Neutral 9 */
border: 1px solid #F4F6F9;
/* Inside Auto Layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
margin: 16px 0px;
`
const Row = styled.div`
/* row */


/* Auto Layout */

display: flex;
flex-direction: row;
align-items: center;
padding: 0px 16px;

position: static;
width: 349px;
height: 65px;
left: calc(50% - 349px/2);
top: 16px;


/* Inside Auto Layout */

flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
margin: 16px 0px;

`
const Description = styled.div`
/* description */


/* Auto Layout */

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

position: static;
width: 317px;
height: 65px;
left: 16px;
top: 0px;


/* Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 1;
margin: 0px 0px;
`
const Text1 = styled.div`
/* 00990000 */


position: static;
width: 317px;
height: 16px;
left: 0px;
top: calc(50% - 16px/2 - 24.5px);

/* rc-txt-SB-12 */

font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 16px;
/* identical to box height, or 133% */

display: flex;
align-items: center;

/* Neutral / Neutral 5 */

color: #858C94;


/* Inside Auto Layout */

flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
margin: 5px 0px;
`

const Text2 = styled.div`
/* Servicios de organizaciones y órganos extraterritoriales */


position: static;
width: 317px;
height: 16px;
left: 0px;
top: 21px;

/* rc-txt-SB-12 */

font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 16px;
/* identical to box height, or 133% */

display: flex;
align-items: center;

/* Neutral / Black */

color: #09101D;


/* Inside Auto Layout */

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
margin: 5px 0px;

`

const Text3 = styled.div`
/* Alic.: 1.5 */


position: static;
width: 317px;
height: 23px;
left: 0px;
top: 42px;

/* rc-txt-RG-14 */

font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 23px;
/* identical to box height, or 164% */

display: flex;
align-items: center;
font-feature-settings: 'salt' on;

/* Action Primary / Visited */

color: #5E38BA;


/* Inside Auto Layout */

flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;
margin: 5px 0px;

`