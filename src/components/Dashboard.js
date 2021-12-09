import React, { Fragment, memo, useState } from 'react';
import { ButtonLink as Buttonlink2 , InputText } from 'tdr-fe-library';
import Opciones from '../config/Opciones';

function Dashboard() {

	const [open , setOpen] = useState(false);

	const renderOpciones = (dato) =>{

		return 	dato.map((opcion)=>{
			let size = Math.round(12/ dato.length) ;
			console.log("size: "+ Math.round(12/ dato.length));
			return <div className={`col-lg-${size<4?3:size} col-sm-6 col-xs-12 mt-3`}>

			</div>

		})

		};


	const renderListaOpciones = () =>{
		let resultado;

		resultado = Opciones.map((opcion)=>{
			return <Fragment className="">

			</Fragment>
		});

		return resultado;
	};

	return (<Fragment>
			<div className="row col-12  mt-5 " description="" title=""  >
				<div className="col-6">


				</div>
				<div className="col-6">

				</div>


				<div className="container mt-5">
					{renderListaOpciones()}
				</div>

			</div>

		</Fragment>

	)
}

export default memo(Dashboard);
