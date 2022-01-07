import React from 'react';



const CardImage = props => {
    return (
        <div className="col-12 col-lg latestNewsWrapper__item splide__slide">
        <div className="latestNewsItem">
            
            <picture className="latestNewsItem__img">
                
                <img src={props.image} alt="latest News Img 1"/>
            </picture>
            <p className="latestNewsItem__title">{props.Titulo}</p>
            <p className="latestNewsItem__date"><i className="fa fa-svg fa-calendar fa-fw"></i> {props.Fecha} </p>
            <p className="latestNewsItem__description">{props.Descripcion} </p>
            <button className="btn btn-outline-primary latestNewsItem__btn">{props.TextoBoton}</button>
        </div>
    </div>
            //corregir imagen



              
               /* <Cardimage1>
                    <Imagerounded1>
                        <Imagerounded2 src={props.image} alt="novedades" />
                    </Imagerounded1>
                    <Text>
                        <Contenttext>
                            <Title>{props.Titulo}</Title>
                            <Time>
                                <div classNameName="icon-image">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Feather-core-calendar.svg"  alt="icon"/>
                                </div>
                                <div classNameName="text-date">{props.Fecha}</div>
                            </Time>
                            <Subtitle>{props.Descripcion} </Subtitle>
                        </Contenttext>
                    </Text>
                    <Rcbtn1>
                        <Elements>
                            <Text6>{props.TextoBoton}</Text6>
                        </Elements>
                    </Rcbtn1>
                </Cardimage1>*/

            
    );
};

CardImage.propTypes = {

};

export default CardImage;
