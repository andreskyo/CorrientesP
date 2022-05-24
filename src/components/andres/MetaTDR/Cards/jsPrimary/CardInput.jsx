import React from 'react'
import styled from "styled-components";
import CardHeader from '@mui/material/CardHeader';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { TextInput } from '../../TextInput/TextInput';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { Buttons } from '../../Buttons/Butttons/Buttons'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Input = styled('input')({
    display: 'none',
});

const CardComponentInput = styled(Card)`
&&{
   background: #FFFFFF;
   box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.2), 0px 1px 3px rgba(50, 50, 71, 0.1);
   border-radius: 14px;
}

.ButonSubirArchivo{
    width: 130px;
    height: 37px;
    font-size: 10px;
    text-transform: none;
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    opacity: 0.8;
    border: 1px solid #4AA9FF; 
    border-radius: 8px;
    color: #0077E6;
    margin-left: 5px;
}
.css-1qvr50w-MuiTypography-root {
   font-family: 'SF UI Text';
   font-style: normal;
   font-weight: 500;
   font-size: 20px;
   line-height: 150%;
   color: #09101D;
}
.css-nrdprl-MuiTypography-root{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #78716C;
}
.css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root{
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 13px;
    color: #A5ABB3;
    background: #EBEEF2;
    backdrop-filter: blur(10px);
    border-radius: 10px;
    
}
.kCWNvr.kCWNvr{
    background: #124596;
    border-radius: 8px;
}
`

const CardInput = (props) => {

    return (

        <CardComponentInput className="container-fluid m-0" >
            <CardHeader

                className='row col-12'
                title={props.datosCardInput.descripcion}
                subheader={<>{props.datosCardInput.incumplidas}{props.datosCardInput.buttonUpload}</>}

            />


            <CardContent className="row col-12">

                <TextField
                    label={false}
                    InputLabelProps={{ shrink: false }}
                    defaultValue="Input"
                    InputProps={{
                        endAdornment:
                            <InputAdornment position="start">

                                <label htmlFor="contained-button-file">
                                    <Input accept="image/*" id="contained-button-file" multiple type="file" />
                                    {props.datosCardInput.ButtonInput}
                                </label>
                            </InputAdornment>
}}>

                </TextField>
            </CardContent>

        </CardComponentInput>

    )
}

export default CardInput