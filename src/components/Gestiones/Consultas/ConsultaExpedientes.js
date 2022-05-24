import React,{useState,useEffect} from 'react'
import TituloConNotificacion from 'components/library-temp/MetaTDR/TitulosHome/TituloConNotificacion'
import {Buttons} from 'components/library-temp/Button/Buttons'
import ApiServicios from '../../../api/ApiServicios';
import BusquedaGenerica from 'components/library-temp/BusquedaGenerica/BusquedaGenerica'
import TitleFullWidth from 'components/library-temp/MetaTDR/TitulosHome/TitleFullWidth'
import {useNavigate} from 'react-router-dom';
import moment from 'moment';




export default function ConsultaExpedientes() {

  const navigate = useNavigate();
  const [Fecha,setFecha] = useState('')
  const [NroExpediente,setNroExpediente] = useState('')
  const [Datos,setDatos] = useState({});
  const [Validar,setValidar] = useState({});
  const [FormValido,setFormValido] = useState(false);
  const [Result,setResult] = useState('');
  
    


     useEffect(() => {
       
       console.log("aca voy a validar con:  " + JSON.stringify(Datos));
        

       const {validar} = Datos
        console.log(" Fecha" + JSON.stringify(Fecha) ); 
       if(validar){
        
          if( validar.Fecha !=="" && validar.Fecha=== "has-success" && validar.NroExpediente !=="" && validar.NroExpediente === "has-success" ){
                       
                    console.log("formvalido: " );
                     setFormValido(true);

                    }else{
                       setFormValido(false);
                    }

      }

    }, [Datos])
   
  
  
  
  
  const  handleSearch = (datos)=>{
        //console.log("datos: " + JSON.stringify(datos));
    };

    const handleSearch2 = (datos)=>{
       
          setDatos(prevState => ({
            ...datos,
           
         }));

        const {validar} = datos;
        setFecha(datos.Fecha?datos.Fecha:"");
        setNroExpediente(datos.NroExpediente?datos.NroExpediente:"");
        setValidar(validar);
        //aca controlas que tenga has-success los labels que se mandan en el busquedagenerica.


      /*  if(datos.TipoInteres && datos.TipoInteres !== ""){
            const dat = datos.TipoInteres.split('-');
            //console.log("TipoInteres: " + dat[1]);
            setTipoInteres({alicuota:dat[1]});

        }*/
        
        
       

    }


        let configStartDate = {
            startDate:new Date(),
            endDate:new Date(),
            dateFormat:"dd/MM/yyyy",
            showMonthYearPicker:false
        };

      


     


        let campos = [
               {tipo:"textNew",label:"NroExpediente", size:3,regex:/^(?=.*[a-zA-Z0-9]{1,})(?=.*[d]{0,})[a-zA-Z0-9]{1,15}$/, requerido:"S",ejecutar:true},
              {tipo:"dateNew",label:"Fecha",regex:"", endDate:"2023-02-02", requerido:"S",configDates:configStartDate,size:12,ejecutar:true},
              /*  {tipo:"cuit",label:"Cuit",regex:/^(20|23|24|27|30|33|34)(\D)?[0-9]{8}(\D)?[0-9]$/, opciones:this.state.comboTramites2?this.state.comboTramites2:comboEstado,requerido:"N",ejecutar:false },*/
            ];



    const handleClick = () => {
      alert("datos" + JSON.stringify(Datos) + "Valido: " + FormValido);
      let anio = moment(Fecha).format('YYYY');
      ApiServicios.service.consultaExpedientes(NroExpediente,anio).then(res => {
        if (res.status !== 200) {
         alert("err " + JSON.stringify(res.status)) 
        }else {
          alert("exito" + JSON.stringify(res.data)) 
        }

      });
    }

    const isDisabled = () => {
      if(FormValido){
        return false;
      }else{
        return true;
      }
    }

  const irGestiones = () => {
    navigate('/gestiones');
  }
  
    console.log("result expedientes " + JSON.stringify(Result));


  return (
<>

    <div className="container">
      <TituloConNotificacion titulo="Gestiones" onClick={()=>irGestiones()} />
      <TitleFullWidth title="Consulta Expedientes"
       subtitle="Para mayor información contactarse con la mesa de ayuda enviando un mail a la casilla de correo mesadeayuda@dgrcorrientes.gov.ar ó bien llamando al 0800-555-7376 (provincia de Corrientes) / 0810-555-7376 (resto del país)"/>
      <div className="d-flex flex-column justify-content-center my-4">
        <div>
        <BusquedaGenerica   estilo="metatdr" campos={campos} onSearch={handleSearch} onSearch2={handleSearch2}/>
        </div>
        <div>
           <Buttons text="Buscar" disabled={isDisabled()} primary onClick={()=>handleClick()}></Buttons>
        </div>
         <div className=" my-4">
            { Result !=="" ?
            <div>
              <h5>Expediente: {Result}</h5>
            </div>
            :""}
        
        </div>
     
      </div>
      
    </div>
</>

   
  )
}
