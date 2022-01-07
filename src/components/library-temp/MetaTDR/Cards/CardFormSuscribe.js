import React,{useEffect} from 'react';
import styled from 'styled-components';


function CardFormSuscribe(props) {
 

    return (

        <div className="col-5">
            <Cardstatsimage>
                <Content col-10>
                <Text>
                    <Text1>{props.text1}</Text1>
                    <Text2>Lorem ipsum dolor</Text2>
                </Text>
                <InputContainer>
                  <InputLabel>Input</InputLabel>
                    
                  <ButtonStyle>
                    <LabelButtonStyle>
                      Boton
                    </LabelButtonStyle>
                  </ButtonStyle>
                </InputContainer>
                
               
                </Content>
                
                
            </Cardstatsimage>
                </div>
        
    );
}

export default CardFormSuscribe;

        
const Cardstatsimage = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 16px 21px;
position: static;
width: 350px;
height: 113px;
left: 80px;
top: 2292px;
/* White */
background: #FFFFFF;
/* shadow/multi/sm-2 */
box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
border-radius: 16px;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`
const Text = styled.div`
  display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 0px;


left: 50%
top: 24px;
`
const Text1 = styled.div`
position: static;
height: 22px;
left: 0%;
right: 0%;
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
flex-grow: 0;
margin: 4px 0px;
`
const Text2 = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 14px;
  font-family: Nunito;
  line-height: auto;
  color: #6C7580;
`
const InputContainer = styled.div`
display:flex;
position: relative;
background: #EBEEF2;
backdrop-filter: blur(10px);
border-radius: 10px;
margin:15px 0px;
justify-content: end;
border-radius: 10px;
width:250px
`

const ButtonStyle = styled.button`
display: flex;
position: relative;
border:none;

border-color: inherit;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: static;
width: 76px;
height: 44px;
right: 3.97px;
top: 50%;
background: #124596;
border-radius: 8px;

@keyframes press {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.92);
  }
  to {
    transform: scale(1);
  }
}
@keyframes bounce {
  50% {
    transform: rotate(0deg) translate(5px, -5px);
  }
  to {
    transform: scale(0.2) rotate(5deg) translate(5px, -8px);
    opacity: 0;
  }
}


&&:hover{
  background: #004BE8;
  border-radius: 8px;
  cursor: pointer;
}

&&:active {
  background: #0B5FFF;
  border-radius: 8px;
  box-shadow: 0 2px #666;
  transform: translateX(1px);
  animation: bounce 0.2s 1 linear; 
}

`

const LabelButtonStyle = styled.div`
position: static;
width: 44px;
height: 20px;
left: 0px;
top: 0px;

font-family: Nunito!important;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */


/* Action Primary / Inverted */

color: #FFFFFF;


/* Inside Auto Layout */

flex: none;
order: 1;
flex-grow: 0;
margin: 0px 8px;
`

const InputLabel = styled.div`
position: absolute;
width: 41px;
height: 11px;
left: 16px;
top: calc(50% - 11px/2 - 0.5px);

font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 13px;
line-height: 13px;
/* or 100% */


/* Neutral / Neutral 6 */

color: #A5ABB3;



`