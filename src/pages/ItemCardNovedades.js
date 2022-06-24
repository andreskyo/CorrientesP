
import React from 'react';
import styled from 'styled-components'
import CardImage from '../components/library-temp/MetaTDR/Cards/CardImage'


const ItemCardNovedades = props => {

    const handleClick = ()=>{
     
        if(props.onClick){
            props.onClick();
        }
        }
    
    return (
    <StyledContainer className="" >
    
            <div className="background-title"></div>
            
            <div className="container-content">
                <div className="image d-flex">
                 <div className="title">{props.Titulo}</div>
                    <img
                        src={props.image}
                        alt="novedades"
                    />
                <div className="container-description">
                    <div className="text-description col-8">
                       {props.Descripcion}
                    </div>

                    <div className="info-navigate col-4">
                          <div> <CardImage Titulo={props.Titulo} image={props.image} titulo /> </div>
                          <div> <CardImage Titulo={props.Titulo} image={props.image} titulo /> </div>
                         
                          
                    </div>
                </div>
            </div>

               


            </div>
      
    </StyledContainer>
    
            
    );
};

ItemCardNovedades.propTypes = {

};

const StyledContainer = styled.div`
   
    width:100%;
    height:auto;

    .background-title{
         background: #124596;
         height:300px;
    }
    .container-content{
        background: #E5E5E5;    
        display: flex;
        justify-content: center;
        
        height:100%;
        

    }

    .title{
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
        line-height: 38px;
        /* or 106% */

        display: flex;
        align-items: center;
        text-align: center;
        font-feature-settings: 'ss07' on;

        /* Neutral / White */

        color: #FFFFFF;
            }

    .image{
        width:50%;
        height:50%;
        position: relative;
        top:-15rem;
        flex-direction: column;
        ;

    }
    img{
        margin-top:20px;
        height:100%;
        width:100%;
    }

    .container-description{
        display:flex;
        flex-direction: row
    }

    .info-navigate{
        display:flex;
        flex-direction: column
    }

    .text-description{
        font-family: 'Merriweather';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 28px;
/* or 175% */


/* Neutral / Black */

color: #09101D;

    }
`

export default ItemCardNovedades;

/*  Mostrar item
        {props.Titulo}
        ----------------------------------------------------------------
        {props.Descripcion}

        {props.Fecha}
        {props.TextoBoton? <button className="btn btn-outline-primary latestNewsItem__btn" onClick={()=>alert("")} >{props.TextoBoton}</button>:null}  
        {props.image}    
        */