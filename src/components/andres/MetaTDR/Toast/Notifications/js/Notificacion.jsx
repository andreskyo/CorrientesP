import * as React from 'react';
import styled from "styled-components";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import IconButton from '@mui/material/IconButton';


const MuiNotificationComponent = styled(MuiAlert)`
&&{
  background: #FFFFFF;
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

const Notificacion = (props) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = (e) => {

        setOpen(true)

    };

 

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <>
            <Button
                onClick={handleOpen}>Notificacion</Button>
            <Modal

                open={open}
            >
                <Stack

                    spacing={2}
                    sx={{ width: '100%' }}>

                    <MuiNotificationComponent
                        action={
                            <IconButton
                                disableRipple
                                onClick={handleClose}

                            >
                                <CloseRoundedIcon fontSize="inherit" />
                            </IconButton>
                        }
                        onClose={handleClose}
                        icon={props.iconNotification}
                        sx={{ width: '100%' }}>
                        <Typography className="time"> {props.dNotificacion.time} </Typography>
                        <Typography className="title"> {props.dNotificacion.title} </Typography>
                        <Typography className="label"> {props.dNotificacion.label} </Typography>
                    </MuiNotificationComponent>
                </Stack>
            </Modal>
        </>
    );
};
export default Notificacion