import React, { Component } from 'react';
import styled from 'styled-components';
import { Collapse } from 'reactstrap';
import iconArrow from '../../../assets/arrow-green.svg';
import PropTypes from 'prop-types';


const Styled = styled.div`
   width: 100%;  
   align-items: flex-start;
   margin-bottom: 5px; 
   border: solid 1px ${props => props.theme.lightGray};
   border-radius: 6px;
   height: 80%;   
   transition: all .2s ease-in-out;
   box-shadow: 0 0 30px 0 rgba(51, 51, 51, 0.1);
   &:hover {
     border-color: transparent;
     box-shadow: 0 0 30px 0 rgba(51, 51, 51, 0.1);
   }

  .accordion__text {
    align-items: center;
    color: ${props => props.theme.colorBlack};    
    display: flex;   
    font-family: 'Roboto', sans-serif;
    font-size: ${props => "20px"};
    font-weight: ${props => props.theme.font.weight.medium};
    margin: 0;
    padding: 20px 20px 15px 20px;
    .col1 {
      padding-left: 0;
      padding-right: 0; 
      width: 50%;
      flex: auto auto auto; 
      cursor: pointer;      
    }
    i {
      cursor: pointer;
      align-items: center;
      border: 1px solid ${props => props.theme.primaryColor};
      border-radius: 50%;
      display: flex;
      height: 23px;
      justify-content: center;
      margin-right: 10px;
      width: 23px;
      &::before {
        background: url(${iconArrow}) no-repeat center;
        background-size: contain;
        content:"";
        display: block;
        height: 10px;
        transform: rotate(90deg);
        transition: transform .2s ease-in-out;
        width: 16px;
      }
    }
    .col2 {
      padding-left: 0;
      padding-right: 0; 
      width: 50%;
      flex: auto auto auto; 
      text-align: right;  
    }
    
    &.open i::before {
      transform: rotate(270deg);
    }
  }
  .accordion__content {
    padding-bottom: 1rem;
    padding-top: 0rem;
    width: 100%;
  }
`;

class AccordionOpen extends Component {

  state = {    
    collapse: false
  }

  toggle = this.toggle.bind(this);

  toggle() {   
    this.setState(state => ({ collapse: !state.collapse })); 
    this.props.actualizaEstado();      
  }

  componentDidMount() {
    if (this.props.iniciarAbierto) {
      this.setState(state => ({ collapse: true }));   
    }

  }

  render() {
    const {titulo, btnEliminar, open} = this.props;
    return (
      <Styled className="accordion">
        <div className={"accordion__text" + (this.state.collapse?" open":"")} >

            <div onClick={this.toggle}> <i></i>  </div>
            <div className="col1"  onClick={this.toggle}><b>{titulo}</b></div>
            {btnEliminar &&  <div className="col2">{btnEliminar}</div>}

        </div>

        <Collapse isOpen={open?open:this.state.collapse}>
          <div className="accordion__content">{this.props.children}</div>
        </Collapse>
      

      </Styled>

    );
  }
}

AccordionOpen.propTypes = {
  iniciarAbierto: PropTypes.bool,
  titulo: PropTypes.any.isRequired,
  btnEliminar: PropTypes.elementType,
  open: PropTypes.bool,
  actualizaEstado: PropTypes.func,

};

export default AccordionOpen;