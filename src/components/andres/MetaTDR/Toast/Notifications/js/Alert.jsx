import * as React from 'react';
import styled from "styled-components";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';


const MuiAlertComponent = styled(MuiAlert)`
&&{
  background: #FFFFFF;
  border: 1px solid #DA1414;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}
.time{
    color: #6D7580;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    line-height: 23px;
} 
.title{
    color: #2C3A4B;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
}
.label{
    color: #6D7580;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    margin-top:10px;
}

`

const Alert = (props) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    return (
        <>
            <Button
                onClick={handleOpen}>Alert</Button>
            <Modal
                open={open}
            >
                <Stack
                    spacing={2}
                    sx={{ width: '100%' }}>

                    <MuiAlertComponent
                        onClose={handleClose}
                        icon={props.iconAlert}
                        sx={{ width: '100%' }}>
                        <Typography className="time"> {props.dAlert.time} </Typography>
                        <Typography className="title"> {props.dAlert.title} </Typography>
                        <Typography className="label"> {props.dAlert.label} </Typography>
                    </MuiAlertComponent>
                </Stack>
            </Modal>
        </>
    );
};
export default Alert