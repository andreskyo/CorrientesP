import React from 'react';
import styled from 'styled-components';




const CardProgress = (props) => {
    return (
        <Card>
            <Frame>
                <ContainerIcon>
                  <Icon>{props.icon}</Icon>
                </ContainerIcon>
                <ButtonContainer> <Oval/><Oval1/><Oval2/>   </ButtonContainer>
            </Frame>
            <Text>props</Text>
            <Frame2>
                    <InfoText>
                        25gb
                    </InfoText>
                    
                    <InfoText2>
                       50gb
                    </InfoText2>
            </Frame2>
            
        </Card>
    );
}

export default CardProgress;
 

const Card = styled.div`
/* card-progress */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 16px 16px 16px 24px;

position: static;
width: 350px;
height: 180px;
left: 80px;
top: 2890px;

/* White */

background: #FFFFFF;
/* shadow/multi/sm-2 */

box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
border-radius: 16px;

/* Inside Auto Layout */

flex: none;
order: 12;
flex-grow: 0;


`

const Frame = styled.div`
/* Frame 2832 */
display: flex;
flex-direction: row;
justify-content:space-between;
align-items: start;
padding: 0px;

position: static;
width: 100%;
height: 48px;
left: 24px;
top: 16px;


/* Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 16px 0px;

`
const ButtonContainer = styled.div`
/* btn-more/horizontal */

display:flex;
flex-direction: row;
position: static;
width: 24px;
height: 24px;
right: 0px;
top: 24px;

transform: rotate(0deg);

/* Inside Auto Layout */

flex: none;
order: 1;
flex-grow: 0;


`

const Oval = styled.div`
/* Oval 67 */


position: absolute;
left: 12.5%;
right: 70.83%;
top: 58.33%;
bottom: 25%;

/* Neutral / Neutral 4 */

background: #6D7580;
transform: rotate(-90deg);
`
const Oval1 = styled.div`
position: absolute;
left: 41.67%;
right: 41.67%;
top: 58.33%;
bottom: 25%;

/* Neutral / Neutral 4 */

background: #6D7580;
transform: rotate(-90deg);
`
const Oval2 = styled.div`
position: absolute;
left: 70.83%;
right: 12.5%;
top: 58.33%;
bottom: 25%;

/* Neutral / Neutral 4 */

background: #6D7580;
transform: rotate(-90deg);
`

const ContainerIcon = styled.div`
position: static;
width: 48px;
height: 48px;
left: 0px;
top: 0px;
display: flex;
justify-content: center;

/* Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 0;

/* Neutral / Neutral 9 */

background: #F4F6F9;
border-radius: 10px;
`

const Icon = styled.div`
font-size:36px;
display: flex;  
justify-content: center;
align-items: center;

`

const Text = styled.div`
/* LABEL */


position: static;
width: 310px;
height: 22px;
left: 24px;
top: 80px;

/* rc-title-card-16 */

font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 22px;
/* identical to box height */

display: flex;
align-items: center;

/* Neutral / Black */

color: #09101D;


/* Inside Auto Layout */

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
margin: 16px 0px;
`

const InfoText = styled.div`


/* rc-txt-card-RG-14 */

font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 21px;
/* identical to box height, or 151% */
display: flex;
align-items: center;
text-align: right;
font-feature-settings: 'salt' on;
color: #84859E;
flex: none;
order: 1;
flex-grow: 0;
justify-content: center
`
const InfoText2 = styled.div`


/* rc-txt-card-RG-14 */

font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 21px;
/* identical to box height, or 151% */

display: flex;
align-items: center;
text-align: right;
font-feature-settings: 'salt' on;

color: #84859E;


/* Inside Auto Layout */

flex: none;
order: 1;
flex-grow: 0;

`

const Frame2 = styled.div`
/* Frame 2832 */


/* Auto Layout */

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
padding: 0px;

position: static;
width: auto
height: 22px;
left: calc(50% - 310px/2 + 4px);
top: 118px;


/* Inside Auto Layout */

flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;
margin: 16px 0px;

`

const ChartBar = styled.div`
position: static;
width: 310px;
height: 8px;
left: calc(50% - 310px/2 + 4px);
bottom: 16px;
/* Inside Auto Layout */
flex: none;
order: 3;
align-self: stretch;
flex-grow: 0;
margin: 16px 0px;
`

const Rectangle = styled.div`
/* Neutral / Neutral 9 */

background: #F4F6F9;
border-radius: 20px;

`