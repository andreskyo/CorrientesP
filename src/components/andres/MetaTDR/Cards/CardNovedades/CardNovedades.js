import React from "react";
import styled from "styled-components";

const ComponentCard = styled.div`

  && {
    padding: 20px;
    border-radius: 0px 0px 70px 0px;
    box-sizing: border-box;
    background: #ffffff;
    border: 1px solid #e9e9e9;
    display: flex;
    position:relative;
  }

  .contentImg {
    border-radius: 0px 0px 20px 0px;
    border: 1px solid #e9e9e9;
    display:flex;
    position: absolute;
    width:70px;
    height:70px;
    left: 0;
    top: 0;
    transform: translate(50%,-50%);
    
    .img {
      margin:auto;
      align-self:center ;
      >img{
        max-width:70px;
        max-height:70px;
        
      };
      
    }
  }
`;


export const CardNovedades = (props) => {
  return (
    <ComponentCard>
      <div className="contentImg" style={{background:props.color}}>
        <div className="img">
         {props.img}
        </div>
      </div>

      {props.body}
    </ComponentCard>
  );
};

export default CardNovedades;
