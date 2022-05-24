import {React,useState,useEffect} from 'react'
import {Buttons} from 'components/library-temp/Button/Buttons'
import TituloConNotificacion from 'components/library-temp/MetaTDR/TitulosHome/TituloConNotificacion'
import BusquedaGenerica from 'components/library-temp/BusquedaGenerica/BusquedaGenerica'
import TitleFullWidth from 'components/library-temp/MetaTDR/TitulosHome/TitleFullWidth'
import {useNavigate} from 'react-router-dom';
import ApiServicios from '../../../api/ApiServicios';
import moment  from 'moment';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { min } from 'lodash'


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Cotizacion() {

  const navigate = useNavigate();
  const [Fecha,setFecha] = useState('')
  const [Datos,setDatos] = useState({});
  const [Validar,setValidar] = useState({});
  const [FormValido,setFormValido] = useState(false);
  const [Cotizacion,setCotizacion] = useState([]);
  const [loading,setLoading] = useState(false);
   
   const options = {
      animation: true,
    
  
       
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: `Cotizacion dolar mes ${moment(Fecha).format('MMMM') }`,
    },
  },
};
   
   
  
   const conver = Cotizacion.map(item => item.FECHA.substring(0,2))
   const labels =Object.values(conver);
   const data = {
  labels,
  datasets: [
    {
      label: 'Compra',
      data: Cotizacion.map(data =>parseFloat(data.COMPRA) ),
      borderColor: 'rgba(255, 99, 132, 0.5)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
   {
      label: 'Venta',
      data: Cotizacion.map(data => data.VENTA),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    ],
};
  console.log("Compraaa " +  (conver))

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
            dateFormat:"MM/yyyy",
            showMonthYearPicker:true
        };

        let configEndDate = {
            startDate:new Date(),
            endDate:new Date(),
            dateFormat:"L"
        };


        let campos = [
             
              {tipo:"dateNew",label:"Fecha",regex:"", endDate:"2023-02", requerido:"S",configDates:configStartDate,size:12,ejecutar:true},
              /*  {tipo:"cuit",label:"Cuit",regex:/^(20|23|24|27|30|33|34)(\D)?[0-9]{8}(\D)?[0-9]$/, opciones:this.state.comboTramites2?this.state.comboTramites2:comboEstado,requerido:"N",ejecutar:false },*/
            ];


      useEffect(() => {
        if (loading) {
          setTimeout(() => {
          setLoading(false);
        }, 2000);
        }
      }, [loading]);


    const handleClick = async () => {
      
      let calcularMes = (Fecha.getMonth()+1).toString();
      let mes = calcularMes.length === 1 ? "0"+calcularMes : calcularMes;
      let anio = Fecha.getFullYear().toString();

      ApiServicios.service.cotizacionDolar(mes,anio)
        .then((res) => {
          setLoading(true);
          setCotizacion(res.data)
      })
      .catch((err) => {
          alert("error: " + JSON.stringify(err));
      }
      );
    
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
          <Buttons text="Buscar" disabled={isDisabled()} primary onClick={()=>handleClick()}></Buttons>
        </div>
        
        <div>
         
        </div>
        {loading ? (
          <div className="d-flex justify-content-start">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
              </div>
            </div>
              ) 
              : 
              Cotizacion.length>0
              ?
              <div className="d-flex flex-column  ">
              
                { <Line options={options} data={data} />}
          </div>
          : "" }
         
      </div>
      
    </div>
</>

   
  )
}

