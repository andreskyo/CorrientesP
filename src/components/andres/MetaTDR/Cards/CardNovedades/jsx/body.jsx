import React from "react";
import styled from "styled-components";

const Body = styled.div`
  && {
    padding-top: 40px;
    display: flex;
    flex-direction: column;

    .titulo {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    .textTitulo {
      font-family: "SF UI Text";
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 150%;
      color: #27272a;
      width: 80%;
      margin: 0px;
    }

    .hr {
      border: 1px solid #e7e5e4;
    }

    .textSub {
      font-family: "SF UI Text";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
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
