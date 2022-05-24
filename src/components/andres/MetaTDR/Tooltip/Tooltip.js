import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Ellipse from "./Ellipse.png";
import Titulo from "./Titulo";
import Lista from './Lista';
import Totalizador from './Totalizador';
import Info from './Info';
import Planes from './Planes';

const Div = styled.div`
  filter: drop-shadow(0px 4px 8px rgba(14, 31, 53, 0.16));
  background: #ffffff;
  border-radius: 6px;
 
  >div>div>ul>li{
      border:none;
      font-family: Nunito;
      font-style: normal;
      height:55px;
      font-size: 17px;
      color: #545D69;
  }
  
  
`;

export const Tooltip = ({ ...props }) => {





  return (
    <Div className="container-fluid m-0">
      <div className="row">

        {props.datos.map(x => {
          return<>
          {x.tipo ==="titulo" ? <Titulo data={x} /> :null}
          {x.tipo ==="lista" ? <Lista data={x} /> :null}
          {x.tipo ==="totalizador" ? <Totalizador data={x} /> :null}
          {x.tipo ==="info" ? <Info data={x} /> :null}
          {x.tipo ==="listaPlanes" ? <Planes data={x} vencimiento={props.vencido}/> :null}
          </>
         
        })}

        

      </div>

    </Div>
  );
};
