import React, { Component } from 'react'
import Select from 'react-select';
import styled from 'styled-components';
import iconImg from '../../../assets/images/caret.svg';
import PropTypes from 'prop-types';

const StyledSelect = styled(Select)`
  font-family: 'Roboto', sans-serif;
  font-size: ${props => props.theme.font.size.base};
  color: ${props => props.theme.colorBlack};
  display: inline-block;
  width: 100%;  
  &.dropdown-container {
    display: inline-block;
    width: 100%;
  }   
  .dropdown { 
    &__control {
      align-items: center;
      background: white;
      border-radius: 4px;
      border: solid 1px;
      border-color:   ${(props) => props.defaultColor ? props.theme.dangerColor : props.theme.lightGray};   
      cursor: default;
      display:flex;
      height: 50px;
      padding: 0 1rem;
      width: 100%; 
      position: relative;       
      &--menu-is-open {
        background: white;
        border-color: ${props => props.theme.lightGray};
        .dropdown__single-value {
          color: ${props => props.theme.colorBlack};
        }
        .dropdown__indicator {
          color: ${props => props.theme.colorBlack};
          &::after {
            background: url(${iconImg}) no-repeat center;
          }
        }
      }      
      &:hover, &--is-focused {             
        border-color:  ${props => props.theme.brownGray};
        box-shadow: none;
        cursor: pointer;
      }
      &--menu-is-open {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        .dropdown__indicator {
          &::after {
            transform: rotate(180deg);
          }
        }
      }
    }
    &__single-value {
      color: ${(props) => props.defaultColor ? props.theme.dangerColor : props.theme.colorBlack};   
    }
    &__value-container {
      padding: 0;
    }
    &__placeholder {
      font-family: 'Roboto', sans-serif;
      font-size: ${props => props.theme.font.size.base};
      color: ${props => props.theme.brownGray} !important;
      border-color: ${props => props.theme.lightGray};
    }
    &__indicator {
      &-separator, svg {
        display: none;
      }
      &::after {
        background: url(${iconImg}) no-repeat center;
        background-size: contain;
        content: "";
        display:block;
        height: 100%;
        position: absolute;
        right: 1rem;
        top: 0;
        width: 13px;
      }
    }
    &__menu {
      background: white;
      border-radius: 0px 0px 4px 4px;    
      border: 1px solid ${props => props.theme.brownGray};
      box-shadow: none;
      margin-bottom: 0;
      margin-top: -1px;
      width: 100%;
      position: absolute;      
      z-index: 9999;
      &-list {
        padding: 0;  
        border-radius: 0px 0px 4px 4px;     
        &::-webkit-scrollbar {
          width: 7px;
          background-color: transparent;
        }
        &::-webkit-scrollbar-track {
          border-radius: 4px;
          background-color: transparent;
        }
        &::-webkit-scrollbar-thumb {
          background-color: ${props => props.theme.lightGray};
          border-radius: 4px;
        }
      }
      &::before {
        border-radius: 4px;
        display:block;
        height:calc(100% + 52px);
        max-height: 304px;
        overflow: hidden;
        position: absolute;
        top: -52px;
        width: 100%;
        box-shadow: 0 10px 50px 0 rgba(51, 51, 51, 0.15);
        -moz-box-shadow: 0 10px 50px 0 rgba(51, 51, 51, 0.15);
        -webkit-box-shadow: 0 10px 50px 0 rgba(51, 51, 51, 0.15);
      }
    }
    &__option {
      background: white !important;
      cursor: pointer;
      color: ${props => props.theme.colorBlack};
      width: 100%;
      padding: .9rem 1rem;      
      &:not(:last-of-type) {
        border-bottom: 1px solid ${props => props.theme.lightGray};        
      }
      &--is-focused {
        background: white;
        color:  ${props => props.theme.primaryColor} !important;
      }
      &--is-selected {
        display: none;
      }
    }
  }
`;

class Combo extends Component {
  static propTypes = {
    onChange: PropTypes.func
  }
  
  static defaultProps = {
    onChange: () => {},
  }

  state = {
    boolVar: this.props.defaultColor?true:false,  //xfalso es verde
    isSearchable: this.props.searchable?true:false,
    isClearable: false,
    isDisabled: this.props.isDisabled,
    value:  { label: this.props.defaultLabel, value: this.props.defaultVal },
    options: [],
  }


  handleChange = (value) => { 
    this.props.onChange(value);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.options !== this.state.options) {
      this.setState({ options: nextProps.options });
    }
    if (nextProps.value !== this.state.value) {
      this.setState({ value: nextProps.value });
    }
      if (nextProps.defaultColor !== this.state.boolVar) {
          this.setState({ boolVar: nextProps.defaultColor });
      }

  }

  render() {
    let { isSearchable, isClearable, isDisabled, value, boolVar} = this.state;
    const { options } = this.props;

    if(this.props.defaultVal==="" ){
        value="";
    }

    return (
      <StyledSelect
        defaultColor = {boolVar}
        className={'dropdown-container'}
        classNamePrefix={'dropdown'}
        value={value}
        onChange={this.handleChange}
        options={options}
        isSearchable={isSearchable}
        isClearable={isClearable}
        isDisabled={isDisabled}
        placeholder={this.props.placeholder}
      />
    );
  }
}

export default Combo;