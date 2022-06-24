import React from 'react'
import styled from 'styled-components';
import Acordion from './js/Accordion';

export const Accordion = (props) => {

  return (
    <Styled>

      <div className="container-fluid listCollapsables listCollapsables--faq listCollapsables__item">
        {props.datosAccordion.map(({ titulo, descripcion }) => (
          <Acordion  titulo={titulo} descripcion={descripcion}/>
        ))}

      </div>

      

    </Styled>
  )
}

export default Accordion

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
      //  color:red!important;
        //border: 1px solid red !important;
         & .header{
         
            .listCollapsablesHeader {
            
               &__collapser {
                  padding: 0;
                  .fa{
                     min-width: 1rem;
                     text-align: center;
                  }
               }
               & __title{
               
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  padding-left: 0;
                  p{
                     margin: 0;
                     font-weight: 600;
                     line-height: 120%;
                  }
                  .listCollapsablesHeaderTitle p {
                   
                     &&__mainContent{
                   
                     }
                     &&__description{
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
     

      .header{
                 //background-color:green !important;
                 
                         
                           font-size: 1.425rem;
                           font-weight: 600;
                           line-height: 120%;
                           
                        }
                
               }
  
      &.listCollapsables{
         &__item{
          //border: 1px solid red !important;//aca esta
            & .listCollapsablesItem {
               //border: 1px solid blue !important;
              // background-color:yellow !important;//aca esta

               &.header{
                
                  &.listCollapsablesHeader {
                    
                     &.__title{
                     // background-color:red !important;
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
   && .listCollapsables__item {
       
        
            
         
   }
}
  
`