import React from 'react'
import styled from "styled-components";
import CardHeader from '@mui/material/CardHeader';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
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

.boton{
    width: 141px;
    height: 37px;
    opacity: 0.8;
    border: 1px solid #4AA9FF;
    border-radius: 8px;
    font-family: 'SF UI Text';
    text-transform:none;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: #0077E6;
    margin-left:10px;

    :hover{
        color: #0077E6; 
        border: 1px solid #4AA9FF;
    }
    :active{
        color: #0077E6; 
        border: 1px solid #4AA9FF;
    }
 
}

.titulo {
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    color: #09101D;
    height: 10px;
   >span{
      padding:5px;
      color: #78716C;
    }
}
.css-nrdprl-MuiTypography-root{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #78716C;
    height: 30px;
}
.css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root{
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    margin:auto;
    margin-left:10px;
    width:100%;
    color: #A5ABB3;
    background: #EBEEF2;
    backdrop-filter: blur(10px);
    border-radius: 10px;
    
}
.buttonInput{

    background: #124596;
    border-radius: 8px;
    text-transform:none;
    margin-right:-15px;
    :hover{
        background:#124596;
    }
}
`

const CardInput = (props) => {

    return (

        <CardComponentInput  >

            <CardHeader


                title={props.datosCardInput.titulo ? <>{props.datosCardInput.titulo}</> : null}
                subheader={
                    <>
                        {props.datosCardInput.sub ? props.datosCardInput.sub : null}

                        {props.datosCardInput.button ? <div className="container-button">{props.datosCardInput.button}</div>

                            : null}
                    </>}

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
                                    <div className="container-button">
                                    <Button
                                        disableRipple
                                        className="buttonInput"
                                        size="large"
                                        variant="contained"
                                        component="span" >
                                        {props.datosCardInput.input}
                                    </Button>
                                    </div>
                                </label>
                            </InputAdornment>
                    }}>

                </TextField>
            </CardContent >

        </CardComponentInput >

    )
}

export default CardInput