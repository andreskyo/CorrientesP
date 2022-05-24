import React, { useEffect, useState } from 'react';
import useGet from '../../../../utils/useGet';
import axios from 'axios';
import {Carousel,CarouselItem} from 'react-bootstrap'

const Carousel2 = () => {
	// const [dataCarousel, setCarousel] = useGet({url:"https://api.test.dgrcorrientes.gov.ar/strapibe/api/carousels?populate=%2A"})

	const [dataCarousel, setCarousel] = useState([]);
	useEffect(() => {
		axios
			.get(
				'https://api.test.dgrcorrientes.gov.ar/strapibe/api/carousels?populate=%2A'
			)
			.then((response) => {
				setCarousel(response.data);
			});
	}, []);
	const items = dataCarousel.data
		? dataCarousel.data.map((e) => e.attributes.imagen.data.attributes.url)
		: '';
	

	return (
        <div className="w-100 container-carousel d-flex">
        <Carousel >
        {
            items.length > 0 ? items.map(item=>{
                return(
                    <CarouselItem key={Math.random()}>
                        <img src={item} alt="First slide" width="100%" />
                    </CarouselItem>
                )
            }) : null
        }
		</Carousel>
        </div>
		
	);
};

export default Carousel2;
