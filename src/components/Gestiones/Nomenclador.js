import React,{useState,useEffect} from 'react'
import TituloConNotificacion from 'components/library-temp/MetaTDR/TitulosHome/TituloConNotificacion';
import {Buttons} from 'components/library-temp/Button/Buttons'
import BusquedaGenerica from 'components/library-temp/BusquedaGenerica/BusquedaGenerica'
import TitleFullWidth from 'components/library-temp/MetaTDR/TitulosHome/TitleFullWidth'
import "react-datepicker/dist/react-datepicker.css";
import {useNavigate} from 'react-router-dom';






export default function CertificadosEmitidos() {
 
  const navigate = useNavigate();
  const [Datos,setDatos] = useState({});
  const [Actividad,setActividad] = useState('')
  const [Nomenclador, setNomenclador]  = useState('')
  const [Validar,setValidar] = useState({});
  const [FormValido,setFormValido] = useState(false);
  
    


     useEffect(() => {
       
       console.log("aca voy a validar con:  " + JSON.stringify(Datos));
        

       const {validar} = Datos
        
       if(validar){
        
          if( Actividad !=="" && validar.Actividad=== "has-success" && validar.Nomenclador !=="" && validar.Nomenclador === "has-success"
               && validar.Nomenclador !== "Seleccionar-"
            && Nomenclador !== "Seleccionar-"){
                       
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
        setActividad(datos.Actividad?datos.Actividad:"");
        setNomenclador(datos.Nomenclador?datos.Nomenclador:"");
      
        setValidar(validar);
        //aca controlas que tenga has-success los labels que se mandan en el busquedagenerica.


      /*  if(datos.TipoInteres && datos.TipoInteres !== ""){
            const dat = datos.TipoInteres.split('-');
            //console.log("TipoInteres: " + dat[1]);
            setTipoInteres({alicuota:dat[1]});

        }*/
        
        
       

    }

  let combo = [
    {value:"Seleccionar",label:"Seleccionar..."},
      {value:"NAES",label:"NAES"},
      {value:"CUACM",label:"CUACM"},
      {value:"LOCAL ",label:"LOCAL"},
      
  ]


        let campos = [
               {tipo:"textNew",label:"Actividad", size:4,regex:/^(?=.*[a-zA-Z0-9]{1,})(?=.*[d]{0,})[a-zA-Z0-9]{1,25}$/, requerido:"S",ejecutar:true},
                 {tipo:"comboNew",label:"Nomenclador",regex:"", size:3   , opciones:combo,requerido:"S",ejecutar:true },
              /*  {tipo:"cuit",label:"Cuit",regex:/^(20|23|24|27|30|33|34)(\D)?[0-9]{8}(\D)?[0-9]$/, opciones:this.state.comboTramites2?this.state.comboTramites2:comboEstado,requerido:"N",ejecutar:false },*/
            ];



    const handleClick = () => {
      alert("datos" + JSON.stringify(Datos) + "Valido: " + FormValido);
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
      <TitleFullWidth title="Nomenclador de actividades y equivalencias" 
       subtitle=""/>
      <div className="d-flex flex-column justify-content-center my-4">
        <div>
        <BusquedaGenerica   estilo="metatdr" campos={campos} onSearch={handleSearch} onSearch2={handleSearch2}/>
        </div>
        <div>
           <Buttons text="Buscar" disabled={isDisabled()} primary onClick={()=>handleClick()}></Buttons>
        </div>
       
      </div>
      
    </div>
</>

   
  )
}
