import React, { Component } from 'react';
import styled from 'styled-components';
import { Collapse } from 'reactstrap';


const Styled = styled.div`
  border-bottom: 1px dotted ${props => props.theme.primaryColor};
  width: 100%;
  &:first-of-type {
    border-top: 1px solid ${props => props.theme.brownGray};
  }
  .accordion__text {
    align-items: center;
    color:black;
    cursor: pointer;
    display: flex;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight:700;
    line-height: 1;
    margin: 0;
    padding: 1em 10px;
    i {
      align-items: center;
      border: 1px solid primary;
      border-radius: 0%;
      display: flex;
      height: 23px;
      justify-content: center;
      margin-right: 10px;
      width: 23px;
      &::before {
        background: no-repeat center;
        background-size: contain;
        content:"";
        display: block;
        height: 10px;
        transform: rotate(90deg);
        transition: transform .2s ease-in-out;
        width: 16px;
      }
    }
    &.open i::before {
      transform: rotate(270deg);
    }
  }
  .accordion__content {
    padding-bottom: 1rem;
    padding-top: .5rem;
    width: 100%;
  }
`;

class AccordionClose extends Component {

  state = {
    collapse: false
  }
  toggle = this.toggle.bind(this);

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    const {title, open} = this.props;
    return (
      <Styled className="accordion">
        <div className={"accordion__text" + (this.state.collapse ? " open" : "")} onClick={this.toggle}><i></i>{title}</div>
        <Collapse isOpen={open?open:this.state.collapse}>
          <div className="accordion__content">{this.props.children}</div>
        </Collapse>
      </Styled>
    );
  }
}

export default AccordionClose;