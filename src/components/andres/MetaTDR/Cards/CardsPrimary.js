import React from 'react';
import PropTypes from 'prop-types';
import CardInfoFull from './jsPrimary/CardInfoFull';
import CardInfoBasic from './jsPrimary/CardInfoBasic';
import CardInput from './jsPrimary/CardInput';
import CardImg from './jsPrimary/CardImg';
import CardStats from './jsPrimary/CardStats';
import CardText from './jsPrimary/CardText';
import CardVencimiento from './jsPrimary/CardVencimiento';
import CardProgress from './jsPrimary/CardProgress';
import CardSetting from './jsPrimary/CardSetting'
import CardHLImg from './jsPrimary/CardHLImg';




export const CardsPrimary = ({ ...props }) => {

    return (
        <>
            {props.cardInfoFull ? <CardInfoFull
                datosCardInfoFull={props.datosCardInfoFull} /> : null}

            {props.cardInfoBasic ? <CardInfoBasic
                datosCardInfoBasic={props.datosCardInfoBasic} /> : null}

            {props.cardInput ? <CardInput
                datosCardInput={props.datosCardInput} /> : null}


            {props.cardImg ? <CardImg
                datosCardImg={props.datosCardImg} /> : null}

            {props.cardStats ? <CardStats
                datosCardStats={props.datosCardStats} /> : null}

            {props.cardText ? <CardText
                datosCardText={props.datosCardText} /> : null}

            {props.cardVencimiento ? <CardVencimiento
                datosVencimiento={props.datosVencimiento} /> : null}

            {props.cardProgress ? <CardProgress
                datosProgress={props.datosProgress} /> : null}
                
            {props.cardSetting ?
                <CardSetting
                    datosSetting={props.datosSetting} /> : null}


        </>
    )


};