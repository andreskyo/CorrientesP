import React from 'react';
import styled from 'styled-components'
const Topheader = (props) => {
    const Icon = props.icon
    
    
    return (
        <Container>
            <Content>
                <ContentIcon>
                    {Icon}
                    <Text>
                       {props.text}
                    </Text>
                </ContentIcon>
                <TextLink>
                    {props.textLink}
                </TextLink>
            </Content>
        </Container>
    );
}

export default Topheader;



const Container = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 5px;
width: 100%;
background: #6D7580;
`

const Content = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
position: static;
width: 100%;
height: 37px;
left: calc(50% - 1910px/2);
top: calc(50% - 37px/2);
`

const ContentIcon = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;

position: static;
width: 532px;
height: 24px;
left: calc(50% - 532px/2 - 119px);
top: calc(50% - 24px/2);

`

const Text = styled.div`
position: static;
width: 100%;
height: 23px;
left: 34px;
top: 0.5px;
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 23px;
display: flex;
align-items: center;
text-align: center;
font-feature-settings: 'salt' on;
color: #FFFFFF;
`

const TextLink = styled.div`
position: static;
width: 90px;
height: 16px;
left: 0px;
top: 0px;

/* rc-txt-link */

font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 16px;
/* identical to box height, or 133% */

display: flex;
align-items: center;
text-align: center;
text-decoration-line: underline;

/* Neutral / Neutral 9 */

color: #F4F6F9;


/* Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 0px 0px;

`