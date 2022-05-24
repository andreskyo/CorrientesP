import React from 'react';
import PropTypes from 'prop-types';
import Paginacion from './js/Paginacion'




export const Pagination = ({ ...props }) => {

    return (
        <>
           

                <Paginacion
                color={props.color}
                size={props.size}
                page={props.page}
                datos={props.datos}
                onChange={props.onChange}
                />

        </>
    )


};