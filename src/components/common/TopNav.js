import React, { memo } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { isLoggedIn } from 'utils';
import history from 'utils/history';

function TopNav(props) {
	
	function handleLogout() {
		localStorage.removeItem('roles');
		history.push('/');
	}

	const renderMenu = (ruta, title, children) =>{
		//console.log("children: " +JSON.stringify(children));
		let resultado;
	
		 resultado = <Link key={ruta} className="w3-bar-item w3-mobile" to={`${props.prefix}${ruta}`}>
			{title}
		</Link>

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
			
			<div className="w3-right">
			
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
