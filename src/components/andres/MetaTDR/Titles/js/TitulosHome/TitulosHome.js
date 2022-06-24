import React from 'react'
import Start from './Desktop/TituloStart'
import FullWidth from './Desktop/FullWidth'
import Mobile from './Mobile/textCenterMobile'

const TitulosHome = (props) => {
    const textStart = false;
    const textFullWidth = false;
    const textMobile = false;

    return (

        <>
            {props.textMobile ?
              <Mobile
              datosTitulosHome={props.datosTitulosHome}
                />
                : null}


            {props.textStart ?
                <Start
                datosTitulosHome={props.datosTitulosHome}
                />
                : null}

            {props.textFullWidth ?
                <FullWidth
                datosTitulosHome={props.datosTitulosHome}
                />
                : null}
        </>
    )
}

export default TitulosHome