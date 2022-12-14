import React,{useState,useEffect} from 'react'
import TituloConNotificacion from 'components/library-temp/MetaTDR/TitulosHome/TituloConNotificacion';
import {Buttons} from 'components/library-temp/Button/Buttons'
import BusquedaGenerica from 'components/library-temp/BusquedaGenerica/BusquedaGenerica'
import TitleFullWidth from 'components/library-temp/MetaTDR/TitulosHome/TitleFullWidth'
import "react-datepicker/dist/react-datepicker.css";
import {useNavigate} from 'react-router-dom';






export default function CertificadosEmitidos() {
 
  const navigate = useNavigate();
  const [Cuit,setCuit] = useState('')
  const [Datos,setDatos] = useState({});
  const [Validar,setValidar] = useState({});
  const [FormValido,setFormValido] = useState(false);
  
    


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
               {tipo:"textNew",label:"Cuit", size:4,regex:/^(20|23|24|27|30|33|34)(\D)?[0-9]{8}(\D)?[0-9]$/, requerido:"S",ejecutar:true},
             
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
    navigate('/guiaTramites');
  }
  
    


  return (
<>

    <div className="container">
      <TituloConNotificacion titulo="Guia Tramites" onClick={()=>irGestiones()} />
      <TitleFullWidth title="Consulta de certificados y Constancias emitidas" 
       subtitle=""/>
      <div className="d-flex flex-column justify-content-center my-4">
        <div>
        <BusquedaGenerica   estilo="metatdr" campos={campos} onSearch={handleSearch} onSearch2={handleSearch2}/>
        </div>
        <div>
           <Buttons text="Buscar" disabled={isDisabled()} primary onClick={()=>handleClick()}></Buttons>
        </div>
        <div className='container my-5'>
            <p>Esta opci??n permite consultar los siguientes certificados, hist??ricos y vigentes, emitidos para la cuit solicitada:</p>
            <ul>
                <li>
                Certificado Fiscal para Contratar
                </li>
                <li>
                Certificado de No Retenci??n y No Percepci??n
                </li>
                <li>
                Certificado de Exclusi??n

                </li>
                <li>
               Certificado de Exenci??n
                </li>
                <li>
               Contancia de Al??cuota Cero
                </li>

            </ul>
        
        </div>
      </div>
      
    </div>
</>

   
  )
}