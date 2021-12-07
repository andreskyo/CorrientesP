import React, { memo, useState , useEffect} from 'react';
import { Alert, Form, Button } from 'react-bootstrap';
import { FormGroup, Container, Col} from 'reactstrap';
import { useHistory , useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { JumbotronWrapper } from './common';
import usePost from '../utils/usePost';
import store from '../store';
import { Provider, connect, useSelector  } from "react-redux";

function LoginSso({user}) {
	const { tokenParam } = useParams();

	const {
		data: login,
		pending: pendingLogin,
		error: errorLogin,
		isSuccessfull: isSuccessfullLogin,
		status:status,
		post: postLogin,
	} = usePost();

	useEffect(() => {
		if(login){
			loginSuccess();
		}

	}, [isSuccessfullLogin]);



	let [selected, setSelected] = useState([]);
	let [username, setUsername] = useState('');
	let [password, setPassword] = useState('');
	let [validate, setValidate] = useState({});
	let [isEnabled, setisEnabled] = useState(false);

	useEffect(() => {

		validarBoton();

	}, [username, password, selected]);

	useEffect(() => {
		// Actualiza el título del documento usando la API del navegador
		//document.title = `You clicked ${count} times`;

		if(tokenParam && tokenParam !== 'undefined'){
			console.log("sso "+tokenParam);
			setToken(tokenParam, "/app")
		}
	},[tokenParam]);


	let history = useHistory();

	function handleChange(e) {
		const { options } = e.target;
		let selected = [];

		for (let i = 0; i < options.length; i++) {
			if (options[i].selected) {
				selected.push(options[i].value);
			}
		}
		setSelected(selected);

	}

	const parseJwt = (token) => {
		try {
			return JSON.parse(b64DecodeUnicode(token.split('.')[1]));
		} catch (e) {
			return null;
		}
	};
	const b64DecodeUnicode = (str) => {
		return decodeURIComponent(Array.prototype.map.call(atob(str), function(c) {
			return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
		}).join(''))
	}

	function handleClick() {
		//localStorage.setItem('roles', JSON.stringify(selected));

		const client_id = '9112c51cf5b34ce17f54324dd8094946';
		const client_secret = '816e2bb88f816db26ba60c35926501b35a05a5b4';
		const data =  {
			username: username,
			password: password,
			client_id: client_id,
			client_secret: client_secret,
			grant_type: 'password'
		};


		postLogin('/oauth/token', { datajson: data });

		//history.push('/app');
	}
	const loginSuccess = () =>{
		let datos;
if(tokenParam && tokenParam !== 'undefined'){

	datos = parseJwt(tokenParam.toString());

	if(datos){
		datos.roles=["ADMIN"];
	}
}else{
	datos = parseJwt(login.token);
	datos.roles=selected;
}
	if(datos){
		dispatch.user.LoginSuccessAsync(datos);
	}


		history.push('/app');

	};

	const setToken = (token, path) => {
		//let datos = parseJwt(token);
		loginSuccess();
		//Api.setHeader("Authorization", `Bearer ${token}`);
		//this.redirect(path);
	};


	const validateUser = (e) => {
		const userRex = /(([A-Za-z\u00F1\u00D1]{4,15})|(\b(20|23|24|27|30|33|34|99)(\D)?[0-9]{8}(\D)?[0-9]))/;
		if (userRex.test(e.target.value)) {
			validate.userState = 'has-success';
			//this.handleUserChange(e)
			setUsername(e.target.value);
		} else if (e.target.value === '') {
			validate.userState = 'has-success'
		} else {
			setUsername(e.target.value);
			validate.userState = 'has-danger'
		}

		setValidate(validate);

	};

	const validatePass = (e) => {

		const passRex = /^(?=.*[0-9])(?=.*[a-z|A-Z])[a-zA-Z0-9!@#$%^&*()+º\\_\-\.\[\]\}\{\:\<\>\'\`\\"\~\=\/ ,;]{8,}$/;

		if (passRex.test(e.target.value)) {
			setPassword(e.target.value);
			validate.passwordState = 'has-success'
		} else if (e.target.value === '') {
			validate.passwordState = 'has-danger'
		} else {
			setPassword(e.target.value);
			validate.passwordState = 'has-danger'
		}
		setValidate(validate);
	};

	const validarBoton = () => {
		//!selected.length && validate.userState !== 'has-success' && validate.passwordState !== 'has-success'
		let validar = true;
		if(selected.length>=1 && validate.userState && validate.userState === "has-success" && validate.passwordState && validate.passwordState ==="has-success" ){

			validar = false

		}else if(!selected.length && validate.userState && validate.userState !== "has-danger" && validate.passwordState && validate.passwordState !=="has-danger" ){
			validar = true
		}else{
			validar = true

		}

		setisEnabled(validar);


	};
	//let isEnabled = validate.userState === 'has-success' && validate.passwordState === 'has-success';


	return (
		<JumbotronWrapper title="Cargando" description="Espere unos segundos por favor">


		</JumbotronWrapper>
	);
}
const { dispatch } = store;

const mapState = (state) => ({
	count: state.count,
	user: state.user,
});

const mapDispatch = (dispatch) => ({
	increment: () => dispatch.count.increment(1),
	incrementAsync: () => dispatch.count.incrementAsync(1),
	longinSuccess: (datos) => dispatch.user.loginSuccess(datos),
});

//export default memo(Login);
export default connect(mapState , mapDispatch)(memo(LoginSso));
