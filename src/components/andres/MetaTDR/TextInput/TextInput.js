import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import Alert from '@mui/material/Alert';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';


const Input = styled(TextField)`
.MuiOutlinedInput-root {border-radius: 8px;}
.iconDelete{
  cursor:pointer;
}


`

const AlertMensaje = styled(Alert)`
&&.description{
    color: #09101D;
    opacity: 0.6;
}
&&{
    border-radius: 8px;
    padding: 6px 16px;
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
}


`
const InputLabelSpaced = styled(InputLabel)`
&&{font-family: 'Nunito';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 20px;
left:10px;
color:#09101D;
}
`



/*----------------*/

export const TextInput = ({ ...props }) => {
    const [color, setColor] = useState('')
    const [focused, setFocused] = useState()
    const [text, setText] = useState('')

    const handleInput = (e) => {
        const texto = e.target.value
        if (props.onChange) {
            props.onChange(texto)
        }


        if (texto.length === 0) {
            setColor('')
            setFocused()

        }

        if (!props.regex.test(texto)) {
            if (texto.length > 0) {
                setColor('error');
                setFocused(true)
            }
        } else {
            setColor('success');
            setFocused(true)

        }
        
        return setText(texto)


    }
    const handleSet = () => {

        setText('')
        setColor('')
        setFocused()
        
        



    }

    return (
        <>


            {props.compact ?
                <>
                    <Input
                        label={props.label}
                        InputLabelProps={{ shrink: props.label }}
                        fullWidth
                        value={text}
                        color={color}
                        focused={focused}
                        disabled={props.disabled}


                        onChange={handleInput}

                        InputProps={{

                            startAdornment: <InputAdornment position="start"></InputAdornment>,
                            endAdornment: <InputAdornment position="end" onClick={handleSet}>{text.length > 0 ? props.iconDelete : null}</InputAdornment>
                        }}
                        variant="outlined" />
                </>
                :
                <>
                    <InputLabelSpaced shrink >
                        {props.labelSpaced}
                    </InputLabelSpaced>
                    <Input
                        label={false}
                        InputLabelProps={{ shrink: false }}
                        fullWidth
                        color={color}
                        focused={focused}
                        disabled={props.disabled}
                        value={text}

                        onChange={handleInput}

                        InputProps={{

                            startAdornment: <InputAdornment position="start" >{props.icon ? props.icon : null}</InputAdornment>,
                            endAdornment: <InputAdornment position="start" onClick={handleSet}>{text.length > 0 ? props.iconDelete : null}</InputAdornment>
                        }}
                        variant="outlined" />

                </>
            }

            {props.alert ? (color === "error" && props.errorMessage.length > 0) || (color === "success" && props.successMessage.length > 0) ?
                <AlertMensaje
                    iconMapping={{
                        success: props.iconAlert,
                        error: props.iconAlert,
                        info: props.iconAlert,
                        warning: props.iconAlert
                    }}
                    classname=""
                    severity={color}>

                    {color === "error" && props.errorMessage.length > 0 ? props.errorMessage : color === "success" && props.successMessage.length > 0 ? props.successMessage : null}
                </AlertMensaje>
                : null : null}
            {props.helperText ? props.helperTextDescription : null}


        </>
    );
};