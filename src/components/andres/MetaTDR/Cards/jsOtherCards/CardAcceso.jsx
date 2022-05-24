import React from 'react'
import styled from "styled-components";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { Buttons } from '../../Buttons/Butttons/Buttons'


const CardComponentAcceso = styled(Card)`
   
    
     &&{
       background: #FFFFFF;
       box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
       border-radius: 16px;
       display:flex;
  } 
  .kCWNvr.kCWNvr{
       margin-left:5px;
       width: 88px;
       height: 37px;
  }

  .avatar{
       margin-top:-10px;
       background:white;
       color:#78716C;
       border: 1.14341px solid #78716C;
  } 
  .name{
     
       font-style: normal;
       font-weight: 600;
       color: #272727;
       margin-top: 20px;
  }
  .job{
     
       font-style: normal;
       font-weight: 400;
       color: #272727;
  }
  .cardContent{
      margin-left:-30px;
      color:red;
  }
  &.MuiPaper-root:hover{
    box-shadow: 0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.1), 0px 6px 12px rgba(14, 31, 53, 0.08);

  }
 
`

const CardAcceso = (props) => {
    return (
        <CardComponentAcceso>
            <CardHeader

                avatar={
                    <Avatar
                        className="avatar"
                        alt="Remy Sharp"
                        sx={{ width: 80, height: 80 }}
                    
                    >{props.datosAcceso.avatar}</Avatar>
                }
            />
            <CardContent className="row p-2 cardContent">
                <Typography
                    className="name"
                >
                    {props.datosAcceso.name}
                </Typography>

                <Typography
                    className="job"
                >
                    {props.datosAcceso.job}
                </Typography>

                <CardActions>
                    <Buttons
                        contained
                        primary
                        outlined={props.datosAcceso.outlined}    
                        onClick={props.datosAcceso.onClick}                        
                        text={props.datosAcceso.button} />
                </CardActions>

            </CardContent>
        </CardComponentAcceso>
    )
}

export default CardAcceso