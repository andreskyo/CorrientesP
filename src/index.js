import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import * as serviceWorker from './serviceWorker';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './index.css';
import history from 'utils/history';
import { Login } from 'pages';
import { LandingPage } from 'pages';
import { Dashboard } from 'pages';
import { Provider, connect } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import './assets/styles/app.scss';
import './assets/styles/footer.scss';
import './assets/styles/header.scss';
import './assets/styles/sidebar.scss';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
