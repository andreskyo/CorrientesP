import React,{useState,useEffect} from 'react'
import TituloConNotificacion from 'components/library-temp/MetaTDR/TitulosHome/TituloConNotificacion';
import {Buttons} from 'components/library-temp/Button/Buttons'
import BusquedaGenerica from 'components/library-temp/BusquedaGenerica/BusquedaGenerica'
import TitleFullWidth from 'components/library-temp/MetaTDR/TitulosHome/TitleFullWidth'
import "react-datepicker/dist/react-datepicker.css";
import {useNavigate} from 'react-router-dom';
import ApiServicios from '../../../api/ApiServicios'



export default function ConstanciaInscripcion() {
 
  const navigate = useNavigate();
  const [Cuit,setCuit] = useState('')
  const [Datos,setDatos] = useState({});
  const [Validar,setValidar] = useState({});
  const [FormValido,setFormValido] = useState(false);
  
    
  //constInscripciones

     useEffect(() => {
       
       console.log("aca voy a validar con:  " + JSON.stringify(Datos));
        

       const {validar} = Datos
        
       if(validar){
        
          if( validar.Cuit !=="" && validar.Cuit=== "has-success"){
                       
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
        setCuit(datos.Cuit?datos.Cuit:"");
      
        setValidar(validar);
        //aca controlas que tenga has-success los labels que se mandan en el busquedagenerica.


      /*  if(datos.TipoInteres && datos.TipoInteres !== ""){
            const dat = datos.TipoInteres.split('-');
            //console.log("TipoInteres: " + dat[1]);
            setTipoInteres({alicuota:dat[1]});

        }*/
        
        
       

    }


        let campos = [
               {tipo:"textNew",label:"Cuit", size:6,regex:/^(20|23|24|27|30|33|34)(\D)?[0-9]{8}(\D)?[0-9]$/, requerido:"S",ejecutar:true},
             
              /*  {tipo:"cuit",label:"Cuit",regex:/^(20|23|24|27|30|33|34)(\D)?[0-9]{8}(\D)?[0-9]$/, opciones:this.state.comboTramites2?this.state.comboTramites2:comboEstado,requerido:"N",ejecutar:false },*/
            ];



    const handleClick = () => {
        ApiServicios.service.constanciaInscripcion(Cuit).then(res => {
        
        if(res.status === 200){
          alert("exito " + JSON.stringify(res.data));
        }else{
          alert("error: " + JSON.stringify(res.status));
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
    navigate('/GuiaTramites');
  }
  
    


  return (
<>

    <div className="container">
      <TituloConNotificacion titulo="Gestiones" onClick={()=>irGestiones()} />
      <TitleFullWidth title="Consulta Expedientes"
       subtitle="Para mayor informaci??n contactarse con la mesa de ayuda enviando un mail a la casilla de correo mesadeayuda@dgrcorrientes.gov.ar ?? bien llamando al 0800-555-7376 (provincia de Corrientes) / 0810-555-7376 (resto del pa??s)"/>
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
