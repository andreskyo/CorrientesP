import React from 'react'
import styled from "styled-components";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
import { Buttons } from '../../Buttons/Butttons/Buttons'

const CardComponentPerfiles = styled(Card)`
    &&{
    background: #FFFFFF;
    box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
    border-radius: 16px;
    flex-wrap: Wrap;
  } 
  .avatar{
    margin-top:-30px;
  }
  .yzFfc.yzFfc {
    width:150px;
    height: 30px;
    color: #06B6D4;
    border: 1px solid #67E8F9;
    border-radius: 8px;
  }
  .name{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 600;
    color: #272727;
  }
  .job{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 400;
    color: #272727;
  }
 .row{
    margin-left:-30px;
 }

`


const CardPerfiles = (props) => {

  const renderPerfil = () => {

    let resultado = props.datosPerfiles.map((res, i) => {

      return <div className="d-flex  ">


        <CardHeader

          avatar={
            <Avatar
              className="avatar"
              alt="Remy Sharp"
              src={res.icon}
              sx={{ width: 75, height: 75, marginTop: -1.5 }}
            />
          }
        />

        <CardContent className="row  ">
          <Typography
            className="name"
          >
            {res.name}
          </Typography>

          <Typography
            className="job"
          >
            {res.job}
          </Typography>

          <CardActions>
            <Buttons
              primary
              outlined
              onClick={res.onClick}
              text={res.button} />
          </CardActions>

        </CardContent>


      </div>

    })

    return resultado
  }

  return (
    <CardComponentPerfiles>
      {renderPerfil()}
    </CardComponentPerfiles>

  )
}

export default CardPerfiles