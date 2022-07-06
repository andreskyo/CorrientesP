import FullWidth from 'components/andres/MetaTDR/Titles/js/TitulosHome/Desktop/FullWidth';
import React from 'react';
import styled from 'styled-components';

const NotFound = () => {

    const datosTitulosHome = {
        sub: "Página no encontrada",
        descripcion: "La página que buscas no existe o no está disponible en este momento."
    }   

    return <div className="container">
        <FullWidth datosTitulosHome={datosTitulosHome}></FullWidth>
    </div>;
}

export default NotFound;