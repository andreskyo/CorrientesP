import React from "react";
import styled from "styled-components";

const Body = styled.div`
font-family: "Roboto"!important;
  && {
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    width:100%;
    
    .titulo {
      display: flex;
      justify-content: space-between;
    }

    .textTitulo {
      font-family: "Roboto";
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 150%;
      color: #27272a;
      width:auto;
      margin: 0px;
    }

    .hr {
      border: 1px solid #e7e5e4;
      width:100%;
    }

    .textSub {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: #78716c;
    }
  }
`;

const body = (props) => {
  return (
    <Body>
      <div className="titulo">
        <p className="textTitulo">{props.datos.titulo}</p>

        <div className="containerButton">{props.button}</div>
      </div>

      <hr className="hr" />

      <p className="textSub">{props.datos.sub}</p>
    </Body>
  );
};

export default body;
