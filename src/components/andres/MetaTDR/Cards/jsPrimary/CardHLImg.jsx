import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import imageCard from '../img/imageCard.png'
import Box from '@mui/material/Box';
import styled from "styled-components";



const CardHLImg = () => {
    return (
        <div class="m-4 container-fluid">
        <div class="card row col-12" >
            <div class="row g-0">
               
                <div class="col-5">
                    <div class="card-body">
                        <h5 class="card-title">Alice Liddel</h5>
                        <p class="card-text">Alice is a freelance web designer and developer based in London. She is specialized in HTML5, CSS3, JavaScript, Bootstrap, etc.</p>
                        <a href="#" class="btn btn-primary stretched-link">View Profile</a>
                    </div>
                </div>
                <div class="col-7" style={{height:"auto"}} >
                    <img src={imageCard}class=" m-0 img-fluid" style={{height:"auto"}}alt="..."/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CardHLImg