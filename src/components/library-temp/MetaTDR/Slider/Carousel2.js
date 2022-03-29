
import React, {useEffect} from 'react'
import useGet from "../../../../utils/useGet"

import {
    Carousel,
    CarouselItem,
    CarouselIndicators,
} from 'reactstrap';
  
function Carousel2() {
  const [dataCarousel, setCarousel] = useGet({url:"/carousels"})
 
 

 

    // State for Active index
    const [activeIndex, setActiveIndex] = React.useState(0);
  
    // State for Animation
    const [animating, setAnimating] = React.useState(false);
  
    // Sample items for Carousel
   
    
  
    // Items array length
    const itemLength = dataCarousel.length - 1
  
    // Previous button for Carousel
    const previousButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ?
            itemLength : activeIndex - 1;
        setActiveIndex(nextIndex);
    }
  
    // Next button for Carousel
    const nextButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === itemLength ?
            0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }
  
    // Carousel Item Data
    const carouselItemData = dataCarousel.map((item) => {
        return (
            <CarouselItem
            
                onExited={() => setAnimating(false)}
                onExiting={() => setAnimating(true)}
            >
                <img width="100%" height="100%"src={item.imagen.url} alt={item.texto} />
            </CarouselItem>
        );
    });
  
    return (
        <div >
           
            <Carousel previous={previousButton} next={nextButton}  
                activeIndex={activeIndex}> 
                <CarouselIndicators    
                    items={dataCarousel}
                    activeIndex={activeIndex}
                    onClickHandler={(newIndex) => {
                    if (animating) return;
                        setActiveIndex(newIndex);
                    
                    }} />
               
                {carouselItemData}
            
            
            </Carousel>
        </div >
    );
}
  
export default Carousel2;