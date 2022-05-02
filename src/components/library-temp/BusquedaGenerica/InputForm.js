import React, {Component, Fragment} from 'react';
import classNames from 'classnames';
import styled from "styled-components";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import alertIcon from '../../../assets/images/i.svg';
import NumberFormat from "react-number-format";


const StyledInput = styled.div` 
  margin-top: 0px;
  width: 100%;
  overflow:hidden;
//  background-color: #eaeef2;
  //border-radius: 0.625rem;
  > div {
    margin: 5px 0px 0px 0px;
    width: 100%;
    
  }  
  input {
    color: ${props => props.theme.colorBlack};
    font-family: 'Roboto', sans-serif;
    font-size: 23px;
    padding: 14px 1rem 12px;
    &::-ms-clear, &::-ms-reveal {
      display: none !important;
    }
  }
  textarea {
    width: 100%;    
    color: ${props => props.theme.colorBlack};
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
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
      color: ${props => props.theme.colorBlack} !important;
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
    font-size: 24px;
    font-weight: ${props => props.theme.font.weight.bold};
  }
  p {
    font-size: 24px;
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

function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;
   

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={values => {
                onChange({
                    target: {
                        value: values.value,
                        id:props.id
                    },
                });
            }}
            thousandSeparator={'.'}
            decimalSeparator={','}
            isNumericString
            prefix="$"
        />
    );



}


function NumberFormatEntero(props) {
    const { inputRef, onChange, ...other } = props;



    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={values => {
                onChange({
                    target: {
                        value: values.value,
                        id:props.id
                    },
                });
            }}
            decimalScale={false}
            isNumericString

        />
    );
}

class InputForm extends Component {

    static propTypes = {
        id: PropTypes.string,
        classes: PropTypes.object.isRequired,
        withInfo: PropTypes.bool,
        name:PropTypes.string
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
        isPunctuation: false,
        profit: this.props.value? this.props.value : "",
        value: this.props.value? this.props.value : "",
        focus: false
    };

    constructor (props) {
        super(props);
        this.state = {hasValue: props.value?true:false, hasError: false, value: props.value};
    }



    componentWillReceiveProps(nextProps){

        if(this.props.tieneError){
            this.setState({
                hasError:nextProps.tieneError,

            })

        }


    }

    /******************* PAra el inputcoin *******************/

    _onBlur = () => {
        if (this.state.focus) {
            this.setState({
                focus: false,
            });
        }

        if(this.props.minValue && this.state.value<this.props.minValue){
           this.setState({value:this.props.minValue});
         }


        if(this.props.onBlur)
            this.props.onBlur();
    };

   /* _onFocus = () => {
        if (!this.state.focus) {
            this.setState({
                focus: true,
            });
        }
    };*/

  /*  _onValueChange = (values) => {
        const {formattedValue, value} = values;
        this.setState({value: formattedValue});


        let obj={"target":{
            "id":this.props.id,
            "value":value,
            "formattedValue":formattedValue
            }};

        if(this.props.onChange){
            this.props.onChange(obj);
        }
    };*/

    /****************************************************/


    toggle = this.toggle.bind(this);

    toggle() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    }

    handleChange = name => event => {

        let val = event.target.value;

        if(this.props.maxValue && val>this.props.maxValue){
                      val=this.props.maxValue;
        }



        let isValidated = false;
        this.setState({
            [name]: val,
        });

        if(val.length == 0){
            this.setState({
                hasError: false,
                hasValue: false
            });
        }else{
            let minLeght = 8;
            if(this.props.minLenght){
                minLeght = this.props.minLenght;
            }

            if (val.length < minLeght) {
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

            if (this.props.label && this.props.regex) {
              //  let regex = "/"++ "/";
                //alert("regex: "+this.props.regex);

                let matcher = new RegExp(this.props.regex);


                if (matcher.test(val)){

                    this.setState({
                        isValidated: true,
                        hasError: false,
                        hasValue: true
                    });
                    isValidated = true;
                } else {

                    this.setState({
                        isValidated: false,
                        hasError: true,
                        hasValue: true
                    });
                }
            }else if(this.props.label && !this.props.regex){

                this.setState({
                    isValidated: true,
                    hasError: false,
                    hasValue: true
                });
                isValidated = true;

            }
        }



        if(this.props.onChange){

            if(this.props.orden){
                this.props.onChange(event, isValidated,this.props.orden);
            }else{
                this.props.onChange(event, isValidated);

            }
        }
    };

    render() {
        const {classes, errorMessage, multi, rows, type } = this.props;
        const { hasValue, hasError} = this.state;

        let resultado = "";

        if(type ==="entero"){

            const {value} = this.state;
           // const inputClassName = `${(value !== "" && !this.state.focus ? " filled" : "")}`;

            resultado= <Fragment>
                <StyledInput className={this.props.className}>
                    <TextField
                        id={this.props.id}
                        type="text"
                        label={this.props.label}
                        className={classNames(classes.textField, classes.input, {'fl-valid': hasValue && !hasError}, {'fl-invalid': hasValue && hasError})}
                        value={value}
                        onChange={this.handleChange("value")}
                        margin="normal"
                        variant="outlined"
                        onBlur={this._onBlur}
                        disabled={this.props.disabled ? this.props.disabled : false}
                        error={this.props.tieneError?this.props.tieneError:hasError}
                        helperText={hasError ? errorMessage : ' '}
                        InputProps={{
                            inputComponent: NumberFormatEntero,
                        }}
                    />
                </StyledInput>
            </Fragment>

            ;

        }else if (type==="money") {
            const {value} = this.state;

         //   const inputClassName = `${(value !== "" && !this.state.focus ? " filled" : "")}`;

            resultado= <Fragment>
                <StyledInput className={this.props.className}>
                   <TextField
                       id={this.props.id}
                       type={this.props.type}
                       label={this.props.label}
                       className={classNames(classes.textField, classes.input, {'fl-valid': hasValue && !hasError}, {'fl-invalid': hasValue && hasError})}
                       value={value}
                       onChange={this.handleChange("value")}
                       onBlur={()=>this._onBlur()}
                       margin="normal"
                       variant="outlined"
                       disabled={this.props.disabled ? this.props.disabled : false}
                       error={this.props.tieneError?this.props.tieneError:hasError}
                       helperText={hasError ? errorMessage : ' '}
                       InputProps={{
                            inputComponent: NumberFormatCustom,
                       }}
                    />
                </StyledInput>
                </Fragment>

            ;

        } else {

            resultado =
                <StyledInput className={"inputelse "+this.props.className}>
                    {multi ? <textarea
                            id={this.props.id}
                            placeholder={this.props.label}
                            className={classNames({'fl-valid': hasValue && !hasError}, {'fl-invalid': hasValue && hasError})}
                            value={this.state.value}
                            onChange={this.handleChange('value')}
                            onBlur={()=>this._onBlur()}
                            rows={rows}
                        /> :
                        <TextField
                            id={this.props.id}
                            type={this.props.type}
                            label={this.props.label}
                            className={classNames(classes.textField, classes.input, {'fl-valid': hasValue && !hasError}, {'fl-invalid': hasValue && hasError})}
                            value={this.state.value}
                            onChange={this.handleChange('value')}
                            margin="normal"
                            variant="outlined"
                            disabled={this.props.disabled ? this.props.disabled : false}
                            error={this.props.tieneError?this.props.tieneError:hasError}
                            helperText={hasError ? errorMessage : ' '}
                            onBlur={()=>this._onBlur()}
                        />}
                    {this.props.withInfo &&
                    <span className={"inputInfo" + (this.state.isOpen ? ' open' : '')} onClick={this.toggle}>
            <img src={alertIcon} alt="icon"/>
          </span>}
                    {this.state.isOpen &&
                    <TooltipInfo className={this.props.type === 'password' ? "pwrd" : ""}>
                        {this.props.label === 'CUIT o Usuario' ?
                            <div>
                                <h5>¿Ingreso con CUIT o con Usuario?</h5>
                                <p>Todos los Contribuyentes acceden con su CUIT, mientras que los Agentes de otros
                                    Organismos acceden con Usuario.</p>
                            </div>
                            : this.props.type === 'password' ?
                                <div>
                                    <h5> Consejos para crear la Clave de Acceso Virtual</h5>
                                    <p>Por tu seguridad debes cumplir con estos requisitos:</p>
                                    <ul className="requirements d-flex">
                                        <li className="requirements_item">Ser nueva
                                            <span className="">Distinta a la anterior</span>
                                        </li>
                                        <li className={"requirements_item" + (this.state.minLength ? " -validated" : "")}>Tener
                                            al menos
                                            <span className={this.state.minLength ? " -validated" : ""}>8 <br/> caracteres</span>
                                        </li>
                                        <li className={"requirements_item" + (this.state.isValidated ? " -validated" : "")}>Incluir
                                            al menos 2 tipos de caracter
                                            <ul className="d-flex">
                                                <li className={this.state.isNum ? "-validated" : ""}>
                                                    <span>02</span> Numéricos
                                                </li>
                                                <li className={this.state.isAlpha ? "-validated" : ""}>
                                                    <span>Aa</span> Alfabéticos
                                                </li>
                                                <li className={this.state.isSpecial ? "-validated" : ""}>
                                                    <span>#!</span> Especiales
                                                </li>
                                                <li className={this.state.isPunctuation ? "-validated" : ""}>
                                                    <span>…</span> Puntuación
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                : ''
                        }
                    </TooltipInfo>}
                </StyledInput>;
        }

        return resultado;
    }
}

InputForm.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    tieneError: PropTypes.bool,
    disabled:PropTypes.bool,
    open:PropTypes.bool,
    inputRef:PropTypes.func,
    onChange:PropTypes.func,
    errorMessage: PropTypes.string,
    value: PropTypes.string,
    multi:PropTypes.bool,
    rows:PropTypes.string,
    minLenght: PropTypes.number,
    orden: PropTypes.number,
    maxValue: PropTypes.number,
    minValue: PropTypes.number,
    onBlur:PropTypes.func,
    regex:PropTypes.any

};

NumberFormatCustom.propTypes = {

    inputRef:PropTypes.func,
    onChange:PropTypes.func,
    id:PropTypes.string

};
NumberFormatEntero.propTypes = {

    inputRef:PropTypes.func,
    onChange:PropTypes.func,
    id:PropTypes.string

};

export default withStyles(styles)(InputForm);
