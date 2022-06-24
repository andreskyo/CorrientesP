import React, {Component} from 'react';
import Box from "./Box";
import DatePicker from "react-datepicker";
import Button from "./Button";
import Combo from "./Combo";
import InputForm from "./InputForm";
import moment from "moment";
import ButtonLink from "./ButtonLink";
//import Api from "../../Api";
import styled from 'styled-components';
import InputWSearch from "./InputWSearch";
import ComboSimpleNew from "./ComboSimpleNew";
import InputNew from "./InputNew";
import "react-datepicker/dist/react-datepicker.css";
const RazonSocialContainer = styled.div`
    font-size: 12px;
    font-weight: bold;
    color: darkgray;
  
`;

const DatepickerNew = styled.div`
 padding-left: 10px!important;
   .react-datepicker__input-container{
   
    
    color: #94a4ba !important;
    //border: 2px solid #EBEEF2;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    outline: none !important;
    box-shadow: none !important;
    border: none;
   
   }
   
   .react-datepicker-ignore-onclickoutside{
   //border: 1px solid red!important;
   }
   
   input {
   border: none;
   width: 90%;
   height: 32px;
    &:focus{
        border: none;
        outline-offset: 0px !important;
outline: none !important;

    }
   }
  
`;

const StyledIcon = styled.i`
    &:hover {
        cursor: pointer;
    }
  
`;

class BusquedaGenerica extends Component {

    constructor(props) {
        super(props);

        this.state = {
            validate: {
                userState: '',
                passwordState: ''
            },
            razonSocial:"",
            endSelect:new Date(),
            startSelect: new Date().setMonth(new Date().getMonth()-100),
            cuit:'',
            totalFiltrado:0,
            data:[],
            step:0,
            inputSearch:'',
            showAlert:false,
            countTotal:10,
            defaultComboSeccionTT:"",
            defaultLabelComboSeccionTT:"",
            DatosFormulario:{}

        }
    }

    componentDidMount(){
this.cargarData();

    }

    cargarData =()=>{


        let campos=this.props.campos;


        this.setState({
            comboTramites2:this.props.combo?this.props.combo:"",
            defaultComboSeccionTT:"999",
            defaultLabelComboSeccionTT:"Todos"
        },()=>{

          //  this.comboActosSelecTT(this.props.combo[0])
        })
    };

    validateUser(e) {
        const userRex = /^(20|23|24|27|30|33|34)(\D)?[0-9]{8}(\D)?[0-9]$/


        const {validate} = this.state;

        if (userRex.test(e.target.value)) {

            validate.userState = 'has-success'
            this.handleUserChange(e)
        } else if (e.target.value === '') {
            validate.userState = 'has-success'
        } else {
            validate.userState = 'has-danger'
        }

        this.setState({validate});

    }

    handleUserChange = (e) => {
        const {target} = e;
        const value = target.value;
        this.setState({
            cuit: value,
        });
    };

    toggle = () =>{
        this.setState({showAlert:!this.state.showAlert})
    }

    mostrarCuit = (cadena) =>{
        let l1 = cadena.substring(0,2);
        let l2 =cadena.substring(2,10);
        let l3 =cadena.substring(10,15);
        let result = l1 + "-" + l2 + "-" + l3
        return result
    }

    getValidaContribuyente = (resultado) => {

        let datos = {
            string:this.state.cuit,
            endDate:this.state.endSelect,
            startDate:this.state.startSelect,
            combo:{"value":this.state.defaultComboSeccionTT,"label":this.state.defaultLabelComboSeccionTT}
        };
        let {DatosFormulario, validate} = this.state;
        DatosFormulario.validar = validate;
        this.setState({DatosFormulario});

        if(this.props.onSearch || this.props.onSearch2){
            this.props.onSearch(datos);
           this.props.onSearch2(DatosFormulario)

        }
        //console.log("datos, formulario: "+JSON.stringify(datos))
    };


    comboActosSelecTT = (seleccion)=>{


        this.setState({seccion:seleccion.value,
            defaultComboSeccionTT:seleccion.value,
            defaultLabelComboSeccionTT:seleccion.label,
            // validateErrorSeccionTT:true,
            // mostrarRequisitos:true
        },()=>{
          //  console.log("callback");

        });

    };

    comboActosSelecTTGen = (seleccion, label)=>{
        let {DatosFormulario} = this.state;
        DatosFormulario[label]=seleccion.label;

        this.setState({[label+'seccion']:seleccion.value,
            ['val'+label]:seleccion.value,
            ['lab'+label]:seleccion.label,
            DatosFormulario
            // validateErrorSeccionTT:true,
            // mostrarRequisitos:true
        },()=>{
           // console.log("callback");

        });

    };

    HandlecomboNew = (seleccion, label, campo)=>{

//console.log(seleccion.target.value.alicuota);


        let {DatosFormulario} = this.state;
        const {validate} = this.state;

        DatosFormulario[label]=seleccion.target.value;
        validate[label] = 'has-success';



        this.setState({
            DatosFormulario,
            validate
            // validateErrorSeccionTT:true,
            // mostrarRequisitos:true
        },()=>{
            // console.log("callback");
            if(campo && campo.ejecutar){
                this.getValidaContribuyente();
            }

        });



    };

    validateInput = (e, regex, label, ejecutar) =>{

        const Rex = regex;


        if(label==="Cuit" && e.target.value.length===11){
            this.validarUsuario(e.target.value);
        }

        const {validate} = this.state;
        let {DatosFormulario} = this.state;

        if (Rex.test(e.target.value)) {
       // console.log("name: " + label);
            validate[label] = 'has-success';
            this.handleUserChange(e)
        } else if (e.target.value === '') {
            validate[label] = 'has-success'
        } else {
            validate[label] = 'has-danger'
        }

        this.setState({validate});
        this.setState({[label]:e.target.value});
        DatosFormulario[label]=e.target.value;
        this.setState({DatosFormulario});
        if(ejecutar){
            this.controlCampos();

                    this.getValidaContribuyente();
            }

    };
    
    validarUsuario = (cuit) => {
        /*    
        Api.getDatosContribuyente(cuit).then((res)=>{
            if(res.status !== 200 ){
                alert("Error validación contribuyente" + res.status)
                this.setState({razonSocial:"No se encontro el Contribuyente"})
            } else{
                if(res.data.length===0){
                    this.setState({razonSocial:"No se encontro el Contribuyente"});
                }else{
                    this.setState({razonSocial:res.data[0].razonSocial})
                }
            }
        })
        */
    };

    crearInput = (tipo, label, regex, index,opciones, campo)=>{
      //  console.log("tipo " +tipo);
      //  console.log("label " + label);
        //console.log("regex "+ regex );
        //console.log("index "+index);
        let razonSocial = this.state.razonSocial;
       let input;

        if(tipo==="cuit"){
            input = <div className="inputForm mb-3 col-lg-3 col-sm-12 col-md-4">
                <InputForm
                    id={label+"-"+index}
                    type={tipo}
                    label={label}
                    regex={regex}
                    onChange={(e)=>this.validateInput(e, regex, label)}
                    value={this.state[label]}
                    disabled={false}
                    tieneError={false}
                    key={index}
                />
                <RazonSocialContainer>{this.state[label] && this.state[label].length === 11?razonSocial:""}</RazonSocialContainer>

            </div>
        }else if(tipo==="text"){
          input = <div className={campo.size && campo.size!==""?"inputForm mb-3 col-"+campo.size:"inputForm mb-3 col-12"}>
              <InputForm
                  id={label+"-"+index}
                  type={tipo}
                  label={label}
                  regex={regex}
                  onChange={(e)=>this.validateInput(e, regex, label)}
                  value={this.state[label]}
                  disabled={false}
                  tieneError={false}
                  key={index}
              />

          </div>
        }else if(tipo==="textNew"){
            input = <div className={campo.size && campo.size!==""?" pl-0 pr-0 inputForm mb-3 col-"+campo.size:"inputForm mb-3 col-12"}>
               <InputNew
                   label={campo.label}
                   requerido={campo.requerido}
                   onChange={(e)=>this.validateInput(e, regex, label,campo.ejecutar?campo.ejecutar:false)}
                   size={campo.size}/>

            </div>
        }else if(tipo==="combo"){
            if(opciones && opciones.length >=1){

                input =
                    <div className="col-lg-3 col-sm-12 col-md-12">
                        <Combo
                            options={opciones}
                            defaultVal={this.state['val'+label] ? this.state['val'+label] : ""}
                            defaultLabel={this.state['lab'+label] ? this.state['lab'+label] : ""}
                            onChange={(e)=>this.comboActosSelecTTGen(e,label)}
                            placeholder={label}
                            searchable={true}
                        >
                        </Combo>
                </div>
            }else{
                input =   <div className="col-lg-3 col-sm-12 col-md-4">
                    <Combo
                        options={this.state.comboTramites2}
                        defaultVal={this.state.defaultComboSeccionTT ? this.state.defaultComboSeccionTT : ""}
                        defaultLabel={this.state.defaultLabelComboSeccionTT ? this.state.defaultLabelComboSeccionTT : ""}
                        onChange={(e)=>this.comboActosSelecTT(e)}
                        placeholder={"Estado"}
                    >
                    </Combo>
                </div>

            }
        }else if(tipo==="comboNew"){
           // alert("asd")
            if(opciones && opciones.length >=1){

              /*  input =   <ComboNew className={"comboGen  "+campo.size && campo.size!==""?"col aa pr-0":"col "}>
                    <Combo
                        options={opciones}
                        defaultVal={this.state['val'+label] ? this.state['val'+label] : ""}
                        defaultLabel={this.state['lab'+label] ? this.state['lab'+label] : ""}
                        onChange={(e)=>this.comboActosSelecTTGen(e,label)}
                        placeholder={label}
                    >

                    </Combo> </ComboNew>*/
                input = <ComboSimpleNew size={campo.size} key={index} options={opciones} label={label} onChange={(e)=>this.HandlecomboNew(e,label,campo)}> </ComboSimpleNew>
            }else{
                input =   <div className="col-12">
                    <Combo
                        options={this.state.comboTramites2}
                        defaultVal={this.state.defaultComboSeccionTT ? this.state.defaultComboSeccionTT : ""}
                        defaultLabel={this.state.defaultLabelComboSeccionTT ? this.state.defaultLabelComboSeccionTT : ""}
                        onChange={(e)=>this.comboActosSelecTT(e)}
                        placeholder={"Estado"}
                        
                    >

                    </Combo>


                </div>

            }
        }else if(tipo ==="date"){
           // {campo.endDate}
           let fecha =  new Date(campo.endDate);
          let configDate = campo.configDates?campo.configDates:"";

            if(label.indexOf("Hasta")>=1){
                fecha = new Date();
            }

            if(!this.state[label]){
                this.handleInputsCalendar(fecha,label)
            }

            input =   <div className="col-lg-6 col-sm-12 col-md-6 d-flex justify-content-center">
                <div className="p-2">
                    <h6>{label} <i className="fas fa-calendar-alt"></i> </h6>
                    <DatePicker
                        nextYearButtonLabel="Siguiente"
                        forceShowMonthNavigation
                        locale="es"
                        startDate={configDate.startDate}
                        selected={this.state[label]?this.state[label]:configDate.startDate}
                        dateFormat={configDate.dateFormat?configDate.dateFormat:"MM/yyyy"}
                        showMonthYearPicker
                        onChange={(e)=>this.handleInputsCalendar(e,label)}
                        maxDate={configDate.endDate}//aca formatear enddate

                    />
                </div>


            </div>

        }else if(tipo ==="dateNew"){
            // {campo.endDate}
            
            let fecha =  campo.configDates?campo.configDates.startDate:campo.endDate;
            let configDate = campo.configDates?campo.configDates:"";
            
            if(label.indexOf("Hasta")>=1){
                fecha = new Date();
            }

            if(!this.state[label]){
                this.handleInputsCalendar(fecha,label)
            }

            input =   <div className="col-lg-5 col-sm-12 col-md-6 d-flex pl-0 pr-0 ">
                <div className="col-12 col-lg-auto">
                    <div className='form-group'>
                        <label className='control-label'>{campo.label}<span className="required">*</span></label>
                        <div className="form-control-icon"><i className="fa fa-svg fa-calendar-o fa-fw"></i></div>
                        <div className="form-control-delete"><a href="#"><i
                            className="fa fa-svg fa-times fa-fw"></i></a></div>
                        <DatepickerNew className='form-control'>
                            <DatePicker
                                nextYearButtonLabel="Siguiente"
                                forceShowMonthNavigation
                                locale="es"
                                startDate={configDate.startDate}
                                selected={this.state[label]?this.state[label]:configDate.startDate}
                                dateFormat={configDate.dateFormat?configDate.dateFormat:"MM/yyyy"}
                                showMonthYearPicker={configDate.showMonthYearPicker?configDate.showMonthYearPicker:false}
                                onChange={(e)=>this.handleInputsCalendar(e,label)}
                                maxDate={configDate.endDate}//aca formatear enddate

                            />
                        </DatepickerNew>
                    </div>
                </div>


            </div>

        }else if(tipo==="Accion"){//esto es para que el boton buscar se haga desde aca

           let  input1 =  <Card className={campo.size && campo.size!==""?"row pr-0 pl-0 col-":"  p-0"}>
                           <div className="inputForm mb-3 col-lg-9 col-md-7 col-sm-6 col-auto">
                               <InputForm
                                   id={label+"-"+index}
                                   type={tipo}
                                   label={label}
                                   regex={regex}
                                   onChange={(e)=>this.validateInput(e, regex, label)}
                                   value={this.state[label]}
                                   disabled={false}
                                   tieneError={false}
                               />

                           </div>
                <div className="col-lg-1 col-md-4 col-sm-5">
                {this.renderBoton()}
                </div>


                </Card>;
                input = <InputWSearch size={campo.size} className={" col-1"+campo.size + " "} regex={regex} key={index} id={label+"-"+index} label={label}  value={this.state[label]} onChange={(e)=>{this.handleChangeAccion(e, tipo)}} search={(e)=>this.handleInputsCalendar(e, label)} />

        }

        return input;


    };

    handleChangeAccion = (e,tipo)=>{
        //alert("AE")
        if(this.props.onSearch && tipo==="Accion"){
            this.props.onSearch(e);
        }
    }

    handleInputsCalendar = (e,label) =>{

        let {DatosFormulario, validate} = this.state;
        DatosFormulario[label]=e;
        validate[label] = 'has-success';

       // this.setState({validate});
        this.setState({[label]:e,DatosFormulario, validate});

        let ejecutar= false;
        this.props.campos.forEach((campo)=>{
            if(campo && campo.ejecutar){
                ejecutar = true;
                this.getValidaContribuyente();
            }
        });

    };

    generarCampos = () =>{
      let resultado = this.props.campos.map((campo, i)=>{
          //return <div>tipo:  {campo.tipo} / label: {campo.label} </div>
          return this.crearInput(campo.tipo,campo.label,campo.regex, i,campo.opciones, campo);
      });

        return resultado
    };

    controlCampos = () =>{
        let deshabilitado = "";
        let resultado = this.props.campos.filter((campo, i)=>{
            //return <div>tipo:  {campo.tipo} / label: {campo.label} </div>
            return campo.requerido === "S";
        });
        resultado.forEach((campo)=>{
            if(!this.state[campo.label] || this.state[campo.label] ==="" ){
                console.log("esta vacio el requerido")
                deshabilitado=true
            }else{
                if(this.state.validate && this.state.validate[campo.label] === "has-danger" ){
                    deshabilitado=true
                }else if(deshabilitado===""){
                    deshabilitado=false
                }

            }
        });
        console.log("campos dehabilitados,dkad:  " + deshabilitado)
        //desabilitato deberia mandar arriba para validar el boton...

    }

renderBoton = () =>{
    let deshabilitado = "";
    let resultado = this.props.campos.filter((campo, i)=>{
        //return <div>tipo:  {campo.tipo} / label: {campo.label} </div>
        return campo.requerido === "S";
    });
resultado.forEach((campo)=>{
    if(!this.state[campo.label] || this.state[campo.label] ==="" ){
        console.log("esta vacio el requerido")
        deshabilitado=true
    }else{
        if(this.state.validate && this.state.validate[campo.label] === "has-danger" ){
            deshabilitado=true
        }else if(deshabilitado===""){
            deshabilitado=false
        }

    }
});
    //console.log("campos requeridos para validar: " + JSON.stringify(resultado));
    let boton;
    if(this.props.estilo ==="metatdr"){
        boton = this.BotonSearch("Buscar",()=>alert("buscar"));

    }else{
        boton =<Button  disabled={deshabilitado} value="Buscar" onClick={ ()=>this.getValidaContribuyente(resultado)}/>
    }

    return <div style={{fontFamily:'Nunito'}}>{boton}</div>
};

    BotonSearch = (texto, funcion) =>{

        return  <RcBtn>
                    <Elements onClick={()=>funcion()}>
                        <Text1>{texto}</Text1>
                    </Elements>
                </RcBtn>
    };

renderFiltrosMeta = () =>{

  return <div className="row  mt-3 pl-0 pl-0 pr-0">
                     {this.props.campos?this.generarCampos():""}
        </div>
};

    handleBorrarFiltros = (campo)=>{

        let {DatosFormulario} = this.state;
        DatosFormulario[campo.label]="";
        this.setState({DatosFormulario});
        if(campo.tipo==="combo"){
            this.setState({
                [campo.label]:"",
                ["val"+campo.label]:"",
                ["lab"+campo.label]:""
            })
        }else if (campo.tipo==="cuit" && this.state[campo.label]){
            console.log("borrar cuit");
            this.setState({
                [campo.label]:""
            })

        }

        //no dejar borrar los obligatorios... minimos.
        if(this.props.onSearch){
            //this.props.onSearch(datos);
            this.props.onSearch2(DatosFormulario)

        }
    };

    generarChips = () =>{
        let camposSeleccionados = this.props.campos.filter((campo)=>{

            return this.state.DatosFormulario[campo.label] && campo.label !== "";
        });

        let resultado = camposSeleccionados.map((campo, i)=>{
            let aux =this.state.DatosFormulario[campo.label];
            let label = campo.label;

            if(campo.label.indexOf("Hasta")>=1 || campo.label.indexOf("Desde")>=1){
                // alert("encuentra")
                aux = moment(aux).format("MM/YYYY");
            }

            return <div className="chip" key={i} >{campo.label + ": " + aux }  { campo.requerido !== "S"?<StyledIcon className="fas fa-times-circle ml-2" onClick={()=>this.handleBorrarFiltros(campo)}></StyledIcon>:""} </div>
        });

        return resultado
    }

    handleReload = () =>{

        window.location.reload();



        //this.handleBorrarFiltros(camposSeleccionados,true);


    }

    render() {
        const {estilo} = this.props;
        let result;
        if(this.props.stickyEstado && this.props.stickyEstado===2){
            result =
                <div className="busqueda abnf col-lg-12 col-sm-12 p-2" >
                    <Box className="bg-gray">
                        <h4>Búsqueda <i className="fas fa-search"></i></h4>
                        {this.generarChips()}

                    </Box>
                </div>
        }else{
            result = <div>
                <div className="busqueda abnf col-lg-12 col-sm-12 p-2" >
                    <Box className="bg-gray" style={{padding:"10px"}}>
                        <div className="m-3 ml-5 collapsible">
                            <h4>Búsqueda <i className="fas fa-search"></i></h4>

                        </div>
                        <div className="row col-12" >
                            {this.props.campos?this.generarCampos(this.state.DatosFormulario):""}

                            <div className="col-12    ">

                                <div className="col-12 mt-3 d-flex justify-content-center ">
                                    {this.renderBoton()}

                                </div>
                                <div className="col-12 mt-3  d-flex justify-content-center">
                                    <ButtonLink onClick={ ()=>this.handleReload()}>Limpiar Busqueda</ButtonLink>
                                </div>
                            </div>

                        </div>

                    </Box>

                </div>

            </div>
        }

        return (
            <div className="col-12 col-lg-auto pl-0 pr-0">
                    {estilo==="metatdr"?
                        this.renderFiltrosMeta()
                        :
                       result
                    }
            </div>
        );
    }
}



const  RcBtn = styled.div`
height: 65%;
    position: absolute;
    left: -87%;
    top: 5%;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 1rem;
  background-color: #124596;
`;

const  ComboNew = styled.div`
& .dropdown__control{
  height: 100%;
  font-family: Nunito;
    font-style: normal;
    font-size: 0.9rem;
    line-height: 24px;
    
}
}

 
`
const  Elements = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`
const  Text1 = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 14px;
  font-family: Nunito;
  line-height: 20%;
  color: #ffffff;
`

const  Card = styled.div`
  & div.inputelse{
  background-color: #eaeef2;
  border-radius: 0.625rem;
  //width: 117%;
}

  & [class*="MuiOutlinedInput-notchedOutline"] {
    border-radius: 0.625rem;
   }
 
`
const  TextInput = styled.div`
  text-align: left;
  vertical-align: middle;
  font-size: 13px;
  font-family: Nunito;
  line-height: 0.8125rem;
  color: #a4abb3;
`
const  Rc1btn2 = styled.div`
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 1rem;
  background-color: #124596;
`
const  Elements2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`
const  text222 = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 14px;
  font-family: Nunito;
  line-height: 20%;
  color: #ffffff;
`




export default BusquedaGenerica;