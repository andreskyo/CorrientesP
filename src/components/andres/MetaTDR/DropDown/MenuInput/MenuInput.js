import React from "react";
import MenuNotificacion from './MenuNotificacion'
import MenuCorreo from './MenuCorreo'






export const MenuInput = ({ ...props }) => {




    return (

        <>
            {props.MenuNotificacion ?

                <MenuNotificacion
                    datos={props.datosCards}
                    onChange={props.onChange}
                    imagenNotificacion={props.imagen}
                    notificacion={props.notificacion}
                    subNotificacion={props.subNotificacion}
                    linkNotificaciones={props.verNotificaciones}
                />

                :<MenuCorreo
                    datos={props.datosCards}
                    onChange={props.onChange}
                    imagenNotificacion={props.imagenCorreo}
                    iconMail={props.iconImgMail}
                    domicilioFiscal={props.verNotificacionesFiscal}
                    notificacion={props.notificacion}
                    subNotificacion={props.subNotificacion}
                    buttonCorreo={props.buttonCorreo}
                    linkNotificaciones={props.verNotificaciones}
                />}




        </>

    )

};
