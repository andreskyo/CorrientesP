import React from 'react'
import styled from "styled-components";


const ComponentBreadCrumbs = styled.div`
&&{
  display:flex;
  width:100%;
}

.breadcrumbs__item{
  display:inline-block;
  padding-left:3px;
}
.breadcrumbs__item:not(:last-of-type)::after{
   font-family: "Font Awesome 5 Free";
   content: "\f105";
   color: #78716C;
   display: inline-block;
   padding-left: 5px;
   vertical-align: middle;
   font-weight: 900;
   font-size: 10px;
   align-items: center;
   
}
.breadcrumbs__link{
 >a{ 
  font-family: 'SF UI Text';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: #78716C;
}
}
.breadcrumbs__link--active{
  >a 
  {
  text-decoration:none;
  font-family: 'SF UI Text';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: #124596;}
}

`


export const BreadCrumbs = (props) => {

  const renderData = () => {
    let resultado = props.datos.map((res, index, row) => {

      return <li className={index + 1 === row.length ? " breadcrumbs__item breadcrumbs__link--active" : " breadcrumbs__item breadcrumbs__link"}>
        

        {res.link}

      </li>

    })
    return resultado;
  }

  return (
    <ComponentBreadCrumbs>

      {props.datos ?
        <ul>

          {renderData()}
        </ul>
        : null}
    </ComponentBreadCrumbs>


  )
}

export default BreadCrumbs