import React from 'react'
import styled from 'styled-components'
export default function CardBorderCut() {
  return (
   <Styled><div className="card-border">CardBorderCut</div></Styled> 
  )
}

const Styled = styled.div`


width: 415px;
height: 264px;
left: 0px;
top: 39px;

border: 1px solid #E9E9E9;
box-sizing: border-box;
margin:30px;


div {
  position: relative;
  width: 75px;
  margin: 0 auto;
  overflow: hidden;
  padding: 20px;
  text-align: center;
}
div:after {
  content: '';
  position: absolute;
  width: 200%;
  height: 50%;
  right: 0px;
  top: 0px;
  background: #1F67B2;
  transform: skewX(35deg);
  transform-origin: right bottom;
  z-index: -1;
}
div::before {
  content: '';
  position: absolute;
  width: 200%;
  height: 50%;
  right: 0px;
  bottom: 0px;
  background: #1F67B2;
  transform: skewX(-35deg);
  transform-origin: right top;
  z-index: -1;
}




`
