import React from 'react'
import {Buttons} from '../../../Buttons/Butttons/Buttons';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';
import CancelIcon from '@mui/icons-material/Cancel';
import IconButton from '@mui/material/IconButton';
import styled from "styled-components";

const MuiAlertComponent=styled(MuiAlert)`
&&{
  background: #FFFFFF;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}
.icon{
  color:#545D69;
  background: #F4F6F9;
  font-size: 50px;
  padding:10px;
  border: 0px solid #545D69;
  border-radius: 8px;
}

.title{
    color: #2C3A4B;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
    margin-left: 10px;
}
.label{
    color: #6D7580;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    margin-top:10px;
    margin-left: 10px;
}
.ROcPl.ROcPl {
  margin: 5px -8px;
  font-feature-settings: 'ss07' on;
  color: #4F4F4F;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  line-height: 19px;
  margin-left: 2px;
}

`


const ComponentAlert = (props) => {

  
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);


  const handleClose = () => {
    setOpen(false);
  };



  return (
    <>
      <Buttons
        onClick={handleOpen}>Alert</Buttons>
      <Modal
        open={open}
      >
        <Stack
          spacing={2}
          sx={{ width: '100%' }}>

          <MuiAlertComponent
            onClose={handleClose}
            action={
              <IconButton
                disableRipple
                onClick={handleClose}

              >
                {props.iconClose}
              </IconButton>
            }


            icon={props.icon ? props.iconSuccess : false}
            sx={{ width: '100%' }}>
             
            <Typography className="title"> {props.datosAlert.title} </Typography>
            <Typography className="label"> {props.datosAlert.label} </Typography>
            {props.button ? <Buttons line={true} text={props.datosAlert.button} onClick={props.onClick} className="button"/> : null}
            
          </MuiAlertComponent>
        </Stack>
      </Modal>
    </>
  )
}



export default ComponentAlert