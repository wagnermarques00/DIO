import "./App.css";
import React, { Component } from "react";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			clock: 1000,
			copo: " água",
		};
	}

	componentDidMount() {
		//Não recomendado, apenas explicação
		window.setTimeout(() => {
			this.setState({
				copo: " suco",
			});
		}, 2000);
	}

	alterarCopo = () => {
		this.setState({
			copo: "refrigerante",
		});
	};

	render() {
		const { clock, copo } = this.state;
		return (
			<div>
				<h1>{clock}</h1>
				<button onClick={() => this.alterarCopo()}>{copo}</button>
			</div>
		);
	}
}

export default App;
