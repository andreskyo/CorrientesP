import React from 'react';
import styled from "styled-components";
import arrow from "../../assets/images/arrow.svg"

const CardSettings = (props) => {
    const arrow = <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.71967 13.7803C1.01256 14.0732 1.48744 14.0732 1.78033 13.7803L8.03033 7.53033C8.32322 7.23744 8.32322 6.76256 8.03033 6.46967L1.78033 0.21967C1.48744 -0.0732231 1.01256 -0.0732231 0.71967 0.21967C0.426777 0.512563 0.426777 0.987437 0.71967 1.28033L6.43934 7L0.71967 12.7197C0.426777 13.0126 0.426777 13.4874 0.71967 13.7803Z" fill="#124596"/>
    </svg>

    return (
        <Card>
            <Container>
                <ContainerHeader>
                    <Text1>{props.text1}</Text1>
                    <Text2>{props.text2}</Text2>
                </ContainerHeader>
                <ContainerActions>
                    <Item1>
                        <Action>
                             {props.action1}
                            {arrow}
                        </Action>
                        
                    </Item1>
                    <Item2>
                        <Action>
                            {props.action1}
                            {arrow}
                            

                           
                        </Action>
                    </Item2>
                    <Item2>
                        <Action>
                            {props.action1}
                            {arrow}
                            

                           
                        </Action>
                    </Item2>
                    <Item2>
                        <Action>
                            {props.action1}
                            {arrow}
                            

                           
                        </Action>
                    </Item2>
                    
                </ContainerActions>
                
                
            </Container>
        </Card>
    );
}

export default CardSettings;


const Card = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 24px 17px 24px 24px;
position: static;
width: 350px;
height: auto;

background: #FFFFFF;
box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
border-radius: 16px;
flex: none;
order: 11;
flex-grow: 0;
margin: 24px 0px;


`

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width:90%;
height: 90%;


height: max-content;
/* Inside Auto Layout */

flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

`

const Text1 = styled.div`
position: static;
width: 309px;
height: 22px;
left: 0px;
top: 0px;

/* rc-title-card-16 */

font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 22px;
/* identical to box height */


/* Neutral / Black */

color: #09101D;


/* Inside Auto Layout */

flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
margin: 4px 0px;
`
const ContainerHeader = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

position: static;
width: 309px;
height: 45px;
left: 0px;
top: 0px;


/* Inside Auto Layout */

flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
margin: 24px 0px;
`
const Text2 = styled.div`
position: static;
width: 309px;
height: 19px;
left: calc(50% - 309px/2);
top: 26px;

/* rc-subTitle-card-14 */

font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 19px;
/* identical to box height */

font-feature-settings: 'salt' on;

/* Neutral / Neutral 4 */

color: #6D7580;


/* Inside Auto Layout */

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
margin: 4px 0px;
`

const ContainerActions = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

position: static;
width:100%;
height: 100%;
left: 0px;
top: 69px;


/* Inside Auto Layout */

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
margin: 24px 0px;

`

const Item1 = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: left;
padding: 0px;
width:100%;
height: 100%;
position: static;

left: 0px;
top: 0px;


/* Inside Auto Layout */

flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
margin: 5px 0px;

`
const Vector = styled.div`
position: absolute;
left: 37.5%;
right: 37.5%;
top: 25%;
bottom: 25%;

/* Neutral / Black */
border: 1.5px solid #09101D;
`




const Item2 = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px;

position: static;
width:100%;
height: 100%;
left: 0px;
top: 0px;


/* Inside Auto Layout */

flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
margin: 5px 0px;

`

const Action = styled.div`
position: relative;
width: 100%;
height: 23px;
left: 0px;
top: 0.5px;
justify-content: space-between;
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 23px;
display: flex;
align-items: center;
font-feature-settings: 'salt' on;
color: #124596;
flex: none;
order: 0;
flex-grow: 0;


`

