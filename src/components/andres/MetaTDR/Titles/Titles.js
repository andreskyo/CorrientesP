import React from 'react'
import TitulosHome from './js/TitulosHome/TitulosHome';
import Title from './js/TitulosHome/Title';
import SubTitles from './js/TitulosHome/SubTitles';


export const Titles = (props) => {
    const textfullwidth = false;
    const textstart = false;
    const textmobile = false;

    return (
        <>

            {props.title ?
                <Title 
                datosTitle={props.datosTitle}/>
                : null}

            {props.subTitle ?
                <SubTitles 
                datosSubTitle={props.datosSubTitle} />
                : null}

            {props.titulosHome ?
                <TitulosHome
                datosTitulosHome={props.datosTitulosHome}
                textMobile />
                : null}


            {props.titulosHome && props.textfullwidth ?
                <TitulosHome
                    textFullWidth
                    datosTitulosHome={props.datosTitulosHome}
                />
                : null}

            {props.titulosHome && props.textstart ?
                <TitulosHome
                    textStart
                    datosTitulosHome={props.datosTitulosHome}

                />
                : null}

            {props.titulosHome && props.textmobile ?
                <TitulosHome
                    textMobile
                    datosTitulosHome={props.datosTitulosHome}

                />
                : null}




        </>

    )
}

export default Titles
