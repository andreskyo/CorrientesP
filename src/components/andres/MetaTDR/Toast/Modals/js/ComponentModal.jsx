import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Buttons } from '../../../Buttons/Butttons/Buttons'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import styled from "styled-components";
import { grey } from '@mui/material/colors';

const DivBox = styled(Box)`
&&{
  background: #FFFFFF;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  height: auto;
  padding: 20px;
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
    margin-top:4px;
    margin-left: 10px;
}
.icon{
  color:#545D69;
  background: #F4F6F9;
  font-size: 70px;
  padding:17px;
  margin-left: 10px;
  border: 0px solid #545D69;
  border-radius: 8px;
}
.ZPZUY.ZPZUY {
    border: 1px solid #4F4F4F;
    border-radius: 8px;
    color: #4F4F4F;
    width:110px;
    margin-right: 9px;
    
    
}
.eFOjpF.eFOjpF{
background: #4F4F4F;
border-radius: 8px;
border: 1px solid #4F4F4F;
width:110px;
color: #F5F5F5;
}
.CheckBox{
  margin:20px 4px 14px 20px;
  
}
`

const ComponentModal = (props) => {
  const [open, setOpen] = React.useState(true);
  const [checked, setChecked] = React.useState(true);


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);

  };
  const handleDatos = (event) => {
    console.log(event.target)

  };


  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}

        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <DivBox


        >

          <div className='text-end'
          onClick={handleClose}>
            {props.iconClose}

               
            
          </div>
          <div>

            <div className="d-flex">
              <div style={{ marginTop: "2px" }}>

                {props.icon ? props.iconSuccess : false}

              </div>

              <div style={{ paddingLeft: "20px" }} >

                <Typography className="title">{props.datosModal.title}</Typography>
                <Typography className="label">{props.datosModal.label}</Typography>

                {props.checkBox ?

                  <FormControlLabel
                    onClick={handleDatos}
                    control={
                      <Checkbox
                      sx={{
                        color: grey[800],
                        '&.Mui-checked': {
                          color: grey[800],
                        },
                      }}
                        disableRipple
                        checked={checked}
                        onChange={handleChange}
                        className="CheckBox"
                        name="checkB"

                      />
                    }
                    label={props.datosModal.textCheckBox}
                  />
                  : false}
              </div>

            </div>

            <div>


            </div>
            <div className="text-center mt-2  "
            >

              {props.buttonCancel ?
                <Buttons
                  size={"large"}
                  outlined
                  onClick={handleClose}
                  text={props.datosModal.linkA} />
                : false}
              <Buttons
                size={"large"}
                contained
                onClick={props.onClick}
                text={props.datosModal.linkB} />
            </div>


          </div>
        </DivBox>
      </Modal>
    </>
  )
}



export default ComponentModal