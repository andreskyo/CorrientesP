import React, { memo } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link, useHistory } from "react-router-dom";
import { isLoggedIn } from 'utils';
import { getAllowedRoutes } from '../../utils';

function TopNav(props) {
	let history = useHistory();

	function handleLogout() {
		localStorage.removeItem('roles');
		history.push('/');
	}

	const renderMenu = (ruta, title, children) =>{
		//console.log("children: " +JSON.stringify(children));
		let resultado;
		if(children && children.length>=1){
			const allowedRoutes = getAllowedRoutes(children);
			resultado = <div className="w3-dropdown-hover w3-mobile">
			<button className="w3-button">{title} <i className="fa fa-caret-down"> </i> </button>
				<div className="w3-dropdown-content w3-bar-block w3-card-4">
					<Link key={ruta} className="w3-bar-item" to={`${props.prefix}${ruta}`}>
						{title}
					</Link>
					{allowedRoutes.map(({ path, title,  }) => (
						<Link key={path} className="w3-bar-item" to={`${props.prefix}${ruta+path}`}>
							{title}
						</Link>
					))}

				</div>
			</div>;
		}else{
		 resultado = <Link key={ruta} className="w3-bar-item w3-mobile" to={`${props.prefix}${ruta}`}>
			{title}
		</Link>}

		return resultado;
	};

	/*
	* [
	* {"component":{"compare":null},"path":"/child-1","title":"Child - 1"},
	* {"component":{"compare":null},"path":"/child-2","title":"Child - 2"},
	* {"component":{"compare":null},"path":"/child-3","title":"Child - 3",
	* "permission":["SUPER_ADMIN","ADMIN"]}]
	* */

	return (
		<div className={`w3-bar w3-padding w3-card  ${props.className}`} >
			<div className="w3-display-topleft w3-padding-large w3-xlarge w3-mobile">
				TDR - Interno
			</div>
			{isLoggedIn() &&<div className="w3-right justify-content-center">
				<input type="text" className="w3-bar-item w3-input w3-mobile" placeholder="Ingrese CUIT"/>
			</div> }

			<div className="w3-right">
				{props.routes.map(({ path, title, children }) => (
				renderMenu(path, title, children)

				))}
				{isLoggedIn() && <Button onClick={handleLogout}>Logout</Button> }
			</div>
		</div>
	);
}

TopNav.propTypes = {
	routes: PropTypes.arrayOf(
		PropTypes.shape({
			path: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired
		})
	).isRequired,
	prefix: PropTypes.string,
	className: PropTypes.string
};

TopNav.defaultProps ={
	prefix: '',
	className: ''
};

export default memo(TopNav);
