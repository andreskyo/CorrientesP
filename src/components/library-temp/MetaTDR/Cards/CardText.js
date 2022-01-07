import React from 'react';
import styled from 'styled-components';


const Cardtext = (props) => {
    return (
        <Container>
            <Content>
                <ContentText>
                    <CardText>
                        <Frame2832>
                            <Text1>
                                {props.title1}
                            </Text1>
                            <TextLink>
                                {props.textLink1}
                            </TextLink>
                        </Frame2832>
                        <Text2>
                                {props.subtitle1}
                        </Text2>
                    </CardText>
                    <CardText>
                        <Frame2832>
                                    <Text1>
                                    {props.title2}
                                    </Text1>
                                    
                        </Frame2832>
                        <Text2>
                                {props.subtitle2}
                        </Text2>
                    </CardText>
                    <CardText>
                        <Frame2832>
                                    <Text1>
                                    {props.title3}
                                    </Text1>
                                    <TextLink>
                                        
                                        
                                        Cambiar
                                    </TextLink>
                        </Frame2832>
                        <Text2>
                               {props.subtitle3}
                        </Text2>
                    </CardText>
                            
                    
                
                </ContentText>
            </Content>
        </Container>
    );
}

export default Cardtext;


const Container = styled.div`
/* card-text */


/* Auto Layout */

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 24px;

position: static;
width: 350px;
height: auto;


/* White */

background: #FFFFFF;
/* shadow/multi/sm-2 */

box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
border-radius: 16px;

/* Inside Auto Layout */

flex: none;
order: 11;
flex-grow: 0;

`

const Content = styled.div`
/* content */


/* Auto Layout */

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

position: static;
width:auto;
height: 151px;
left: 24px;
top: 24px;


/* Inside Auto Layout */

flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;


`

const  ContentText = styled.div`
/* text */


/* Auto Layout */

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;





/* Inside Auto Layout */

flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;


`

const CardText = styled.div`
/* Text / Headline & Subtitle / Small */


/* Auto Layout */

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

/* Inside Auto Layout */

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
margin: 5px 0px 0px 0px;
`
const Text1 = styled.div`
/* Agente */

position: static;
width: auto;
height: 23px;
left: calc(50% - 194px/2 - 54px);
top: 0px;

/* rc-txt-RG-14 */

font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 23px;
/* identical to box height, or 164% */

font-feature-settings: 'salt' on;

/* Neutral / Neutral 5 */

color: #858C94;


/* Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 1;


`



const Text2 = styled.div`
/* Juan Martínez */
position: static;
width: 302px;
height: 22px;
left: calc(50% - 302px/2);
top: calc(50% - 22px/2 + 12.5px);

/* rc-title-card-16 */

font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 22px;
/* identical to box height */
/* Action Primary/Default */
color: #124596;
/* Inside Auto Layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
margin-top:2px;
`
const Frame2832=styled.div`
/* Frame 2832 */


/* Auto Layout */

display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;




/* Inside Auto Layout */

flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;


`

const TextLink = styled.div`
/* Presentar DDJJ */
display:flex;
justify-content: end;

position: static;
width: 82px;
left: calc(50% - 82px/2);
top: 0%;
bottom: 0%;

/* rc-txt-link */

font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 16px;
/* identical to box height, or 133% */

text-decoration-line: underline;

/* Action Primary/Hover */

color: #004BE8;


/* Inside Auto Layout */

flex: none;
order: 1;
flex-grow: 0;
margin: 0px 5px;



`


