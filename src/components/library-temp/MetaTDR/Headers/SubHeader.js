import React from 'react';
import styled from 'styled-components'
const SubHeader = (props) => {
    return (
        <Container>
            <Content>
                <Acces>
                    {props.iconMenu}
                    <TextAcces>{props.text}</TextAcces>
                </Acces>
                <Menu className="menu ">
                    <Titles></Titles>
                </Menu>
            </Content>
        </Container>
    );
}

export default SubHeader;

const Titles = (props) => {
    const titles = ["Turnos online","Denuncias","Educación tributaria","Vencimiento"]
    
    return (
        titles.map((title) =><div className="d-flex row "><TextMenu>{title}</TextMenu></div>)
    )
}


const Container = styled.div`

width: 100%;
height: auto;

background: #F4F6F9;
`

const Content = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin:1px 10%;

`

const Menu = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 70%!important;
display: flex;
justify-content: space-between;



animation-name: roll-in-left;
 animation-duration: 1s;
 animation-iteration-count: 1;



@-webkit-keyframes roll-in-left {
  0% {
    -webkit-transform: translateX(-800px) rotate(-540deg);
            transform: translateX(-800px) rotate(-540deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) rotate(0deg);
            transform: translateX(0) rotate(0deg);
    opacity: 1;
  }
}




`
const Acces = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;




/* Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 0;

`

const TextAcces = styled.div`
position: static;
height: 16px;
left: 29px;
right: 0px;
top: calc(50% - 16px/2);

/* rc-txt-SB-12 */

font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 16px;
/* identical to box height, or 133% */

display: flex;
align-items: center;
margin:5px;
color: #09101D;
`

const TextMenu = styled.div`
position: static;


font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 28px;
/* identical to box height, or 200% */

display: flex;
align-items: center;
text-align: center;

/* Neutral / Neutral 1 */

color: #2C3A4B;


/* Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 0px 0px;

@media (max-width: 840px) {                  
         display: none;
        
}

animation-name:  slide-in-right;
 animation-duration: 0.8s;
 animation-iteration-count: 1;






@keyframes roll-in-left {
  0% {
    -webkit-transform: translateX(-800px) rotate(0deg);
            transform: translateX(-800px) rotate(0deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) rotate(0deg);
            transform: translateX(0) rotate(0deg);
    opacity: 1;
  }
}




`