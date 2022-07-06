
import React from 'react';




const CardImage = props => {

    const handleClick = ()=>{
     
        if(props.onClick){
            props.onClick();
        }
        }
    
    return (
        <div className="col-12 col-lg latestNewsWrapper__item splide__slide">
            <div className="latestNewsItem d-flex flex-column h-100  justify-content-between">
                <picture className="latestNewsItem__img">
                    <img width="100%" src={props.image} alt="latest News Img 1"/>
                </picture>
                
                <p className="latestNewsItem__title">{props.Titulo}</p>
                {props.Fecha?<p className="latestNewsItem__date"><i className="fa fa-svg fa-calendar fa-fw"></i> {props.Fecha} </p>:null}
                
                <p className="latestNewsItem__description">{props.Descripcion} </p>
                {props.TextoBoton? <button className="btn btn-outline-primary latestNewsItem__btn" onClick={()=>handleClick()} >{props.TextoBoton}</button>:null}
                
            </div>
    </div>
            
    );
};

CardImage.propTypes = {

};

export default CardImage;
