import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import styled from "styled-components";
import imageCard from '../img/imageCard.png'
import { Buttons } from '../../Buttons/Butttons/Buttons'

const Div = styled(Card)`
    
    .card-img {
  color: #fff;
  height: auto;
  background: url(images/img1.jpg) center no-repeat;
  background-size: cover;
}
`


const CardHLImg = () => {
    return (
        <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto'  }}>
                    <Typography component="div" variant="h5">
                        long established
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', justifyContent:'space-between', pl: 1, pb: 1 }}>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        lala
                    </Typography>
                    <Buttons />
                </Box>
            </Box>
            <CardMedia
                className="img-fluid"
                component="img"
                sx={{ width: "100%" }}
                image={imageCard}
                alt="Live from space album cover"
            />
        </Card>
    )
}

export default CardHLImg