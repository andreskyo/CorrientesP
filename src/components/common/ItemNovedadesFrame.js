import React from 'react'
import styled from 'styled-components'
export default function ItemNovedadesFrame() {
  return (
    <Styled>
        <section className="bg-primary container m-0 p-0">
            <header>
                Por <a>Resolución General N° 227-2022, </a>se aprueban los siguientes cambios:
            </header>
            <body>
                <ul>En la Guía de Trámites:
                    <li>
                    Modificación en el punto 7.02 "Reconocimiento, Compensación y Devolución de Saldos a favor del contribuyente" Art 53 y 67 CF. y punto 7.09 - "Descargo de Intimación". 
                    </li>
                    <li>
                    Incorporación del punto 7.12 "Declaraciones Juradas Rectificativas en Menos".
                    </li> 
                    

                </ul>
            </body>
        </section>
    </Styled>
  )
}

const Styled = styled.div`


`

{/* Por Resolución General N° 227-2022, se aprueban los siguientes cambios:

En la Guía de Trámites:

Incorporación del punto 7.12 "Declaraciones Juradas Rectificativas en Menos".

En los formularios:
Modificación en el Formulario 70.015 “Reconocimiento, Compensación y Devolución de Saldos a favor del Contribuyente”.
Incorporación del nuevo Formulario 2025 “Cesión de Saldos a Favor del Contribuyente”.

La citada norma se encuentran en la sección Normativa - Consulta de Resoluciones y los formularios en la sección Trámites - Formularios. */}
