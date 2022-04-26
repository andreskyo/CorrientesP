import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Provider, connect } from "react-redux";


import Routes from 'routes';




class App extends Component {
	render() {
		return (
			<Container fluid>
				<Row>

					<Col className="p-0">
					
						<Routes />
					</Col>
				</Row>
			</Container>
		);
	}
}


const mapState = (state) => ({
	count: state.count,
	nombre: state.persona.nombre,
});

const mapDispatch = (dispatch) => ({
	increment: () => dispatch.count.increment(1),
	incrementAsync: () => dispatch.count.incrementAsync(1),
	changename: (nombre) => dispatch.persona.changeName(nombre),
});

export default connect(mapState , mapDispatch)(App);
