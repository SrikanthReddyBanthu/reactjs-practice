import React, { Component } from 'react';

class LifeCycle extends Component {

	// Get default state
	constructor(props) {
		super(props);

		// Set Initial state
		this.state = {
			heading: 'Life Cycle',
			title: 'Current Count',
			count: 1,
			numberType: 'Odd'
		}
	}

	// Before created
	componentWillMount() {
		console.log("Before created");
	}

	componentDidUpdate() {
		console.log("After updated, count = " + this.state.count);
	}

	componentWillUpdate() {
		console.log("Before update, count = " + this.state.count);
	}

	componentWillUnmount() {
		alert("Going out of page")
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log("Previous Count:" + this.state.count);
		console.log("Next Count:" + nextProps.count);
		return true;
	}

	updateData() {
		let currentCount = this.state.count + 1;
		this.setState({count: currentCount});
		if (currentCount % 2 === 0)
			this.setState({numberType: 'Even'});
		else
			this.setState({numberType: 'Odd'});
	}

	// Render JSX
	render() {
		console.log("Render JSX");
		return(
			<div>
				<h1>{this.state.heading}</h1>
				<h2>{this.state.title} : {this.state.count}</h2>
				<h2>Even / Odd : {this.state.numberType}</h2>
				<input type="button" onClick={this.updateData.bind(this)} value="Click to increment"/>
			</div>
		)
	}

	// After created
	componentDidMount() {
		console.log("After created");
		document.querySelector('h1').style.color = "red";
	}

}

export default LifeCycle;