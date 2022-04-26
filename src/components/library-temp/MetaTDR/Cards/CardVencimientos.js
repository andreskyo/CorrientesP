import React from 'react';
import styled from 'styled-components'



const Cardvencimientos = (props) => {
    return (
        <CardVencimientos>
            <Content>
                <Text>
                    <CardTitle>
                        <Date>
                        
                            <TextDate>
                                
                               {props.title}
                            </TextDate>
                            <i className="fas fa-angle-down"></i>
                        </Date>
                        <Title>
                        
                            Proximos Vencimientos
                        </Title>

                    </CardTitle>
                </Text>
            </Content>
        </CardVencimientos>
    );
}

export default Cardvencimientos;

const CardVencimientos = styled.div`
/* card-vencimientos */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
position: static;
width: 350px;
height: 135px;
left: 80px;
top: 1141px;
flex: none;
order: 3;
flex-grow: 0;
margin: 24px 0px;
`

const Content = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
position: static;
width: 350px;
height: 135px;
left: 0px;
top: 0px;
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
margin: 16px 0px;
`

const Text = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

position: static;
width: 350px;
height: 24px;
left: 0px;
top: 0px;


/* Inside Auto Layout */

flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
margin: 16px 0px;

`
const CardTitle = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;

position: static;
width: 350px;
height: 24px;
left: 0px;
top: 0px;


/* Inside Auto Layout */

flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
margin: 2px 0px;
`

const Date= styled.div`
/* date */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
position: static;

height: 24px;
left: 198px;
top: 0px;
flex: none;
order: 1;
flex-grow: 1;

.fa-angle-down{
   color: #124596; 
   margin:0px 1px;
   display:flex;
   justify-content: center;
   align-items: center;
   
   }


`
const TextDate = styled.div`
position: static;
width: 77px;
height: 16px;
left: calc(50% - 77px/2 - 37.5px);
top: 4px;
/* rc-txt-link */
font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 16px;
/* identical to box height, or 133% */
display: flex;
align-items: center;
text-decoration-line: underline;

/* Action Primary/Default */

color: #124596;


/* Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 0px 0px;
`

const Title = styled.div`
position: static;

left: calc(50% - 190px/2 - 80px);
top: 0%;
bottom: 0%;

/* rc-title-card-16 */

font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 22px;
display: flex;
align-items: center;

/* Neutral / Black */

color: #09101D;


/* Inside Auto Layout */

flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
margin: 0px 8px;

`