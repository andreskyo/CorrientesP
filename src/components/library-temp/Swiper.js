import React from "react";

import { Swiper } from "swiper/react/swiper-react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css';



export default function Swiper2(props) {


        return ( 
            <Swiper>
            
               {props.listado}            
            </Swiper>    
        )
}