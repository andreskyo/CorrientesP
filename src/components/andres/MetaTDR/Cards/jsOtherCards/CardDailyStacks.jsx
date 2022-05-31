import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import styled from "styled-components";


const ComponentCardDaily = styled(Card)`
   &&{
     background: #FFFFFF;
     box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
     border-radius: 22.8683px;
   }   
   .tag{
     width:400px;
     margin-top:5px;
     padding:20px;
     height: auto;
     text-align:center;
   }
   .titulo{
     font-family: 'SF UI Text';
     font-style: normal;
     font-weight: 500;
     padding-right:20px;
     color: #78716C;
   }
   .icon{
     margin-right:5px;
     margin-top:-5px;  
   }
   .css-tpwmjq-MuiChip-root {
     font-family: 'SF UI Text';
     font-style: normal;
     font-weight: 500;
     color: #FFFFFF;
    }
   .css-6od3lo-MuiChip-label{
     margin-right:50px;
     font-family: 'SF UI Text';
     font-style: normal;
     font-weight: 500;
     color: #D6D3D1;
   }
`

const CardDailyStacks = (props) => {

  const renderCards = () => {

    let resultado = props.datosDailyStack.map((res, i) => {

      return <>
        <CardContent className="d-flex">
          {res.titulo ?
            <Typography
              className="titulo"
            >
              {res.titulo}
            </Typography>
            : null}

          {res.icon || res.descripcion ?
            <Chip
              className="tag d-block "
              color={res.tagColor}
              icon={res.icon ? res.icon : null}
              label={res.descripcion ? res.descripcion : null}
            />
            : null}
        </CardContent>
      </>
    })
    return resultado
  }
  return (
    <ComponentCardDaily >
      {renderCards()}
    </ComponentCardDaily>
  )
}

export default CardDailyStacks