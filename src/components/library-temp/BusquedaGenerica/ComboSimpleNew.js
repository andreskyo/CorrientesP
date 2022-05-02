import React, {Fragment} from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';


class ComboSimpleNew extends React.Component {

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

    handleChange = event => {

        let val = event.target.value;

        let isValidated = false;
        this.setState({
            [this.props.label]: val,
            value:val
        });

        if(this.props.onChange){
                this.props.onChange(event);
        }
    };


    handleClick = ()=>{
        //alert("value: " + this.state.value)
        if(this.props.onSearch){
            this.props.onSearch(this.state.value);
        }
    };

    renderOptions = () =>{

        let opciones = <div>No hay datos.</div>;
      if(this.props.options && this.props.options.length>=1){
          opciones = this.props.options.map((opcion, i)=>{
              let valor="" ;//opcion.value+"-"+opcion.alicuota;


              Object.entries(opcion).forEach(([key, value],i) => {
                //  console.log(key + ' ' + value + "index: "+i); // "a 5", "b 7", "c 9"
                 // console.log("tamaño: "+ Object.entries(opcion).length);
                  if(key === "label"){

                  }else if(i ===Object.entries(opcion).length-1){//ultimo campo

                      valor = valor + value;
                  }else {
                      valor = valor + value+ "-";

                  }
              });

             // console.log("valor; " + valor);
              return <option key={i} {...opcion} value={valor} >{opcion.label} </option>
          })

      }

      return opciones

    };

    render() {
        const { size,children, className, ...rest } = this.props;

        return (
        <Fragment>
          <ContainerSelect className={size && size!==""?" col-lg-"+size:" col-12 col-lg "}>
              <div className='form-group'>
                  <label className='control-label'>{this.props.label}</label>
                  <select id={this.props.label} className='form-control' onChange={this.handleChange}>
                     {this.renderOptions()}
                  </select>
              </div>
          </ContainerSelect>
        </Fragment>
        );
    }
}

const  ContainerSelect = styled.div`
 & .form-group {
   position: relative;

   .control-label {
      font-size: 12px;
      font-weight: 600;
      line-height: 100%;
      position: absolute;
      top: -5px;
      left: 10px;
      line-height: 100%;
      background-color: white;
      padding: 0px 5px;
      color: scale-color(#EBEEF2, 90, -30%);
      >span{
         &.required{
            font-size: 0.725rem;
            color: red;
         }
      }
   }

   .form-control {
      border: 2px solid #EBEEF2;
      border-radius: 0.5rem;
      font-size: 1rem;
      font-weight: 600;
      min-height: 42px;
      outline: none !important;
      box-shadow: none !important;

      ::placeholder {
         font-size: 1rem;
         font-weight: 600;
         color: scale-color(#EBEEF2, 90, -60%);
      }
      &-delete{
         position: absolute;
         top: calc(50% - 10px);
         right: 30px;
         a{
            color: scale-color(#EBEEF2, 90, -30%) !important;
         }
         +.form-control {
            padding-right: 60px;
         }
      }
      &-icon{
         position: absolute;
         top: calc(50% - 15px);
         left: 1rem;
         font-size: 1.25rem;
         color: scale-color(#EBEEF2, 90, -30%) !important;

         ~.form-control {
            padding-left: calc(1rem + 20px);
         }
      }
   }
}
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
 .input-group-search-content {
   display: flex;
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
         font-style: normal;
         font-weight: normal;
         font-size: 13px;
         line-height: 13px;
         display: flex;
         align-items: center;
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



ComboSimpleNew.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string
  }

export default ComboSimpleNew;