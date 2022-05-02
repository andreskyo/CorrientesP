import React, {Fragment} from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';


class InputNew extends React.Component {

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
        focus: false,
        valido:true
    };

    constructor (props) {
        super(props);
        this.state = {hasValue: props.value?true:false, hasError: false, value: props.value?props.value:""};
    }

    componentWillReceiveProps(nextProps){

        if(this.props.tieneError){
            this.setState({
                hasError:nextProps.tieneError,

            })

        }


    }

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

    validateInput = (e)=>{
        alert("regex"+this.props.regex)
        const Rex = this.props.regex;
        let valido = false;


        if (Rex.test(e.target.value)) {
            // console.log("name: " + label);
           valido = true;
        } else if (e.target.value === '') {
            valido = true;
        } else {
            valido = false;
        }
        return valido;
    }


    handleChange = name => event => {

      //  console.log("qads")
        let val = event.target.value;
        let valido= "valid";
      /* if(event.target.value.length === 11){
            alert("11 "+event.target.value);
            valido = this.validateInput(event)?"valid":"invalid";

        }else if(event.target.value.length === 0){
            valido = "";
        } else {
            valido="invalid"
        };*/




        //let isValidated = false;
        this.setState({
            [name]: val,
            value:val,
            valido:valido
        });

        if(this.props.onChange){

                this.props.onChange(event);
        }
    };

    renderBotonInput = (opcion ) =>{
        let resultado =    <input type="text" className="form-control" placeholder={this.props.label?this.props.label:"Buscar ..."}
                                  aria-describedby="basic-addon1"
                                  id={this.props.id?this.props.id:"1"}
                                  value={this.state.value}
                                  onChange={this.handleChange('value')}
                                  disabled={this.props.disabled ? this.props.disabled : false}
                                  onBlur={()=>this._onBlur()} />;

      return  resultado
    };

    handleClick = ()=>{
        //alert("value: " + this.state.value)
        if(this.props.search){
            this.props.search(this.state.value);
        }
    };

    handleSubmit(event) {
       // alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        const { requerido,label, value, children, className,size, ...rest } = this.props;
        const { valido } = this.state;
        let calsevalida = valido;


        return (
        <Fragment>
            <InputSearch className={`col-lg col-sm-12 mb-2 pl-0  `} >
                <div className="col pl-0 pr-0">
                    <div className='form-group'>
                        <label className='control-label'>{label} {requerido==="S"?<span
                            className="required">*</span>:null}</label>
                        <form onSubmit={this.handleSubmit}>
                        <input type="text" className="form-control"
                               id={this.props.id?this.props.id:"1"}
                               value={this.state.value}
                               onChange={this.handleChange('value')}
                               disabled={this.props.disabled ? this.props.disabled : false}
                               onBlur={()=>this._onBlur()}/>
                        </form>
                    </div>
                </div>
            </InputSearch>
            {/* language=CSS*/}
            <style jsx>{`
                .box {
                    width: 100%;
                    border:1px solid #e9e9e9;    
                    border-radius: 6px;
                    padding: 30px;
                    height: 100%;
                }
                .box:hover {
                    border:1px solid #e9e9e9;    
                    border-radius: 6px;
                    box-shadow: 0 10px 30px 0 rgba(51, 51, 51, 0.1);
                    background-color: #ffffff;
                }
            `}</style>
        </Fragment>

        );
    }
}

const  RcBtn = styled.div`
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 1rem;
  background-color: #124596;
`;
const  Elements = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;
const  Text1 = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 14px;
  font-family: Nunito;
  line-height: 20%;
  color: #ffffff;
`;

const  InputSearch = styled.div`
 .invalid {
    border: 1px solid #DA1414!important;
   }
   .valid {
   border: 1px solid #009236!important;
   }
 .input-group-search-content {
   display: flex;
   flex-wrap: nowrap;
   align-items: center;
   border-radius: 0.625rem;
   border: 1px solid #f7f8fa;
   background-color: #f7f8fa;
   padding: 0.25rem;
   height: 42px;
   
  

   .form-control {
      border: none;
      box-shadow: none !important;
      outline: none !important;
      background-color: transparent;
      font-weight: 600;

      &::placeholder {
        // font-weight: 600;
         font-weight: 600;
         font-size: 12px;
         color: #A5ABB3;
      }
   }
   
   

   .input-group{
      &-prepend{
         padding-left: 0.5rem;
         >.fa {
            font-size: 1.2rem;
            color: #A5ABB3;
         }
      }
      &-append {
         height: 100%;
         max-height: 33px;
   
         .btn {
            padding: 5px 10px;
            // line-height: 100%;
            max-height: 33px;
            font-size: 1rem;
            border-radius: 0.625rem !important;
            box-shadow: none !important;
         }
      }
   }
   
  

}
`;



InputNew.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string
  }

export default InputNew;