import React, { Fragment, useEffect, useState } from 'react';
import logoGobiernoCorrientes from '../assets/img/logoGobiernoCorrientes.webp';
import logo1 from "../assets/images/logo1.svg"
const FooterDesktop = () => {
	const axios = require('axios');
	const [list, setList] = useState([]);

	useEffect(() => {
		axios
			.get(
				'https://api.test.dgrcorrientes.gov.ar/strapibe/api/menu-footers?populate=%2A'
			)
			.then((response) => {
				setList(response.data);
			});
	}, []);

	//console.log('list', list);

	let datos = list;

	let resultado = list.data
		? datos.data.map((res) => (
				
					<div
						key={Math.random()}
						className="col-12 col-lg-3 footerNavRow__item"
					>
						<h4 className="footerNavItem__title">{res.attributes.titulo}</h4>
						<ul key={Math.random()} className="footerNavItem__list">
							{res.attributes.menuItem.map((element, index) => (
								<li key={Math.random()} className="">
									<a href="#" className="text-decoration-none">{element.titulo}</a>
								</li>
							))}
                     <li className="footerNavItem__moreInfo"><a href="#">Más información</a></li>
						</ul>
					</div>
				
		  ))
		: null;

	return (
		<>
			<section className="footerNav">
				<div className="container">
					<div className="row footerNavRow">{resultado}</div>
				</div>
			</section>
			<footer>
				<div className="container">
					<div className="row footerContent">
						<div className="col-12 col-lg-auto footerContent__logoRentas">
							<a href="index.html">
								<picture>
									<img src={logo1} alt="Logotipo" />
								</picture>
							</a>
						</div>
						<div className="col-12 col-lg-auto footerContent__logoProvincia">
							<a href="/">
								<picture>
									<img
										src={logoGobiernoCorrientes}
										alt="logo Gobierno de Corrientes"
									/>
								</picture>
							</a>
						</div>
						<div className="col-12 col-lg-4">
							<div className="input-group input-group-search input-group-search--invert">
								<div className="input-group-prepend">
									<span className="input-group-text">
										<i className="fa fa-svg fa-search fa-fw"></i>
									</span>
								</div>
								<input
									type="text"
									className="form-control"
									placeholder="Buscar en rentas"
									aria-label="Buscar en rentas"
									aria-describedby="basic-addon1"
								/>
							</div>
						</div>
					</div>
					<div className="row footerAccess">
						<div className="col-12 col-lg-auto">
							<ul>
								<li>Copyright © 2021 - Rentas Corrientes</li>
								<li>
									<a href="#">Mapa de sitio</a>
								</li>
								<li>
									<a href="#">Politicas de privacidad</a>
								</li>
								<li>
									<a href="#">Términos y condiciones</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};
export default FooterDesktop;

	
	


/*const InputSearch = () =>{
   return(
            <Search>
                 <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <SearchIcon sx={{ color: '', mr: 1, my: 0.5 }} />
                    <Field>
                        <TextField id="input-with-sx" placeholder="Buscar en rentas" variant="standard" />
                    </Field>
      
                </Box>
            </Search>   
)  
}*/
