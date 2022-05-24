import React from 'react';
import PropTypes from 'prop-types';
import PagoMobile from './jsPagos/PagoMobile';
import PagoGateWay from './jsPagos/PagoGateWay';
import PagoDesktop from './jsPagos/PagoDesktop'









export const CardPagos = ({ ...props }) => {

    return (
        <>

            {props.cardPagosMobile ? <PagoMobile
            datosPagosMobile={props.datosPagosMobile}/> : null }
            {props.cardPagosGateWayMobile ? <PagoGateWay
            datosPagosGateWay={props.datosPagosGateWay}/> : null}
            {props.cardPagosDesktop ? 
            <PagoDesktop
            datosPagoDesktop={props.datosPagoDesktop}/> :null}
        </>
    )


};