import React , {useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import useGet from "../utils/useGet"
import CardImage from '../components/library-temp/MetaTDR/Cards/CardImage';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import latestNewsImg1 from "../assets/img/latestNewsImg1.webp"
import latestNewsImg3 from "../assets/img/latestNewsImg3.webp"
import { SwiperSlide,Swiper } from "swiper/react/swiper-react";
import {isMobile} from 'react-device-detect';
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components';
import InputSearch from "../components/common/Input/InputSearch";
import CardImageRow from '../components/common/CardsImage/CardImageRow';
import ItemCardNovedades from './ItemCardNovedades';
import Buttons from 'components/andres/MetaTDR/Buttons/Butttons/Buttons';

export default function Novedades(props) {
    const [data2, setData2] = useGet({url:"api/novedades"});
    const [idNovedad, setIdNovedad] = useState(0);
    const [datosSeleccionados, setDatosSeleccionados] = useState("");
    const params = useParams();
    const navigate = useNavigate();


    useEffect(() => {
          setIdNovedad(params.id);
    
      },[params.id]);

    
    const handleClickCard = (res) => {
        navigate(`/novedades/${res.id}`)
        setDatosSeleccionados(res)
    }
    
    const getAll = (data) =>{
        
        let resultados = data2
		let result=[]; 

		if(resultados.data){
           
            result = resultados.data.map((res,i) =>{	
			    if(idNovedad == 0){
                    if (!isMobile && window.innerWidth > 992){
                      return(
                            <div className = "card-info col-lg-3 col-md-6 col-sm-6 p-2 d-flex" >
                                <CardImage
                                Titulo={res.attributes.titulo}
                                Descripcion={<ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} children={res.attributes.descripcion.substring(0,100) + "..."} />}
                                Fecha={res.attributes.fecha} 
                                TextoBoton="Leer más"
                                image={res.imagen? res.attributes.imagen.url:latestNewsImg3} 
                                onClick={()=>handleClickCard(res)}
                                id={res.id}  />
                            </div>
                            
                        )}else{
                            return(
                                <SwiperSlide>
                        
                                        <CardImage 
                                            Titulo={res.titulo}
                                            Descripcion= { <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} children={res.descripcion} />}
                                            Fecha={res.fecha}
                                            TextoBoton={"Leer Más"}
                                            id={res.id}
                                            image={res.imagen? res.imagen.url:latestNewsImg1}
                                            onClick={()=>handleClickCard(res)}
                                             />		  
                                            
                                    </SwiperSlide>
                            )
                        }

				}else if(idNovedad !== 0){
                
                  result =  resultados.data.filter((dato)=>{
                      
                      if (dato.id === params.id){
                        setDatosSeleccionados(dato)
                            
                      }
                  })
                 
                }
                 return result
			})
           
        }
        
        let container = <div className="container">
                <div className="input-search my-5">
                    <InputSearch/>
                </div>
            
                <div className="card-image-row">
                    <CardImageRow title="algun titulo" image={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"}
                    description="alguna descripcion" date="2015-04-23" button="Leer mas" iconDate={<i className="fa fa-calendar pr-2" aria-hidden="true"></i>}
                    />
                </div>
                <div className="container-lg m-0 p-0 row "> 
                    {result}
                </div>
                <div className="card-image-row">
                    <CardImageRow title="Puesto de control" image={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"}
                    description="" date="2015-04-23" button={<Buttons onClick={()=>{
                        navigate("/puestoAtencionControl")
                    }}  primary text="Leer Mas" />} iconDate={<i className="fa fa-calendar pr-2" aria-hidden="true"></i>}
                    />
                </div>
        </div>

         return container
       
    }
    
    const getCard = (res) => {
    
       
        let found =data2.data?
            data2.data.find(element =>
                {if (element.id == params.id){
                    return element.attributes
        }}):null;
       
        return(
           <div className="col-12" >
            <button  className="m-4 btn btn-primary latestNewsItem__btn"  
            onClick={()=>{

            navigate(`/novedades/${0}`)}} 
            >Volver </button> 
             {found ?
                 <ItemCardNovedades
							Titulo={found.attributes.titulo}
							Descripcion={<ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} children={found.attributes.descripcion} />}
							Fecha={found.attributes.fecha} 
							TextoBoton="Leer123123 Más"
							image={latestNewsImg3} 
                 />
                :<div className="spinner-grow text-dark" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
             }
           </div>
        )
    }

    return (
        <Style className="container--">            
            <div className=" latestNewsRow__item--title mx-5">
                <h2 className="latestNewsItem__title">Novedades</h2>
                <p className="latestNewsItem__description">Enterate de las últimas noticias de Rentas Corrientes y accedé a toda la información.</p>							
            </div>

            
            <div className="containerCards">
                <div  key={idNovedad} className="  ">  
                        {params.id == 0?getAll(data2):getCard()} 
                </div>
            </div>
        </Style>
        
    )
}


const Style = styled.div`
    .latestNewsRow__item--title{
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

    .input-search{
        
        justify-content: center;
        display: flex;
        margin:15px 5px;
        
    }

    .card-image-row{
        margin: 7% 4%;
        min-height:243px;
        display: flex;
        justify-content: space-between;

    }


`

