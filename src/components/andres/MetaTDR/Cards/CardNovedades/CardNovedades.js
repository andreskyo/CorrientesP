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
  }

  .contentImg {
    position: relative;
    .img {
      position: absolute;
      top: -60px;
    }
  }
`;

export const CardNovedades = (props) => {
  return (
    <ComponentCard>
      <div className="contentImg">
        <div className="img">{props.img}</div>
      </div>

      {props.body}
    </ComponentCard>
  );
};

export default CardNovedades;
