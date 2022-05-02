import {React,useState,useEffect} from 'react'
import {Buttons} from 'components/library-temp/Button/Buttons'
import TituloConNotificacion from 'components/library-temp/MetaTDR/TitulosHome/TituloConNotificacion'
import BusquedaGenerica from 'components/library-temp/BusquedaGenerica/BusquedaGenerica'
import TitleFullWidth from 'components/library-temp/MetaTDR/TitulosHome/TitleFullWidth'
import {useNavigate} from 'react-router-dom';



export default function Cotizacion() {

  const navigate = useNavigate();
  const [Fecha,setFecha] = useState('')
  const [Datos,setDatos] = useState({});
  const [Validar,setValidar] = useState({});
  const [FormValido,setFormValido] = useState(false);
  
    


     useEffect(() => {
       
       console.log("aca voy a validar con:  " + JSON.stringify(Datos));
        

       const {validar} = Datos
        console.log(" Fecha" + JSON.stringify(Fecha) ); 
       if(validar){
        
          if( validar.Fecha !=="" && validar.Fecha=== "has-success"){
                       
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
        setValidar(validar);
        //aca controlas que tenga has-success los labels que se mandan en el busquedagenerica.


      /*  if(datos.TipoInteres && datos.TipoInteres !== ""){
            const dat = datos.TipoInteres.split('-');
            //console.log("TipoInteres: " + dat[1]);
            setTipoInteres({alicuota:dat[1]});

        }*/
        setFecha(datos.Fecha?datos.Fecha:"");
       

    }


        let configStartDate = {
            startDate:new Date(),
            endDate:new Date("2023-02-01"),
            dateFormat:"dd/MM/yyyy"
        };

        let configEndDate = {
            startDate:new Date(),
            endDate:new Date("2027-02-01"),
            dateFormat:"dd/MM/yyyy"
        };


        let campos = [
             
              {tipo:"dateNew",label:"Fecha",regex:"", endDate:"2023-02-02", requerido:"S",configDates:configStartDate,size:12,ejecutar:true},
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
      <TitleFullWidth title="Cotizacion del dolar" subtitle="Lorem Ipsum"/>
      <div className="d-flex flex-column justify-content-center">
        <div className = "my-5">
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

