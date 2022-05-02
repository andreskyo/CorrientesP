import React, { Component } from 'react';
import styled from "styled-components";

const PrimaryButton = styled.button`
  background: #7aac39;
  border: none;
  border-radius: 20px;
  color: white;
  cursor:pointer;
  font-family: 'Roboto', sans-serif;
  font-weight:500;
  font-size:0.875rem;
  height: 40px;
  min-width: 194px;
  padding: 0 25px;
  position: relative;
  transition: all .2s ease-in-out;
  display:block!important;

  &:focus {
    outline: 0;
  }
  
  &::before {
    content:"";
    display: block;
    height: 20px;
    width: 80%;
    position: absolute;
    transition: all .2s ease-in-out;
  }

  &:hover::before {
    -webkit-box-shadow: 0px 5px 30px 0px rgba(122,172,57,0.5);
    -moz-box-shadow: 0px 5px 30px 0px rgba(122,172,57,0.5);
    box-shadow: 0px 5px 30px 0px rgba(122,172,57,0.5);
    transition: all .2s ease-in-out;
  }

  &:disabled {
    background: #e9e9e9;
    color: #999999;
    cursor: default;
    pointer-events: none;
  }
`;

const SecondaryButton = styled(PrimaryButton)`
  background: transparent;
  border: 2px solid rgba(122, 172, 57, 0.5);
  color: #7aac39;
  &::before {
    display:none;
  }
  &:hover {
    border-color: #7aac39;
    &::before {
      box-shadow: none;
    }
  }
  &:disabled {
    background: transparent;
    border-color: #e9e9e9;
  }
`;


class Button extends Component {

  state = {
    hasValue: false, 
    hasError: false,
  }

  onClick = this.onClick.bind(this);

  onClick(e) {
    if (this.props.disabled) {
        e.preventDefault();
        return;
    }

    if (this.props.onClick) {
        this.props.onClick(e);
    }
}

  render() {
    const StyledButton = this.props.secondary ? SecondaryButton : PrimaryButton;
    const {type, id, name, disabled, value} = this.props;
    return(
      <StyledButton 
        type={type}
        disabled={disabled}
        name={name}
        id={id}
        onClick={this.onClick}
        className={'button'}
      >
        {value}
      </StyledButton>
    );
  }
}

export default Button;