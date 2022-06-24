import React from 'react'
import styled from "styled-components";




export default function Accordion() {
  return (
    <Styled>
       <div className="row collapseFaqRow">
      
         <div className="col-12 col-md-6 col-lg-5 collapseFaqRow__head pr-0">
            <h2 className="collapseFaqHead__title">¿Alguna pregunta?Nosotros te ayudamos.</h2>
            <p className="collapseFaqHead__description">Yet bed any for assistance indulgence unpleasing. Not thoughts all
               exercise blessing. Indulgence way everything joy alteration boisterous the attachment.</p>
            <a href="/guiaTramites"> {"Más FAQs ->"} </a>
         </div>

         <div className="col-12 col-md">
            <div className="container-fluid listCollapsables listCollapsables--faq">
            
               <div className='row listCollapsables__item'>
            
                  <div className="col listCollapsablesItem">
            
                     <div className="row listCollapsablesItem__header">
                        <div className="col listCollapsablesHeader__title">
                           <p className="listCollapsablesHeaderTitle__mainContent">¿Cómo funciona?</p>
                        </div>
                        <div className="col-auto listCollapsablesHeader__collapser">
                           <button className='btn btn-icon collapsed' data-toggle='collapse' href='#id_colapsable1' role='button'
                              aria-expanded='false' aria-controls='id_colapsable1'>
                              <i className='fa fa-chevron-right' aria-hidden='true'></i>
                           </button>
                        </div>
                     </div>
            
                     <div className="row listCollapsablesItem__body collapse" id='id_colapsable1'>
            
                        <div className="container-fluid listItems">

                           <div className="row">
                              <div className="col">
                                 <p>Para iniciar expedientes desde un lugar donde este Organismo no cuenta con Puestos de Atención al Contribuyente, puede enviar la documentación respectiva al trámite por correo postal a la Dirección General de Rentas de la Provincia de Corrientes: 25 de Mayo 902- Planta Baja– Código Postal 3.400.</p>
                              </div>
                           </div>
            
                        </div>
                     </div>
            
                  </div>
            
               </div>

               <div className='row listCollapsables__item'>
               
                  <div className="col listCollapsablesItem">
               
                     <div className="row listCollapsablesItem__header">
                        <div className="col listCollapsablesHeader__title">
                           <p className="listCollapsablesHeaderTitle__mainContent">Resoluciones</p>
                        </div>
                        <div className="col-auto listCollapsablesHeader__collapser">
                           <button className='btn btn-icon collapsed' data-toggle='collapse' href='#id_colapsable2' role='button'
                              aria-expanded='false' aria-controls='id_colapsable2'>
                              <i className='fa fa-chevron-right' aria-hidden='true'></i>
                           </button>
                        </div>
                     </div>
               
                     <div className="row listCollapsablesItem__body collapse" id='id_colapsable2'>
               
                        <div className="container-fluid listItems">
               
                           <div className="row">
                              <div className="col">
                                 <p>Para iniciar expedientes desde un lugar donde este Organismo no cuenta con Puestos de Atención al
                                    Contribuyente, puede enviar la documentación respectiva al trámite por correo postal a la Dirección
                                    General de Rentas de la Provincia de Corrientes: 25 de Mayo 902- Planta Baja– Código Postal 3.400.
                                 </p>
                              </div>
                           </div>
               
                        </div>
                     </div>
               
                  </div>
               
               </div>

               <div className='row listCollapsables__item'>
               
                  <div className="col listCollapsablesItem">
               
                     <div className="row listCollapsablesItem__header">
                        <div className="col listCollapsablesHeader__title">
                           <p className="listCollapsablesHeaderTitle__mainContent">Resoluciones</p>
                        </div>
                        <div className="col-auto listCollapsablesHeader__collapser">
                           <button className='btn btn-icon collapsed' data-toggle='collapse' href='#id_colapsable3' role='button'
                              aria-expanded='false' aria-controls='id_colapsable3'>
                              <i className='fa fa-chevron-right' aria-hidden='true'></i>
                           </button>
                        </div>
                     </div>
               
                     <div className="row listCollapsablesItem__body collapse" id='id_colapsable3'>
               
                        <div className="container-fluid listItems">
               
                           <div className="row">
                              <div className="col">
                                 <p>Para iniciar expedientes desde un lugar donde este Organismo no cuenta con Puestos de Atención al
                                    Contribuyente, puede enviar la documentación respectiva al trámite por correo postal a la Dirección
                                    General de Rentas de la Provincia de Corrientes: 25 de Mayo 902- Planta Baja– Código Postal 3.400.
                                 </p>
                              </div>
                           </div>
               
                        </div>
                     </div>
               
                  </div>
               
               </div>

               <div className='row listCollapsables__item'>
               
                  <div className="col listCollapsablesItem">
               
                     <div className="row listCollapsablesItem__header">
                        <div className="col listCollapsablesHeader__title">
                           <p className="listCollapsablesHeaderTitle__mainContent">Términos y condiciones</p>
                        </div>
                        <div className="col-auto listCollapsablesHeader__collapser">
                           <button className='btn btn-icon collapsed' data-toggle='collapse' href='#id_colapsable4' role='button'
                              aria-expanded='false' aria-controls='id_colapsable4'>
                              <i className='fa fa-chevron-right' aria-hidden='true'></i>
                           </button>
                        </div>
                     </div>
               
                     <div className="row listCollapsablesItem__body collapse" id='id_colapsable4'>
               
                        <div className="container-fluid listItems">
               
                           <div className="row">
                              <div className="col">
                                 <p>Para iniciar expedientes desde un lugar donde este Organismo no cuenta con Puestos de Atención al
                                    Contribuyente, puede enviar la documentación respectiva al trámite por correo postal a la Dirección
                                    General de Rentas de la Provincia de Corrientes: 25 de Mayo 902- Planta Baja– Código Postal 3.400.
                                 </p>
                              </div>
                           </div>
               
                        </div>
                     </div>
               
                  </div>
               
               </div>
            
            </div>
         </div>
      
      </div>
    </Styled>
   
   

  )
}

const Styled = styled.div`

.listCollapsables{
   padding: 0;
   &__item{
      padding: 6px 0;
      margin: 0 -1.25rem;
      &:not(:last-child){
         border-bottom: $framework-border;
      }
      .listCollapsablesItem {
         &__header{
            .listCollapsablesHeader {
               &__collapser {
                  padding: 0;
                  .fa{
                     min-width: 1rem;
                     text-align: center;
                  }
               }
               &__title{
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  padding-left: 0;
                  p{
                     margin: 0;
                     font-weight: 600;
                     line-height: 120%;
                  }
                  .listCollapsablesHeaderTitle {
                     &__mainContent{}
                     &__description{
                        font-size: 0.875rem;
                        color: $text-color-gray-light;
                     }
                  }
               }
               &__action{
                  display: flex;
                  flex-direction: column; 
                  justify-content: center;
                  padding: 0;
               }
            }
         }
         &__body{
            
         }
      }
   }
   &--faq{
      padding: 0 15px 0 30px;

      .listCollapsables{
         &__item{
            .listCollapsablesItem {
               &__header{
                  .listCollapsablesHeader {
                     &__title{
                        p{
                           font-size: 1.425rem;
                           font-weight: 600;
                           line-height: 120%;
                        }
                     }
                  }
               }
               &__body{
                  .listItems{
                     .row{
                        .col{
                           padding-left: 0;
                           p{
                              font-size: 1.125rem;
                              color: $text-color-gray;
                              margin-bottom: 0.125rem;
                           }
                        }
                     }
                  }
               }
            }
         }
      }
   }
}

`
