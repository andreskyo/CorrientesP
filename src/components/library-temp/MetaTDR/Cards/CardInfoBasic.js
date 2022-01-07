import React from 'react'
import styled from 'styled-components'



export default function CardInfoBasic(props) {
    return (
        <Card >
            <Frame>
                <Icon>
                    <Ellipse427>
                   {props.image}
                    </Ellipse427>
                </Icon>
                <TextInfo >
                    <Text1>$1.512.739</Text1>
                    <Text2>54 DDJJ incumplidas</Text2>
                </TextInfo>
                
            </Frame>
        
            <Elipsis onClick={()=>alert("test")}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#09101D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#09101D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#09101D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </Elipsis>
        </Card>
    )
}


const Card = styled.div`
/* card-info-basic */


/* Auto Layout */

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
padding: 16px;
width: max-content;
position: static;
height: auto;
left: 80px;
right: 88px;
top: 1037px;


/* White */

background: #FFFFFF;
/* shadow/multi/sm-2 */

box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
border-radius: 16px;

/* Inside Auto Layout */

flex: none;
order: 2;
flex-grow: 0;
margin: 24px 0px;
`

const Frame = styled.div`
/* Frame 2832 */


/* Auto Layout */

display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;

position: static;
width: auto;
height: 48px;
left: 16px;
top: 16px;


/* Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 0px 10px;
`

const Icon = styled.div`
position: static;
width: 48px;
height: 48px;
left: 0px;
top: 0px;

border: 1.5px solid #FFFFFF;
/* Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 0px 16px;
`

const TextInfo = styled.div`
/* Auto Layout */

display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 0px;

position: static;
width: 216px;
height: 41px;
left: 64px;
top: 0px;


/* Inside Auto Layout */

flex: none;
order: 1;
flex-grow: 1;
margin: 0px 16px;

`

const Text1 = styled.div`
position: static;
width: 216px;
height: 22px;
left: calc(50% - 216px/2);
top: calc(50% - 22px/2 - 9.5px);

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
order: 0;
align-self: stretch;
flex-grow: 0;
margin: 0px 0px;
`

const Text2 = styled.div`
position: static;
width: 216px;
height: 19px;
left: calc(50% - 216px/2);
top: 22px;

/* rc-subTitle-card-14 */

font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 19px;
/* identical to box height */

font-feature-settings: 'salt' on;

/* Neutral / Neutral 3 */

color: #545D69;


/* Inside Auto Layout */

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
margin: 0px 0px;

`
const Ellipse427 = styled.div`
width: 48px;
height: 48px;
left: 0px;
top: 0px;
border-radius: 50%;
/* Neutral / Neutral 9 */
/*background: #F4F6F9;*/
background: #124596;
display: flex;
justify-content: center;
align-items: center;
border: 1.5px solid #FFFFFF;    
`

const Elipsis = styled.div`
position: static;
    width: auto;
    height: 41px;
    padding: 0px 10px
    
`