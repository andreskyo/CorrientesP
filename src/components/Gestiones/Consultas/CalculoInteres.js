import {React,useState,useEffect} from 'react'
import {Buttons} from 'components/library-temp/Button/Buttons'
import TituloConNotificacion from 'components/library-temp/MetaTDR/TitulosHome/TituloConNotificacion'
import BusquedaGenerica from 'components/library-temp/BusquedaGenerica/BusquedaGenerica'
import TitleFullWidth from 'components/library-temp/MetaTDR/TitulosHome/TitleFullWidth'
import "react-datepicker/dist/react-datepicker.css";
import {useNavigate} from 'react-router-dom';
import ApiServicios from '../../../api/ApiServicios';
import moment  from 'moment';


export default function CalculoInteres() {
  const navigate = useNavigate();
  const [TipoInteres, setTipoInteres ] = useState('')
  const [ImporteDeuda,setImporteDeuda] = useState('')
  const [Result,setResult] = useState('')
  const [Datos,setDatos] = useState({});
   const [Validar,setValidar] = useState({});
  const [FormValido,setFormValido] = useState(false);
  
    


     useEffect(() => {
       
       console.log("aca voy a validar con:  " + JSON.stringify(Datos));
        

       const {validar} = Datos
      
       if(validar){
        if(
            TipoInteres !== "" 
            && validar.TipoInteres === "has-success" 
            && validar.TipoInteres !== "Seleccionar-"
            && TipoInteres !== "Seleccionar-"
            &&  ImporteDeuda !=="" 
            && validar.ImporteDeuda === "has-success" 
            && validar.FechaPago !== "" 
            && validar.FechaPago ==="has-success" 
            && validar.FechaVencimientoOriginal !=="" 
            && validar.FechaVencimientoOriginal === "has-success"    ){
                       
                    console.log("formvalido: " );
                     setFormValido(true);

                    }else{
                       setFormValido(false);
                    }

      }
    }, [Datos])
   
  
  const getInteres = (monto,fechaVencimientoOriginal,fechaPago ,tipoInteres) => {
    
    ApiServicios.service.calculoInteres(monto,fechaVencimientoOriginal,fechaPago ,tipoInteres)
        .then((res) => {
          if(res.status !== 200){
            alert("Error al calcular el interes" + res.status);
          }else{
            console.log("res: " + JSON.stringify(res.data));
           
            setResult(res.data);
          }
      })
  }
  
  
  
  const  handleSearch = (datos)=>{
        //console.log("datos: " + JSON.stringify(datos));
    };

    const handleSearch2 = (datos)=>{
       
          setDatos(prevState => ({
            ...datos,
           
         }));

        const {validar} = datos;
        setValidar(validar);
        //aca controlas que tenga has-success los labels que se mandan en el busquedagenerica.


      /*  if(datos.TipoInteres && datos.TipoInteres !== ""){
            const dat = datos.TipoInteres.split('-');
            //console.log("TipoInteres: " + dat[1]);
            setTipoInteres({alicuota:dat[1]});

        }*/
        console.log("tipo interes: " +datos.TipoInteres );
        setTipoInteres(datos.TipoInteres?datos.TipoInteres:"");
        setImporteDeuda(datos.ImporteDeuda?datos.ImporteDeuda:"");

    }

  let combo = [
      {value:"Seleccionar",label:"Seleccionar..."},
      {value:"0001",label:"Resarcitorio"},
      {value:"0002",label:"Punitorio"},
      
  ]

        let configStartDate = {
            startDate:new Date(),
            endDate:new Date(),
            dateFormat:"dd/MM/yyyy",
            showMonthYearPicker:false
        };

        let configEndDate = {
            startDate:new Date(),
            endDate:new Date(),
            dateFormat:"dd/MM/yyyy",
            showMonthYearPicker:false
            }


        let campos = [
              {tipo:"comboNew",label:"TipoInteres",regex:"", size:3   , opciones:combo,requerido:"S",ejecutar:true },
              {tipo:"textNew",label:"ImporteDeuda", size:3,regex:/^(?=.*[a-zA-Z0-9]{1,})(?=.*[d]{0,})[a-zA-Z0-9]{1,15}$/, requerido:"S",ejecutar:true},
              {tipo:"dateNew",label:"FechaVencimientoOriginal",regex:"", endDate:"2023-02-02", requerido:"N",configDates:configStartDate,size:3},
              {tipo:"dateNew",label:"FechaPago",regex:"", endDate:"2023-02-02", requerido:"N",configDates:configEndDate,size:3},
              /*  {tipo:"cuit",label:"Cuit",regex:/^(20|23|24|27|30|33|34)(\D)?[0-9]{8}(\D)?[0-9]$/, opciones:this.state.comboTramites2?this.state.comboTramites2:comboEstado,requerido:"N",ejecutar:false },*/
            ];



    const handleClick = () => {
        const {FechaVencimientoOriginal, FechaPago,ImporteDeuda,  } = Datos;
        
        let interes = Datos.TipoInteres.split("-")[0];

        getInteres(ImporteDeuda,moment(FechaVencimientoOriginal).format("DD/MM/YYYY") ,moment(FechaPago).format("DD/MM/YYYY"),interes)
       
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
  
    


  return (
<>

    <div className="container">
      <TituloConNotificacion titulo="Gestiones" onClick={()=>irGestiones()} />
      <TitleFullWidth title="Calculo de intereses" subtitle="El interés aplicado a cada obligación, ha sido calculado teniendo en cuenta las tasas de interés vigentes para cada período. Para consultar la evolución de las tasas de interés ingrese aquí."/>
      <div className="my-5">
        <BusquedaGenerica   estilo="metatdr" campos={campos} onSearch={handleSearch} onSearch2={handleSearch2}/>
        
      <Buttons text="Buscar" disabled={isDisabled()} primary 
        onClick={()=>handleClick()}></Buttons>

        <div className=" my-4">
        {Result 
        ?<div>
          <h5>Interes: ${Result.INTERES}</h5>
          <h5>Monto actualizado: ${Result.MONTO_ACTUALIZADO}</h5>
        </div>
        :""}
        </div>
      </div>

     
      
    </div>
</>

   
  )
}
