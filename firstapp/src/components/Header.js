import React, {Component} from 'react';


// Class based declaration

class Header extends Component {

	constructor() {
		super();

		this.state = {
			title: "****Welcome to first application***",
			keyword: "No Input",
			numberValue: 1
		}
	}

	inputChanges(event) {
		console.log(this.state.title);
		this.setState({keyword: event.target.value});
		console.log(this.state.keyword);
	}

	incrementNumber() {
		this.setState({numberValue: this.state.numberValue + 1})
	}

	render(){
		return(
			<div>
				<header>
					<h1 className="logo" onClick={() => console.log("Clicked...")}>{this.state.title}</h1>
					<h2><input onChange={this.inputChanges.bind(this)}/></h2>
					<p>{this.state.keyword}</p>
					<p onClick={this.incrementNumber.bind(this)}>click me to increase value: {this.state.numberValue}</p>
					<p><input type="button" onClick={() => this.setState({numberValue: 1})} value="Reset increment value"/></p>
				</header>
			</div>
		)
	}
}

export default Header;

/*
// Functional based declaration
const Header = () => {
	return (
		<h1>Logo</h1>
	)
}
*/
