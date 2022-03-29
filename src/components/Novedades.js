import React , {useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import useGet from "../utils/useGet"
import CardImage from './library-temp/MetaTDR/Cards/CardImage';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import latestNewsImg1 from "../assets/img/latestNewsImg1.webp"
import latestNewsImg3 from "../assets/img/latestNewsImg3.webp"
import { SwiperSlide,Swiper } from "swiper/react/swiper-react";
import {isMobile} from 'react-device-detect';
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'


export default function Novedades(props) {
    const [data2, setData2] = useGet({url:"/novedades"});
    const [idNovedad, setIdNovedad] = useState(0);
    const [datosSeleccionados, setDatosSeleccionados] = useState("");
    const params = useParams();
    const navigate = useNavigate();


    useEffect(() => {
          setIdNovedad(params.id);
          navigate(`/novedades/${params.id}`);
      },[params.id]);

    
    const handleClickCard = (res) => {
        setDatosSeleccionados(res);
    }
    
    const getAll = (data) =>{
        console.log("PARAMS DENTRO DEL ALL" ,params);
        let resultados = data
		let result=[]; 
		resultados.forEach((res,i) =>{	
			if(idNovedad == 0){
                        if (!isMobile && window.innerWidth > 992){
                        result.push(
                            <div className="col-lg-4  col-md-6 col-sm-6 p-4  " >
                                <CardImage
                                Titulo={res.titulo}
                                Descripcion={<ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} children={res.descripcion} />}
                                Fecha={res.fecha} 
                                TextoBoton="Leer123123 Más"
                                image={res.imagen? res.imagen.url:latestNewsImg3} 
                                onClick={()=>navigate(`/novedades/${res.id}`)}
                                id={res.id}  />
                            </div>
                            
                        )}else{
                            result.push(
                                <SwiperSlide>
                        
                                        <CardImage 
                                            Titulo={res.titulo}
                                            Descripcion= { <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} children={res.descripcion} />}
                                            Fecha={res.fecha}
                                            TextoBoton={"Leer Más"}
                                            id={res.id}
                                            image={res.imagen? res.imagen.url:latestNewsImg1} />		  
                                            
                                    </SwiperSlide>
                            )
                        }
				}else if(idNovedad !== 0){

                  result =  resultados.filter((dato) => {
                      if (dato.id == params.id){
                        setDatosSeleccionados(dato)
                            
                      }
                  })
                  return result
                }
			})

        return result
    }
    
    const getCard = (res) => {
       
        
        return(
           <div className="col-4" >
            <button  className="m-4 btn btn-primary latestNewsItem__btn"  onClick={()=>{setDatosSeleccionados("");navigate(`/novedades/${0}`)}} > volver </button> 
              <CardImage
							Titulo={res.titulo}
							Descripcion={<ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} children={res.descripcion} />}
							Fecha={res.fecha} 
							TextoBoton="Leer123123 Más"
							image={res.imagen? res.imagen.url:latestNewsImg3} 
                            onClick={()=>handleClickCard(res)}
							id={res.id}  />


           
           </div>
           
        )
    }

    return (
        <Style className="container-fluid">
        <div className=" latestNewsRow__item--title mx-5">
							
							<h2 className="latestNewsItem__title">Novedades</h2>
							<p className="latestNewsItem__description">Enterate de las últimas noticias de Rentas Corrientes y accedé a
								toda la información.</p>							
						</div>

            <div className="containerCards">
                <div key={idNovedad} className="d-flex row m-4 col-12 justify-content-start d-flex ">  
                        {datosSeleccionados===""?getAll(data2):getCard(datosSeleccionados)} 
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
.containerCards{
    margin:2% 15%
}

    
}

`

