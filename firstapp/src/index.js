import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';

const App = () => {
	return (
			<div>
				<Header/>
				<h1> Hii to react</h1>
				<h2> Using functional component</h2>
			</div>
			)
}

ReactDOM.render(<App/>, document.getElementById('root'))