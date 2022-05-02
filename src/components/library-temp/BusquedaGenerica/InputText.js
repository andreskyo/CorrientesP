import React, { Component } from 'react';
import classNames from 'classnames';
import styled from "styled-components";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

import alertIcon from '../assets/i.svg';

const StyledInput = styled.div` 
  margin-top: 0;
  width: 100%;
  > div {
    margin: 0;
    width: 100%;
  }  
  input {
    color: ${props => props.theme.colorBlack};
    font-family: 'Roboto', sans-serif;
    font-size: ${props => props.theme.font.size.base};
    padding: 14px 1rem 12px;
    &::-ms-clear, &::-ms-reveal {
      display: none !important;
    }
  }
  textarea {
    width: 100%;    
    color: ${props => props.theme.colorBlack};
    font-family: 'Roboto', sans-serif;
    font-size: ${props => props.theme.font.size.base};
    padding: 14px 1rem 12px;
    border-color: ${props => props.theme.lightGray};
    border-width: 1px !important;   
    box-shadow: none;
    &::-ms-clear, &::-ms-reveal {
      display: none !important;     
    }
    &:focus {
     outline: none;
     border-color:  ${props => props.theme.brownGray};
    }
  }
  label {
    color: ${props => props.theme.brownGray} !important;
    font-family: 'Roboto', sans-serif;
    left: 1rem;
    transform: translate(0, 13px) scale(1);

    &[data-shrink="true"] {
      font-weight: ${props => props.theme.font.weight.medium};
      transform: translate(0, 4px) scale(.7);

      + div fieldset {
        border-color: ${props => props.theme.brownGray} !important;
        border-width: 1px !important;
      }

      + div[class*="MuiOutlinedInput-error"] {
        fieldset {
          border-color: ${props => props.theme.dangerColor} !important;
        }
      }
    }
  }
  legend {
    display: none;
  }
  p[class*="MuiFormHelperText"] {
    bottom: -17px;
    color: ${props => props.theme.dangerColor};
    font-family: 'Roboto', sans-serif;
    font-size: 11px;
    font-weight: ${props => props.theme.font.weight.light};
    left: 1rem;
    margin: 0;
    position: absolute;
  }
  [class*="MuiOutlinedInput-notchedOutline"] {
    border-color: ${props => props.theme.lightGray} !important;
  }
  [class*="MuiOutlinedInput-focused"] {
    fieldset {
      border-color: ${props => props.theme.brownGray} !important;
    }
  }
  [class*="MuiOutlinedInput-error"] {
    fieldset {
      border-color: ${props => props.theme.dangerColor} !important;
    }
    input {
      color: ${props => props.theme.dangerColor} !important;
    }
  }
  [class*="MuiFormLabel-error"] {
    color: ${props => props.theme.dangerColor} !important;
  }
  .fl-valid {
    input {
      color: ${props => props.theme.primaryColor} !important;
    }
    [class*="MuiOutlinedInput-focused"] fieldset, fieldset, label[data-shrink="true"] + div fieldset {
      border-color: ${props => props.theme.primaryColor} !important;
    }
  }

  .fl-invalid {
    input {
      color: ${props => props.theme.dangerColor} !important;
    }
    [class*="MuiOutlinedInput-focused"] fieldset, fieldset, label[data-shrink="true"] + div fieldset {
      border-color: ${props => props.theme.dangerColor} !important;
    }
  }

  .inputInfo {
    align-items: center;
    cursor: pointer;
    display: flex;
    height: 100%;
    position: absolute;
    right: calc(1rem + 15px);
    top: -10px;
    &.open::before {
      background-color: var(--white);
      border-radius: 4px;
      top: -12px;
      content: "";
      display:block;
      height: 20px;
      position: absolute;
      right: -2px;
      transform: rotate(-45deg);
      width: 20px;
      z-index: 2;
    }
    
    
  }
`;

const TooltipInfo = styled.div`
  background-color: white;
  border-radius: 6px;
  border-top: 5px solid ${props => props.theme.primaryColor};
  bottom: 66px;
  box-shadow: 0px 10px 15px 0px rgba(0,0,0,0.1);
  color: ${props => props.theme.colorBlack};
  font-family: 'Roboto', sans-serif;
  max-width: 438px;
  min-width: 260px;
  padding: 18px;
  position: absolute;
  right: 0;
  text-align: center;
  width: 100%;
  z-index: 50;
  @media(max-width: 640px){
    border-radius: 0;
    left: 0;
    max-width: 100%;
    min-width: 100%;
    padding: 18px 10px;
    width: 100vw;
  }
  h5 {
    color: ${props => props.theme.primaryColor};
    font-size: ${props => props.theme.font.size.normal};
    font-weight: ${props => props.theme.font.weight.bold};
  }
  p {
    font-size: ${props => props.theme.font.size.small};
    margin-bottom: 0;
  }
  ul {
    padding: 0;
    margin: 0;
    li {
      list-style: none;
    }
  }
  .requirements {
    justify-content: space-between;
    margin-top: 16px;
    &_item {
      background: #f1f1f1;
      border: 1px solid transparent;
      border-radius: 4px;
      font-size: 0.6rem;
      padding: 13px 5px;
      text-align: center;
      width: 24%;
      &:last-of-type {
        width: 49%;
      }
      &.-validated {
        background: transparent;
        border-color: ${props => props.theme.primaryColor};
      }
      ul { 
        justify-content: space-between;
        li {
          font-size: 7px;
          &.-validated {
            color: ${props => props.theme.primaryColor};
          }
        }
      }
      span {
        display: block;
        font-size: 11px;
        font-weight: ${props => props.theme.font.weight.medium};
        line-height: 1.1;
        margin-top: 8px;
        &.-validated {
          color: ${props => props.theme.primaryColor};
        }
      }
    }
  }
`;

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
    },
    input: {
        color: 'white'
    }
});

class InputText extends Component {

    static propTypes = {
        id: PropTypes.string,
        classes: PropTypes.object.isRequired,
        withInfo: PropTypes.bool
    };

    state = {
        id: this.props.id,
        name: this.props.name,
        type: this.props.type,
        label: this.props.label,
        isOpen: false,
        minLength: false,
        isValidated: false,
        isAlpha: false,
        isNum: false,
        isSpecial: false,
        isPunctuation: false
    };

    constructor (props) {
        super(props);
        this.state = {hasValue: props.value?true:false, hasError: false, value: props.value};
    }

    toggle = this.toggle.bind(this);

    toggle() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    }

    handleChange = name => event => {
        const val = event.target.value;
        this.setState({
            [name]: val,
        });

        if(val.length == 0){
            this.setState({
                hasError: false,
                hasValue: false
            });
        }else{
            if (val.length < 8) {
                this.setState({
                    minLength: false
                })
            } else {
                this.setState({
                    minLength: true
                });
            }
            if (/[a-zA-Z]+/.test(val)) {
                this.setState({
                    isAlpha: true,
                });
            } else {
                this.setState({
                    isAlpha: false,
                });
            }
            if (/[0-9]/.test(val)) {
                this.setState({
                    isNum: true,
                });
            } else {
                this.setState({
                    isNum: false,
                });
            }
            if (/[!@#$%^&*()?":{}|<>]/.test(val)) {
                this.setState({
                    isSpecial: true,
                });
            } else {
                this.setState({
                    isSpecial: false,
                });
            }
            if (/[.,]/.test(val)) {
                this.setState({
                    isPunctuation: true,
                });
            } else {
                this.setState({
                    isPunctuation: false,
                });
            }

            if (this.props.label === 'CUIT o Usuario') {

                if (/(([A-Za-z\u00F1\u00D1]{4,15})|(\b(20|23|24|27|30|33|34|99)(\D)?[0-9]{8}(\D)?[0-9]))/.test(val)) {
                    this.setState({
                        hasError: false,
                        hasValue: true
                    });
                } else {
                    this.setState({
                        hasError: true
                    });
                }
            }else if(this.props.label === 'Clave virtual'){

                if (/^(?=.*[0-9])(?=.*[a-z|A-Z])[a-zA-Z0-9!@#$%^&*()+º\\_\-\.\[\]\}\{\:\<\>\'\`\\"\~\=\/ ,;]{8,}$/.test(val)) {
                    this.setState({
                        hasError: false,
                        hasValue: true
                    });
                } else {
                    this.setState({
                        hasError: true
                    });
                }
            } else   if (this.props.label === 'CUIT') {

              if (/^(20|23|24|27|30|33|34)(\D)?[0-9]{8}(\D)?[0-9]$/.test(val)) {
                  this.setState({
                      hasError: false,
                      hasValue: true
                  });
              } else {
                  this.setState({
                      hasError: true
                  });
              }
          } else {

                if (
                    /[a-zA-Z]+/.test(val) && /[0-9]/.test(val) ||
                    /[a-zA-Z]+/.test(val) && /[!@#$%^&*()?":{}|<>]/.test(val) ||
                    /[a-zA-Z]+/.test(val) && /[.,]/.test(val) ||
                    /[0-9]/.test(val) && /[!@#$%^&*()?":{}|<>]/.test(val) ||
                    /[0-9]/.test(val) && /[.,]/.test(val) ||
                    /[!@#$%^&*()?":{}|<>]/.test(val) && /[.,]/.test(val)
                ) {
                    this.setState({
                        isValidated: true,
                        hasError: false,
                        hasValue: true
                    });
                } else {
                    this.setState({
                        isValidated: false,
                        hasError: true,
                        hasValue: true
                    });
                }
            }
        }



        if(this.props.onChange){
            this.props.onChange(event);
        }
    };

    render() {
        const { classes, errorMessage, multi, rows } = this.props;
        const {value, hasValue, hasError} = this.state;

        return (          
            <StyledInput className={this.props.className}>
                {multi?<textarea      
                    id={this.props.id}
                    placeholder={this.props.label}
                    className={classNames({'fl-valid': hasValue && !hasError}, {'fl-invalid': hasValue && hasError})}
                    value={this.state.name}
                    onChange={this.handleChange('name')}            
                    rows={rows}
                />:
                <TextField
                    autoFocus={this.props.autoFocus?this.props.autoFocus:false}
                    id={this.props.id}
                    type={this.props.type}
                    label={this.props.label}
                    className={classNames(classes.textField, classes.input, {'fl-valid': hasValue && !hasError}, {'fl-invalid': hasValue && hasError})}
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    variant="outlined"
                    disabled = {this.props.disabled?this.props.disabled:false}
                    error={hasError}
                    helperText={hasError? errorMessage : ' '}
                />}
                {this.props.withInfo &&
                <span className={"inputInfo" + (this.state.isOpen ? ' open' : '')} onClick={this.toggle}>
            <img src={alertIcon} alt="icon" />
          </span>}
                {this.state.isOpen &&
                <TooltipInfo className={this.props.type === 'password' ? "pwrd" : ""}>
                    { this.props.label === 'CUIT o Usuario' ?
                        <div>
                            <h5>¿Ingreso con CUIT o con Usuario?</h5>
                            <p>Todos los Contribuyentes acceden con su CUIT, mientras que los Agentes de otros Organismos acceden con Usuario.</p>
                        </div>
                        : this.props.type === 'password' ?
                            <div>
                                <h5> Consejos para crear la Clave de Acceso Virtual</h5>
                                <p>Por tu seguridad debes cumplir con estos requisitos:</p>
                                <ul className="requirements d-flex">
                                    <li className="requirements_item">Ser nueva
                                        <span className="">Distinta a la anterior</span>
                                    </li>
                                    <li className={"requirements_item" + (this.state.minLength ? " -validated" : "")}>Tener al menos
                                        <span className={this.state.minLength ? " -validated" : ""}>8 <br/> caracteres</span>
                                    </li>
                                    <li className={"requirements_item" + (this.state.isValidated ? " -validated" : "")}>Incluir al menos 2 tipos de caracter
                                        <ul className="d-flex">
                                            <li className={this.state.isNum ? "-validated" : ""}><span>02</span> Numéricos</li>
                                            <li className={this.state.isAlpha ? "-validated" : ""}><span>Aa</span> Alfabéticos</li>
                                            <li className={this.state.isSpecial ? "-validated" : ""}><span>#!</span> Especiales</li>
                                            <li className={this.state.isPunctuation ? "-validated" : ""}><span>…</span> Puntuación</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            : ''
                    }
                </TooltipInfo>}
            </StyledInput>
        );
    }

}

export default withStyles(styles)(InputText);
