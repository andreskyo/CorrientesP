import React from 'react';
import PropTypes from 'prop-types';
import CardPerfil from './jsOtherCards/CardPerfil';
import CardVencimiento from './jsOtherCards/CardVencimiento';
import CardCalendar from './jsOtherCards/CardCalendar'
import CardPerfiles from './jsOtherCards/CardPerfiles'
import CardAcceso from './jsOtherCards/CardAcceso'
import CardDailyStacks from './jsOtherCards/CardDailyStacks'
import { defaults } from 'chart.js';





export const OtherCards = ({ ...props }) => {

    return (
        <>
            {props.cardPerfil ? <CardPerfil
                datosPerfil={props.datosPerfil} /> : null}

            {props.cardVencimiento ? <CardVencimiento
                datosVencimiento={props.datosVencimiento} /> : null}

            {props.cardCalendar ? <CardCalendar 
                datosCalendar={props.datosCalendar}/> : null}

            {props.cardPerfiles ? <CardPerfiles
                datosPerfiles={props.datosPerfiles} /> : null}

            {props.cardAcceso ? <CardAcceso
                datosAcceso={props.datosAcceso}/> : null}

            {props.cardDailyStacks ? <CardDailyStacks
                datosDailyStack={props.datosDailyStack}/> : null}

        </>
    )


};
export default OtherCards;