import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import NewsList from './components/news_list'
import JSON from './db.json';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			news: JSON
		}
	}

	render() {

		return (
    			<div>
    				<Header/>
    				<h1>Hii to react</h1>
    				<NewsList newsdata={this.state.news}/>
    			</div>
    			)
	}
}

ReactDOM.render(<App/>, document.getElementById('root'))