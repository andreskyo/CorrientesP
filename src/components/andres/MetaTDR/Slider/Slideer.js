import * as React from 'react';
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



const slideer =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';



const Slid = styled(Slider)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#3880ff' : '#3880ff',
  height: 6,
  padding: '15px 0',
  '& .MuiSlider-thumb': {
    height: 28,
    width: 28,
    backgroundColor: '#fff',
    boxShadow: slideer,
    '&:focus, &:hover, &.Mui-active': {
      boxShadow:
        '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',

      '@media (hover: none)': {
        boxShadow: slideer,
      },
    },
  },
  '& .MuiSlider-valueLabel': {
    fontSize: 15,
    fontWeight: "600",
    fontFamily: 'Nunito',

    top: -6,
    backgroundColor: 'unset',
    color: "#09101D",
    '&:before': {
      display: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 28,
      width: 28,
      backgroundColor: '#fff',
      boxShadow: slideer,

    },

  },

  '& .MuiSlider-rail': {
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
  },
}));


const SliderRange = styled(Slider)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#3880ff' : '#3880ff',
  height: 6,
  padding: '15px 0',
  '& .MuiSlider-thumb': {
    height: 28,
    width: 28,
    backgroundColor: '#fff',
    boxShadow: slideer,
    '&:focus, &:hover, &.Mui-active': {
      boxShadow:
        '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',

      '@media (hover: none)': {
        boxShadow: slideer,
      },
    },
  },
  '& .MuiSlider-valueLabel': {
    fontSize: 15,
    fontWeight: "600",
    fontFamily: 'Nunito',

    top: -6,
    backgroundColor: 'unset',
    color: "#09101D",
    '&:before': {
      display: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 28,
      width: 28,
      backgroundColor: '#fff',
      boxShadow: slideer,

    },

  },

  '& .MuiSlider-rail': {
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
  },
}));




export const Slideer = ({ ...props }) => {
  const [value, setValue] = React.useState(props.value);

  const handleSliderChange = (e, newValue) => {
    if (props.onChange) {
      props.onChange(value)
    }

    setValue(newValue);

  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };





  const [valueRange, setvalueRange] = React.useState(props.valueRange);

  const handleChange = (e, newValue) => {
    const value = e.target.value

    if (props.onChange) {
      props.onChange(value)
    }
    setvalueRange(newValue);
  };







  return (
    <>
      {props.slider ?
        <Box className=" mt-5 container-fluid d-flex m-0">




          <Slid
            value={value}
            onChange={handleSliderChange}
            disabled={props.disabled}
            marks={props.markss ? props.marks : null}
            valueLabelDisplay={props.typograPhy ? "off" : props.labelDisplay}
          />

          {props.typograPhy ?
            <Typography
              style={{ marginTop: "4px", marginLeft: "20px" }}
              value={value}
              size="small"
              onChange={handleInputChange}
              onBlur={handleBlur}
              id="input-slider" gutterBottom>
              {value}
            </Typography>
            : null}

        </Box>


        : 
        <SliderRange
          className="mt-5"
          disabled={props.disabled}
          value={valueRange}
          onChange={handleChange}
          valueLabelDisplay={props.labelDisplay}
          marks={props.markss ? props.marks : null}
          disableSwap

        />


      }

    </>
  );
};