import React from 'react'
import styled from "styled-components";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Popover from '@mui/material/Popover';
import IconButton from '@mui/material/IconButton';
import MuiAlert from '@mui/material/Alert';
import { TextInput } from '../../../TextInput/TextInput';
import { Buttons } from '../../../Buttons/Butttons/Buttons'

const MuiPopup = styled(MuiAlert)`
&&{
  background: #FFFFFF;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
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
    line-height: 24px;
    margin-top:10px;
    
}

.ZPZUY.ZPZUY{
    border: 1px solid #4F4F4F;
    border-radius: 8px;
    color: #4F4F4F;
    width:110px;
    margin-right: 9px;
    
}
.gXLyYO.gXLyYO{
background: #4F4F4F;
border-radius: 8px;
border: 1px solid #4F4F4F;
width:110px;
color: #F5F5F5;



}
`



const Popup = (props) => {

    const [open, setOpen] = React.useState(true);

    const handleOpen = () => setOpen(true);

    const handleClose = () => {
        setOpen(false);
    };

    const handleInput = (e) => {
        const texto = e
        if (props.onChange) {
            props.onChange(texto)
        }
    }

    return (
        <>

            <Buttons
                primary
                text={"Poppups"}
                onClick={handleOpen}
                variant="contained" >

            </Buttons>
            <Modal
                open={open}

            >

                <Popover
                    open={open}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'bottom',
                    }}
                >

                    <MuiPopup
                        onClose={handleClose}
                        icon={false}
                        action={
                            <IconButton
                                disableRipple
                                onClick={handleClose}

                            >
                                {props.iconClose}
                            </IconButton>
                        }
                    >
                        <Typography className="title"> {props.datosPopups.title} </Typography>
                        <Typography className="label"> {props.datosPopups.label} </Typography>
                        <div>
                            <div className=" mt-4">
                                {props.input ?
                                    <TextInput
                                        regex={props.regexInput}
                                        onChange={handleInput}
                                        spaced
                                        /> : false}

                            </div>

                            <div
                                style={{
                                    marginTop: 14,
                                    flexDirection: "row-reverse",
                                    display: "flex"
                                }}>
                                <div
                                >
                                    <Buttons
                                        size="large"
                                        primary
                                        contained
                                        onClick={props.onClick}
                                        text={props.datosPopups.linkB}
                                        disableRipple >

                                    </Buttons>


                                </div>
                                <div
                                >
                                    <Buttons
                                        size="large"
                                        outlined
                                        text={props.datosPopups.linkA}
                                        onClick={handleClose}
                                        disableRipple
                                    ></Buttons>
                                </div>
                            </div>
                        </div>
                    </MuiPopup>

                </Popover>

            </Modal>
        </>
    )
}

export default Popup