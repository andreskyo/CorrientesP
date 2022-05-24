import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useState } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


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
const Input = styled(TextField)`

.MuiOutlinedInput-root {border-radius: 8px;}
.iconDelete{
  cursor:pointer;
  margin-right:-50px;
  
}


`


/*----------------*/



export const DropDownTextInput = ({ ...props }) => {


    const [focused,setFocused]=useState()
    const [text, setText] = useState(props.text)
    const [color, setColor] = useState(props.color)
  


    const handleInput = (e, value) => {
        const texto = value.label;

       if(props.onChange){
           this.props.onChange(texto)
       }
       
        if (!props.regex.test(texto)) {
            if(texto.length>0){
                setColor('error')
                
                
            }else{
               setColor('')
               
            }
           

        } else {
            setColor('success');
           
        }
        return setText(texto)
    }

    const handleTextField = (e) => {
       const textField=e.target.value;



       if(props.onChange){
        this.props.onChange(textField)
    }

    if (textField.length === 0) {
        setColor('')
        setFocused()

    }

    if (!props.regex.test(textField)) {
        if (textField.length > 0) {
            setColor('error');
            setFocused(true)
        }
    } else {
        setColor('success');
        setFocused(true)

    }
    
    return setText(textField)


}

    const handleSet = () => {
        setText('')
        setColor('')
        setFocused()
    }




    return (

        <>
            

            <Autocomplete
                disableClearable
                fullWidth
                onChange={handleInput}
                value={text}
                disabled={props.disabled}
                options={props.datos}
                renderInput={(params) =>
                    <Input
                        {...params}
                        
                        InputProps={{
                            ...params.InputProps,
                            startAdornment: <InputAdornment position="start" >{props.iconCalendario ? props.iconCalendario : null}</InputAdornment>,
                            endAdornment: <InputAdornment onClick={handleSet} position="start" >{text.length > 0 ? props.iconDelete : null}</InputAdornment>
                        }}

                        value={text}
                        color={color}
                        focused={focused}
                        label={props.label}
                        InputLabelProps={{ shrink: props.label }}
                        onChange={handleTextField}
                    />}

            />
            {props.alert ? (color === "error" && props.errorMessage.length > 0) || (color === "success" && props.successMessage.length > 0) ?
                <AlertMensaje
                    iconMapping={{
                        success: props.iconAlert,
                        error: props.iconAlert,
                        info: props.iconAlert,
                        warning: props.iconAlert
                    }}

                    severity={color}>

                    {color === "error" && props.errorMessage.length > 0 ? props.errorMessage : color === "success" && props.successMessage.length > 0 ? props.successMessage : null}
                </AlertMensaje>
                : null : false}
             {props.helperDescription ? props.helperTextDescription : null}




</>



    );
};