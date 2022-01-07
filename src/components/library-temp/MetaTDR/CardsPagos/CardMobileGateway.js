import React from 'react';
import styled from 'styled-components'
const Cardmobilegateway = (props) => {
    return (
        <Card>
            <MainContainer>
                <TitleContainer>
                    <IconBack>
                    <i className="fas fa-arrow-left"></i>
                    </IconBack>
                    <Title>
                        <TitleText>
                            {props.title}
                        </TitleText>
                    </Title>
                    <Subtitle>
                        <SubtitleText>
                            {props.subtitle}
                        </SubtitleText>
                    </Subtitle>
                </TitleContainer>
                
                <Frame>
                    <OldPrice>${props.oldPrice}</OldPrice>
                    <Price>${props.price}</Price>
                    <Text>{props.text}</Text>
                    <Discount>{props.discount}</Discount>
                </Frame>
            </MainContainer>
        </Card>
    );
}

export default Cardmobilegateway;


const Card = styled.div`
/* Property 1=online, Property 2=gateway, Property 3=mobile */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 15px;

position: static;
width: 320px;
height: auto;
left: 20.03px;
top: 189px;

/* Neutral / Neutral 9 */

background: #F4F6F9;

`

const MainContainer = styled.div`
/* main-container */

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

position: static;
width: 290px;
height: auto;
left: 15px;
top: 15px;


/* Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 0;

`

const Frame = styled.div`
/* Frame 2842 */


/* Auto Layout */

display: flex;
flex-direction: column;
align-items: flex-start;


position: static;
width: 290px;
height: auto;
left: 0px;
top: 138px;


/* Inside Auto Layout */

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
margin-top:7px


`
const TitleContainer = styled.div`
/* Title component - mobile */


/* Auto Layout */

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 8px 0px;

position: static;
width: 290px;
height: auto;
left: 0px;
top: 0px;


/* Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 0;

`

const Title = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;

position: static;
width: 260px;
height: 57px;
left: 0px;
top: 30px;


/* Inside Auto Layout */

flex: none;
order: 1;
flex-grow: 0;
margin: 3px 0px;
`

const Subtitle = styled.div`
/* subtitle */


/* Auto Layout */

display: flex;
flex-direction: row;
align-items: center;
padding: 0px 7px;

position: static;
width: 298px;
height: 22px;
left: 0px;
top: 93px;


/* Inside Auto Layout */

flex: none;
order: 2;
flex-grow: 0;
margin: 3px 0px;

`

const IconBack = styled.div`
/* go-back */

position: static;
width: 16px;
height: 16px;
left: 0px;
top: 8px;


/* Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 0;


`

const TitleText = styled.div`
position: static;
width: 260px;
height: 57px;
left: 0px;
top: 0px;

font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 28px;
/* or 117% */

display: flex;
align-items: center;

/* Neutral / Black */

color: #09101D;


/* Inside Auto Layout */

flex: none;
order: 1;
flex-grow: 0;
margin: 0px 5px;
`

const SubtitleText = styled.div`
position: static;
width: 284px;
left: 7px;
top: 0%;
bottom: 0%;

font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 22px;
/* identical to box height */

display: flex;
align-items: center;

/* color-grey darken-1 */

color: #29343E;


/* Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 0px 0px;
`

const Discount = styled.div`
/* discount */


position: static;
width: 290px;
height: 16px;
left: 0px;
top: 86px;

font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 16px;
display: flex;
align-items: center;

/* Status / Success */

color: #287D3C;


/* Inside Auto Layout */

flex: none;
order: 4;
align-self: stretch;
flex-grow: 0;
margin: 5px 0px;
`

const Text = styled.div`
/* text */


position: static;
width: 290px;
height: 19px;
left: 0px;
top: 62px;

font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 19px;
/* identical to box height, or 136% */

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

const Price = styled.div`
/* price */


position: static;
width: 290px;
height: 36px;
left: 0px;
top: 21px;

font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 38px;
line-height: 52px;
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

const OldPrice = styled.div`
/* old-price */


position: static;
width: 56px;
height: 16px;
left: 0px;
top: 0px;
text-decoration: line-through 0.5px  #858C94;  

/* Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 5px 0px;
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 22px;
/* identical to box height */

display: flex;
align-items: center;

/* Neutral / Neutral 4 */

color: #6D7580;
`

