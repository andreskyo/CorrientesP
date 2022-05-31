import React from 'react'
import styled from "styled-components";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import {es} from 'date-fns/locale';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

const ComponentCalendar = styled(Card)`
 &&{ box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
  border-radius: 0px 0px 16px 16px; }
  .css-1v994a0 {
    font-weight: bold;
    display: flex;
    align-items: center;
    color: #27272A
  }
  .css-1dozdou{
    padding-left: 20px;
  }
  .css-1fdf4qj-MuiButtonBase-root-MuiPickersDay-root.Mui-selected{
    background: #124596;

  }

`

const CardCalendar = (props) => {
  const [date, setDate] = React.useState(new Date());

  const handleDate=(newDate)=>{
    if (props.datosCalendar.onChange) {
      props.datosCalendar.onChange(newDate)
    }
    setDate(newDate)
    
  }
  return (
    <ComponentCalendar>

      <LocalizationProvider locale={es} dateAdapter={AdapterDateFns}>
        <Grid container >
         
            <CalendarPicker 
            
            date={date} 
            onChange={handleDate} />
          


        </Grid>


      </LocalizationProvider>

    </ComponentCalendar>
  )
}

export default CardCalendar