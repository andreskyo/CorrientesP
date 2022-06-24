import React, { useState, useRef } from 'react';
import styled from "styled-components";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Accordion = styled.div`
padding:5px;
&&{
 width:100%;
 display:flex;
 flex-direction:column ;
}
.header{
  width:100%;
  display:flex;
  align-items:baseline ;
  padding:0;
  justify-content:space-between ;

  .headerIcon {
    .icon{
        margin-left: auto;
        cursor:pointer;
  }
  .rotate {
      transform:   rotate(90deg )  ;
      transition: 0.6s ease-in-out;
    }
  }

  .headerTitulo{
    margin:0px;
    padding:0px;
    .titulo{
      margin:0px;
      font-family: 'SF UI Text';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 150%;
/* identical to box height, or 30px */


/* Single Tone/darkText */

color: #27272A;
    }
  }
}
.descripcion{
  font-family: 'SF UI Text';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: #78716C;
}

.listItems{
     -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  transition: all 0.6s ease-in-out;
}

.content{
  padding: 0px;
  overflow: hidden;
}
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
                           background-color:red;
                        }
                     }
                  }
               }
               &__body{
                  .listItems{
                    background-color:red;
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
`;


const Acordion = ({titulo,descripcion}) => {
  
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");

    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );

    setRotateState(
      setActive === "active" ? "icon" : "icon rotate"
    );
  }

  return (
    <Accordion>

      <div className="header">

        <div className="headerTitulo col listCollapsablesHeader__title">

          <p className="titulo listCollapsablesHeaderTitle__mainContent"> {titulo} </p>

        </div>

        <div className="headerIcon">

          <ArrowForwardIosIcon
            className={`${setRotate}`}
            onClick={toggleAccordion}
          />

        </div>

      </div>
      <div className="listCollapsablesItem">
        <div className="content container-fluid listItems" ref={content} style={{ maxHeight: `${setHeight}` }}>
          <div className="row">
            <div className="col">
              <p className="descripcion">{descripcion}</p>
            </div>
          </div>
          
        

      </div>
      </div> 
    

      <hr/>
    </Accordion>
  );
}

export default Acordion